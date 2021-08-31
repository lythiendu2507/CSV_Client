import { createContext, useContext, useState,useEffect } from "react";

import cookies from 'js-cookie';
//import { useUserIdContext } from '../context/user';
import jwt_decode from "jwt-decode"

const UserContext = createContext();

export function AppWrapper({ children }) {
  
   const [userId, setUserId] = useState()

 useEffect(() => {
  function getCookie(token) {
    var name = token + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
   if(document.cookie){
     const token ='token'
    setUserId(jwt_decode(getCookie(token)))
   }
   
 }, [])
  
   return (
<UserContext.Provider value={userId}>
      {children}
   </UserContext.Provider>
);
}
export function useAppContext() {
   return useContext(UserContext);
}