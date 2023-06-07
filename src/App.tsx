import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComponent } from "./components/HeaderComponent";
import './index.css'
import {
  HomeView,
  StoreView

} from './routes/routes';
function App() {


  return (
    <>
    <Router>
    <HeaderComponent/>
    <section className="father">
      <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/store' element={<StoreView/>}/>
      </Routes>
    </section>
    </Router>
    </>
  )
}

export default App
