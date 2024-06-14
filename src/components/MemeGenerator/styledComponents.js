// Style your components here
import styled from 'styled-components'

export const MainPart = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  @media (min-width: 768px) {
    align-items: flex-start;
    height: 100vh;
  }
`

export const Part1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 32px;
  color: #35469c;
`

export const Label = styled.label`
  font-family: roboto;
  font-size: 16px;
  color: #7e858e;
`

export const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 5px;
  font-size: 18px;
  border: 2px solid #d7dfe9;
  color: #5a7184;
  outline: none;
`

export const SubmitButton = styled.button`
  padding: 10px;
  width: 200px;
  font-family: roboto;
  font-size: 16px;
  color: white;
  border-width: 0px;
  background-color: #0b69ff;
  cursor: pointer;
  border-radius: 5px;
`

export const Select = styled.select`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 5px;
  font-size: 18px;
  border: 2px solid #d7dfe9;
  color: #5a7184;
  outline: none;
`

export const Option = styled.option`
  color: black;
`

export const Part2 = styled.div`
  padding: 10px;
  width: 100%;
  @media (min-width: 768px) {
    order: 1;
    padding: 80px;
  }
`

export const FormItem = styled.form`
  padding: 2px;
  @media (min-width: 768px) {
    width: 100%;
  }
`

export const MemeContainer = styled.div`
  background-image: url('${props => props.imageUrl}');
  width: 100%;
  background-size: cover;
  height: 400px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.p`
  font-family: roboto;
  font-weight: 500;
  font-size: ${props => props.fontSize}px;
  color: white;
`
