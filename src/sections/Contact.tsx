import { SectionWrapper, Title, Body, Spacer } from "../components";

import {HiOutlineMailOpen} from "react-icons/hi";
import {GiRotaryPhone} from "react-icons/gi";

export function Contact() {
    return(
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
    )
}