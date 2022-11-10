import classNames from "classnames";
import { forwardRef } from "react";

type TextFieldRef = HTMLInputElement;

interface Props {
  type?: string;
  fullWidth?: boolean;
  className?: string;
}

const TextField = forwardRef<
  TextFieldRef,
  Props & JSX.IntrinsicElements["input"]
>((props, ref) => {
  const { className, fullWidth, type, ...passThroughProps } = props;
  return (
    <input
      ref={ref}
      type={type}
      className={classNames(
        fullWidth && "w-full",
        "block w-full px-2 py-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
        className
      )}
      {...passThroughProps}
    />
  );
});

TextField.displayName = "TextField";

export default TextField;
