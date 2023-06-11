import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { allDates } from "./constants";
import { styEventDateWrapper } from "./styles";

const EventDate = () => {
  return (
    <section css={styEventDateWrapper}>
      <h1>Save The Date</h1>

      {allDates.map((date, idx) => {
        return (
          <div className="dates" key={`date-${idx}`}>
            <div className="image-slider">
              <Swiper
                className="slider"
                modules={[Autoplay, EffectFade]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                speed={1600}
                loop={true}
              >
                {date.images.map((image, idx) => (
                  <SwiperSlide key={`couple-intro-${idx}`}>
                    <img className="image" src={image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="description">
              <div className="description-content">
                <h2 className="title">{date.title}</h2>

                <div>
                  <p className="when">{date.when}</p>
                  <p className="time">{date.time}</p>
                </div>

                <div>
                  {Boolean(date.vendorName) && (
                    <p className="vendor">{date.vendorName}</p>
                  )}{" "}
                  <p className="place">{date.place}</p>
                  <p className="note">{date.note}</p>
                </div>

                <div>
                  <a href={date.mapLink} target="_blank" rel="noreferrer">
                    <p>open google map</p>
                  </a>
                </div>
              </div>
              <div className="description-date">
                <p dangerouslySetInnerHTML={{ __html: date.dateVertical }} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default EventDate;
