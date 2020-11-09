import styled from 'vue-styled-components';

const dividerProps = {
  space: String,
};

export const Divider = styled('div', dividerProps)`
  height: ${(props) => `${props.space ? props.space : 10}px`};
`;

export const Separator = styled('div', dividerProps)`
  width: ${(props) => `${props.space ? props.space : 10}px`};
`;

const WrapperProps = {
  justify: String,
  direction: String,
  alignItems: String,
  position: String,
  templateColumns: String,
  full: Boolean,
};

const switchContentStyle = (type) => {
  switch (type) {
    case 'center':
      return type;
    case 'space-between':
      return type;
    case 'flex-start':
      return type;
    case 'flex-end':
      return type;
    case 'baseline':
      return type;
    default:
      return 'inherit';
  }
};

export const Wrapper = styled('div', WrapperProps)`
  display: flex;
  width: ${(props) => props.full && '100%'};
  flex-direction: ${(props) => props.direction === 'column' && 'column'};
  align-items: ${(props) =>
    props.alignItems ? switchContentStyle(props.alignItems) : 'inherit'};
  justify-content: ${(props) =>
    props.justify && switchContentStyle(props.justify)};
`;
