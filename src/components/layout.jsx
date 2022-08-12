import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from '../utils/snackbar.utils';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillInfoCircle } from 'react-icons/ai';
import { persistState } from '@datorama/akita';

persistState();

const Layout = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      iconVariant={{
        success: <AiFillCheckCircle color="inherit" style={{ marginRight: 10 }} />,
        error: <AiFillCloseCircle color="inherit" style={{ marginRight: 10 }} />,
        info: <AiFillInfoCircle color="inherit" style={{ marginRight: 10 }} />,
      }}
    >
      <div className="max-w-screen m-auto font-PoppinsRegular scroll-smooth text-[#191919]">
        {children}
      </div>
      <SnackbarUtilsConfigurator />
    </SnackbarProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
