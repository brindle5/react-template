import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(SetCurrentUserContext)

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleMount = async () => {
      try {
        const { data } = await axios.get("dj-rest-auth/user/");
        setCurrentUser(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      handleMount();
    }, []);

    useMemo(() => 
    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401){
          try {
            await axios.post('dj-rest-auth/token/refresh')
            } catch(err) {


              // Complete video
            }
        }
      }
    ))

    return (
        <CurrentUserContext.Provider value={currentUser}>
         <SetCurrentUserContext.Provider value={setCurrentUser}>
            {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};
