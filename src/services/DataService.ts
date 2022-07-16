import axios from 'axios';

const API_URL = 'https://swapi.dev/api/'

class DataService {
  getAll(): Promise<object|null> {
    return axios.get(`${API_URL}/people/`)
  }
}