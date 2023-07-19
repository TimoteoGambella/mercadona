import { apiFetch } from "api/apiFetch";
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";




const CryptoJS = require('crypto-js')

export const AuthContext = createContext({});



export const AuthProvider = ({children}) => {
    const [isAuth, setisAuth] = useState(false);
    const [user, setUser] = useState()
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false)
     const goTo = useNavigate()


    
    // const signup = () => {
    //      apiFetch('register', JSON.stringify(user.userEmail,user.pwd,user.userName)).then(data => {
    //          if(data.response !== 'failed'){
    //            const encripted = {
    //              id: CryptoJS.AES.encrypt(data.data._id,'clave secreta').toString()
    //            }
    //            localStorage.setItem('user', JSON.stringify(encripted))
    //            goTo('/login')
    //          } else{
    //             if(data.message === 'Mail ya registrado'){
    //                 setError('Este email ya se encuentra registrado')
    //             }
    //          }
    //        })
    // }


    useEffect(() => {
        const userID = localStorage.getItem('user');
        // console.log(userID)
        // const parse = JSON.parse(userID)

        if(userID){
            apiFetch('getUser',userID).then(data => {
                if(data.response !== 'failed'){
                console.log(data.response)
                     setUser(data.data)
                }else{
                    console.log(data.response)
                    console.log('algo fallo')
                }
            }).catch(err => {
                console.log(err)
            })
        }else{
            console.log('not userID')
        }
    },[])


    const login = (userinfo) => {
        apiFetch('login', JSON.stringify(userinfo)).then(data =>  {
            if(data.response !== 'failed'){
                const encripted = {
                    id: CryptoJS.AES.encrypt(data.data[0]._id,'clave_secreta').toString()
                }
                localStorage.setItem('user',JSON.stringify(encripted))
                setisAuth(true)
                setUser(data.data[0])
                goTo('/home')
            } else{
                if(data.message === 'Usuario no encontrado'){
                    setError(true)
                }   else if(data.message === 'Contraseña incorrecta'){
                    console.log('error contrasena incorrecta')
                }
            }
        })

    }
    
    
    const logout = () => {
        localStorage.removeItem('user')
        setisAuth(false)
        setUser('')
        
    }


    const value = {isAuth,loading, setUser,login,user,  setError, error, logout};
    
    return(
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
    )

}



