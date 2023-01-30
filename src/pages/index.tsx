import type { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Advantages from '../components/sections/Advantages/Advantages';
import Feature from '../components/sections/Feature/Feature';
import Hero from '../components/sections/Hero/Hero';
import Subjects from '../components/sections/Subjects/Subjects';
import ScrollToTop from '../components/ui/ScrollToTop/ScrollToTop';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Feature />
      <Advantages />
      <Subjects />
      <ScrollToTop />
    </Layout>
  );
};

export default Home;
