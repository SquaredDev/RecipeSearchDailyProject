//#RecipeSearchDailyProject
console.log('here');

let title = document.querySelector('title');
let heading = document.querySelector('#heading');
let main = document.querySelector('#main');
let footing = document.querySelector('#footing');
let recipeI = document.querySelector('#recipe');
let ingredI = document.querySelector('#ingred');
let searchI = document.getElementById('search');

const site = "http://www.recipepuppy.com/api/"
let recipe = " "
let ingred = " "
let url = site

searchI.addEventListener ("click", function(event) {
  console.log('hey');
  recipe = recipeI.value
  ingred = ingredI.value
  url = site + "?i=" + ingred + "&q=" + recipe
  console.log(url);
  doFetch();
})

function doFetch() {
  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          let titleStr = `${data.title} Search`
          title.innerHTML = titleStr


            let mainStr = ``
          data.results.map(function(item) {
              mainStr += `<div class="boxes">`
              // if (`${item.thumbnail}` === "") {
              //   mainStr += `<img class="profilePic" src="http://img.recipepuppy.com/9.jpg">`
              //   else {
              //     mainStr += `<img class="profilePic" src="${item.thumbnail}">`
              //   }
              // }
              mainStr += `<img class="profilePic" src="${item.thumbnail}">`
              mainStr += `<p class="rName"><a href="${item.href}">${item.title}</a></p>`
              mainStr += `<ul>${item.ingredients}</ul>`
              mainStr += `</div>`
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
}

searchI.addEventListener ("click", function(event) {
  console.log('hey');
  recipe = recipeI.value
  ingred = ingredI.value
  url = site + "?i=" + ingred + "&q=" + recipe
  console.log(url);
  doFetch();
})

doFetch()
