import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { token } from "../assets/types/tokenTable_types";

export function TokenTable({ tokenTable }: { tokenTable: token[] }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Row Number</TableCell>
            <TableCell>Column Number</TableCell>
            <TableCell>Block Number</TableCell>
            <TableCell>Outer Block Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokenTable.map((token, index) => (
            <TableRow
              key={index}
              sx={{ bgcolor: token.type === "invalid" ? "#eb4034" : "#34eb67" }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{token.rowNumber}</TableCell>
              <TableCell>{token.columnNumber}</TableCell>
              <TableCell>{token.blockNumber}</TableCell>
              <TableCell>{token.outerBlockNumber}</TableCell>
              <TableCell>{token.type}</TableCell>
              <TableCell>{token.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
