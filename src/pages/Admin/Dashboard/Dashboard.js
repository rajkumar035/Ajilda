import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "Product", label: "Product", minWidth: 100 },
  {
    id: "Quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Price",
    label: "Price",
    minWidth: 130,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "OrderID",
    label: "Order ID",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Contact",
    label: "Contact",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
];

function createData(name, Product, Quantity, Price, OrderID, Contact, Status) {
  return { name, Product, Quantity, Price, OrderID, Contact, Status };
}

const rows = [
  createData("Ajay", "Goat milk soap", 3, 100, 32872643, 9367517948, "Delivered"),
  createData("Raj kumar", "Face care routine", 2, 200, 9234596961, 8098312219, "In Process"),
  createData("Ajay", "Goat milk soap", 1, 100, 287263, 9367517948, "Dispatched"),
  createData("Raj kumar", "Face care routine", 2, 200, 9596961, 8098312219, "In Process"),
  createData("Ajay", "Goat milk soap", 3, 100, 3487263, 9367517948, "In Process"),
  createData("Raj kumar", "Face care routine", 2, 200, 923596961, 8098312219, "Dispatched"),
  createData("Ajay", "Goat milk soap", 1, 100, 3234387263, 9367517948, "Delivered"),
];

export default function Dashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [statuses, setStatuses] = React.useState(rows.map((row) => row.Status));
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleStatusChange = (index) => (event) => {
    // const newStatuses = [...statuses];
    // newStatuses[index] = event.target.value;
    // setStatuses(newStatuses);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.Product.toLowerCase().includes(search.toLowerCase()) ||
      row.OrderID.toString().includes(search) ||
      row.Contact.toString().includes(search);

    const matchesStatus =
      statusFilter === "All" || row.Status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ padding: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" component="div">
          Order Details
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
          />
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={handleStatusFilterChange}
              label="Status"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="In Process">In Process</MenuItem>
              <MenuItem value="Dispatched">Dispatched</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "Status" ? (
                          <FormControl fullWidth>
                            <InputLabel id={`select-label-${rowIndex}`}>Status</InputLabel>
                            <Select labelId={`select-label-${rowIndex}`} id={`select-${rowIndex}`} value={statuses[rowIndex]} label="Status" onChange={handleStatusChange(rowIndex)}>
                              <MenuItem value={"Delivered"}>Delivered</MenuItem>
                              <MenuItem value={"In Process"}>In Process</MenuItem>
                              <MenuItem value={"Dispatched"}>Dispatched</MenuItem>
                            </Select>
                          </FormControl>
                        ) : column.format && typeof value === "number" ? (
                          column.format(value)
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={filteredRows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
    </Paper>
  );
}
