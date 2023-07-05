import { useState } from "react";
import LikeHeart from "../components/likeHeart/LikeHeart";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";

export default function Home(){
    
    const [active,setActive] = useState(false)

    return(
        <div>
            <Loader />

            <div className="circleBackground" style={{width:"200px",height:"200px"}}></div>
            <div className="circleBackground" style={{width:"20px",height:"20px"}}></div>
            <div className="circleBackground" style={{width:"80px",height:"80px"}}></div>
            <div className="circleBackgroundActive" style={{width:"100px",height:"100px"}}></div>
            <div className="circleBackgroundActive" style={{width:"200px",height:"200px"}}></div>

            <LikeHeart active={active} handleClick={setActive}/>

            <Button text={"Agregar pedido"} state={true} size={"l"} back={true}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"l"} back={false}/><br/>
            <Button text={"Agregar pedido"} state={false} size={"l"} back={false}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"s"} back={true}/><br/>
            <Button text={"Agregar pedido"} state={false} size={"s"} back={true}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"s"} back={false}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"xs"} back={true}/><br/>
            <Button text={"Agregar pedido"} state={false} size={"xs"} back={false}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"xs"} back={false}/><br/>
            <Button text={"Agregar pedido"} state={true} size={"xs"} back={false} selected={true}/><br/>
        </div>
    )
}