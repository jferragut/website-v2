import React from "react";
export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 5 19"
    fill="none"
  >
    <path
      d="M4.11458 19H5V16.6009H4.53125C3.97569 16.6009 3.68056 16.451 3.68056 15.2943V12.4239C3.68056 11.0101 3.45486 9.93912 2.17014 9.40361C3.45486 8.95378 3.69792 7.98985 3.69792 6.53326V3.57723C3.69792 2.54904 3.97569 2.35626 4.53125 2.35626H4.94792V0H4.0625C2.1875 0 1.23264 0.878242 1.23264 2.82751V6.29763C1.23264 7.56144 1.18056 8.28974 0 8.33258V10.4961C1.16319 10.5389 1.25 11.4386 1.25 12.6167V15.894C1.25 18.2074 2.06597 19 4.11458 19Z"
      fill={props.color}
    />
  </svg>
);