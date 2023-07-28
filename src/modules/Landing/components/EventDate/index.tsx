import useVenue from "src/hooks/useVenue";

import { allDates } from "./constants";
import { styEventDateWrapper } from "./styles";
import EventCard from "./widgets/EventCard";

const EventDate = () => {
  const { venues } = useVenue();

  const filteredDate = allDates.filter((date) => venues[date.type]);

  if (!filteredDate.length) return null;

  return (
    <section css={styEventDateWrapper}>
      <h1>Save The Date</h1>

      {filteredDate.map((date, idx) => (
        <EventCard date={date} index={idx} key={`date-${idx}`} />
      ))}
    </section>
  );
};

export default EventDate;
