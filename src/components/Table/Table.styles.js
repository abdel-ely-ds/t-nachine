import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    display: "inline-block",
    fontSize: "20px",
    padding: "10px",
    paddingLeft: "12px",
    backgroundColor: "rgb(48, 13, 79)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    paddingLeft: "12px",
    paddingRight: "12px",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({}));
