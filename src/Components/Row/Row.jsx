import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Row.css'
import axios from '../../axios'

const Row = ({title , fetchUrl , isLargeRow=false}) => {
  const base_url = 'https://image.tmdb.org/t/p/original'

  const [movies,setMovies] = useState([])
  const [trailerId,setTrailerId] = useState(false)

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const showMovieTrailer =  (id) => {
     axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=289efc994215d175967d9c9d972fdbf0&language=en-US`).then((response) => {
        if(response.data.results.length>0) {
           setTrailerId(response.data.results[response.data.results.length-1])
        }  
       console.log(response,'is the trailer res')
     }).catch((err) => {
      console.log('No trailer available for this movie or webseries')
     })
  }

  return (
    <div className='row'>
     <h2> {title}</h2>
     <div className="row__posters">
     {
        movies.map((movie,index) => {
        return(
         ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&(
            <img onClick={() => showMovieTrailer(movie.id)} 
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`} key={movie.id} 
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt='hello' />
          )
        )
        })
      }
     </div>
     { trailerId && <Youtube videoId={trailerId.key} opts={opts} /> }  
    </div>
  )
}

export default Row