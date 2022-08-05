import axios from 'axios';

export default axios.create({
  baseURL: 'https://tasty.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'JvqQ5qAvyUmshPiGZ5U5uEfqzgU0p14QtsnjsnpURuB6QpvYxg',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
});
