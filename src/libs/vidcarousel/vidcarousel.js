import axios from "axios";
import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import ReactSimplyCarousel from "react-simply-carousel";
import "./main.css";

function Vidcarousel({ title, text, width, height }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [photos, setPhotos] = useState([]);
  const [photos1, setPhotos1] = useState([]);
  const [photos2, setPhotos2] = useState([]);
  const [photos3, setPhotos3] = useState([]);
  const [photos4, setPhotos4] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?id=1")
      .then((data) => setPhotos(data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?id=3")
      .then((data) => setPhotos1(data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?id=4")
      .then((data) => setPhotos2(data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?id=2")
      .then((data) => setPhotos3(data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?id=7")
      .then((data) => setPhotos4(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main__trunk-vid">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        backwardBtnProps={{
          style: {
            position: "relative",
            zIndex: 999,
            top: "-31px",
            right: "-20px",
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 5,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing='linear'>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to="/video">
            {photos.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos2.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos3.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos4.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos1.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos2.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos3.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos4.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
        <div style={{ position: "relative", width: 290, height: 215 }}>
          <NavLink className="carus__link" to='/video'>
            {photos.map((photo) => (
              <>
                <img
                  className='card__img'
                  src={photo.thumbnailUrl}
                  width={width}
                  height={height}
                />
                <strong className='card__title'>{photo.title}</strong>
              </>
            ))}
            <div className='card__box'>
              <time className='card__time'>{text}</time>
              <span className='card__span'>{title}</span>
            </div>
          </NavLink>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}
export default Vidcarousel;
