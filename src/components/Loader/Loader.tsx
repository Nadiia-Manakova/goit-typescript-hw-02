import React from "react";
import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height={80}
        width={80}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#5463cb", "blue", "white", "rgb(90, 75, 204)", "#5463cb"]}
      />
    </div>
  );
};
