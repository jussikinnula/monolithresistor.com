import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import Layout from '../components/Layout';
import { PrismicDocumentByUid } from '../prismic';
import theme from '../theme';
import { PageDocument, PageFragment } from '../fragments/PageFragment';
import { QueryComponent } from '../common';
import Hero from '../components/Hero';
import SliceZone from '../components/SliceZone';

export const query = graphql`
  query PageQuery($uid: String!) {
    prismic {
      page(uid: $uid, lang: "en-gb") {
        ...PageFragment
      }
    }
  }
`;

interface PageProps {
  data: PrismicDocumentByUid<{ page: PageDocument }>
}

const Page: QueryComponent<PageProps> = props => {
  const page = oc(props).data.prismic.page();
  const title = oc(page).title();
  const titleStyle = oc(page).title_style();
  const description = oc(page).description();
  const image = oc(page).image();
  const slices = oc(page).body();

  const data = { title, description, image };

  return (
    <Layout {...data}>
      <Hero theme={theme} titleStyle={titleStyle} {...data} />
      <SliceZone slices={slices} />
    </Layout>
  );
};

Page.query = query;
Page.fragments = [PageFragment];

export default Page;
