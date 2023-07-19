import logoMercadona from 'assets/logoMercadona.png'
import Button from 'components/button/Button'
import Input from 'components/input/Input'
import { useContext, useEffect, useState } from 'react'
import 'styles/views/Signup/Signup.scss'
import facebooklogo from 'assets/logos/facebook.png'
import googlelogo from 'assets/logos/google.png'
import bannerRegister from 'assets/bannerRegister.png'
import infoLogo from 'assets/logos/info.png'
import { Footer } from 'features/ui/Footer'
import { UseFormSignup } from 'hooks/UseFormSigup'
import { AuthContext } from 'contexts/AuthContext'

export const Signup = () => {

    const { handleSubmit , setUserLastName,setUserName ,setUserEmail, setPwd, setConfirmpwd , isSubmitDisable, errorMsg } = UseFormSignup()
    const {user} = useContext(AuthContext)
    const [showPass,setShowPass]=useState(false)

    return(
        <>
        <section className='wrapperSignup'>
            <div className="wrapperLeft">
                <picture className='logoWrapperLeft'> 
                    <img src={logoMercadona} alt={logoMercadona}/>
                </picture>
                <div className='form'>
                    <Input label={"Nombre"} helperText={"Nombre"} pass={false} error={false} classes={"signupInputs"} handleChange={setUserName}/>
                    {/* <Input label={"Apellido"} helperText={"Apellido"} pass={false} showPass={showPass} setShowPass={setShowPass} error={false} classes={"signupInputs"} handleChange={setData}/> */}
                    <Input label={"Correo electrónico"} helperText={"Correo electrónico"} pass={false}  error={false} classes={"signupInputs"} handleChange={setUserEmail}/>
                    <div className="containerPass">
                    <Input label={"Contraseña"} helperText={"Contraseña"} pass={true} showPass={showPass} setShowPass={setShowPass} error={false} classes={"signupInputs"} handleChange={setPwd}/>
                    <img src={infoLogo} alt={infoLogo}/>
                    </div>
                    <Input label={"Repetir contraseña"} helperText={"Repetir contraseña"} pass={true} showPass={showPass} setShowPass={setShowPass} error={false} classes={"signupInputs"} handleChange={setConfirmpwd}/>
                </div>
                    <div className="">
                        <Button back={true
                        } state={isSubmitDisable} size={'l'}  text={"Crear cuenta"}  handleClick={handleSubmit}/>
                    </div>
                    <div className='infoSocialMedia'>
                        <h6>
                            <span>Ingresar con</span>
                        </h6>
                    </div>
                    <div className="wrapperButtonsSignup">
                        <button className='buttonRedSocial'>
                            <img src={facebooklogo} alt={facebooklogo} />
                        </button>
                        <button className='buttonRedSocial'>
                            <img src={googlelogo}  alt={googlelogo} />
                        </button>
                    </div>
            </div>
            <picture className="wrapperRight">
                <img src={bannerRegister} alt={bannerRegister}/>
            </picture>
        </section>
        <Footer/>
        </>
    )
}