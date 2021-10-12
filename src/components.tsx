import { ReactNode } from "react"
import styled from "styled-components";

export type SectionProps = {
    title: string, 
    children: ReactNode
  }
  
export function Section({title, children}: SectionProps) {
    return (
        <SectionWrapper>
            <Title>
                {title}
            </Title>
            {children}
        </SectionWrapper>
    )
}

export const Body = styled.div`
  padding-left: 4vw;
  padding-right: 4vw;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: center;
  color: #474747;
`;

export const Spacer = styled.div<{size?: number}>`
  margin: ${p => p?.size ? p.size : '20'}px;
  margin-left: 50px;
`;

export const Title = styled.div`
  padding: 15px;
  border-top: 1px solid #1868ae;
  border-bottom: 1px solid #1868ae;
  text-align: center;
  text-transform: uppercase;
`;

export const SubTitle = styled.div`
  font-weight: 700;
  text-align: center;
  padding-top: 10px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;