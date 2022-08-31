import React from "react";
import Movies from "../../api/Movies";
import Header from "../../common/header/Header";
import './Home.css';
import UpcomingMovies from "../../component/UpcomingMovies/UpcomingMovies";
import ReleasedMovies from "../../component/ReleasedMovies/ReleasedMovies";
import Filter from "../../component/Filter/Filter";


function Home() {
    const [upcomingMovies, setUpcomingMovies] = React.useState();
    const [releasedMovies, setReleasedMovies] = React.useState();
    React.useEffect(() => {
        Movies[0]("PUBLISHED").then((data) => { setUpcomingMovies(data.movies) })
        Movies[0]("RELEASED").then((data) => { setReleasedMovies(data.movies) })
    }, [])

    return (
        <div>
            <Header baseUrl="/api/v1/" />
            <div className="UpcomingMovieHeading">Upcoming Movies</div>
            <UpcomingMovies movies={upcomingMovies} />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '76%', margin: '16px' }}>
                    <ReleasedMovies movies={releasedMovies}/>
                </div>
                <div style={{ width: '24%', margin: '16px' }}>
                    <Filter/>
                </div>
            </div>
        </div>
    )
}
export default Home;