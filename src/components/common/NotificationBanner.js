import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function NotificationBanner(props) {
  const { titleText, descriptionText, subtle, additionalClasses, dismissable } = props;
  const bannerStyle = {
    background: subtle
      ? "white"
      : "linear-gradient(to right, #8abf25, #b3d471)",
  };
  
  const [showing, setShowing] = React.useState(true);

  const handleDismiss = () => {
    setShowing(false);
  };

  return (
    <div
      className={`${showing ? '' : 'hidden'} w-[90%] mx-auto ${subtle ? 'text-grey shadow border-b-2' : 'text-white'} rounded-lg p-8 flex flex-col justify-center items-center` + " " + additionalClasses}
      style={bannerStyle}
    >
      <div className="w-[100%] flex justify-between">
        <div></div>
        <p className="text-lg font-bold leading-6">{titleText}</p>
        {dismissable ? <button onClick={handleDismiss}>
        <IoCloseOutline size={20} />
        </button> : <div></div>}
      </div>
      <p className="text-md leading-5 mt-6">{descriptionText}</p>
    </div>
  );
}

export default NotificationBanner;
