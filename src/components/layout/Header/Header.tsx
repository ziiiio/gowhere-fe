import React, { ReactNode } from 'react';

import Toolbar from '@mui/material/Toolbar';
import SatelliteIcon from '@mui/icons-material/Satellite';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export type HeaderProps = {
  headerChildren?: ReactNode;
};

const Header = (props: HeaderProps) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <SatelliteIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ marginRight: '2rem', flexGrow: 1 }}
        >
          Locations
        </Typography>
        {props.headerChildren}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
