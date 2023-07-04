import { useEffect, useState } from "react"
import img1 from "../../assets/loader/fresa.png"
import img2 from "../../assets/loader/naranja.png"
import img3 from "../../assets/loader/aguacate.png"
import img4 from "../../assets/loader/banana.png"

export default function Loader(){

    const [img,setImg]=useState(0)

    useEffect(() => {
        if(img===0){setImg(1)}
        setTimeout(() => {
            if(img===4){
                setImg(1)
            }else{
                setImg(img+1)
            }
        }, 1500);
    }, [img]);

    return(
        <div className="loader">
            <img src={img1} alt="Loader" className={`${img===1&&"active"}`}/>
            <img src={img2} alt="Loader" className={`${img===2&&"active"}`}/>
            <img src={img3} alt="Loader" className={`${img===3&&"active"}`}/>
            <img src={img4} alt="Loader" className={`${img===4&&"active"}`}/>
        </div>
    )
}