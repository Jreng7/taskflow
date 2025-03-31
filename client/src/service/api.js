import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export async function getTodos(){
  try {
    const response = await api.get('/todos')
    return response.data
  } catch (err) {
    console.error('Erro ao buscar TODOs:', err)
  }
}