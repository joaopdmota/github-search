import styled from 'vue-styled-components';

const hProps = {
  color: String,
  size: String,
};

export const H1 = styled('h1', hProps)`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: ${(props) => (props.size ? `${props.size}px` : '16px')};
`;

export const H2 = styled('h2', hProps)`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
`;

export const Img = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
`;
