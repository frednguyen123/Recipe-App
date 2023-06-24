import * as model from './model';
import recipeView from './views/recipeView';

// import icons from '../img/icons.svg'; //Parcel 1
// import icons from 'url:../img/icons.svg'; //Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// console.log(icons);

const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try{

    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe)
  }
   catch(err){
    recipeView.renderError();
  }
}

// controlRecipes();

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}

init();
