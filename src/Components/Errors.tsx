import { List, ListItem, ListItemText } from "@mui/material";
import { errors } from "../assets/types/error_types";

export function Errors({ errors }: { errors: errors }) {
  return (
    <List>
      {errors.map((errorObj, index) => (
        <ListItem
          key={index}
          sx={{
            bgcolor: errorObj.severity === "warning" ? "#ffcc00" : "#ff1a1a",
          }}
        >
          <ListItemText>{`row: ${errorObj.row}, column: ${errorObj.column}, message: ${errorObj.message}`}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
