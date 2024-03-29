import { dateImages } from "src/constants/images";

import { EventDate } from "./types";

export const allDates: EventDate[] = [
  {
    id: "SNG_RSV",
    type: "SNG",
    title: "Memadik",
    when: "Tuesday, 19 September 2023",
    dateVertical:
      "<span>19</span><br/><span class='month'>09</span><br/><span>23</span>",
    time: "10.00 WITA - finished",
    place: "Jl. Gn. Agung, Gg III/5 No. 9, Banjar Paketan, Buleleng, Bali",
    mapLink: "https://goo.gl/maps/nUjw4LmzZ6hXTZ2q9",
    note: "(Lokasi belakang SDN 3 Banjar Tegal)",
    images: dateImages.sng,
    whenDate: "19",
    whenMonth: "Sep",
    rawDate: {
      startDate: "2023-09-19",
      startTime: "10:00",
      endTime: "18:00",
    },
  },
  {
    id: "KPL",
    type: "KPL",
    title: "Pawiwahan",
    when: "Friday, 22 September 2023",
    dateVertical:
      "<span>22</span><br/><span class='month'>09</span><br/><span>23</span>",
    time: "08.00 WITA - finished",
    place: "Jalan Jempiring no 1, Banjar Pemebetan, Kapal, Badung, Bali",
    mapLink: "https://goo.gl/maps/77RcmGZt581z5oLs6",
    images: dateImages.kpl,
    whenDate: "22",
    whenMonth: "Sep",
    rawDate: {
      startDate: "2023-09-22",
      startTime: "08:00",
      endTime: "12:00",
    },
  },
  {
    id: "KPL_RSV",
    type: "KPL",
    title: "Resepsi Adat",
    when: "Friday, 22 September 2023",
    dateVertical:
      "<span>22</span><br/><span class='month'>09</span><br/><span>23</span>",
    time: "09.00 WITA - finished",
    place: "Jalan Jempiring no 1, Banjar Pemebetan, Kapal, Badung, Bali",
    mapLink: "https://goo.gl/maps/77RcmGZt581z5oLs6",
    images: dateImages.kplrsp,
    whenDate: "22",
    whenMonth: "Sep",
    rawDate: {
      startDate: "2023-09-22",
      startTime: "09:00",
      endTime: "22:00",
    },
  },
  {
    id: "BHM_RSV",
    type: "BHM",
    title: "The Reception",
    when: "Sunday, 24 September 2023",
    dateVertical:
      "<span>24</span><br/><span class='month'>09</span><br/><span>23</span>",
    time: "18.00 WITA - finished",
    place:
      "Jl. Gn. Soputan No.49, Pemecutan Klod, Kec. Denpasar Bar., Kota Denpasar, Bali",
    vendorName: "Bhumiku",
    mapLink: "https://goo.gl/maps/5TVqv5hcfTmYhkMt9",
    dresscode: "Dresscode: white",
    images: dateImages.bhm,
    whenDate: "24",
    whenMonth: "Sep",
    rawDate: {
      startDate: "2023-09-24",
      startTime: "18:00",
      endTime: "22:00",
    },
  },
];
