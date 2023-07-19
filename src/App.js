import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Router } from 'routes';
import { TypesProvider } from 'contexts/TypesContext';
import { AuthProvider } from 'contexts/AuthContext';

function App() {
  const is1440screen=useMediaQuery("(min-width:1440px)")
  return (
    <>
      {is1440screen ? 

            <BrowserRouter>
            <TypesProvider>
              <AuthProvider>
                <Router/>
              </AuthProvider>
            </TypesProvider>
            </BrowserRouter>
        :
        <div className='errorScreen'>
          <p>Este sitio está disponible sólo para desktop 1440px o mayor</p>
          <p>This site is available only for desktop 1440px or higher</p>
        </div>
      }
    </>
  );
}

export default App;
