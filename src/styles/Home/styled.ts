import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;  
  width: 100%;
`
export const Title = styled.div`
  width: 100%;  
  display: flex;
  justify-content: center;
  
  > h2{
    letter-spacing: 4px;
    padding: 25px;
  }
`

export const Courses = styled.div`
  display: flex;      
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;  
  width: 80%;
  padding: 20px;
`