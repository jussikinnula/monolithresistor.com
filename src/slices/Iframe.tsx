import React from 'react';
import { down, only, up } from 'styled-breakpoints';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import { Theme } from '../theme';
import { PrismicSlice, PrismicKeyText, PrismicWebLink } from '../prismic';
import Wrapper from '../components/Wrapper';

interface IframeNonRepeatable {
  iframe_title: PrismicKeyText;
  iframe_link: PrismicWebLink;
  iframe_full_width: boolean;
  iframe_height?: number;
}

const Title = styled.h3<{ theme: Theme }>`
  margin: 0;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.accentDark};
  padding: 5px 10px;
`;

const TitleContentWrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  ${down('xs')} {
    padding: 0 ${props => props.theme.padding.xs};
  }

  ${only('sm')} {
    padding: 0 ${props => props.theme.padding.sm};
  }

  ${only('md')} {
    padding: 0 ${props => props.theme.padding.md};
  }

  ${only('lg')} {
    padding: 0 ${props => props.theme.padding.lg};
  }

  ${up('lg')} {
    padding: 0 ${props => props.theme.padding.xl};
  }
`;

const FullWidthIframeWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

const FullWidthIframe = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;


const NormalIframe = styled.iframe<{ height: number }>`
  width: 100%;
  height: ${props => props.height}px;
  border: 0;
`;

export type IframeSlice = PrismicSlice<IframeNonRepeatable, null, 'iframe'>;

const Iframe: React.FunctionComponent<IframeNonRepeatable> = props => {
  const title = oc(props).iframe_title();
  const link = oc(props).iframe_link();
  const fullWidth = oc(props).iframe_full_width();
  const height = oc(props).iframe_height(250);

  if (!link) {
    throw new Error('No link');
  }

  if (fullWidth) {
    return (
      <>
        <Title>
          <TitleContentWrapper>{title}</TitleContentWrapper>
        </Title>
        <FullWidthIframeWrapper>
          <FullWidthIframe src={link.url} title={title} />
        </FullWidthIframeWrapper>
      </>
    );
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <NormalIframe src={link.url} title={title} height={height} />
    </Wrapper>
  )
};

export default Iframe;
