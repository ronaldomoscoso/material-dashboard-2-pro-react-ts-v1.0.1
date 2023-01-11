import axios from 'axios';
import { response } from 'express';
import { VisitorInfo } from '../Classes/VisitorInfo';
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

export const useApi = () => ({    
    validateToken: async (token: string) => {
        const response = await axios.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/Authenticate/Login', {email, password}, {headers: headers});
        console.log(response);
        return response.data;
    },
    loginBIS: async (username: string, password: string) => {
        let retval;
        await api.get('/Authenticate/LoginBIS/' + username + '/' + password, {headers: headers}).then((response) => {
            retval = response;
        })
        .catch((error => {
            console.log('BIS' + error);
            retval = error;
        }))
        return retval;
    },
    logout: async () => {
        const response = await axios.post('/Home');
        return response.data;
    },
    getVisitor: async (token: string, type: string, field: string, filter: string) => {
        //const response = await axios.get('/BSVisitors/GetVisitors/LOADVISITOR/name/' + filter, {headers: {"Authorization": `Bearer ${ token }`}});
        const response = await api.get('/Visitors/GetVisitors/LOADVISITOR/' + field + '/' + filter, {headers: headers});
        return response.data;
    },
    getCompanies: async (token: string, type: string, field: string, filter: string) => {
        const response = await api.get('/Tables/GetTables/LOADCOMPANY/' + field + '/' + filter, {headers: headers});
        return response.data;
    },
    getAndar: async (token: string, type: string, field: string, filter: string) => {
        const response = await api.get('/Tables/GetTables/LOADANDAR/' + field + '/' + filter, {headers: headers});
        return response.data;
    },
    saveVisitors: async (token: string, body: VisitorInfo) => {
        try {
            let retval;
            console.log('vinfo', body);
            await api.post('/Visitors/SaveVisitors/' + configapp.QRCODE + '/', JSON.stringify(body), {headers: headers}).then((response) => {
                retval = response;
            })
            .catch((error => {
                console.log(error);
                retval = error;
            }));
            return retval;
        } catch (error) {
            console.log('SaveVisitors Error', error);
        }
    },
    putImage: async(url: string, email: string) => {
        const headerimage = {
            "description": "teste",
            "email": email,
            "imageData": url
        }
        const response = await api.post('/BSAction/Upload', headerimage , {headers: headers});
        console.log('api', url);
        return response.data;
    }
});