import React from "react";
import Header from "../Children/Header";
import { useState } from "react";
import "../../assets/css/Movies.css";
import Footer from "../Children/Footer";

const Movies = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Spirited Away",
      genre: "Anime",
      director: "Hayao Miyazaki",
      year: 2001,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      id: 2,
      title: "Castle in the Sky",
      genre: "Anime",
      director: "Hayao Miyazaki",
      year: 2003,
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png",
    },
    {
      id: 3,
      title: "The Irishman",
      genre: "Gangster",
      director: "Martin Scorsese",
      year: 2019,
      image:
        "https://s3.amazonaws.com/criterion-production/films/58c740124a15f1c79dd1c68bbedfc605/kT0FaLFVzZ8HUvpqsoKIi98fEdZL8i_original.jpg",
    },
    {
      id: 4,
      title: "The GodFather",
      genre: "Gangster",
      director: "Francis Ford Coppola",
      year: 1972,
      image:
        "https://static.posters.cz/image/750/affiches-et-posters/the-godfather-rosa-roja-i106943.jpg",
    },
    {
      id: 5,
      title: "It Follow",
      genre: "Horror",
      director: "David Robert Mitchell",
      year: 2014,
      image:
        "https://fr.web.img4.acsta.net/r_1920_1080/pictures/15/11/25/15/47/276115.jpg",
    },
    {
      id: 6,
      title: "Her",
      genre: "Romance",
      director: "Spike Jonze",
      year: 2014,
      image:
        "https://www.ryangajda.com/wp-content/uploads/2017/02/Joaquin-Phoenix-Her-movie-poster.png",
    },
    {
      id: 7,
      title: "It",
      genre: "Horror",
      director: "Andrés Muschietti",
      year: 2017,
      image:
        "https://i.pinimg.com/564x/00/b0/63/00b0639a51c5896a0e92005225b568b1.jpg",
    },
    {
      id: 8,
      title: "Saw",
      genre: "Horror",
      director: "James Wan",
      year: 2005,
      image: "https://m.media-amazon.com/images/I/41Qz2yUptFL.jpg",
    },
    {
      id: 9,
      title: "The Green Mile",
      genre: "Drama",
      director: "Frank Darabont",
      year: 2000,
      image:
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501192265/the-green-mile-9781501192265_hr.jpg",
    },
    {
      id: 10,
      title: "Full Metal Jacket",
      genre: "War",
      director: "Stanley Kubrick",
      year: 1987,
      image:
        "https://i.etsystatic.com/26881902/r/il/7f0e33/3176283271/il_570xN.3176283271_j31q.jpg",
    },
  ]);
  return (
    <div>
      <Header />
      <main>
        {movies.map((movie) => {
          return (
            <article className="articleContainer">
              <div className="articleMovie">
                <h2>{movie.title}</h2>
                <p>{movie.genre}</p>
                <p>{movie.director}</p>
                <p className="year">{movie.year}</p>
                <div className="articleImage">
                  <img src={movie.image} alt="" />
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

export default Movies;
