console.log("hello from application.js")
import Mustache from "mustachejs";

const template = document.querySelector("#movieCardTemplate").innerHTML;
const results = document.querySelector("#results")

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    // do something with the data
    //const movieResults = data.Search
    const movieData = { "movies": data.Search}
    const output = Mustache.render(template, movieData);
    results.insertAdjacentHTML("beforeend",output);
    })

