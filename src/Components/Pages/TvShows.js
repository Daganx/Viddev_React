import React, { useState } from "react";
import Header from "../Children/Header";
import "../../assets/css/TvShows.css";
import Footer from "../Children/Footer";


const Tvshows = () => {
  const [tvshows] = useState([
    {
      id: 1,
      title: "Breaking Bad",
      genre: "Drame",
      director: "Vince Gilligan",
      year: "2008",
      image: "https://assets.nflxext.com/us/boxshots/hd1080/70143836.jpg",
    },
    {
      id: 1,
      title: "Chernobyl",
      genre: "History",
      director: "Johan Renck",
      year: "2019",
      image:
        "https://i.pinimg.com/originals/34/2f/78/342f78e2cd7b297868420d20e3996145.jpg",
    },
    {
      id: 1,
      title: "Twin Peaks",
      genre: "Thriller",
      director: "David Lynch",
      year: "1990",
      image: "https://m.media-amazon.com/images/I/81kk0IGqaLL._AC_SX425_.jpg",
    },
    {
      id: 1,
      title: "Rick & Morty",
      genre: "Anime",
      director: "Justin Roiland",
      year: "2013",
      image: "https://m.media-amazon.com/images/I/518I-BTdWlL._AC_.jpg",
    },
    {
      id: 1,
      title: "Arcane",
      genre: "Anime",
      director: "Alex Yee",
      year: "2021",
      image:
        "https://static.invenglobal.com/upload/image/2021/10/13/i1634086313758568.jpeg",
    },
    {
      id: 1,
      title: "Death Note",
      genre: "Anime",
      director: "Tetsurō Araki",
      year: "2006",
      image:
        "https://www.nautiljon.com/images/anime/00/08/death_note_180.jpg?1668167682",
    },
    {
      id: 1,
      title: "Black Mirror",
      genre: "Dystopia",
      director: "Charlie Brooker",
      year: "2011",
      image: "https://m.media-amazon.com/images/I/61Uq5yH0a6L._SL500_.jpg",
    },
    {
      id: 1,
      title: "Dragon Ball",
      genre: "Anime",
      director: "Akira Toriyama",
      year: "1986",
      image: "https://m.media-amazon.com/images/I/81TkSJw2vqL.jpg",
    },
    {
      id: 1,
      title: "The Office",
      genre: "Comedy",
      director: "Mindy Kaling",
      year: "2005",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    },
    {
      id: 1,
      title: "The Simpson",
      genre: "Comedy",
      director: "Matt Groening",
      year: "1989",
      image:
        "https://i.pinimg.com/originals/c7/b4/b0/c7b4b0c0265a5bc34089e305f507492f.jpg",
    },
  ]);
  return (
    <div>
      <Header />
      <main>
        {tvshows.map((tvshow) => {
          return (
            <article className="tvShowsContainer">
              <div className="articleTvShows">
                <h2>{tvshow.title}</h2>
                <p>{tvshow.genre}</p>
                <p>{tvshow.director}</p>
                <p className="year">{tvshow.year}</p>
                <div className="tvShowsImage">
                  <img src={tvshow.image} alt="" />
                </div>
              </div>
            </article>
          );
        })}
      </main>
      <Footer/>
    </div>
  );
};

export default Tvshows;
