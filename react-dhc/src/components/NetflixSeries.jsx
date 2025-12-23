import seriesData from "../api/seriesData.json"
function NetflixSeries() {


    return (
        <div>
            <div>
                <img src={seriesData[0].img_url} alt="photo.jpeg" width="40%" height="50%" />
            </div>
            <h1>Name:{seriesData[0].name}</h1>
            <h2>Rating:{seriesData[0].rating}</h2>
            <p>Summary:{seriesData[0].description}</p>
            <h2>Genre :{seriesData[0].genre}</h2>
            <p>Cast:{seriesData[0].cast}</p>
            <a href={seriesData[0].watch_url} target="_blank">
                <button>Watch now</button>
            </a>
        </div>
    );
}


export default NetflixSeries;