const API_KEY = "289efc994215d175967d9c9d972fdbf0";

const requests = {
 fetchTrending        : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRated        : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies    : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies    : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies    : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomance         : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
 sampleReq            : `https://api.themoviedb.org/3/discover/tv?sort_by=release_date.asc&with_networks=network_string&first_air_date.gte=2017-05-01&include_null_first_air_dates=true&api_key=${API_KEY}`,
 randomReq            : `https://api.themoviedb.org/3/trending/all/week?api_key=289efc994215d175967d9c9d972fdbf0&language=en-US`
}

export default requests