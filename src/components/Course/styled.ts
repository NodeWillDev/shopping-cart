import styled from "styled-components";

export const Container = styled.div<{ exists: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  text-align: center;
  width: 250px;
  background-color: ${props => props.exists ? `rgba(25, 189, 90, .25)` : `rgba(0, 0, 0, .25)`};
  box-shadow: 5px 15px 15px rgba(0, 0, 0, .4);
  border-radius: 5px;  
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Title = styled.h2`
  letter-spacing: 2px;
  padding: 20px;
  font-weight: bold;
  color: #fcfcfc;
`

export const CourseImage = styled.div`
  margin-top: 15px;      
`

export const Date = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const Features = styled.div`
  display: flex;  
  margin-left: 5px;  
  width: 100%;
  height: 85px;
  justify-content: center;
`

export const Discount = styled.s`
  font-size: .6em;
  color: black;
`

export const DescriptionContents = styled.div`
  position: absolute;
  transition: .2s;
  margin-top: 14px;  
  padding: 5px;
`

export const Description = styled.div<{ lenght?: number }>`
  position: relative;
  width: 100%;
  transition: .4s;
  height: 35px;
  padding: 7px;
  overflow: hidden;
  overflow-y: hidden;
  max-height: 150px;

  > h3 {
    color: #949494;
    letter-spacing: 2.7px;
  }

  &:hover {
    height: ${props => props.lenght}px;        
    overflow-y: ${props => props.lenght ? "auto" : "hidden"};
  }

  ::-webkit-scrollbar {
    width: 7.5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`