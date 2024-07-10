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
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import { getUserOrderDetails } from "../../../utils/services";

const styles = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  height: "80vh",
  overflow: "scroll",
};

const columns = [
  { id: "fullName", label: "Name", minWidth: 170 },
  { id: "productName", label: "Product", minWidth: 100 },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "orderId",
    label: "Order ID",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
];

export default function Dashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [statuses, setStatuses] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [rows, setRows] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  React.useEffect(() => {
    getUserOrderDetails().then((res) => {
      const updatedRows = res.map((row) => ({
        ...row,
        productName: row.cartDetails.orders[0].name,
        status: row.status || "ordered",
      }));
      setRows(updatedRows);
      setStatuses(updatedRows.map((row) => row.status));
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleStatusChange = (index) => (event) => {
    const newStatuses = [...statuses];
    newStatuses[index] = event.target.value;
    setStatuses(newStatuses);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleViewDetails = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const filteredRows = rows.filter((row) => {
    const matchesSearch = row.fullName.toLowerCase().includes(search.toLowerCase()) || row.productName.toLowerCase().includes(search.toLowerCase()) || row.orderId.toString().includes(search) || row.phoneNumber.toString().includes(search);

    const matchesStatus = statusFilter === "All" || row.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ padding: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" component="div">
          Order Details
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField label="Search" variant="outlined" value={search} onChange={handleSearchChange} />
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>Status</InputLabel>
            <Select value={statusFilter} onChange={handleStatusFilterChange} label="Status">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="In Process">In Process</MenuItem>
              <MenuItem value="Dispatched">Dispatched</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
              <MenuItem value="ordered">Ordered</MenuItem>
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
              <TableCell key="actions" align="center" style={{ minWidth: 100 }}>
                Actions
              </TableCell>
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
                        {column.format && typeof value === "number" ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  <TableCell key="actions" align="center">
                    <Button variant="contained" onClick={() => handleViewDetails(row)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={filteredRows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      {selectedRow && <OrderDetailsModal open={openModal} onClose={handleCloseModal} selectedRow={selectedRow} />}
    </Paper>
  );
}

// Modal component for displaying order details
function OrderDetailsModal({ open, onClose, selectedRow }) {
  if (!selectedRow) return null;
  console.log(selectedRow, "selectedRow Api Responce");
  return (
    <Modal
      aria-labelledby="order-details-modal"
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={styles}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" component="div">
            Order Details
          </Typography>
          <Button variant="contained" style={{padding:3}} onClick={onClose}>
            Close
          </Button>
        </Box>
        <Typography variant="body1">Order User Account UID: {selectedRow.uid}</Typography>
        <Typography variant="body1">Status: {selectedRow.status}</Typography>
        {selectedRow.status === "cancelled" && (
          <Typography variant="body2" color="error">
            Reason: {selectedRow.cancelled.reason}
          </Typography>
        )}
        <Divider sx={{ my: 2 }} />
        {selectedRow.cartDetails.orders.map((order, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="body1">Product: {order.name}</Typography>
            <Typography variant="body1">Quantity: {order.quantity}</Typography>
            <Typography variant="body1">Price: {order.price}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">Payment Mode: {selectedRow.cartDetails.paymentMode}</Typography>
        <Typography variant="body1">Subtotal: {selectedRow.cartDetails.subTotal}</Typography>
        <Typography variant="body1">Total: {selectedRow.cartDetails.total}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Billing Information
        </Typography>
        <Typography variant="body1">Name: {selectedRow.cartDetails.billingInformation.fullName}</Typography>
        <Typography variant="body1">Email: {selectedRow.cartDetails.billingInformation.email}</Typography>
        <Typography variant="body1">Phone: {selectedRow.cartDetails.billingInformation.phoneNumber}</Typography>
        <Typography variant="body1">Gender: {selectedRow.cartDetails.billingInformation.gender}</Typography>
        <Typography variant="body1">
          Address: {selectedRow.cartDetails.billingInformation.address1.details}, {selectedRow.cartDetails.billingInformation.address1.city}, {selectedRow.cartDetails.billingInformation.address1.state}, {selectedRow.cartDetails.billingInformation.address1.zipCode}, {selectedRow.cartDetails.billingInformation.address1.country}
        </Typography>
      </Box>
    </Modal>
  );
}
