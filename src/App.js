
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Items from './Components/Items';
import CreateInvoice from './Components/CreateInvoice';
import CreateItem from './Components/CreateItem';
import Header from './Components/Header';

function App() {
  return (


    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/invoice/create' element={<CreateInvoice />} />
          <Route exact path='/items/:invoiceID' element={<Items />} />
          <Route exact path='/items/create/:invoiceID' element={<CreateItem />} />
        </Routes>


      </BrowserRouter>
    </>


  );


}

export default App;
