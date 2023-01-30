import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button/Button';
import Field from '../ui/Field/Field';

const ContactForm: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <form
      className={`${
        inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      } flex flex-col w-full transition-all duration-1000 sm:w-1/2 md:w-3/5 my-12 space-y-6`}
      ref={ref}>
      <Field type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <div className="flex flex-col md:flex-row gap-4">
        <Field type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Field type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="md:w-1/2 lg:w-1/3">
        <Button title="Send" />
      </div>
    </form>
  );
};

export default ContactForm;
