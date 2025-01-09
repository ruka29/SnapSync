import AlbumGrid from "./AlbumGrid";
import Heading from "./Heading";
import PropTypes from "prop-types";

export default function LocalTab({ tabTitle, tabStyles }) {
  return (
    <div className={tabStyles}>
      <Heading textStyles={`font-poppins font-medium text-[25px]`}>
        {tabTitle}
      </Heading>
      <AlbumGrid />
    </div>
  );
}

LocalTab.propTypes = {
  tabTitle: PropTypes.string,
  tabStyles: PropTypes.string,
};
