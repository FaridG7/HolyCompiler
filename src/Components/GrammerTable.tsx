import { List } from "@mui/material";
import { BNFGrammer } from "../assets/grammer";
import { Rule } from "./Rule";

export function GrammerTable(): JSX.Element {
  return (
    <>
      <List>
        {BNFGrammer.map((rule, index) => {
          return <Rule rule={rule} key={index} />;
        })}
      </List>
    </>
  );
}
