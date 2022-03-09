import Routes from "./routes";
import GlobalStyle from './styles/global'
import Header from "./components/Header";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
       <Header />
       <ToastContainer 
       position="top-center"
       style={
         {width: '250px',
          top: '10px',
          margin: '20px'
        }
       }
       />
       <Routes />
       <GlobalStyle />
    </>
  );
}

export default App;