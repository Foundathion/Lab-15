import Footer from './css/components/Footer/index.jsx';
import Main from './css/components/Main/index.jsx';
import Head from './css/components/Head/index.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Head />
     <Main />
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
