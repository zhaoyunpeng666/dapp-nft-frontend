'use client'

// components/TableRow.js
import React from 'react';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import Image from 'next/image';

interface RowData {
  avatar: string;
  bidder: string;
  amount: string;
  time: string;
  transactionHash: string;
}

const TableRowComponent = ({ row }: { row: RowData }) => {
  return (
    <TableRow sx={{
      '& .MuiTableCell-root': {
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        height: '40px',
        color: 'rgba(0, 0, 0, 0.87)',
      }
    }}>
      <TableCell>
        <Box display="flex" alignItems="center">
          <Image src={row.avatar} alt="Avatar" width="24" height="24" style={{ borderRadius: '50%', marginRight: '8px' }} />
          <Typography>{row.bidder}</Typography>
        </Box>
      </TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>{row.time}</TableCell>
      <TableCell>{row.transactionHash}</TableCell>
    </TableRow>
  );
}

export default TableRowComponent;
