import { useEffect, useState } from "react";

import * as queryString from "query-string";

import { VenueObject } from "./types";

const defaultVenue = {
  KPL: false,
  SNG: false,
  BHM: false,
};

const useVenue = () => {
  const [venues, setVenues] = useState<VenueObject>(defaultVenue);

  useEffect(() => {
    const { venue } = queryString.parse(location.search);

    const _venues = (venue as string) || "";

    const allVenue = _venues
      .split(",")
      .filter((val) => val !== "")
      .reduce((prev, curr) => {
        const key = curr as keyof VenueObject;

        return {
          ...prev,
          [key]: true,
        };
      }, defaultVenue);

    setVenues(allVenue);
  }, []);

  return {
    venues,
  };
};

export default useVenue;
