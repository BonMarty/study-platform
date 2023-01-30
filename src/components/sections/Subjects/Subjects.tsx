import React from 'react';
import SubjectItem from '../../SubjectItem/SubjectItem';
import Heading from '../../ui/Heading/Heading';

const Subjects: React.FC = () => {
  return (
    <section className="px-4 py-12">
      <Heading title="Explore top subjects" position="center" />
      <ul className="mt-12 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
      </ul>
    </section>
  );
};

export default Subjects;
