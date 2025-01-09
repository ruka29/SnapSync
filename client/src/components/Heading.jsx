import PropTypes from "prop-types";

export default function Heading({ children, textStyles }) {
  return (
    <div>
      <p className={textStyles}>{children}</p>
    </div>
  );
}

Heading.propTypes = {
  children: PropTypes.string,
  textStyles: PropTypes.string,
  headingStyles: PropTypes.string,
};
