import { ApiContext } from './context/ApiContext';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { useMediaQuery } from '@mui/material';

function App() {
  const is1440screen=useMediaQuery("(min-width:1440px)")
  return (
    <>
      {is1440screen ? 
        <ApiContext>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
        </ApiContext>
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
