import axios from "axios";

//url do CRUD
const api = axios.create({baseURL:'http://localhost:3333/'})

export default api;