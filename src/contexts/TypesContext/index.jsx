import { apiFetch } from "api/apiFetch"


const { createContext, useState, useEffect } = require("react")



export const TypesContext = createContext()



export const TypesProvider = ({children}) => {
    const [allTypes, setAllTypes] = useState([
        {
            id: 8, name: 'Bebes', img: "https://firebasestorage.googleapis.com/v0/b/mercadona-8089a.appspot.com/o/tiposMercadona%2Ffrescos.png?alt=media&token=7a8c9c04-227e-44f5-af48-cc6b04d3ca46"
        },
        {
            id: 9, name: 'Gluten Free', img: "https://firebasestorage.googleapis.com/v0/b/mercadona-8089a.appspot.com/o/tiposMercadona%2Ffrescos.png?alt=media&token=7a8c9c04-227e-44f5-af48-cc6b04d3ca46"
        },
        


])


    useEffect(() => {
        apiFetch('getAllTypes').then(data => {
            const response = data.data
            setAllTypes(allTypes.concat(response))
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    
    const value = { allTypes }

    return <TypesContext.Provider value={value}>{children}</TypesContext.Provider>
}