import { Body, SectionWrapper, Title, SubTitle, Spacer } from "../components";

export function Team() {
    return(
        <SectionWrapper>
            <Title>
                Team
            </Title>

            <Body>
                <SubTitle>
                    Scrum Master
                </SubTitle>

                <p>Niklas Valuri</p>

                <Spacer/>

                <SubTitle>
                    Developers
                </SubTitle>

                <p>Aleksi Hirvensalo</p>
                <p>Otso Laasonen</p>
                <p>Mikko Salervo</p>
                <p>Miska Tammenpää</p>
                <p>Luukas Kumpulainen</p>
                <p>Nikita Kallio</p>
            </Body>
      </SectionWrapper>
    )
}