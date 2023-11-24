import React from "react";

import { Text } from "components";

const HomeLink = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-2xl md:text-[22px] text-amber-A400 sm:text-xl w-auto"
          size="txtPoppinsSemiBold24"
        >
          {props?.hometext}
        </Text>
        <Text
          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
          size="txtPoppinsMedium24"
        >
          {props?.portofoliotext}
        </Text>
        <Text
          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
          size="txtPoppinsMedium24"
        >
          {props?.blogtext}
        </Text>
        <Text
          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
          size="txtPoppinsMedium24"
        >
          {props?.contacttext}
        </Text>
      </div>
    </>
  );
};

HomeLink.defaultProps = {
  hometext: "Home",
  portofoliotext: "Portofolio",
  blogtext: "Blog",
  contacttext: "Contact",
};

export default HomeLink;
