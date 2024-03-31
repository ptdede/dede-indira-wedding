import { useCallback, useEffect, useState } from "react";

import { DocumentData, QuerySnapshot } from "firebase/firestore";

import {
  styMessagesWrapper,
  styReservationWrapper,
  stySkeleton,
} from "./styles";
import { ReservationData } from "./types";
import {
  getAllReservation,
  LIMIT_RSVP_DATA,
  normalizeData,
  paginationNextReservation,
} from "./utils/api";

const Reservation = () => {
  const [messages, setMessages] = useState<ReservationData[]>([]);
  const [lastSnapshot, setLastSnapshot] =
    useState<QuerySnapshot<DocumentData>>();
  const [enableLoadmore, setEnableLoadmore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const reservationSnap = await getAllReservation();
    const data = normalizeData(reservationSnap);

    setIsLoading(false);
    setLastSnapshot(reservationSnap);
    setMessages(data);

    if (data.length && data.length >= LIMIT_RSVP_DATA) {
      setEnableLoadmore(true);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = useCallback(async () => {
    if (lastSnapshot) {
      setIsLoading(true);
      const loadMoreSnap = await paginationNextReservation(lastSnapshot);
      const data = normalizeData(loadMoreSnap);
      setMessages((prev) => [...prev, ...data]);

      setIsLoading(false);
      setLastSnapshot(loadMoreSnap);

      if (!data.length || data.length < LIMIT_RSVP_DATA) {
        setEnableLoadmore(false);
      }
    }
  }, [lastSnapshot]);

  return (
    <section css={styReservationWrapper}>
      <h1>Family & Relative Wishes</h1>

      <div css={styMessagesWrapper}>
        {messages.map((message) => (
          <div className="message-card" key={message.id}>
            <p className="name">{message.name}</p>
            <p className="message">{message.message}</p>
            <p className="date">{message.date}</p>
          </div>
        ))}

        {isLoading && (
          <div className="loading">
            <div css={stySkeleton}>
              <span />
            </div>
            <div css={stySkeleton}>
              <span />
            </div>
          </div>
        )}

        {enableLoadmore && !isLoading && (
          <button type="button" className="loadmore" onClick={loadMore}>
            view more chat
          </button>
        )}
      </div>
    </section>
  );
};

export default Reservation;
