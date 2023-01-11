import axios from 'axios';
import { PersonInfo } from 'Classes/PersonInfo';
import configapp from "../config.json"

const api = axios.create({
    // baseURL: 'http://201.48.119.97:10112/api'
    // baseURL: 'http://172.16.0.86:10112/api'
    // baseURL: 'http://172.17.0.200:9090/api'
    baseURL: configapp.APIServer
});

const headers = {
    'Content-Type': 'application/json'
}

export const usePersonApi = () => ({   
    getPerson: async (type: string, field: string, filter: string) => {
        const response = await api.get('/Persons/GetPersons/' + type + '/' + field + '/' + filter, {headers: headers});
        return response.data;
    },
    updatePersonCard: async  (token: string, body: PersonInfo) => {
        const response = await api.post('/Persons/UpdatePersonCard/', JSON.stringify(body), {headers: headers});
        if (response.status === 200)
            return true;
        else
            return false;
    },
})