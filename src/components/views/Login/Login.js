import React from 'react';
import styles from './Login.module.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className={styles.component}>
        <h2>Log in</h2>
      </div>

      <div className={styles.component}>
        <Box component='form' sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
          <div>
            <TextField requiered  label='Login name' />
          </div>
          <div>
            <TextField requiered label='Password' type='password' />
          </div>
          <Button className={styles.submit} to={'/panel'} component={NavLink}>Submit</Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;
