import { AuthContext } from "contexts/AuthContext";
import { useContext, useState } from "react"



export const UseFormLogin = () => {
    const { login } = useContext(AuthContext)

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        login({mail,password})
    }



    return{
        setMail,
        setPassword,
        handleSubmit
        
    }
}