console.log('page connected');

let title = document.querySelector('title');
let heading = document.querySelector('#heading');
let main = document.querySelector('#main');
let footing = document.querySelector('#footing');

let url = "http://www.recipepuppy.com/api/"

fetch(url)
  // Data is fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(`Here is the data: ${data.title}`, data);
        let titleStr = `${data.title} Search`
        title.innerHTML = titleStr

        let headingStr = ``
        headingStr += `<h1>${data.title} Search</h1>`
        headingStr += `<p>Results from <a href="${data.href}">${data.href}</a></p>`
        headingStr += `<hr>`
        heading.innerHTML = headingStr

        for (var i = 0; i < data.results.length; i++) {
          let mainStr = ``
          mainStr += `<div class="boxes">`
          mainStr += `<img scr="${data.results.thumbnail}">`
          mainStr += `<p>${data.results.title}</p>`

          // "title":"Vegetable-Pasta Oven Omelet",
          // "href":"http:\/\/find.myrecipes.com\/recipes\/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
          // "ingredients":"tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper",
          // "thumbnail":"http:\/\/img.recipepuppy.com\/560556.jpg"
          mainStr += `</div>`
          main.innerHTML = mainStr
        }



        let footingStr = `<hr><footer>${data.title} Version ${data.version} <a href="${data.href}">${data.href}</a></footer>`
        footing.innerHTML = footingStr
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
