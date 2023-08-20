import { VenueObject } from "src/hooks/types";

export interface EventDate {
  id: string;
  type: keyof VenueObject;
  title: string;
  when: string;
  dateVertical: string;
  time: string;
  place: string;
  mapLink: string;
  images: string[];
  note?: string;
  vendorName?: string;
  dresscode?: string;
  whenDate: string;
  whenMonth: string;
}
