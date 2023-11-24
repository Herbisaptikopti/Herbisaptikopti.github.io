import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsLight24: "font-light font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsMedium40: "font-medium font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsLight24WhiteA700: "font-light font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
