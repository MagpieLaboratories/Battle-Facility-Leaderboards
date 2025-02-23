"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import styles from "./leaderboard.module.css";

import { RecordType, Facility } from "../lib/types";
import {
    Generations,
    GenerationLabels,
    BattleFormats,
    facilities,
} from "../lib/constants";

export default function Leaderboard() {
    const router = useRouter();

    const [selectedGeneration, setSelectedGeneration] = useState<string>(facilities[0].generation);
    const [selectedFormat, setSelectedFormat] = useState<string>(facilities[0].format);
    const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

    const [records, setRecords] = useState<RecordType[]>([]);
    const [loading, setLoading] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const filteredFacilities = useMemo(() => {
        return facilities.filter(
            (f) => f.generation === selectedGeneration && f.format === selectedFormat
        );
    }, [selectedGeneration, selectedFormat]);

    useEffect(() => {
        if (filteredFacilities.length === 0) {
            setSelectedFacility(null);
            setRecords([]);
        } else {
            setSelectedFacility(filteredFacilities[0]);
        }
    }, [filteredFacilities]);

    useEffect(() => {
        if (!selectedFacility) return;

        const fetchRecords = async () => {
            setLoading(true);
            try {
                const facilityPath = `leaderboards/${selectedFacility.generation}/${selectedFacility.firestoreCollection}`;
                const q = query(collection(db, facilityPath), orderBy("wins", "desc"));

                const querySnapshot = await getDocs(q);
                const fetchedRecords: RecordType[] = [];
                querySnapshot.forEach((doc) => fetchedRecords.push(doc.data() as RecordType));

                setRecords(fetchedRecords);
            } catch (error) {
                console.error("Error fetching records:", error);
            }
            setLoading(false);
        };

        fetchRecords();
    }, [selectedFacility]);

    const filteredRecords = useMemo(() => {
        if (selectedCategories.length === 0) return records;
        return records.filter((r) => selectedCategories.every((cat) => r.category?.includes(cat)));
    }, [records, selectedCategories]);

    const handleGenerationChange = useCallback((gen: string) => {
        setSelectedGeneration(gen);
    }, []);

    const handleFormatChange = useCallback((fmt: string) => {
        setSelectedFormat(fmt);
    }, []);

    const handleFacilityChange = useCallback((facility: Facility) => {
        setSelectedFacility(facility);
    }, []);

    const handleCategoryToggle = useCallback((cat: string) => {
        setSelectedCategories((prev) =>
            prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
        );
    }, []);

    return (
        <div className={styles.container}>

            <nav className={styles.topNav}>
                <button className={styles.activeBtn}>Battle Facility Records</button>
                <button onClick={() => router.push("/rules")}>Rules</button>
                <button className={styles.signInBtn}>Sign In</button>
            </nav>

            <div className={styles.generationTabs}>
                {Generations.map((gen, index) => (
                    <button
                        key={gen}
                        className={selectedGeneration === gen ? styles.activeBtn : ""}
                        onClick={() => handleGenerationChange(gen)}
                    >
                        {GenerationLabels[index]}
                    </button>
                ))}
            </div>

            <div className={styles.formatTabs}>
                {BattleFormats.map((fmt) => (
                    <button
                        key={fmt}
                        className={selectedFormat === fmt ? styles.activeBtn : ""}
                        onClick={() => handleFormatChange(fmt)}
                    >
                        {fmt}
                    </button>
                ))}
            </div>

            <div className={styles.facilityNavbar}>
                {filteredFacilities.length === 0 ? (
                    <p>No facilities available for this format.</p>
                ) : (
                    filteredFacilities.map((facility) => (
                        <button
                            key={facility.id}
                            className={selectedFacility?.id === facility.id ? styles.activeBtn : ""}
                            onClick={() => handleFacilityChange(facility)}
                        >
                            {facility.label}
                        </button>
                    ))
                )}
            </div>


            {selectedFacility && (
                <div className={styles.categoryFilter}>
                    {selectedFacility.category.map((cat) => (
                        <button
                            key={cat}
                            className={selectedCategories.includes(cat) ? styles.activeCategory : styles.inactiveCategory}
                            onClick={() => handleCategoryToggle(cat)}
                        >
                            {cat}
                        </button>
                    ))}

                    {selectedCategories.length > 0 && (
                        <button className={styles.clearFilter} onClick={() => setSelectedCategories([])}>
                            Clear Filters ✖
                        </button>
                    )}
                </div>
            )}



            {loading && <p>Loading records...</p>}

            {!loading && selectedFacility && filteredRecords.length > 0 ? (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Wins</th>
                            <th>Username</th>
                            <th>UserID</th>
                            <th>Team Link</th>
                            <th>VOD Link</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecords.map((record, index) => {
                            const rank = index + 1;
                            return (
                                <tr key={index} className={styles[`rank${rank}`]}>
                                    <td>{rank}</td>
                                    <td>{record.wins}</td>
                                    <td>{record.username}</td>
                                    <td>{record.userid}</td>
                                    <td>
                                        <a href={record.teamlink} target="_blank" rel="noreferrer">
                                            Team
                                        </a>
                                    </td>
                                    <td>
                                        <a href={record.vodlink} target="_blank" rel="noreferrer">
                                            VOD
                                        </a>
                                    </td>
                                    <td>{record.category?.join(", ")}</td>
                                    <td>{record.date?.toDate().toLocaleString()}</td>
                                    <td>{record.notes}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                !loading && selectedFacility && <p>No records found.</p>
            )}
        </div>
    );
}
