import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Movie from '../components/Movie'

function Detail() {
  const {id} = useParams();   

  useEffect(()=>{
    async function getMovies(){
    const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id-${id}`)).json();
    console.log(json.data.movies);
  }
  getMovies();
},[]);
  return (
    <div><h1>Movie Detail</h1>x
    <img src={Movie.medium_cover_image} />
    <p>{Movie.summary}</p>
    <ul>

    </ul>
  </div>
  )
}
export default Detail;
