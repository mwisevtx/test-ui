import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonType = "default" | "primary";

type Props = PropsWithChildren & {
  type?: ButtonType;
};

const theme = {
  default: twMerge(
    "border-[#8c8c8c] text-[#262626] bg-white",
    "hover:border-[#0064d6] hover:text-[#0064d6] hover:bg-[#e6f6ff]",
  ),
  primary: twMerge(
    "text-white bg-[#0064d6] border-[#0064d6]",
    "hover:border-[#003970] hover:bg-[#003970]",
  ),
};

export default function Button(props: Props) {
  const { type = "default", children } = props;

  return (
    <button //
      className={twMerge(
        "inline-flex flex-nowrap items-center justify-center",
        "rounded-xs border-[.0625rem] border-solid",
        "px-[.9375rem] py-[.3125rem]",
        "text-sm font-semibold",
        "cursor-pointer shadow-[0_.125rem_.25rem_#00230b33]",
        theme[type],
      )}
    >
      {children}
    </button>
  );
}
