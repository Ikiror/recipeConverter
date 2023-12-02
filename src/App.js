import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js';
import Button from './Button.js';

function App() {
  return (
    <div className ='App'>
      <Button text = "Hi" onClickProp = { function(){alert('you clicked the button!!')}}/>
      <Footer/>
    </div>
    
  );
}

export default App;
