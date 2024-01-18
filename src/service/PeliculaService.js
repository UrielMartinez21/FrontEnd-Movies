import axios from 'axios';


class PeliculaService {
    constructor() {
        this.apiUrl = 'http://127.0.0.1:5000/api/peliculas';
    }

    async obtenerPeliculas() {
        try {
            const response = await axios.get(this.apiUrl);
            return response.data;
        } catch (error) {
            console.log('Error fetching data:', error);
            throw error;
        }
    }

    async guardarPelicula(data) {
        try {
            const response = await axios.post(this.apiUrl, data);
            return response.data;
        } catch (error) {
            console.error('Error sending data:', error);
            throw error;
        }
    }

    async buscarPelicula(id) {
        try {
            const response = await axios.get(`${this.apiUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async actualizarPelicula(id, data) {
        try {
            const response = await axios.put(`${this.apiUrl}/${id}`, data);
            return response.data;
        } catch (error) {
            console.error('Error sending data:', error);
            throw error;
        }
    }

    async eliminarPelicula(id) {
        try {
            const response = await axios.delete(`${this.apiUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error sending data:', error);
            throw error;
        }
    }
}

export default PeliculaService;
