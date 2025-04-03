'use client'

// components/TabBar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs } from '@mui/material';

const TabBar = ({ children, onChange }: { children: React.ReactNode, onChange: (event: React.SyntheticEvent, newValue: number) => void }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange?.(event, newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'gray.300' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
        aria-label="Tabs example"
      >
        {children}
      </Tabs>
    </Box>
  );
}

TabBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabBar;
