import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import { PrismicSlice, PrismicKeyText, PrismicRichText } from '../prismic';
import Wrapper from '../components/Wrapper';

const Heading = styled.h2`
`;

const Text = styled.div`
`;

interface HeadingAndTextNonRepeatable {
  heading: PrismicKeyText;
  text: PrismicRichText;
}

export type HeadingAndTextSlice = PrismicSlice<HeadingAndTextNonRepeatable, null, 'heading_and_text'>;

const HeadingAndText: React.FunctionComponent<HeadingAndTextNonRepeatable> = props => {
  const heading = oc(props).heading();
  const text = oc(props).text();

  if (!heading) {
    throw new Error('No heading');
  }

  if (!text) {
    throw new Error('No text');
  }

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <Text>{RichText.render(text)}</Text>
    </Wrapper>
  )
};

export default HeadingAndText;
