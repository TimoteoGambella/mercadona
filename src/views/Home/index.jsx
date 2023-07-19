import { useContext, useEffect, useState } from "react";
import LikeHeart from "../../components/likeHeart/LikeHeart";
import Loader from "../../components/loader/Loader";
import Button from "components/button/Button";
import Input from "../../components/input/Input";
import "styles/views/Home/Home.scss";
import { Slider } from "./components";

import { TypesContext } from "contexts/TypesContext";
import { Footer } from "features/ui/Footer";
import { AuthContext } from "contexts/AuthContext";
export const  Home = () => {
    const [isHovering, setIsHovering] = useState(null);
    const { allTypes } = useContext(TypesContext)
    const {isAuth, user} = useContext(AuthContext)

    console.log(user)

    return(
        <section className="containerMain">
            <div className="containerHome">
                {
                    isAuth ? <h4>Si lo esta</h4> : <h4>no lo esta</h4>
                }
            <div className="containerCategorys">
                {
                    allTypes?.map((types, index) => {
                        return(
                            <div key={index} onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(null)} className="circleBackground" style={{width:"119px",height:"117px"}}>
                                {
                                    isHovering === index ? <p className="textHoverCategorys">{types.name}</p>  : <img src={types.img} alt={types.name}/>
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
            <Slider/>
            <div className="wrapperButtonHelp">
                    <Button text={"Necesitas ayuda?"} state={true} size={'s'} back={true} handleClick={false}/>
            </div>
            </div>
        </section>
    )
}



{/* <Loader />

            <div className="circleBackground" style={{width:"200px",height:"200px"}}></div>
            <div className="circleBackground" style={{width:"20px",height:"20px"}}></div>
            <div className="circleBackground" style={{width:"80px",height:"80px"}}></div>
            <div className="circleBackgroundActive" style={{width:"100px",height:"100px"}}></div>
            <div className="circleBackgroundActive" style={{width:"200px",height:"200px"}}></div>

            <LikeHeart active={active} handleClick={setActive}/>
        <br/>
            <Input label={"Label"} helperText={"Correo"} pass={true} showPass={showPass} setShowPass={setShowPass} error={false} classes={"claseExtra"} handleChange={setData}/>
            <Input label={"Label"} helperText={"Correo"}  error={true} classes={"claseExtra"} handleChange={setData}/>
        <br/>
        <br/>

            <Button text={"Agregar pedido"} state={true} size={"l"} back={true} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"l"} back={false} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={false} size={"l"} back={false} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"s"} back={true} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={false} size={"s"} back={true} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"s"} back={false} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"xs"} back={true} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={false} size={"xs"} back={false} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"xs"} back={false} handleClick={handleClick}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"xs"} back={false} handleClick={handleClick} selected={true}/><br/> */}