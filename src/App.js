import './App.css';
import { Heading } from './components/text/Heading.jsx';
import { Paragraph } from './components/text/Paragraph';
import { Section, SectionRow, SectionColumn } from './components/layout/Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <SectionRow className="w-[120%]">
          <SectionColumn className="grow basis-[50%]">
            <Heading alignment="text-center">
              Hello There
            </Heading>
            <Paragraph alignment="text">
              General Kenobi
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Donec massa sapien faucibus et molestie ac. Quam pellentesque nec nam aliquam sem et. Semper viverra nam libero justo laoreet sit amet. Tristique magna sit amet purus gravida quis blandit turpis. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Est ultricies integer quis auctor. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Eu turpis egestas pretium aenean pharetra. Amet consectetur adipiscing elit ut aliquam purus sit amet. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Fusce ut placerat orci nulla pellentesque dignissim enim. Diam sit amet nisl suscipit adipiscing bibendum est. Quam nulla porttitor massa id. At erat pellentesque adipiscing commodo elit.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Donec massa sapien faucibus et molestie ac. Quam pellentesque nec nam aliquam sem et. Semper viverra nam libero justo laoreet sit amet. Tristique magna sit amet purus gravida quis blandit turpis. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Est ultricies integer quis auctor. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Eu turpis egestas pretium aenean pharetra. Amet consectetur adipiscing elit ut aliquam purus sit amet. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Fusce ut placerat orci nulla pellentesque dignissim enim. Diam sit amet nisl suscipit adipiscing bibendum est. Quam nulla porttitor massa id. At erat pellentesque adipiscing commodo elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Donec massa sapien faucibus et molestie ac. Quam pellentesque nec nam aliquam sem et. Semper viverra nam libero justo laoreet sit amet. Tristique magna sit amet purus gravida quis blandit turpis. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Est ultricies integer quis auctor. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Eu turpis egestas pretium aenean pharetra. Amet consectetur adipiscing elit ut aliquam purus sit amet. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Fusce ut placerat orci nulla pellentesque dignissim enim. Diam sit amet nisl suscipit adipiscing bibendum est. Quam nulla porttitor massa id. At erat pellentesque adipiscing commodo elit.
            </Paragraph>
          </SectionColumn>

          <SectionColumn className="grow basis-[50%]">
            <SectionRow>
              <Heading classes={"self-center"} alignment="text-center">
                Hello There
              </Heading>
              <Paragraph alignment="text">
                General Kenobi
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Donec massa sapien faucibus et molestie ac. Quam pellentesque nec nam aliquam sem et. Semper viverra nam libero justo laoreet sit amet. Tristique magna sit amet purus gravida quis blandit turpis. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Est ultricies integer quis auctor. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Eu turpis egestas pretium aenean pharetra. Amet consectetur adipiscing elit ut aliquam purus sit amet. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Fusce ut placerat orci nulla pellentesque dignissim enim. Diam sit amet nisl suscipit adipiscing bibendum est. Quam nulla porttitor massa id. At erat pellentesque adipiscing commodo elit.
              </Paragraph>
            </SectionRow>
          </SectionColumn>
        </SectionRow>

      </header>
    </div>
  );
}

export default App;
