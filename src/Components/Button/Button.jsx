import PropTypes from 'prop-types';

Button.propTypes = {
    linkName: PropTypes.string,
    textName: PropTypes.string,
}

export default function Button({ linkName, textName }) {
    return (
        <a href={linkName} className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-10 transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-style-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-10 bg-style-purple border-style-purple border-2 group-hover:bg-style-purple"></span>
            <span className="relative text-white group-hover:text-white">
                {textName}
            </span>
        </a>
    )
}
