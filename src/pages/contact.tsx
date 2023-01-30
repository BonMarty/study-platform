import type { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/ContactForm/ContactForm';
import Caption from '../components/ui/Caption/Caption';
import Heading from '../components/ui/Heading/Heading';
import ScrollToTop from '../components/ui/ScrollToTop/ScrollToTop';
import Shape from '../components/ui/Shape/Shape';
import Social from '../components/sections/Social/Social';
import { useInView } from 'react-intersection-observer';

const Contact: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Layout>
      <Caption title="Contact us" />
      <section className="relative px-4">
        <div
          className={`${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          } transition-all duration-1000 pt-32`}
          ref={ref}>
          <Heading title="Get in touch" position="left" />
        </div>
        <ContactForm />
        <Shape />
      </section>
      <Social />
      <ScrollToTop />
    </Layout>
  );
};

export default Contact;
