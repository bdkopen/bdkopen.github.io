import './App.css';
import {Heading} from './components/text/Heading.jsx';
import { Paragraph } from './components/text/Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading alignment="text-center">
          Hello There
        </Heading>
        <Paragraph alignment="text-center">
          General Kenobi
        </Paragraph>

      </header>
    </div>
  );
}

export default App;
