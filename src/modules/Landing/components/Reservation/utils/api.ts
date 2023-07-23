import { formatDistance } from "date-fns";
import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
} from "firebase/firestore";

import { database } from "src/libs/firebase";

import { FormValues, ReservationData } from "../types";

const rsvpDatabase = "rsvp";
export const LIMIT_RSVP_DATA = 5;

export const postToDatabase = async (data: FormValues) => {
  try {
    const successRef = await addDoc(collection(database, rsvpDatabase), {
      ...data,
      createdAt: serverTimestamp(),
    });

    const successData = (await getDoc(successRef)).data() as ReservationData;

    const interval = formatDistance(
      successData.createdAt?.toDate() || new Date(),
      new Date(),
      { includeSeconds: true, addSuffix: true }
    );

    return {
      ...successData,
      id: successRef.id,
      date: interval,
    };
  } catch (e) {
    console.error("Firebase Error: adding document: ", e);
    return undefined;
  }
};

export const getAllReservation = async () => {
  const first = query(
    collection(database, rsvpDatabase),
    orderBy("createdAt", "desc"),
    limit(LIMIT_RSVP_DATA)
  );
  return await getDocs(first);
};

export const paginationNextReservation = async (
  lastSnapshot: QuerySnapshot<DocumentData>
) => {
  const lastVisible = lastSnapshot.docs[lastSnapshot.docs.length - 1];

  const next = query(
    collection(database, rsvpDatabase),
    orderBy("createdAt", "desc"),
    startAfter(lastVisible),
    limit(LIMIT_RSVP_DATA)
  );

  return await getDocs(next);
};

export const normalizeData = (snapshot: QuerySnapshot<DocumentData>) => {
  const data: ReservationData[] = [];
  snapshot.forEach((doc) => {
    const document = doc.data() as ReservationData;

    const interval = formatDistance(
      document.createdAt?.toDate() || new Date(),
      new Date(),
      { includeSeconds: true, addSuffix: true }
    );

    data.push({
      ...document,
      id: doc.id,
      date: interval,
    });
  });
  return data;
};
