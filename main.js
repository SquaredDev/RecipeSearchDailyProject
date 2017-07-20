//#RecipeSearchDailyProject

let title = document.querySelector('title');
let heading = document.querySelector('#heading');
let main = document.querySelector('#main');
let footing = document.querySelector('#footing');
let recipeI = document.querySelector('#recipe');
let ingredI = document.querySelector('#ingred');
let searchI = document.getElementById('search');
let pic= document.getElementsByClassName('pic')

const site = "http://www.recipepuppy.com/api/"
let recipe = " "
let ingred = " "
let url = site

searchI.addEventListener ("click", function(event) {
  recipe = recipeI.value
  ingred = ingredI.value
  url = site + "?i=" + ingred + "&q=" + recipe
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
              mainStr += `<span class="pic"><img class="profilePic" src="${item.thumbnail}"></span>`
              mainStr += `<p class="rName"><a href="${item.href}">${item.title}</a></p>`
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
  recipe = recipeI.value
  ingred = ingredI.value
  url = site + "?i=" + ingred + "&q=" + recipe
  doFetch();
})

doFetch()

if (pic.innerHTML === '<img class="profilePic" src="">') {
  console.log('what?');
}
