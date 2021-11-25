import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";
import { Carousel } from "react-bootstrap";

//action
import { getAllMovie, setPageDefault, setTitle } from "./../../Redux/Action/HomeAction";

//component
import Moviecarousel from "../../component/carousel/carousel";
import { Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
    dispatch(setPageDefault());
  }, [dispatch]);

  const onId = (e) => {
    dispatch(setTitle(e));
  };
  const film = useSelector((state) => state.HomeReducer.allMovie);
  return (
    <React.Fragment>
      <Carousel />
      <>
        <div className={styles.divContainer}>
          {film ? (
            film.map((e, i) => {
              return (
                <>
                  <div className={styles.divBox} key={e._id}>
                    <Link to={`/detail`} onClick={() => onId(e)}>
                      <div className={styles.imgContainer}>
                        <img className={styles.imgPoster} src={`${e.Poster}`} alt="img" />
                      </div>

                      <div className={styles.movieInfo}>
                        <p className={styles.title}>
                          {e.Title} <br />
                        </p>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </>
    </React.Fragment>
  );
}

export default App;
