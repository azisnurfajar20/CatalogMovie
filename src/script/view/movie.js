function movie() {
  const baseUrl = "https://api.themoviedb.org/3";
  const ApiKey = "59b8929a637c7b992776c3f7eea230c2";
  const Path = "https://image.tmdb.org/t/p/w500/";

  const getMovie = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/movie/now_playing?api_key=${ApiKey}`
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllMovie(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllMovie = (results) => {
    const listMovielement = document.querySelector("#listMovieNowPlayying");
    listMovielement.innerHTML = "";

    results.forEach((movie) => {
      listMovielement.innerHTML += `
      <div class="col-lg-4 col-md-6">
        <div class="card" style="width: 18rem;">
          <img src="${Path}/${movie.poster_path}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.release_date}</p>
            <a href="#" class="btn btn-danger">Hapus</a>
          </div>  
        </div>
      </div>
      `;
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  getMovie();
}

export default movie;
