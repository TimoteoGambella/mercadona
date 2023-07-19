import { pagesData } from 'routes/pagesData'
import  {Route,Routes} from 'react-router-dom'
import { Header } from 'features/ui'
import { Footer } from 'features/ui/Footer'


export const Router = () => {



    const pageRoutes = pagesData.map(({path,title,element}) => {
        return <Route  key={title} path={`/${path}`} element={element}/>
    })

    


    return (
        <>
         <Header/>
        <Routes>
            {pageRoutes}
        </Routes>
        </>

    ) 
}


