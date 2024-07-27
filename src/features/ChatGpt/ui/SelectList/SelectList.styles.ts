import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  align-items: center;
`;

export const SelectLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Emoji = styled.div`
  font-size: 40px;
`;

export const Header = styled.h1`
  font-size: 1em;
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Option = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#D3E4CD' : '#F0F0F0')};
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #D3E4CD;
  }
`;

export const Divider = styled.hr`
    width: 80%
    margin: 20px 0;
    border-style: none;
    border-top: 1px dotted #ddd;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedSelectLocation = styled(SelectLocation)`
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;