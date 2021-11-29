import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";

import LoadingSpinner from "../../component/loading/spiner";

//action
import { setTitle, setPage, getAllMovieReload, ResetSearch } from "./../../Redux/Action/HomeAction";

//component
import { Link } from "react-router-dom";
import Nav from "../../component/navbar/Navbar";

function Home() {
  const loader = useRef(null);
  const dispatch = useDispatch();

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((_page) => _page + 1);
      dispatch(setPage());
      dispatch(getAllMovieReload());
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const onId = (e) => {
    dispatch(setTitle(e));
  };
  const film = useSelector((state) => state.HomeReducer.allMovie);
  const Loading = useSelector((state) => state.HomeReducer.isLoading);
  return (
    <React.Fragment>
      <Nav />
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
        <div className={styles.loading} ref={loader}>
          {Loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <h2 className="ee">End Of Page</h2>
            </>
          )}
        </div>
      </>
    </React.Fragment>
  );
}

export default Home;
