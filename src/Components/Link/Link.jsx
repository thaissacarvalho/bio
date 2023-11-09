import PropTypes from 'prop-types';

Link.propTypes = {
  link: PropTypes.string,
  nameLink: PropTypes.string
}

export default function Link({ link, nameLink }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" 
      className="h-10 w-80 lg:h-14 bg-style-purple flex justify-center items-center text-2xl font-bold text-white 
      rounded-lg border-solid border-style-purple border-2 shadow-lg shadow-black hover:bg-style-turquoise hover:border-style-turquoise">
        {nameLink}
    </a>
  )
}
