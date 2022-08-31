const Movies = async (status) => {
    try {
        const rawResponse = await fetch(`http://localhost:8085/api/v1/movies?page=1&limit=20&status=${status}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json;charset=UTF-8"
            }
        });
        const result = await rawResponse.json();
        if (rawResponse.ok) {
            return result;
        } else {
            const error = new Error();
            error.message = result.message || 'Invalid credentials'
            throw error;
        }
    }
    catch (e) {
        alert(e.message);
    }
}


const GetMovieDetails = async (movieId) => {
    try {
        const rawResponse = await fetch(`http://localhost:8085/api/v1/movies/${movieId}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json;charset=UTF-8"
            }
        });
        const result = await rawResponse.json();
        if (rawResponse.ok) {
            return result;
        } else {
            const error = new Error();
            error.message = result.message || 'Invalid credentials'
            throw error;
        }
    }
    catch (e) {
        alert(e.message);
    }
}



const GetGenres = async () => {
    try {
        const rawResponse = await fetch('http://localhost:8085/api/v1/genres', {
            method: 'GET',
            headers: {
                "Accept": "application/json;charset=UTF-8"
            }
        });
        const result = await rawResponse.json();
        if (rawResponse.ok) {
            return result;
        } else {
            const error = new Error();
            error.message = result.message || 'Invalid credentials'
            throw error;
        }
    }
    catch (e) {
        alert(e.message);
    }
}


const GetArtists = async () => {
    try {
        const rawResponse = await fetch('http://localhost:8085/api/v1/artists?page=1&limit=20', {
            method: 'GET',
            headers: {
                "Accept": "application/json;charset=UTF-8"
            }
        });
        const result = await rawResponse.json();
        if (rawResponse.ok) {
            return result;
        } else {
            const error = new Error();
            error.message = result.message || 'Invalid credentials'
            throw error;
        }
    }
    catch (e) {
        alert(e.message);
    }
}

export default [Movies, GetMovieDetails, GetGenres, GetArtists];