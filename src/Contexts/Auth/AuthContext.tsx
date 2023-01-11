import { PersonInfo } from 'Classes/PersonInfo';
import { RegisterModel } from 'Classes/RegisterModel';
import { createContext } from  'react';
import { User } from '../../Classes/User';
import { VisitorInfo } from '../../Classes/VisitorInfo';

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>; 
    loginBIS: (username: string, password: string) => Promise<boolean>; 
    signout: () => void;
    getVisitor: (type: string, field: string, filter: string) => Promise<[]>;
    getCompanies: (type: string, field: string, filter: string) => Promise<[]>;
    getAndar: (type: string, field: string, filter: string) => Promise<[]>;
    // saveVisitors: (body: VisitorInfo) => Promise<any>;
    putImage: (url: string, email: string) => Promise<string>;

    getPerson: (type: string, field: string, filter: string) => Promise<[]>;
    updatePersonCard: (body: PersonInfo) => Promise<any>;

    visitorinfo: VisitorInfo;
    personinfo: PersonInfo;
    registermodel: RegisterModel;
}

export const AuthContext = createContext<AuthContextType>(null!);