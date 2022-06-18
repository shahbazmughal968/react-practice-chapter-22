import React,{useState} from "react"
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

const AuthContextProvider = (props) =>{

    const [token,settoken]=useState(null)
    const userIsLoggedIn = !!token;
    const loginHandler = (token) =>{
        settoken(token);
    }
    const logoutHandler = () =>{
        settoken(null);
    }

return (
    <AuthContext.Provider>{props.children}</AuthContext.Provider>
)
};