import { createContext } from 'react';
import emailjs from '@emailjs/browser';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {

    const emailJS = async (data) => {
        // VALIDAR PREVIAMENTE QUE EXISTE EL MAIL EN LA BASE DE DATOS
        // API NECESARIA PARA ENVIAR UN CORREO ELECTRONICO A CIERTO MAIL.

        // ARRAY NECESARIO DE "data"
        // const array= {
        //     nombre:"",
        //     contrasena:"",
        //     toMail:""
        // }

        emailjs.send('service_rkbguuj', 'template_7y8c547', data, process.env.EMAILJSKEY).then(
            function (response) {
                return true;
            },
            function (error) {
                return false;
            }
        );
    };

    return (
        <UseApiContext.Provider
            value={{
                emailJS
            }}
        >
            {children}
        </UseApiContext.Provider>
    );
};
