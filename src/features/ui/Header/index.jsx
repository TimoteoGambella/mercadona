import logoMercadona from 'assets/logoMercadona.png'
import 'styles/features/ui/Header.scss';
import cart from 'assets/logos/cart.png'
import user from 'assets/logos/user.png'
import fav from 'assets/logos/fav.png'
import search from 'assets/logos/search.png'
import microphone from 'assets/logos/microphone.png'
import { useEffect, useRef, useState } from 'react';
import Button from 'components/button/Button';
import { Link} from 'react-router-dom';


export const Header = () => {
    const [isOpenPopover, setIsOpenPopover] = useState(false);
    const popoverUserRef = useRef(null);


    useEffect(() => {
        const handleClickOut = (e) => {
            if(popoverUserRef.current && !popoverUserRef.current.contains(e.target)) {
                setIsOpenPopover(false)
            }
        }

        document.addEventListener('mousedown', handleClickOut);
        return () => {
          document.removeEventListener('mousedown', handleClickOut);
        };

    },[])


    return (
        <header className='header'> 
            <nav className='navbar'>
                <section>
                    <Link to={'/home'}>
                    <picture>
                        <img src={logoMercadona} alt={logoMercadona}/>
                    </picture>
                    </Link>
                </section>
                <section className='inputWrapper'>
                    <div className="containerleft">
                    <button className='searchLogo'> <img src={search} alt={search} /> </button>
                    <input className='inputSearch' placeholder='¿Qué Estás Buscando?'/>
                    </div>
                    <button className='microphoneLogo'> <img src={microphone} alt={microphone} /> </button>

                </section>
                <section className='linksItems'>
                    <div className="">
                        <button className='buttonLinks' onClick={() => setIsOpenPopover(!isOpenPopover)}>
                            <img src={user} alt={user}/>
                        </button>
                    </div>
                    <div className="">
                        <button className='buttonLinks'>
                            <img src={fav} alt={fav}/>
                        </button>
                    </div>
                    <div className="">
                        <button className='buttonLinks'>
                            <img src={cart} alt={cart}/>
                        </button>
                    </div>
        
                    <div>

                    </div>
                </section>
                {
                        isOpenPopover && (
                            <div className="popoverUser" ref={popoverUserRef}>
                                <div className='titlePopoverUser'> 
                                    <h5>¡Hola!</h5>
                                </div>
                                <div className='buttonsPopoverUser'>
                                    <Link to={'/login'}>
                                    <Button text={"Iniciar sesión"} back={true} size={'s'} state={true}  selected={false} handleClick={() => ''}/>
                                    </Link>
                                    <Link to='/registro'>
                                    <Button text={"Registrarse"}  back={'noBorder'} size={'s'} state={true}  selected={false} handleClick={() => ''}/>
                                    </Link>
                                </div>
                                <div className="textPopoverUser">
                                    <p>Preguntas frecuentes</p>
                                </div>
                            </div>
                        )
                    }
            </nav>
        </header>
    )
}