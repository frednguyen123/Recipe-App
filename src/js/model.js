// import { async } from 'regenerator-runtime';
import {API_URL} from './config';
import { getJSON } from './helpers';

export const state = {
    recipe: {},
    search: {
        query:'',
        results: [],
    }
};

export const loadRecipe = async function(id) {
    try {

        const data = await getJSON(`${API_URL}${id}`);

        // const res = await fetch(`${API_URL}/${id}`);
        // // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604691c37cdc054bd0d4`);
        // const data = await res.json();
        // if(!res.ok) throw new Error(`${data.message} (${res.status})`)
        // console.log(res, data);
    
        const { recipe } = data.data;
    
        state.recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients
        }
        console.log(state.recipe);

    } catch(err) {
        // Temp error handling
        // console.error(`${err} 💥💥💥💥`);
        throw err;
    }
};

export const loadSearchResults = async function(query){
    try{
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log(data);

        state.search.results = data.data.recipes.map(rec => {
            return{
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            }
        });

        console.log(state.search.results);

    } catch(err) {
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
};

// loadSearchResults('pizza'); //Testing function