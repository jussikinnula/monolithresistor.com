import React from 'react';
import { oc } from 'ts-optchain';
import { PrismicSlice } from '../prismic';
import HeadingAndText from '../slices/HeadingAndText';
import Hero from '../slices/Hero';
import Iframe from '../slices/Iframe';

interface SliceZoneProps {
  slices?: PrismicSlice<any>[];
}

export default class SliceZone extends React.Component<SliceZoneProps> {
  public renderSlice = (slice: PrismicSlice<any>, index: number) => {
    const { type, primary } = slice;
    const key = `slice-${type}-${index}`;
    switch (type) {
      case 'heading_and_text': {
        return <HeadingAndText key={key} {...primary} />;
        break;
      }
      case 'hero': {
        return <Hero key={key} {...primary} />;
        break;
      }
      case 'iframe': {
        return <Iframe key={key} {...primary} />;
        break;
      }
      default:
        throw new Error(`Cannot handle slice type: "${type}"`);
    }
  }

  public render() {
    const { slices } = this.props;

    if (!slices) {
      return null;
    }

    return (
      <React.Fragment>
        {slices.map(this.renderSlice)}
      </React.Fragment>
    );
  }
}
