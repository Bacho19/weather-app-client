import React from "react";
import { LdsRing, LoaderWrapper } from "./styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <LdsRing>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LdsRing>
    </LoaderWrapper>
  );
};

export default Loader;
