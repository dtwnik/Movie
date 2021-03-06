import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../css/DetailPage.css'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Time from '../component/Time';

const DetailsPage = () => {
  const { slug } = useParams()
  const [id, setId] = useState(slug)
  const [appState, setAppState] = useState();
  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/Cinemas/' + slug;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
    console.log(slug)
  }, [setAppState]);

  return (
    <div>
      <Header />
      {
        appState && (
          <>
            <div class='banner' style={{ backgroundImage: `url(${appState.photo})` }}></div>
            <div className="mb-3 movie-content containerDetail">
              <div className="movie-content poster">
                <img className='img' width="360px" height='560px' src={appState.photo} />
              </div>
              <div className="info">
                <h1 className="title">
                  {appState.title}
                </h1>
                <div className="genres">
                  <span>Жанры: {appState.genre.split(',').map((value, i) => (
                    <span key={i} className="span">{value}</span>
                  ))}</span>
                </div>
                <p className="overview">{appState.description}</p>
                <div className="cast">
                  <div className="section__header">
                  </div>
                </div>
              </div>
            </div>
            <div className='Seatbox'>
              {/* <Time id={id} data={appState} /> */}
            </div>


            <Time name={appState} />
          </>
        )
      }

      <Footer />
    </div>
  );
}

export default DetailsPage;