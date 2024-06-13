import { List, ListItem, ListItemText } from "@mui/material";

export function Errors({ errors }: { errors: string[] }) {
  return (
    <List>
      {errors.map((error) => (
        <ListItem>
          <ListItemText>{error}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
