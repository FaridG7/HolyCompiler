import { Typography } from "@mui/material";
import { terminalObject, variableObject } from "../assets/types/grammer_types";

export function Block({
  block,
}: {
  block:
    | terminalObject
    | variableObject
    | { value: "lambda"; type: "terminal" };
}): JSX.Element {
  return <Typography>{block.value}</Typography>;
}
