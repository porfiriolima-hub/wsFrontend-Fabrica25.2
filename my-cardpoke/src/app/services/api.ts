import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/ditto',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})