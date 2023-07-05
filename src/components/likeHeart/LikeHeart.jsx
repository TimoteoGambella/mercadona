export default function LikeHeart({active,handleClick}){
    return(
        <div className={`heart ${active?"heartActive":""}`} onClick={()=>handleClick(!active)}></div>
    )
}