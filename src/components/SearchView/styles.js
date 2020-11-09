import styled from 'vue-styled-components';
import { Wrapper } from '../Layout';

export const Container = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
`;
