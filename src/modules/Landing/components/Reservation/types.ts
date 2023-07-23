import { Timestamp } from "firebase/firestore";

export interface FormValues {
  name: string;
  coming: boolean;
  message: string;
}

export interface ReservationData extends FormValues {
  id: string;
  date: string;
  createdAt?: Timestamp;
}
