import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Movies from "../../api/Movies";
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';

const styles = theme => ({

    header: {
        color: theme.palette.primary.light,
    }
});

const Filter = (props) => {
    const { classes } = props;
    const [genres, setGenres] = React.useState();
    const [artists, setArtists] = React.useState();
    const [selectArtist, setSelectArtist] = React.useState('');
    const [selectGenre, setSelectGenre] = React.useState('');
    React.useEffect(() => {
        Movies[2]().then((data) => {
            setGenres(data.genres)
        })
        Movies[3]().then((data) => {
            setArtists(data.artists)
        })
    }, [])
    return (
        <Card sx={{ minWidth: 240, maxWidth: 240 }}>
            <CardContent className={classes.header}>
                FIND MOVIES BY:
            </CardContent>
            <CardContent >

                <FormControl style={{ width: "90%" }}>
                    <InputLabel htmlFor="my-input" >Movie Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            </CardContent>
            <CardContent >
                <FormControl style={{ width: "90%" }}>
                    <InputLabel htmlFor="my-input" >Genres</InputLabel>
                    <Select
                        id="genres"
                        value={selectGenre}
                        onChange={(e) => { setSelectGenre(e.target.value) }}
                    >
                        {genres && genres.map((genre) => (
                            <MenuItem value={genre.genre}>{genre.genre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardContent>
            <CardContent >
                <FormControl style={{ width: "90%" }}>
                    <InputLabel htmlFor="my-input" >Artists</InputLabel>
                    <Select
                        id="artists"
                        value={selectArtist}
                        onChange={(e) => { setSelectArtist(e.target.value) }}
                    >
                        {artists && artists.map((artist) => (
                            <MenuItem value={`${artist.first_name} ${artist.last_name}`}>{`${artist.first_name} ${artist.last_name}`}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardContent>
            <CardContent >
                <FormControl style={{ width: "90%" }}>
                    {/* <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={''}
                        onChange={()=>{}}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    /> */}
                </FormControl>
            </CardContent>
            <CardContent >
                <FormControl style={{ width: "90%" }} >
                    <TextField
                        id="date"
                        label="Release Date End"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
            </CardContent>
            <CardContent >
                <Button variant="contained" type='submit' style={{ margin: '10px', width: "90%", backgroundColor: "#040397", color: "white" }} >Apply</Button>
            </CardContent>

        </Card>
    )
}

Filter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);
