import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TablePaginationActions from 'components/TablePaginationActions'

// api import
import { getUserList } from "api/user";


const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function AdminManage() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [paginationParam, setPagination] = useState({
    page: 0,
    rowsPerPage: 5,
  });
  useEffect(() => {
    let pagination = {
      pageindex:paginationParam.page,
      pagesize:paginationParam.rowsPerPage,
    }
    getUserList(pagination).then(res => {
      setRows(res.data.list);
    });
    
  }, [paginationParam]);

  const emptyRows =
    paginationParam.rowsPerPage -
    Math.min(
      paginationParam.rowsPerPage,
      rows && rows.length - (paginationParam.page) * paginationParam.rowsPerPage
    );

  const handleChangePage = (e, newPage) => {
    setPagination({
      ...paginationParam,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (event) => {
    // setRowsPerPage(parseInt(event.target.value, 10));
    setPagination({
      ...paginationParam,
      rowsPerPage: parseInt(event.target.value, 10),
      page:0
    });
    
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 62 }} align="center">
              序号
            </TableCell>
            <TableCell align="left">用户名</TableCell>
            <TableCell align="left">姓名</TableCell>
            <TableCell align="left">权限</TableCell>
            <TableCell style={{ width: 128 }} align="center">
              操作
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center" component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.roles}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" className={classes.margin}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={rows && rows.length}
              rowsPerPage={paginationParam.rowsPerPage}
              page={paginationParam.page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
