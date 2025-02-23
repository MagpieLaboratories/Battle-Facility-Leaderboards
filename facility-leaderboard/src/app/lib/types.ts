import { Timestamp } from "firebase/firestore";

export type RecordType = {
  username: string;
  userid: string;
  wins: number;
  vodlink: string;
  category: string[];
  date: Timestamp;
  notes: string;
  teamlink: string;
};

export type Facility = {
  id: string;
  label: string;
  generation: string;
  format: string;
  firestoreCollection: string;
  category: string[];
};
