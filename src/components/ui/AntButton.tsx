import { Button } from "antd";
import type { ButtonProps } from "antd";

type Props = ButtonProps;

export default function AntButton(props: Props) {
  return <Button {...props} />;
}
