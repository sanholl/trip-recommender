import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin: 0 auto;
  width: 80%;
`;

export const Text = styled.h3`
  text-align: center;
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  width: 100%
`;