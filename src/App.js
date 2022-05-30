import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './views/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
