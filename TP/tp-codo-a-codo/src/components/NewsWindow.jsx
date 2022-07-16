import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const NewsWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);

  useEffect(() => {
    const div = document.createElement("div");
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(props.url,);
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
    // eslint-disable-next-line
  }, [container]);

  return container && createPortal(props.children, container);
};

export {NewsWindow}
