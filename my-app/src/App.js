
import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';
function App() {
  return (
    <>
<Header title="Welcome to my website!"/>
    <Person name="Rajeev" age="23"/>
    <List items={['Me', 'You', 'Them']} />
    <Button text="Click me!" onClick={() => console.log("Button clicked")} />
    </>
    
    


    


  )
}



export default App;



