class AppJumbotron extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Website Fundamental Movie</h1>
          <p class="lead">welcome to visitors, please enjoy trending movies that you can watch</p>
          <hr class="my-4">
          <p>there are many more types of movies that can be seen, check more</p>
          <a class="btn btn-secondary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </div>
        `;
  }
}
customElements.define("app-jumbotron", AppJumbotron);
