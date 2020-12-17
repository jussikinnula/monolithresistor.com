import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled from 'styled-components';
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

const HeadingAndText: React.FunctionComponent<HeadingAndTextNonRepeatable> = (props) => {
  const { heading, text } = props;

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
