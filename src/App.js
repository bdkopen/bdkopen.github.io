import './App.css';
import { Heading } from './components/text/Heading.jsx';
import { Paragraph } from './components/text/Paragraph';
import { Section } from './components/layout/Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Section contentDirection="vertical" width='w-1/2' height='h-1/2'>
          <Heading alignment="text-center">
            Hello There
          </Heading>
          <Paragraph alignment="text">
            General Kenobi
          </Paragraph>
        </Section>

      </header>
    </div>
  );
}

export default App;
