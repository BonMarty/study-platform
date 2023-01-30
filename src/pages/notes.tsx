import type { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Caption from '../components/ui/Caption/Caption';
import Heading from '../components/ui/Heading/Heading';
import Shape from '../components/ui/Shape/Shape';

const Notes: NextPage = () => {
  return (
    <Layout>
      <Caption title="Check all notes" />
      <section className="px-4 relative">
        <Shape />
      </section>
    </Layout>
  );
};

export default Notes;
