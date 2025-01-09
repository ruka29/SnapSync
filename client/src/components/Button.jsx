import PropTypes from "prop-types";

export default function Button({
  children,
  icon,
  handleClick,
  buttonStyles,
  iconStyles,
  textStyles,
}) {
  return (
    <button className={buttonStyles} onClick={handleClick}>
      <img src={`/${icon}`} alt="albums" className={iconStyles} />
      {children && <span className={textStyles}>{children}</span>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
  buttonStyles: PropTypes.string,
  iconStyles: PropTypes.string,
  textStyles: PropTypes.string,
};
