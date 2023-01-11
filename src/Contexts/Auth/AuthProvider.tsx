import { PersonInfo } from "Classes/PersonInfo";
import { RegisterModel } from "Classes/RegisterModel";
import { User } from "Classes/User";
import { VisitorInfo } from "Classes/VisitorInfo";
import { useApi } from "Hook/useApi";
import { usePersonApi } from "Hook/usePersonApi";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const personapi = usePersonApi();
    const [user, setUser] = useState<User | null>(null);
    const visitorinfo = new VisitorInfo();
    const personinfo = new PersonInfo();
    const registermodel = new RegisterModel();

    // useEffect(() => {
    //     const validateToken = async () => {
    //         const storageData = localStorage.getItem('authtoken');
    //         if (storageData) {
    //             const data = await api.validateToken(storageData);
    //             if (data.user) {
    //                 setUser(data.user);
    //             }
    //         }
    //     };
    //     validateToken();
    // }, [api]);

    const signin =  async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data) {
            setUser(data);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const loginBIS =  async (username: string, password: string) => {
        const data = await api.loginBIS(username, password);
        if (data) {
            setUser(data);
            // setToken(data.token);
            return true;
        }
        return false;
    }

    const putImage = async(url: string, email: string) => {
        const data = await api.putImage(url, email);
        if (data) {
            setUser(data);
            return data;
        }
        return null;
    }

    const signout = async () => {
        await api.logout();
        setUser(null);
        setToken('');
    }

    const getVisitor =  async (type: string, field: string, filter: string) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await api.getVisitor(storageData, type, field, filter);
            if (data) {
                return data;
            }
        }
        return null;
    }

    // const saveVisitors =  async (body: VisitorInfo) => {
    //     let storageData = localStorage.getItem('authtoken');
    //     storageData = 'ronaldo'
    //     if (storageData) {
    //         const data = await api.saveVisitors(storageData, body);
    //         if (data) {
    //             return data;
    //         }
    //     }
    //     return null;
    // }

    const getCompanies =  async (type: string, field: string, filter: string) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await api.getCompanies(storageData, type, field, filter);
            if (data) {
                setUser(data);
                return data;
            }
        }
        return null;
    }

    const getAndar =  async (type: string, field: string, filter: string) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await api.getAndar(storageData, type, field, filter);
            if (data) {
                setUser(data);
                return data;
            }
        }
        return null;
    }

    const getPerson =  async (type: string, field: string, filter: string) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await personapi.getPerson(type, field, filter);
            if (data) {
                return data;
            }
        }
        return null;
    }

    const updatePersonCard = async (body: PersonInfo) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await personapi.updatePersonCard(storageData, body);
            if (data) {
                return data;
            }
        }
        return null;
    }

    const setToken = (token: string) => {
        localStorage.setItem('authtoken', token);
    };


    return (
        <AuthContext.Provider value={{ user, signin, loginBIS, signout, getVisitor, getCompanies, getAndar, putImage, getPerson, updatePersonCard, visitorinfo, personinfo, registermodel }}>
            {children}
        </AuthContext.Provider>
    );
}