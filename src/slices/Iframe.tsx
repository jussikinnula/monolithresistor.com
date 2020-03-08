import React from 'react';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import { Theme } from '../theme';
import { PrismicSlice, PrismicKeyText, PrismicWebLink } from '../prismic';
import Wrapper from '../components/Wrapper';

interface IframeNonRepeatable {
  iframe_title: PrismicKeyText;
  iframe_link: PrismicWebLink;
}

const Title = styled.h3<{ theme: Theme }>`
  margin: 0;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.accentDark};
  padding: 5px 10px;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 600px;
  border: 0;
`;

export type IframeSlice = PrismicSlice<IframeNonRepeatable, null, 'iframe'>;

const Iframe: React.FunctionComponent<IframeNonRepeatable> = props => {
  const title = oc(props).iframe_title();
  const link = oc(props).iframe_link();

  if (!link) {
    throw new Error('No link');
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <StyledIframe src={link.url} title={title} />
    </Wrapper>
  )
};

export default Iframe;
