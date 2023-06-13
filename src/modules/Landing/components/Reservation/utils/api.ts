import { DataSnapshot, onValue, push, ref, set } from "firebase/database";

import { database } from "src/libs/firebase";

import { FormValues } from "../types";

const reservationRef = ref(database, "rsvp");

export const postToDatabase = async (data: FormValues) => {
  const newReservation = push(reservationRef);

  await set(newReservation, data);
};

export const getAllReservation = (callback: (data: DataSnapshot) => void) => {
  onValue(reservationRef, (snapshot) => {
    callback(snapshot);
  });
};
