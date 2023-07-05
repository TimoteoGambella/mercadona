export default function Button({text,state,size,back, selected}){
    return(
        <div className={
                `button
                ${!back?"backTransparent":""}
                ${size==="l"?"large":size==="s"?"small":size==="xs"?"verySmall":""}
                ${!state?"disabled":"enabled"}
                ${selected?"selected":""}`
            }
        >
            <p>{text}</p>
        </div>
    )
}