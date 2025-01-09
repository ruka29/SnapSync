import PropTypes from "prop-types";
import LocalTab from "./LocalTab";
import GoogleTab from "./GoogleTab";
import SettingsTab from "./SettingsTab";
import ProfileTab from "./ProfileTab";

export default function ActionPanel({ activeTab }) {
  const renderTab = () => {
    switch (activeTab) {
      case "Loacal Albums":
        return (
          <LocalTab tabTitle={activeTab} tabStyles={`ml-6 mt-4 mr-4 mb-2`} />
        );
      case "Google Photos":
        return (
          <GoogleTab tabTitle={activeTab} tabStyles={`ml-6 mt-4 mr-4 mb-2`} />
        );
      case "Settings":
        return (
          <SettingsTab tabTitle={activeTab} tabStyles={`ml-6 mt-4 mr-4 mb-2`} />
        );
      case "Profile":
        return (
          <ProfileTab tabTitle={activeTab} tabStyles={`ml-6 mt-4 mr-4 mb-2`} />
        );
      default:
        return (
          <LocalTab tabTitle={activeTab} tabStyles={`ml-6 mt-4 mr-4 mb-2`} />
        );
    }
  };

  return (
    <div className="flex flex-col h-full w-full p-[10px] rounded-lg border border-[#E2E8F0]">
      <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        {renderTab()}
      </div>
    </div>
  );
}

ActionPanel.propTypes = {
  activeTab: PropTypes.string,
};
