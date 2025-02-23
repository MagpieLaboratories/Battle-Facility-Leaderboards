"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AccordionItem from "./accordionItem";
import styles from "./rules.module.css";

type AccordionKeys =
    | "submissionRules"
    | "streaming"
    | "teamRules"
    | "goodFaith"
    | "categoryRules"
    | "duplicateTeams"
    | "finalCheck";

export default function RulesPage() {
    const router = useRouter();

    const [openSections, setOpenSections] = useState<Record<AccordionKeys, boolean>>({
        submissionRules: false,
        streaming: false,
        teamRules: false,
        goodFaith: false,
        categoryRules: false,
        duplicateTeams: false,
        finalCheck: false,
    });

    const toggleSection = (section: AccordionKeys) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className={styles.container}>
            <nav className={styles.topNav}>
                <button className={styles.recordsBtn} onClick={() => router.push("/leaderboard")}>
                    Battle Facility Records
                </button>
                <button className={styles.activeBtn} onClick={() => router.push("/rules")}>
                    Rules
                </button>
                <button className={styles.signInBtn}>Sign In</button>
            </nav>

            <h1 className={styles.title}>Battle Facility Rules</h1>
            <p className={styles.intro}>Click a section to expand the rules.</p>

            <div className={styles.accordion}>
                <AccordionItem
                    title="Submission Rules"
                    isOpen={openSections.submissionRules}
                    onToggle={() => toggleSection("submissionRules")}
                >
                    <ul>
                        <li>No RNG Manipulation is allowed. This includes both &quot;proactive&quot; RNG manipulation and &quot;passive&quot; RNG-inference (using tools to extract the rng seed currently active, etc).</li>
                        <li>A submission can be on retail or Emulator.</li>
                        <li>Your team must be theoretically possible to build without the use of glitches or external software (See &quot;Team and Pokemon Legality&quot; below)</li>
                        <li>The run must be completed on a vanilla, unmodified version of the game.</li>
                        <li>You must not use emulator-only features (example; reducing game speed in the Battle Arcade) to gain an advantage.</li>
                        <li>If you have a question about if something is allowed, just ask.</li>
                        <li>You can submit runs on behalf of others but they will have to follow all the checks also.</li>
                        <li>&nbsp;</li>
                        <li>Runs are ultimately subject to the community to pass. If the collective playerbase agree that a streak is too suspicious, it will not be added.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="Streaming Rules"
                    isOpen={openSections.streaming}
                    onToggle={() => toggleSection("streaming")}
                >
                    <ul>
                        <li>You must not &quot;hide&quot; your live streak. This means -without very good reason- you should never delete vods of streams that are the actual streak. You should also not attempt to conceal your stream,
                            or stream in &quot;secret&quot; or under an alt account to avoid visibility. It is fine to have very low average viewers, but - particularly if the streak is &quot;long&quot; - you should notify or mention it to the community.
                            If you are worried about breaking this rule; streaming on twitch under the correct pokemon category and having automatic vod-appearance is a good start.
                        </li>
                        <li>You must be aware enough of chat or other users to be able to respond to some kind of &quot;live check&quot;. For example; if a user asks you to do something slightly unusual, then do it. It is fine to be too focused to do it every time
                            but it is your responsibilty to share proof of a run being live. A good time to prove this is between &quot;rounds&quot; or &quot;sets&quot; of battles.
                        </li>
                        <li>&quot;Live Commentary&quot; is not required, but it is encouraged.</li>
                        <li>Your stream gameplay should be continuous, without breaks or cuts. It&apos;s probably best to play with audio if you intend to tab out to do damage calculations.</li>
                        <li>Rarely dropping stream is ok so long as it is not taken to extremes. If your internet cuts, simply do nothing until it recovers. If you know your internet is bad, also record locally to have a backup.</li>
                        <li>&nbsp;</li>
                        <li>Remember that the entire point of streaming being required is to gain trust in a run being done legitimately. In general, avoid doing anything that would cast doubt on the legitimacy of a run.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="Team & Pokemon Rules"
                    isOpen={openSections.teamRules}
                    onToggle={() => toggleSection("teamRules")}
                >
                    <ul>
                        <li>Your team must be possible. This broadly means 2 things:</li>
                        <li>1. The showdown legality check (check for legality under anything goes / Ubers) must pass for the corresponding generation.</li>
                        <li>2. The pokemon must be possible to catch or generate in-game. This mainly applies to the IVs and Nature of one-off/ static encounters (e.g. Suicune). You can check legality using Poke Finder or by actually catching it yourself.</li>
                        <li>&nbsp;</li>
                        <li>It is the responsibilty of the player to ensure the above 2 conditions are passed. Examples of things that could break these rules; impossible move combinations (perhaps a mix of an egg move and an event-only move);
                            a pokemon with an impossible IV-nature combination due to how RNG works (particularly in earlier games); a pokemon with an ability it cannot acquire; a pokemon with more than 510 EVs; a pokemon with a move that is impossible for it to learn; etc.
                        </li>
                        <li>This means PkHex and other software or methods (e.g. cloning, cheating in extra TMs) is allowed, so long as doing so doesnt trip another legality check.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="Good Faith and Best Practices"
                    isOpen={openSections.goodFaith}
                    onToggle={() => toggleSection("goodFaith")}
                >
                    <ul>
                        <li>Unless you have a genuine reason for doing so, avoid the following emulators: Visualboyadvance, Bizhawk, Desmume.</li>
                        <li>The more notes and information you share, the better. Make it as transparent as possible to see your thought process.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="Category Rules and adding new categories"
                    isOpen={openSections.categoryRules}
                    onToggle={() => toggleSection("categoryRules")}
                >
                    <ul>
                        <li>If you want a new category, do a run with it. So long as its not overly arbitrary or complex, it can be added.</li>
                        <li>&nbsp;</li>
                        <li>Monotype teams must consist only of Pokémon sharing a single type.</li>
                        <li>Little Cup (LC) entries must use Pokémon that are in their base form and are not banned in LC for the corresponding Generation.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="Duplicate and Similar Teams"
                    isOpen={openSections.duplicateTeams}
                    onToggle={() => toggleSection("duplicateTeams")}
                >
                    <ul>
                        <li>Players can submit as many runs as they like. However, we will remove duplicate records of the same player + team combination if we feel there is not a meaningful difference. For example; changing 1 attack, or changing some EVs is not
                            a meaningful difference. In these cases, only the longest run is kept. If you want to make a note of other runs, put it in your &quot;notes&quot; for that PB.
                        </li>
                        <li>If we ever get a flood of users all using nearly exactly the same team, we may revisit this ruling and potentially expand it to only include the best run for a particular team.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="Cheating Accusations"
                    isOpen={openSections.finalCheck}
                    onToggle={() => toggleSection("finalCheck")}
                >
                    <ul>
                        <li>1. Immediate (often literally the first attempt) success.</li>
                        <li>2. The streak cannot be replicated (even to perhaps 50% of the claim); even by the original player.</li>
                        <li>3. A poor level of play and high mistake-frequency, relative to streak length.</li>
                        <li>4. Very poor understanding of game mechanics, scouting and typical play patterns, relative to streak length.</li>
                    </ul>
                </AccordionItem>


            </div>
        </div>
    );
}
