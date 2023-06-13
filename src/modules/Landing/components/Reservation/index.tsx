import { useEffect, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { FormValues } from "./types";
import { getAllReservation, postToDatabase } from "./utils/api";

interface ReservationData extends FormValues {
  key: string;
}

const Reservation = () => {
  const [messages, setMessages] = useState<ReservationData[]>([]);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  useEffect(() => {
    getAllReservation((data) => {
      const allData = data.val();
      console.log("DEDE:: tulus...", allData);

      if (Boolean(allData)) {
        const arrData: ReservationData[] = Object.keys(allData).map((key) => ({
          key,
          ...allData[key],
        }));
        setMessages(arrData);
      }
    });
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postToDatabase(data);
    reset();
  };

  return (
    <div>
      <p>Reservation</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="Name" />

        <br />
        <select {...register("coming", { required: true })}>
          <option value="coming">I am coming</option>
          <option value="notComing">Not coming</option>
        </select>

        <br />
        <textarea
          {...register("message", { required: true })}
          cols={30}
          rows={10}
          placeholder="message"
        />
        {/* <button type="submit">Comment</button> */}
        <input type="submit" />
      </form>

      <div>
        {Boolean(messages.length) &&
          messages.map((message) => (
            <div key={message.key}>
              <p>{message.name}</p>
              <p>{message.message}</p>
              <p>{message.coming}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reservation;
