import { ComponentProps, FunctionComponent } from "react";

const Button: FunctionComponent<ComponentProps<"button">> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg border-[1px] border-black self-start transition-all duration-300 hover:bg-slate-100"
    >
      {children}
    </button>
  );
};

export default Button;
