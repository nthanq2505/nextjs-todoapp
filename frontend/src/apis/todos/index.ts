import axios from 'axios'
import { API_ROOT, API_TASK } from '../../utils/constants'
import { Task } from '../../redux/actions/task.actions'

export const fetchTaskAPI = async () => {
  try {
    const response = await axios.get(`${API_ROOT}/${API_TASK}`)
    return response
  } catch (error) {
    throw error
  }
}

export const addTaskAPI = async (data: Task) => {
  try {
    console.log(data) 
    const response = await axios.post(`${API_ROOT}/${API_TASK}`, data)
    return response
  } catch (error) {
    throw error
  }
}
