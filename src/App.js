import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Photos from './Pages/Photos';
import Cart from './Pages/Cart';
import ReduxReactIndex from './Components/ReduxReactIndex';
import { AppProvider } from './Components/AppContext'; 


function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ReduxReactIndex />}>
              <Route index element={<Photos />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}


export default App;

