import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  text-align: center;
  width: 280px;
  box-shadow: 5px 15px 7px rgba(0, 0, 0, .7);
  border-radius: 5px;  
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Title = styled.h2`
  letter-spacing: 2px;
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
  flex-direction: row;
`

export const Description = styled.div`  
  margin-right: 5px;
  font-size: .8em;
  overflow-y: auto;  
  max-height: 180px;

  > ul {
    list-style: none;  

    > li {
      padding: 10px;
      margin-top: 2.5px;
    }
  }

::-webkit-scrollbar {
  width: 10px;
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

export const Features = styled.div`
  margin-left: 5px;
`

export const Discount = styled.s`
  font-size: .6em;
  color: white;
`