import { useEffect, useState } from "react";
import LikeHeart from "../components/likeHeart/LikeHeart";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";
import Input from "../components/input/Input";

export default function Home(){
    
    const [active,setActive] = useState(false)
    const [data,setData]=useState("")

    useEffect(() => {
        console.log(data)
    }, [data]);

    const handleClick=()=>{
        console.log("FUNCIONÓ")
    }

    return(
        <div>
            <Loader />

            <div className="circleBackground" style={{width:"200px",height:"200px"}}></div>
            <div className="circleBackground" style={{width:"20px",height:"20px"}}></div>
            <div className="circleBackground" style={{width:"80px",height:"80px"}}></div>
            <div className="circleBackgroundActive" style={{width:"100px",height:"100px"}}></div>
            <div className="circleBackgroundActive" style={{width:"200px",height:"200px"}}></div>

            <LikeHeart active={active} handleClick={setActive}/>
        <br/>
            <Input label={"Label"} helperText={"Correo"} typeOfInput={"password"} error={false} classes={"claseExtra"} handleChange={setData}/>
            <Input label={"Label"} helperText={"Correo"} typeOfInput={"text"} error={true} classes={"claseExtra"} handleChange={setData}/>
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
            <Button text={"Agregar pedido"} state={true} size={"xs"} back={false} handleClick={handleClick} selected={true}/><br/>
        </div>
    )
}