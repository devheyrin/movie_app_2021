import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

function Movies({id, year, title, summary, poster, genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary}</p>
            <ul className="movie_genres">{genres.map((genres, index) => <li key={index} className="genres_genre">{genres}</li>)}</ul>
        </div>
    </div>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;
