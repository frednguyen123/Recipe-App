import { async } from 'regenerator-runtime';
import { TIMOUT_SEC } from './config';


const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async function(url) {
    try{
        const fetchPro  = fetch(url);

        // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604691c37cdc054bd0d4`);
        const res = await Promise.race([fetch(url), timeout(10)]);
        const data = await res.json();
        
        if(!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch(err){
        throw err;
    }
}