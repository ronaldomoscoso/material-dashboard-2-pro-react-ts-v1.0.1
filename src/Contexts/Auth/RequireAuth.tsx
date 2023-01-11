import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    
    return children;
}