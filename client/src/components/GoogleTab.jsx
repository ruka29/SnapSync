import Heading from "./Heading";
import PropTypes from "prop-types";

export default function GoogleTab({ tabTitle, tabStyles }) {
  return (
    <div className={tabStyles}>
      <Heading textStyles={`font-poppins font-medium text-[25px]`}>
        {tabTitle}
      </Heading>
    </div>
  );
}

GoogleTab.propTypes = {
  tabTitle: PropTypes.string,
  tabStyles: PropTypes.string,
};