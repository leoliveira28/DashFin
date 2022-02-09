import axios from 'axios';

export const api = axios.create({   
    //baseURL: 'http://localhost:3000/api',
    baseURL: 'https://distracted-pasteur-0aa7e2.netlify.app/api'
})