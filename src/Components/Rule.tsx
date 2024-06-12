import {  Card, Stack, Typography } from "@mui/material";
import { rule as ruleType } from "../assets/types/grammer_types";
import { Block } from "./Block";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function Rule({ rule }: { rule: ruleType }): JSX.Element {
  return (
    <Card>
      <Stack direction="row" spacing={2}>
        <Typography>{rule.variable.value}</Typography>
        <ArrowForwardIcon />
        <Stack direction="row" spacing={1}>
          {rule.rightSide.map((block) => (
            <Block block={block} />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
