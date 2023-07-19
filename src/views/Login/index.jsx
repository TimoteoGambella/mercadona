import Button from "components/button/Button"
import Input from "components/input/Input"
import facebooklogo from "assets/logos/facebook.png"
import googlelogo from "assets/logos/google.png"
import "styles/views/Login/Login.scss"
import mercadonaLogo  from "assets/logoMercadona.png"
import { Footer } from "features/ui/Footer"
import { UseFormLogin } from "hooks/UseFormLogin"
import { useContext } from "react"
import { AuthContext } from "contexts/AuthContext"
export const Login = () => {

    const {setPassword, handleSubmit, setMail} = UseFormLogin()
    const {logout} = useContext(AuthContext)


    return(
        <>
        <section className="wrapperLogin">
            <article className="wrapperForm">
                <picture className="wrapperLogoLogin">
                    <img src={mercadonaLogo} alt={mercadonaLogo}/>
                </picture>
                <form className="formLogin">
                    <Input label={"Correo electrónico"} classes={"signupInputs"} handleChange={setMail}/>
                    <Input  label={"Contraseña"} pass={true} classes={"signupInputs"} handleChange={setPassword} showPass={true}/>
                </form>
                    <div className="helpPassword">
                        <p>¿Has olvidado tu contraseña?</p>
                    </div>
                    <Button text={"Ingresar"} size={"l"} handleClick={handleSubmit} state={true} back={true}/>
                    <div className='infoSocialMedia'>
                        <h6>
                            <span>Continuar con</span>
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
                    <Button text={"Ingresar"} size={"l"} handleClick={logout} state={true}/>
            </article>
        </section>
        <Footer/>
        </>
    )
}