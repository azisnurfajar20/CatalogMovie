class DataSource {
  static searchMovie(keyword) {
    return fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=59b8929a637c7b992776c3f7eea230c2&language=en-US&query=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not Found`);
        }
      });
  }
}
export default DataSource;
