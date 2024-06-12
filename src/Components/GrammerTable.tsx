import { List, Typography } from "@mui/material";
import { Grammer } from "../assets/grammer";
import { Rule } from "./Rule";

export function GrammerTable(): JSX.Element {
  return (
    <>
      <Typography variant="h2">The Grammer:</Typography>
      <List>
        {Grammer.map((rule) => {
          return <Rule rule={rule} />;
        })}
      </List>
    </>
  );
}
