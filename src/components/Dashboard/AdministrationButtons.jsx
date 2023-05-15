import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import styles from './AdministrationButtons.module.css';

export default function AdministrationButtons() {
  const navigate = useNavigate();
  return (
    <>
      <Grid className={styles.container}>
        <div className='package-summary'>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <EventAvailableIcon sx={{ fontSize: 40, color: 'white' }} />
            </Grid>
            <Grid item>
              <Button className={`${styles.btn} ${styles.primary}`}>
                Movimientos/reservas
              </Button>
            </Grid>
          </Grid>
        </div>

        <div className='package-summary'>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <MailOutlineIcon sx={{ fontSize: 40, color: 'white' }} />
            </Grid>
            <Grid item>
              <Button
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => navigate('/adminMail')}
              >
                Mandar mails
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
