import { useCallback, useEffect, useState } from "react";

import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { track } from "src/helpers/trackers";
import useReceiver from "src/hooks/useReceiver";

import {
  styMessagesWrapper,
  styReservationValue,
  styReservationWrapper,
  stySkeleton,
} from "./styles";
import { FormValues, ReservationData } from "./types";
import {
  LIMIT_RSVP_DATA,
  getAllReservation,
  normalizeData,
  paginationNextReservation,
  postToDatabase,
} from "./utils/api";

const Reservation = () => {
  const [messages, setMessages] = useState<ReservationData[]>([]);
  const [lastSnapshot, setLastSnapshot] =
    useState<QuerySnapshot<DocumentData>>();
  const [enableLoadmore, setEnableLoadmore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { receiver } = useReceiver();

  const { control, formState, register, handleSubmit, reset, setValue } =
    useForm<FormValues>({
      mode: "all",
      defaultValues: {
        name: receiver,
      },
    });

  useEffect(() => {
    setValue("name", receiver);
  }, [receiver, setValue]);

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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    track("click", {
      name: "send message",
      receiver,
    });

    const successData = await postToDatabase({ ...data, receiver });

    if (!successData) {
      track("exception", {
        name: "send message",
        receiver,
      });
      // handle error
    } else {
      setMessages((prev) => [successData, ...prev]);
      reset();
    }
  };

  return (
    <section css={styReservationWrapper}>
      <h1>Chat & Reservation</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            {...register("name", { required: "Please input your name" })}
            id="name"
          />
          <label htmlFor="name">Name</label>
          {formState.errors.name && (
            <p className="errors">{formState.errors.name.message}</p>
          )}
        </div>

        <Controller
          name="coming"
          control={control}
          rules={{
            validate: (value) => {
              const isValid = typeof value !== "undefined";
              return !isValid ? "Please select attendance" : true;
            },
          }}
          render={({ field }) => (
            <div css={styReservationValue(field.value)}>
              <div>
                <button
                  className="coming"
                  type="button"
                  onClick={() => field.onChange(true)}
                >
                  I&apos;ll be there!
                </button>
                <button
                  className="not-coming"
                  type="button"
                  onClick={() => field.onChange(false)}
                >
                  Can&apos;t attend
                </button>
              </div>

              {formState.errors.coming && (
                <p className="errors">{formState.errors.coming.message}</p>
              )}
            </div>
          )}
        />

        <div className="input-group">
          <textarea
            {...register("message", { required: "Please write a message" })}
            id="message"
            cols={30}
            rows={10}
          />
          <label htmlFor="message">Message</label>
          {formState.errors.message && (
            <p className="errors">{formState.errors.message.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      <div css={styMessagesWrapper}>
        {messages.map((message) => (
          <div className="message-card" key={message.id}>
            <p className="name">{message.name}</p>
            <p className="message">{message.message}</p>
            <p className="date">{message.date}</p>
            {/* <p className="attendance">{JSON.stringify(message.coming)}</p> */}
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
