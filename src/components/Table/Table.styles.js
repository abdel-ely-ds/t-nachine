import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    border: "none",
    backgroundColor: "rgb(48, 13, 79)",
    fontSize: 20,
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({}));
