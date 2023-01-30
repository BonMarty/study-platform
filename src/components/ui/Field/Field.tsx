import React from 'react';

interface IProps {
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const Field: React.FC<IProps> = ({ type, value, onChange }) => {
  return (
    <div className="relative w-full group">
      <label
        className={`${
          value
            ? '-top-3 left-3 text-base text-blue-600'
            : 'top-3 left-4 group-focus-within:-top-3 group-focus-within:left-3 group-focus-within:text-base group-focus-within:text-blue-600'
        } absolute w-fit h-fit bg-white text-gray-500 px-1 rounded text-lg pointer-events-none transition-all duration-300 `}>
        Enter {type === 'text' ? 'message' : type}
      </label>
      {type === 'text' ? (
        <textarea
          value={value}
          onChange={onChange}
          className={`${
            value ? 'border-blue-600' : 'group-focus-within:border-blue-600'
          } p-3 h-64 resize-none border-2 text-lg rounded w-full transition-all duration-300 outline-none `}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={`${
            value ? 'border-blue-600' : 'group-focus-within:border-blue-600'
          } p-3 border-2 rounded w-full text-lg transition-all duration-300 outline-none `}
        />
      )}
    </div>
  );
};

export default Field;
