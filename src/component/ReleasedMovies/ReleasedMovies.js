import React from "react";
import './ReleasedMovies.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const ReleasedMovies = (props) => {
    return (
        <GridList cols={4} >
            {props.movies && props.movies.map(tile => (
                <GridListTile key={tile.poster_url} style={{ height: 350, margin: '15px' }}>
                    <a href={`/movie/:id=${tile.id}`}>
                        <img src={tile.poster_url} alt={tile.title} style={{ height: "100%" }} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Release Date: {tile.release_date}</span>}
                        />
                    </a>
                </GridListTile>
            ))}
        </GridList>
    )
}

export default ReleasedMovies;
