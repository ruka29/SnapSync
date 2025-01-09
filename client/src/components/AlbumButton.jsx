import PropTypes from "prop-types";

export default function AlbumButton({ title, icon, isAddButton }) {
  return (
    <div className="flex flex-col items-center space-y-2 cursor-pointer">
  <div
    className={`w-[15vw] h-[15vw] rounded-2xl flex items-center justify-center overflow-hidden ${
      isAddButton
        ? "bg-blue-100 hover:bg-blue-200"
        : "bg-gray-200 hover:bg-gray-300"
    } transition-colors duration-200`}
  >
    {isAddButton ? (
      <span className="text-3xl text-gray-600">+</span>
    ) : (
      <img 
        src={`/camera_temp.jpg`} 
        alt={title} 
        className="w-full h-full object-cover rounded-2xl"
      />
    )}
  </div>
  <span className="text-[20px] text-sm text-gray-800">
    {isAddButton ? `Add New Album` : title}
  </span>
</div>
  );
}

AlbumButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  isAddButton: PropTypes.bool,
};
