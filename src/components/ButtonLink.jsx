import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = ({ url, text, padding = 'px-4 py-2' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={[
        'transition',
        'ease-in-out',
        'duration-300',
        padding,
        'rounded-md',
        'text-white',
        'border-2',
        'hover:bg-white',
        'hover:text-black',
        'hover:scale-110',
        'hover:-translate-y-1',
        'cursor-pointer',
      ].join(' ')}
    >
      {text}
    </a>
  );
};

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  padding: PropTypes.string,
};

ButtonLink.defaultProps = {
  padding: 'px-4 py-2',
};

export default ButtonLink;