import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import styled from 'styled-components';
import { Theme } from '../theme';
import Layout from '../components/Layout';
import { PrismicDocumentByUid } from '../prismic';
import { PageDocument, PageFragment } from '../fragments/PageFragment';
import { QueryComponent } from '../common';
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
  const slices = oc(page).body();

  return (
    <Layout>
      <SliceZone slices={slices} />
    </Layout>
  );
};

Page.query = query;
Page.fragments = [PageFragment];

export default Page;
