import { List, ListItem, ListItemText } from "@mui/material";

export type errorObj = {
  message: string;
  severity: "warning" | "critical";
  rowNumber: number;
  columnNumber: number;
};

export function Errors({ errors }: { errors: errorObj[] }) {
  return (
    <List>
      {errors.map((errorObj, index) => (
        <ListItem
          key={index}
          sx={{
            bgcolor: errorObj.severity === "warning" ? "#ffcc00" : "#ff1a1a",
          }}
        >
          <ListItemText>{errorObj.message}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
