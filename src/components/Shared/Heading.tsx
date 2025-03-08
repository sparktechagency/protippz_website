import React from 'react';

interface Props {
  headingText: string;
  subHeadingText?: string;
}

const Heading: React.FC<Props> = ({ headingText, subHeadingText }) => {
  return (
    <div className="text-center my-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[#053697]">
        {headingText}
      </h1>
      {subHeadingText && (
        <p className="text-green-500 text-lg">{subHeadingText}</p>
      )}
    </div>
  );
};

export default Heading;
