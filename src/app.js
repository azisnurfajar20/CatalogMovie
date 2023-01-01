import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./script/component/SearchBar.js";
import "./script/component/AppJumbotron.js";
import "./script/component/AppFooter.js";

import main from "./script/view/main.js";
import movie from "./script/view/movie.js";

document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", movie);
