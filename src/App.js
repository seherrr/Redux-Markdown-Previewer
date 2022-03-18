import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <Header/>
      <div className="componnets">
        <Input/>
        <Output/>
      </div>
    </div>
  );
}

export default App;
