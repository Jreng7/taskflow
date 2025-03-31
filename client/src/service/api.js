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

export async function createTodo({ name }) {
  try {
    const response = await api.post('/todos', {name})
    return response.data
  } catch (err) {
    console.error('Erro ao criar Task:', err)
  }
}

export async function deleteTodo(id) {
  try {
    const response = await api.delete(`/todos/${id}`)
    return response.data
  } catch (err) {
    console.error('Erro ao deletar Task:', err)
  }
}

