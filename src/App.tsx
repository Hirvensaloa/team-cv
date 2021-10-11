import { ReactNode } from "react";
import styled from "styled-components";
import {HiOutlineMailOpen} from "react-icons/hi";
import {GiRotaryPhone} from "react-icons/gi";
import assemblers from "./assemblers.jpg"

function App() {
  return (
    <>
    <div style={{display: "flex", justifyContent: 'center'}}>
      <Image src={assemblers} alt="Mighty assemblers"/>
    </div>
    <Wrapper>
      <SideColumn>
      <SectionWrapper>
        <Title>
          Team
        </Title>
        <Body>
          <SkillTitle>
            Scrum Master
          </SkillTitle>

          <p>Niklas Valuri</p>

          <Spacer/>

          <SkillTitle>
            Developers
          </SkillTitle>

          <p>Aleksi Hirvensalo</p>
          <p>Otso Laasonen</p>
          <p>Mikko Salervo</p>
          <p>Miska Tammenpää</p>
          <p>Luukas Kumpulainen</p>
          <p>Nikita Kallio</p>
        </Body>
      </SectionWrapper>

      <SectionWrapper>
        <Title>
          Work Experience
        </Title>
        <Body>
        Three of our team members have working experience as a member of a software development team. Main focus on full stack web development with React and Nodejs. 

        Scrum master has been working with clients the past one and half years.

        </Body>
      </SectionWrapper>

      <SectionWrapper>
        <Title>
          Contact
        </Title>
        <Body>
          <HiOutlineMailOpen size={20} color="#d9a5b3"/>
          <p>niklas.valuri@aalto.fi</p>

          <Spacer/>

          <GiRotaryPhone size={20} color="#d9a5b3"/>
          <p>0449700420</p>
        </Body>
      </SectionWrapper>

    </SideColumn>

    <Spacer/>

      <Column>

      <Section title="Introduction">
        <Body>
          We are an enthusiastic team consisting of six bachelor computer science students, joined by a second-year software and service engineering master’s student as our Scrum master. We are highly motivated to participate in a real project and work hand in hand with our customer. We are eager to learn new technologies during the project and apply all of our knowledge to bring solutions.
        </Body>
      </Section>

      <Spacer/>

      <Section title="Team Skills">

      <Body>
        <SkillDesc title="Node.js and React">
          <Body>
            Several team members have working experience with different types of fullstack Javascript projects with NodeJS and React. 
          </Body>
        </SkillDesc>

        <SkillDesc title="C and C++">
          <Body>
          Almost all team members have completed several university courses with c or c++, including a basic course, programming parallel computing and object-orientated programming with c++. 
          </Body>
        </SkillDesc>

        <SkillDesc title="Software engineering tools">
          <Body>
          Version control is familiar for the team. Jira, Teams, Slack, and other development management tools are familiar for the scrum master and most team members.  
          </Body>
        </SkillDesc>

        <SkillDesc title="Scala, Kotlin and Java">
          <Body>
          All team members have used scala on basic programming courses. Java, Kotlin, and spring boot are familiar for one team member.
          </Body>
        </SkillDesc>

        <SkillDesc title="Python">
          <Body>
          All team members are familiar with Python, and multiple smaller projects have been implemented with it. 
          </Body>
        </SkillDesc>

        <SkillDesc title="UI/UX (Figma)">
          <Body>
          A couple of team members have used figma for UI and UX development. 
          </Body>
        </SkillDesc>

      </Body>

      </Section>

      <Spacer/>

      <Section title="Working preferences">
        <Body>
          Our team prefers weekly physical meetings together, and we hope that this would be possible on our customers premises. If that is not possible, we will figure out other solutions. Our team can work both in English and Finnish. Our team will use your practices and tools. If you do not have preferences, we will give our recommendation to you in the beginning of cooperation.
        </Body>
      </Section>

      </Column>
    </Wrapper>
    </>
  );
}

function Section({title, children}: {title: string, children: ReactNode}) {
  return (
    <SectionWrapper>
    <Title>
    {title}
    </Title>
    {children}
    </SectionWrapper>
  )
}

function SkillDesc({title, children}: {title: string, children: ReactNode}) {
  return (
    <SectionWrapper>
    <SkillTitle>
      {title}
    </SkillTitle>
    {children}
    </SectionWrapper>
  )
}

const Image = styled.img`
  width: 100%;
  max-width: 1280px;
  
  & :before {
	content: "";
	float: left;
	padding-top: 69%; 	
}
`;

const SkillTitle = styled.div`
  font-weight: 700;
  text-align: center;
  padding-top: 10px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const Spacer = styled.div`
  margin: 20px;
  margin-left: 50px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 768px) {
    padding: 45px;
  }
`;

const Title = styled.div`
  padding: 15px;
  border-top: 1px solid #1868ae;
  border-bottom: 1px solid #1868ae;
  text-align: center;
  text-transform: uppercase;
`;

const Body = styled.div`
  padding-left: 4vw;
  padding-right: 4vw;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: center;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default App;
