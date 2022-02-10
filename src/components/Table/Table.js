import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableBody,
} from "./Table.styles";

const CustomizedTable = ({ rows }) => {
  return (
    <Paper>
      <TableContainer
        sx={{
          width: "100%",
          height: "100%",
          border: "solid",
          borderColor: "rgb(48, 13, 79)",
          borderWidth: "1px",
          borderRadius: "0",
          overflow: "auto",
          maxHeight: "70vh",
          marginBottom: "20px",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Results</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Average exposure time
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {rows.average_duration} Days
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Number of trades
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {rows.number_of_trades}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Win Rate
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {100 * rows.win_rate} %
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Average risk to reward
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {rows.profit_factor}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Return
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {100 * rows.return_pct} %
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Return of best trade
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {rows.best_trade} €
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Return of worst trade
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {rows.worst_trade} €
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Probability of 10 losing streaks
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {100 * rows.lost_10_streak} %
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Probability of 10 winning streaks
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {100 * rows.win_10_streak} %
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomizedTable;
