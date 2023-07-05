import { useState } from "react";
import LikeHeart from "../components/likeHeart/LikeHeart";
import Loader from "../components/loader/Loader";

export default function Home(){
    
    const [active,setActive] = useState(false)

    return(
        <div>
            <Loader />
            
            <div className="typesCircle" style={{width:"200px",height:"200px"}}></div>
            <div className="typesCircleActive" style={{width:"200px",height:"200px"}}></div>

            <LikeHeart active={active} handleClick={setActive}/>
        </div>
    )
}