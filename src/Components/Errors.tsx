import { List, ListItem, ListItemText } from "@mui/material";

export function Errors({ errors }: { errors: string[] }) {
  return (
    <List>
      {errors.map((error, index) => (
        <ListItem key={index}>
          <ListItemText>{error}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
