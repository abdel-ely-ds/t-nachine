import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell, StyledTableRow } from "./Table.styles";

const CustomizedTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EntryTime</StyledTableCell>
            <StyledTableCell align="right">ExitTime</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">EntryPrice ($)</StyledTableCell>
            <StyledTableCell align="right">ExitPrice ($)</StyledTableCell>
            <StyledTableCell align="right">PnL ($)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.EntryTime}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ExitTime}</StyledTableCell>
              <StyledTableCell align="right">{row.Size}</StyledTableCell>
              <StyledTableCell align="right">{row.EntryPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.ExitPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.PnL}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTable;
