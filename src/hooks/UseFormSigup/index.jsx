import { apiFetch } from "api/apiFetch";
import { AuthContext } from "contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const CryptoJS = require('crypto-js')



export const UseFormSignup = () => {
    // const userRef = useRef();
    const { isAuth, setUser, user,  setError, error } = useContext(AuthContext)
    const goTo = useNavigate();
    const [username, setUserName] = useState('')
    const [password, setPwd] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [mail, setUserEmail] = useState('')
    const [confirmPwd, setConfirmpwd] = useState('')
    const [isSubmitDisable, setisSubmitDisable] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    




    const handleSubmit = async () => { 
       await apiFetch('register', JSON.stringify({mail,password,username})).then(data => {
         if(data.response !== 'failed'){
           console.log(data.response)
           const encripted = {
             id: CryptoJS.AES.encrypt(data.data._id,'clave_secreta').toString()
           }
           localStorage.setItem('user', JSON.stringify(encripted))
           goTo('/login')
         } else{
           console.log(data.response)
            if(data.message === 'Mail ya registrado'){
                setError('Este email ya se encuentra registrado')
                console.log(setError)
            }
         }
       })
    }


    const validate = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(username === '' || password === '' || confirmPwd === '' ||  mail === ''){
            setisSubmitDisable(false)
            const emailIsValid = emailPattern.test(mail);
            
            if (password.length < 8 || password.length > 20) {
                setErrorMsg('La contraseña debe tener entre 8 y 20 caracteres');
              } else if (!password.match(/[a-zA-Z]/)) {
                setErrorMsg('La contraseña debe incluir al menos una letra');
              } else if (!password.match(/[0-9]/)) {
                setErrorMsg('La contraseña debe incluir al menos un número');
              } else if (!password.match(/[^a-zA-Z0-9]/)) {
                setErrorMsg('La contraseña debe incluir al menos un carácter especial');
              }  else {
                setErrorMsg('');
              }
            } else if (password !== confirmPwd) {
              setErrorMsg('Las contraseñas deben coincidir');
              setisSubmitDisable(false)
            }else{
              setErrorMsg('');
              setisSubmitDisable(true)
            }
    }

    useEffect(() => {
        validate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[username,password,confirmPwd,mail])



    return {
        username,
        setUserName,
        password,
        setPwd,
        errorMsg,
        mail,
        confirmPwd,
        setUserLastName,
        setUserEmail,
        setConfirmpwd,
        isSubmitDisable,
        setisSubmitDisable,
        handleSubmit
    }

}