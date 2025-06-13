import React, {useEffect} from 'react';
import {propagateProps} from "../../coreFunctions";

const Modal = (props) => {
  const {
    style = {},
    testLayout = false,
    isOpen,
    onClose,
    children,
    ...restProps
  } = props;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  if (!isOpen) return null;

  const defaultStyles = {
    zIndex: 9999,
    border: testLayout && "2px solid red",
    ...style,
  };

  return (
    <div className="position-absolute flex inset-0 p-5 bg-gray-700 bg-opacity-75 cursor-pointer" style={defaultStyles} onClick={onClose}>
      <div className="bg-white p-5 rounded-3 shadow-lg w-100 lg:w-75 mx-auto cursor-default" style={defaultStyles} onClick={handleContentClick}>
        {React.Children.map(children, (child) => propagateProps(child, { testLayout, style, ...restProps }))}
      </div>
    </div>
  );
};

export default Modal;
