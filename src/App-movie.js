import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

function App() {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMovies(){
    const response = await
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&limit=2")
    const data =  await response.json();
        setResult(data.data.movies);
        setLoading(false);
        console.log(data.data.movies);
      }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
      </header>
      <h3>{loading ? "Loading..." : null}</h3>
      <ul>
        {results.map((movies)=><li key={movies.id}><img src={movies.medium_cover_image}></img>{movies.title_english}<br/>
        <YouTube videoId={movies.yt_trailer_code} 
        opts={{width:"560", height:"310",}}onEnd={(e)=>{e.target.stopVideo();}}/></li>)}
      </ul>
    </div>
  );

}
export default App;