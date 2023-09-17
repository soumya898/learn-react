
import react,{useState} from "react"
import movies from "./movies";
import "./style.css"
function App() {

  let [clickedMovie, setClickedMovie] = useState({});
  
  return (
    <div className="App">
      <div className="movies-list">



        {
          movies.map((movie)=>(
            <div className="banner" key={movie.name} >
              <img  src="https://static.toiimg.com/photo/msid-95470486/95470486.jpg" alt="banner"
              
              onClick={()=>{setClickedMovie(movie)}}/>
               {console.log(movie.name)}
              <h2>{movie.name}</h2>
              


            </div>
          )
          )
          }

           {/*   display movie detail whenuser  click other wise not  */}

                { clickedMovie  && (

                   <div className="movie-details">
                    <h2>{clickedMovie.name}</h2>
                    <p>{clickedMovie.genre}</p>
                     <h2>{clickedMovie.rating}</h2>

                   </div>

                )}
      </div>
   



    </div>
  );
}

// export default App;
