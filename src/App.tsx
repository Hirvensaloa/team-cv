import styled from "styled-components";
import assemblers from "./assemblers.jpg";
import { Spacer } from "./components";
import {Introduction} from "./sections/Introduction";
import {Skills} from "./sections/Skills";
import {Contact} from "./sections/Contact";
import {WorkingPreferences} from "./sections/WorkingPreferences";
import {WorkExperience} from "./sections/WorkExperience";
import {Team} from "./sections/Team";

function App() {
  return (
    <>
    <div style={{display: "flex", justifyContent: 'center'}}>
      <Image src={assemblers} alt="Mighty assemblers"/>
    </div>
    
    <Wrapper>

      <SideColumn>

        <Team/>

        <WorkExperience/>

        <Contact/>

      </SideColumn>

      <Column>

        <Introduction/>

        <Spacer/>

        <Skills/>

        <Spacer/>

        <WorkingPreferences/>

      </Column>
    </Wrapper>
    </>
  );
}

const Image = styled.img`
  width: 100vw;
  max-width: 1580px;
  height: calc(min(100vw, 1580px) * 0.7);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  min-width: 300px;
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 300px;
`;

const Wrapper = styled.div`
  padding: 5vw;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 5vw;
`;

export default App;
