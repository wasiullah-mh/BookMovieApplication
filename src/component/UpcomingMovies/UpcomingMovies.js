import React from 'react'
import './UpcomingMovies.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        height: '250'
    },
    title: {
        color: 'white',
        textAlign: 'left'
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});


function UpcommingMovies(props) {
    const { classes } = props;
    return (
        <div>
            <GridList className={classes.gridList} cols={6}>
                {props.movies && props.movies.map(tile => (
                    <GridListTile key={tile.poster_url}>
                        <img src={tile.poster_url} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>

        </div>

    )
}

UpcommingMovies.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UpcommingMovies)