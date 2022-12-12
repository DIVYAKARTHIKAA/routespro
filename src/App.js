//import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact';
import Services from './pages/services';
//function App()
//{
  //return(
    //<div className="App">
      //<BrowserRouter>
      //<Routes>
          //<Route path='/' element={<Home/>} />
          //<Route path='/contact' element={<Contact/>} />
          //<Route path='/service' element={<Services/>} />
      //</Routes>
      //</BrowserRouter>
    //</div>
  //)
//}

//export default App;

/*import './App.css';
import List from './list.js';

function App()
{
    return(
        <div classname='Body'>
            <List/>
        </div>    
        )
}

export default App;*/

import './App.css';
//import List from './list';
//import Appz from './radium';
//import BasicButtons from './button';
import Header from './Nav';
function App(){
  return(
    <div classname="App">
      <BrowserRouter>
        <App />

      </BrowserRouter>
      <Header />
    </div>
  )
}
export default App;




