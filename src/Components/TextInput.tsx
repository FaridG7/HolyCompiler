import {
  Button,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { scanner } from "../scanner/scanner";
import { parser } from "../parser/parser";
import { useState } from "react";
import { tokenTable } from "../assets/types/tokenTable_types";
import { errors } from "../assets/types/error_types";

type selection = "Ex 1" | "Ex 2" | "Ex 3" | "Ex 4" | "Ex 5" | "Custom";

const examples = {
  //Ex #1 => should contain invalid tokens
  "Ex 1": `program meow ;
var a , b : integer7
begin
a = 22 + 4 ;
b = a + 23a  ;
show b12 ;
end
abc`,
  "Ex 2": `program abc ;
var a , b , c , d , e : integer
begin
a = 22 + 4 ;
b = a + 23 ;
show ( e ) ;
end`,

  "Ex 3": `pogram dada ;
var a , b : integer
begin
a = 22 + 0 ;
b = a + 23;
var c : integer
c = a + b ;
show ( c ) ; 
end`,
  "Ex 4": `program dada ;
var a , b , e , d : integer
begin
a = 22 + 0 ;
b = a + c + 1 ;
d = b * 18 * e ;
e = 1 ;
var c : integer
c = a + b ;
show ( c ) ; 
end`,
  "Ex 5": `program miow ;
var a , b , e , d : integer
begin
a = 22 + 0 ;
b = a + 1 ;
d = b * 18 * e ;
e = 1 ;
var c : integer
c = d / 12 ;
show ( c ) ; 
end`,
  Custom: "",
};

export function TextInput({
  setTokentable,
  setParseErrors,
  tokenTable,
}: {
  setTokentable: React.Dispatch<React.SetStateAction<tokenTable | null>>;
  setParseErrors: React.Dispatch<React.SetStateAction<errors | null>>;
  tokenTable: tokenTable | null;
}) {
  const [selection, setSelection] = useState<selection>("Ex 1");
  const [text, setText] = useState<string>(examples[selection]);

  const handleSelection = (
    event: React.MouseEvent<HTMLElement>,
    newSelection: selection
  ) => {
    setSelection(() => newSelection);
    setText(() => examples[newSelection]);
  };
  return (
    <Stack
      direction="column"
      sx={{ display: "flex", width: "55vw" }}
      spacing={2}
    >
      <ToggleButtonGroup
        value={selection}
        exclusive
        onChange={handleSelection}
        aria-label="Examples"
        sx={{
          margin: "auto",
          alignSelf: "center",
          color: "#ffffff",
          "& .MuiToggleButton-root": {
            color: (theme) => theme.palette.secondary.main,
            "&.Mui-selected": {
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          },
        }}
      >
        <ToggleButton value="Ex 1" aria-label="left aligned" color="secondary">
          Ex #1
        </ToggleButton>
        <ToggleButton value="Ex 2" aria-label="centered" color="secondary">
          Ex #2
        </ToggleButton>
        <ToggleButton value="Ex 3" aria-label="right aligned" color="secondary">
          Ex #3
        </ToggleButton>
        <ToggleButton value="Ex 4" aria-label="right aligned" color="secondary">
          Ex #4
        </ToggleButton>
        <ToggleButton value="Ex 5" aria-label="right aligned" color="secondary">
          Ex #5
        </ToggleButton>
        <ToggleButton
          value="Custom"
          aria-label="right aligned"
          color="secondary"
        >
          Custom
        </ToggleButton>
      </ToggleButtonGroup>
      <TextField
        variant="outlined"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        multiline
        disabled={selection != "Custom"}
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.text.primary,
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          const scannerInstance = new scanner(text);
          const tokenTable = scannerInstance.getTokenTable();
          setTokentable(tokenTable);
        }}
      >
        Generate Token Table
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          if (tokenTable) {
            const parserInstance = new parser(tokenTable);
            if (!tokenTable.some((token) => token.type === "invalid")) {
              parserInstance.parse();
              setParseErrors(parserInstance.errors);
            } else
              setParseErrors([
                {
                  message:
                    "Token Table should not contain invalid tokens to to begin Parsing",
                  severity: "critical",
                  row: 0,
                  column: 0,
                },
              ]);
          } else {
            alert("You have to generate the token table first!");
          }
        }}
      >
        Check for Parse Errors
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          if (tokenTable) {
            const parserInstance = new parser(tokenTable);
            if (!tokenTable.some((token) => token.type === "invalid")) {
              parserInstance.parse();
              setParseErrors(parserInstance.errors);
            } else
              setParseErrors([
                {
                  message:
                    "Token Table should not contain invalid tokens to to begin Parsing",
                  severity: "critical",
                  row: 0,
                  column: 0,
                },
              ]);
          } else {
            alert("You have to generate the token table first!");
          }
        }}
      >
        Check for Parse Errors with Panic Mode
      </Button>
    </Stack>
  );
}
