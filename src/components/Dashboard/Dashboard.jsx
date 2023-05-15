import React from 'react';
import { Grid } from '@mui/material';
import CreationButtons from './CreationButtons';
import styles from './Dashboard.module.css';
import AdministrationButtons from './AdministrationButtons';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>ADMINISTRADOR</h1>
      <Grid>
        <Grid>
          <CreationButtons />
        </Grid>
        <Grid>
          <AdministrationButtons />
        </Grid>
      </Grid>
    </div>
  );
}
