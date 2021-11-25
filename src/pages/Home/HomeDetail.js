import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../Redux/Action/HomeAction";
import styles from "./movieDetail.module.css";
//action

export default function HomeDetali() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail());
  }, [dispatch]);

  const details = useSelector((state) => state.HomeReducer.movieDetail);
  return (
    <React.Fragment>
      <div className={styles.bannerContainer}>
        <img className={styles.imgBanner} src={`${details.Poster}`} alt="imgPoster" />
        <div className={styles.bannerInfo}>
          <h1>{details.Title}</h1>

          <p className={styles.bannerText}>{details.Plot}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
