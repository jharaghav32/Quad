
import './App.css';
import Card from './component/Card';
import CardList from './component/CardList';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Detail from './component/Detail';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<CardList/>}/>
     <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
