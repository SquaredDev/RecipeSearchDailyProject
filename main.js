//#RecipeSearchDailyProject

let title = document.querySelector('title');
let heading = document.querySelector('#heading');
let main = document.querySelector('#main');
let footing = document.querySelector('#footing');
let recipeI = document.querySelector('#recipe');
let ingredI = document.querySelector('#ingred');
let search = document.querySelector('#search');

const site = "http://www.recipepuppy.com/api/"
let recipe = " "
let ingred = " "
let url = site + "?i=" + ingred + "&q=" + recipe

fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(`Here is the data: ${data.title}`, data);
        let titleStr = `${data.title} Search`
        title.innerHTML = titleStr

        // http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3

        let headingStr = ``
        headingStr += `<h1>${data.title} Search</h1>`
        headingStr += `<form>Recipe Type:<input id='recipe' type="text" name="recipe" value="" maxlength="100" /><br />`
        headingStr += `Ingredients:<input id='ingred' type="text" name="ingredients" value="" maxlength="100" /><br />`
        headingStr += `<input id='search' type="submit" value="Search" /></form>`
        headingStr += `<p>Results from <a href="${data.href}">${data.href}</a></p>`
        headingStr += `<hr>`
        heading.innerHTML = headingStr

          let mainStr = ``
        data.results.map(function(item) {

            mainStr += `<div class="boxes">
            <img class="profilePic" src="${item.thumbnail}">
            <p class="rName"><a href="${item.href}">${item.title}</a></p>
            <ul>${item.ingredients}</ul>
            </div>`
            main.innerHTML = mainStr
        })


        let footingStr = `<hr><footer>${data.title} Version ${data.version} <a href="${data.href}">${data.href}</a></footer>`
        footing.innerHTML = footingStr
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
