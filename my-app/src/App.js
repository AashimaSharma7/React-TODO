import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = 'MY-APP' />
    { /*<Navbar title = 'My-APP aboutText = 'ABOUT MY APP' */}
    <div className='container my-3'>
     <TextForm heading = 'Enter you text here'/> 
    </div>

    
    </>
    
  );
}

export default App;
