import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import Logo from '../assets/logo.svg';
import Wrapper from '../components/Wrapper';
import Balls from './Balls';

const OuterWrapper = styled.div<{ theme: Theme }>`
  position: sticky;
  background-color: ${props => props.theme.colors.main};
`;

const StyledLogo = styled(Logo)<{ theme: Theme }>`
  display: inline-block;
  width: 240px;
  fill: ${props => props.theme.colors.background};
`;

interface HeaderProps {
  theme: Theme;
}

const Header: React.FunctionComponent<HeaderProps> = props => (
  <OuterWrapper>
    <Wrapper>
      <StyledLogo />
    </Wrapper>
    <Balls color={props.theme.colors.background} />
  </OuterWrapper>
);

export default Header;
