'use client'

// components/TableRow.js
import React from 'react';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import Image from 'next/image';

// interface RowData {
//   avatar: string;
//   bidder: string;
//   amount: string;
//   time: string;
//   transactionHash: string;
// }
interface RowData {
  bid_id: number;
  auction_id: number;
  bidder: string;
  bid_amount: number;
  transaction_hash: string;
  status: string;
  created_at: string;
  updated_at: string;
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
          <Image src={'-'} alt="Avatar" width="24" height="24" style={{ borderRadius: '50%', marginRight: '8px' }} />
          <Typography>{row.bidder}</Typography>
        </Box>
      </TableCell>
      <TableCell>{row.bid_amount}</TableCell>
      <TableCell>{row.updated_at}</TableCell>
      <TableCell>{row.transaction_hash}</TableCell>
    </TableRow>
  );
}

export default TableRowComponent;
