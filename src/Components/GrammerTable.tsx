import { List } from "@mui/material";
import { Grammer } from "../assets/grammer";
import { Rule } from "./Rule";

export function GrammerTable(): JSX.Element {
  return (
    <>
      <List>
        {Grammer.map((rule, index) => {
          return <Rule rule={rule} key={index} />;
        })}
      </List>
    </>
  );
}
