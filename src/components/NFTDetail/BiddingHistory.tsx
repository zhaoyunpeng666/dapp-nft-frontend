'use client'

// components/BiddingHistory.js
import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableCell } from '@mui/material';
import TableRowComponent from './TableRow';
import { TableRow } from '@mui/material';

const BiddingHistory = () => {
  const biddingHistory = [
    {
      avatar: 'https://via.placeholder.com/30',
      bidder: 'CryptoWhale',
      amount: '2.5 ETH',
      time: '2小时前',
      transactionHash: '0x3f5...7e9d',
    },
    {
      avatar: 'https://via.placeholder.com/30',
      bidder: 'NFTCollector',
      amount: '2.3 ETH',
      time: '5小时前',
      transactionHash: '0x2d4...6c8b',
    },
    {
      avatar: 'https://via.placeholder.com/30',
      bidder: 'ArtLover',
      amount: '2.0 ETH',
      time: '8小时前',
      transactionHash: '0x1a2...3e4f',
    },
    {
      avatar: 'https://via.placeholder.com/30',
      bidder: 'DigitalInvestor',
      amount: '1.8 ETH',
      time: '12小时前',
      transactionHash: '0x9f8...7d6e',
    },
    {
      avatar: 'https://via.placeholder.com/30',
      bidder: 'CryptoEnthusiast',
      amount: '1.5 ETH',
      time: '1天前',
      transactionHash: '0x7c6...5a4b',
    },
  ];

  return (
    <TableContainer component="div" sx={{ borderRadius: '8px', overflow: 'hidden' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{
            '& .MuiTableCell-root': {
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                height: '40px',
                color: 'rgba(0, 0, 0, 0.87)'
            }
          }}>
            <TableCell>出价者</TableCell>
            <TableCell>出价金额</TableCell>
            <TableCell>时间</TableCell>
            <TableCell>交易哈希</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {biddingHistory.map((row, index) => (
            <TableRowComponent key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BiddingHistory;
