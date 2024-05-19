import React, { useState ,useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";

/*

  TODO: 아래 Loading 컴포넌트를 함수형 컴포넌트로 수정하고, `/spec/Loading.spec.js`에 테스트 내용을 보강하세요.

 */
export default function Loading({ text, speed }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((content) => content === text + "..." ? text : content + ".");
    }, speed);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <p className="content">
      {content}
    </p>
  );
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
