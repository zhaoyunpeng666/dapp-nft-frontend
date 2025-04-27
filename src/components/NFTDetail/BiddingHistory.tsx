'use client'

// components/BiddingHistory.js
import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableCell } from '@mui/material';
import TableRowComponent from './TableRow';
import { TableRow } from '@mui/material';
import { AuctionDetailData } from '@/services/did/types';

const BiddingHistory = ({ nftData }: {nftData: AuctionDetailData}) => {

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
          {nftData.auction_bids.map((row, index) => (
            <TableRowComponent key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BiddingHistory;
