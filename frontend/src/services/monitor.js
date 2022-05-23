import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API || 'http://localhost:3000'

const getAll = async () => {
    try {
        const { data } = await axios.get(`${URL_API}/monitor`)
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

const save = async (data) => {
    try {
        // const formData = new FormData()
        // formData.append('names', data.names)
        // formData.append('last_names', data.last_names)
        // formData.append('email', data.email)
        // formData.append('phone', data.phone)
        // formData.append('academy_program', data.academy_program)
        // formData.append('semester', data.semester)
        // formData.append('dni', data.dni)
        // formData.append('photo', data.photo,'form-data')
        await axios.post(`${URL_API}/monitor/add`, data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

const exportedObject = { getAll, save }
export default exportedObject