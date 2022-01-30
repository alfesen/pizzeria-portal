import React from 'react';
import styles from './Tables.module.scss';
import {Link, NavLink} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {
    hour: '8:00 - 10:00',
    tables: [
      {table: 1, status: 'free', bookingId: null},
      {table: 2, status: 'booked', bookingId: '1'},
      {table: 3, status: 'event', bookingId: '2'},
    ],
  },
  {
    hour: '10:00 - 12:00',
    tables: [
      {table: 1, status: 'event', bookingId: '3'},
      {table: 2, status: 'booked', bookingId: '4'},
      {table: 3, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '10:00 - 12:00',
    tables: [
      {table: 1, status: 'booked', bookingId: '5'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'event', bookingId: '6'},
    ],
  },
];

const renderActions = (status, table) => {
  switch(status) {
    case 'free':
      return(
        <>
          <Button to={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NavLink}>New Booking</Button>
        </>
      );
    case 'booked':
      return (
        <Button to={`${process.env.PUBLIC_URL}/tables/booking/${table.bookingId}`} component={NavLink}>{table.status}</Button>
      );
    case 'event':
      return (
        <Button to={`${process.env.PUBLIC_URL}/tables/events/${table.bookingId}`} component={NavLink}>{table.status}</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div>
    <div className={styles.component}>
      <h2>Tables</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking ID</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Event ID</Link>
    </div>

    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map((row) => {
            return (
              <TableRow key={row.hour}>
                <TableCell className={styles.hour}>{row.hour}</TableCell>
                {row.tables.map((table) => {
                  return (
                    <TableCell className={styles.book} key={table.id}>
                      {renderActions(table.status, table)}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>



);

export default Tables;
