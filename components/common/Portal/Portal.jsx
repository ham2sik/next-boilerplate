import reactDom from "react-dom";
import { useState, useEffect } from "react";

const Potal = ({ children, selector }) => {
  const [element, setElement] = useState(null);
  useEffect(() => {
    setElement(document.querySelector(selector));
  }, []);
  if (!element) {
    return null;
  }
  return reactDom.createPortal(children, element);
};

export default Potal;
