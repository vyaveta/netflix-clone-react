import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Row from '../../Components/Row/Row'
import requests from '../../Requests'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Navbar />
      <Banner />
      <Row title='NETFLIX ORIGINALS' isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomance} />
      {/* <Row title='Documentaries' fetchUrl={requests} /> */}
    </div>
  )
}

export default HomeScreen