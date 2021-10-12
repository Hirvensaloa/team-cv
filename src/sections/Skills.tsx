import {Section, Body, Spacer, SubTitle, SectionWrapper, SectionProps} from "../components";

export function Skills() {
    return(
        <Section title="Team Skills">

        <Spacer size={15}/>

        <SkillDesc title="Node.js and React">
            <Body>
                Several team members have working experience with different types of fullstack Javascript projects with NodeJS and React. 
            </Body>
        </SkillDesc>

        <SkillDesc title="C and C++">
            <Body>
                Almost all team members have completed several university courses with c or c++, including a basic course, 
               programming parallel computing and object-orientated programming with c++. 
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

    </Section>
    )
}

function SkillDesc({title, children}: SectionProps) {
    return (
      <SectionWrapper>
        <SubTitle>
          {title}
        </SubTitle>
        {children}
      </SectionWrapper>
    )
  }