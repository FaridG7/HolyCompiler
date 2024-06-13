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

type selection = "Ex 1" | "Ex 2" | "Ex 3" | "Custom";

const examples = {
  "Ex 1": "Example 1",
  "Ex 2": "Example 2",
  "Ex 3": "Example 3",
  Custom: "",
};

export function TextInput({
  setTokentable,
  setParseErrors,
}: {
  setTokentable: React.Dispatch<React.SetStateAction<tokenTable | null>>;
  setParseErrors: React.Dispatch<React.SetStateAction<string[] | null>>;
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
          Ex 1
        </ToggleButton>
        <ToggleButton value="Ex 2" aria-label="centered" color="secondary">
          Ex 2
        </ToggleButton>
        <ToggleButton value="Ex 3" aria-label="right aligned" color="secondary">
          Ex 3
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
          const parserInstance = new parser(tokenTable);
          try {
            if (!tokenTable.some((token) => token.type === "invalid"))
              parserInstance.parse();
            else
              throw new Error(
                "Token Table should not contain invalid tokens to parse to begin"
              );
          } catch (error) {
            setParseErrors([(error as Error).message]);
          }
        }}
      >
        Check for Errors
      </Button>
    </Stack>
  );
}
