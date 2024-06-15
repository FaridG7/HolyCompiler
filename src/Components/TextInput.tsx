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

type selection = "Ex 1" | "Ex 2" | "Ex 3" | "Ex 4" | "Ex 5" | "Ex 6" | "Custom";

const examples = {
  //Ex #1 => fail scanner, fail parsing, fail panic mode parsing
  "Ex 1": `program meow ;
var a , b : integer7
begin
a = 22 + 4 ;
b = a + 23a  ;
show b12 ;
end
abc`,
  //Ex #2 => fail scanner, fail parsing, fail panic mode parsing
  "Ex 2": `program abc;
variable a , b7 , c 4, d , e2g : integer 
beginend
a = 2asd 2 + 4ss ;
b = a + 23 ;
show (e );gg
end`,
  //Ex #3 => pass scanner, pass parsing, pass panic mode parsing
  "Ex 3": `program dada ;
var a , b : integer
begin
a = 22 + 4 ;
b = a + 23 ;
c = a + b ;
show ( c ) ; 
end`,
  //Ex #4 => pass scanner, fail parsing, pass panic mode parsing
  "Ex 4": `program dada ;
var a , b : integer
begin program
a = 22 + 4 ;
b = a + 23 ;
var c : integer
c = a + b ;
show ( c ) ; 
end`,
  //Ex #5 => fail scanner, fail parsing, fail panic mode parsing
  "Ex 5": `program abcde ;
var a , b , e , d : integer
begin
a = 22 + 0 ;
b = a + 1 ;
d = b + * 18 * e ;
e = 1 ;
var c : integer
c = d / 12 ;
show ( c c ) ; 
end end`,
  //Ex #6 => pass scanner, fail parsing, pass panic mode parsing
  "Ex 6": `program bad ;
var a , b , e , d : integer
begin
a = 22 + 40 : ;
b : ab = a + c + 1 ; aa
d = b * 18 * e ;
e = 1 ;
var c : integer
c = a + b ;
show ( c ) ; de
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
        <ToggleButton value="Ex 6" aria-label="right aligned" color="secondary">
          Ex #6
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
          setParseErrors(null);
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
            setParseErrors(null);
            const parserInstance = new parser(tokenTable);
            if (!tokenTable.some((token) => token.type === "invalid")) {
              parserInstance.panicModeParse();
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
