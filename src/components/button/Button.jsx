export default function Button({text,state,size,back, selected,handleClick}){
    return(
        <div className={
                `button
                ${!back?"backTransparent":""}
                ${size==="l"?"large":size==="s"?"small":size==="xs"?"verySmall":""}
                ${!state?"disabled":"enabled"}
                ${selected?"selected":""}`
            }
            onClick={()=>{
                if(state){
                    if(!selected){
                        handleClick()
                    }
                }
            }}
        >
            <p>{text}</p>
        </div>
    )
}