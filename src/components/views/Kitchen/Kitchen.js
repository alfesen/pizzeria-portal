import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', status: 'delivered', order: 'pizza'},
  {id: '2', status: 'paid', order: 'Funky Fluid Triple Over & Oat OCTIPA'},
  {id: '3', status: 'ready', order: 'Bibimbap'},
  {id: '4', status: 'new', order: '555'},
  {id: '5', status: 'cancelled', order: null},
  {id: '6', status: 'in preparation', order: 'pizza'},
];

const renderActions = status => {
  switch(status) {
    case 'new':
      return(
        <>
          <Button>in preparation</Button>
        </>
      );
    case 'in preparation':
      return(
        <>
          <Button>ready</Button>
        </>
      );
    case 'ready':
      return(
        <>
          <Button>delivered</Button>
        </>
      );
    case 'delivered':
      return(
        <>
          <Button>paid</Button>
        </>
      );
    case 'cancelled':
      return <Button>cancelled</Button>;
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <div>
      <div className={styles.component}>
        <h2>Kitchen</h2>
      </div>

      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Current Status</TableCell>
              <TableCell>New status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.order}</TableCell>
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{renderActions(row.status)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Kitchen;
