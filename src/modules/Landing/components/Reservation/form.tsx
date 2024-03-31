import { useEffect } from "react";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { track } from "src/helpers/trackers";
import useReceiver from "src/hooks/useReceiver";

import { styReservationValue } from "./styles";
import { FormValues } from "./types";
import { postToDatabase } from "./utils/api";

export default function ReservationForm() {
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
      reset();
    }
  };

  return (
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
  );
}
