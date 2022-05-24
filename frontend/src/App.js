import {Routes,Route} from "react-router-dom" 
import DetailsPage from "./pages/DetailsPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TicketPage from "./pages/TicketPage";
function App() {
  return (
          <div>
            <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/cinema/:slug' element={<DetailsPage/>} />
              <Route path='/login/' element={<LoginPage/>}/>
              <Route path='/register/' element={<RegisterPage/>}/>
              <Route path='/ticket/' element={<TicketPage/>}/>
            </Routes>
          </div>
        
  );
}

export default App;
