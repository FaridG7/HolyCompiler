import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { GrammerTable } from "./Components/GrammerTable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TokenTable } from "./Components/TokenTable";
import { TextInput } from "./Components/TextInput";
import { tokenTable } from "./assets/types/tokenTable_types";
import { useState } from "react";
import { Errors } from "./Components/Errors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
    },
    secondary: {
      main: "#7bfc03",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});
const to = "fsdujso weofjsj wf   fweiofj fwi9";
function App() {
  console.log(to.split(" "));
  const [tokenTable, setTokentable] = useState<null | tokenTable>(null);
  const [parseErrors, setParseErrors] = useState<null | string[]>(null);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "auto",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Stack direction="column" sx={{ height: "100vh" }}>
          <Stack direction="row" sx={{ margin: "auto" }}>
            <Typography
              variant="h1"
              fontSize={70}
              sx={{
                padding: "auto",
                width: "40vw",
                justifyContent: "center",
                display: "flex",
              }}
              color="secondary"
            >
              Holy Compiler
            </Typography>
            <TextInput
              setTokentable={setTokentable}
              setParseErrors={setParseErrors}
            />
          </Stack>
          <Stack direction="column">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Grammer
              </AccordionSummary>
              <AccordionDetails>
                <GrammerTable />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Token Table
              </AccordionSummary>
              <AccordionDetails>
                {tokenTable ? (
                  <TokenTable tokenTable={tokenTable} />
                ) : (
                  <Typography>This List is Empty</Typography>
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Parse Errors
              </AccordionSummary>
              <AccordionDetails>
                {parseErrors ? (
                  <Errors errors={parseErrors} />
                ) : (
                  <Typography>This List is Empty</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
