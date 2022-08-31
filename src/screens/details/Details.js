import { Typography } from '@material-ui/core';
import React from 'react'
import Movies from "../../api/Movies";
import Header from '../../common/header/Header';
import './Details.css'




function Details() {
  const [movieDetails, setMovieDetails] = React.useState();
  const [moviePoster, setMoviePoster] = React.useState();
  const [movieTitle, setMovieTitle] = React.useState();
  const [movieGenres, setMovieGenres] = React.useState();
  const [movieDuration, setMovieDuration] = React.useState();
  const [movieReleaseData, setMovieReleaseDate] = React.useState();
  const [movieRating, setMovieRating] = React.useState();
  const [moviePlot, setMoviePlot] = React.useState();
  const [movieTrailer, setMovieTrailer] = React.useState();
  const [movieArtist, setMovieArtist] = React.useState();
  const [wikiLink, setWikiLink] = React.useState();

  React.useEffect(() => {
    const movieId = window.location.pathname.split('=')[1];
    Movies[1](movieId).then((data) => {
      setMovieDetails(data.movies)
      setMoviePoster(data.poster_url)
      setMovieTitle(data.title)
      setMovieGenres(data.genres)
      setMovieDuration(data.duration)
      setMovieReleaseDate(data.release_date)
      setMovieRating(data.rating)
      setMoviePlot(data.storyline)
      setMovieTrailer(data.trailer_url)
      setMovieArtist(data.artists)
      setWikiLink(data.wiki_url)
    })
  }, []);

  return (
    <div>
      <Header />
      <div className='backToHomeButton'>
        <Typography>
          <a href='../' style={{ textDecoration: 'none', color: 'black' }}>{`< Back To Home`}</a>
        </Typography>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%' }} className="poster"><img src={moviePoster} /></div>
        <div style={{ width: '60%' }}>

          <Typography>
            <h2>{movieTitle}</h2>
            <b>Genre: </b>{String(movieGenres)}<br />
            <b>Duration: </b>{movieDuration}<br />
            <b>Released Date: </b>{movieReleaseData}<br />
            <b>Rating: </b>{movieRating}<br />
            <br />
            <b>Plot: </b><a href={wikiLink}>(Wiki Link)</a>{moviePlot}<br /><br />
            <b>Trailer:</b><br />
            <iframe width="750" height="375" className="trailer" src={`https://www.youtube.com/embed/${String(movieTrailer).split('=')[1]}`} frameborder="0" allowfullscreen>
            </iframe>
          </Typography>
        </div>
        <div style={{ width: '20%' }}>
          <b>Rate this movie</b><br />
          <div className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text"><svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none' /><path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' /></svg></label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text"><svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none' /><path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' /></svg></label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text"><svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none' /><path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' /></svg></label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text"><svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none' /><path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' /></svg></label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text"><svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none' /><path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' /></svg></label>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Details