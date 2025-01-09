import Button from "./Button";
import { useState } from "react";
import PropTypes from "prop-types";

export default function SidePanel({ activeTab, setActiveTab }) {
  const [isCollapsed, setIsColapsed] = useState(false);

  function onAction(tabName) {
    setActiveTab(tabName);
  }

  function setCollaped() {
    setIsColapsed(!isCollapsed);
  }

  return (
    <div
      className={`flex flex-col h-full transition-width duration-500 ease-in-out ${
        isCollapsed ? "w-[70px]" : "w-[230px]"
      } p-[10px] mr-[10px] rounded-lg border border-[#E2E8F0]`}
    >
      <div className="flex flex-none items-center">
        <Button
          icon="collapse_icon.png"
          buttonStyles={`flex items-center font-poppins font-medium rounded-lg w-[40px] h-[40px] ml-[5px] cursor-pointer transition-colors duration-250 hover:bg-[#D1E4F8] text-[#1E293B]`}
          iconStyles="ml-[5px]"
          handleClick={() => setCollaped()}
        ></Button>
      </div>
      <div className="flex-1">
        <Button
          icon="album_icon.png"
          buttonStyles={`flex items-center font-poppins font-medium rounded-lg transition-[width] duration-300 ease-in-out ${
            isCollapsed ? "w-[50px]" : "w-[210px]"
          } h-[50px] cursor-pointer transition-colors duration-250 ${
            activeTab == "Local Albums" ? "bg-[#D1E4F8]" : "bg-[#FFFFFF]"
          } hover:bg-[#D1E4F8] text-[#1E293B] my-5`}
          iconStyles="ml-2.5"
          textStyles={`text-[17px] px-5 overflow-hidden whitespace-nowrap transition-all duration-250 ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
          handleClick={() => onAction("Local Albums")}
        >
          <span>Local Albums</span>
        </Button>
        <Button
          icon="googlephotos_icon.png"
          buttonStyles={`flex items-center font-poppins font-medium rounded-lg transition-[width] duration-300 ease-in-out ${
            isCollapsed ? "w-[50px]" : "w-[210px]"
          } h-[50px] cursor-pointer transition-colors duration-250 ${
            activeTab == "Google Photos" ? "bg-[#D1E4F8]" : "bg-[#FFFFFF]"
          } hover:bg-[#D1E4F8] text-[#1E293B] my-5`}
          iconStyles="ml-2.5"
          textStyles={`text-[17px] px-5 overflow-hidden whitespace-nowrap transition-all duration-250 ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
          handleClick={() => onAction("Google Photos")}
        >
          <span>Google Photos</span>
        </Button>
      </div>

      <div className="flex-none">
        <Button
          icon="settings_icon.png"
          buttonStyles={`flex items-center font-poppins font-medium rounded-lg transition-[width] duration-300 ease-in-out ${
            isCollapsed ? "w-[50px]" : "w-[210px]"
          } h-[50px] cursor-pointer transition-colors duration-250 ${
            activeTab == "Settings" ? "bg-[#D1E4F8]" : "bg-[#FFFFFF]"
          } hover:bg-[#D1E4F8] text-[#1E293B] my-5`}
          iconStyles="ml-2.5"
          textStyles={`text-[17px] px-5 overflow-hidden whitespace-nowrap transition-all duration-300 ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
          handleClick={() => onAction("Settings")}
        >
          <span>Settings</span>
        </Button>
        <Button
          icon="profile_icon.png"
          buttonStyles={`flex items-center font-poppins font-medium rounded-lg transition-[width] duration-300 ease-in-out ${
            isCollapsed ? "w-[50px]" : "w-[210px]"
          } h-[50px] cursor-pointer transition-colors duration-250 ${
            activeTab == "Profile" ? "bg-[#D1E4F8]" : "bg-[#FFFFFF]"
          } hover:bg-[#D1E4F8] text-[#1E293B] my-5`}
          iconStyles="ml-2.5"
          textStyles={`text-[17px] px-5 overflow-hidden whitespace-nowrap transition-all duration-300 ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
          handleClick={() => onAction("Profile")}
        >
          <span>Profile</span>
        </Button>
      </div>
    </div>
  );
}

SidePanel.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
}
