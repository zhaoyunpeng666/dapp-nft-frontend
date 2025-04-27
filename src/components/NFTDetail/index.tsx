'use client'

// pages/index.js
import React from 'react';
import TabBar from './TabBar';
import BiddingHistory from './BiddingHistory';
import { Tab } from '@mui/material';
import DetailCard from './DetailCard';
import { AuctionDetailData } from '@/services/did/types';

interface TabContentProps {
    value: 0 | 1 | 2; // value 只能是 0, 1, 或 2
  }

function TabContent({ value, nftData }: TabContentProps & { nftData: AuctionDetailData }) {
  switch (value) {
    case 0:
      return <BiddingHistory nftData={nftData} />;
    case 1:
      return <div>属性内容</div>;
    case 2:
      return <DetailCard nftData={nftData} />;
    default:
      return null;
  }
}

export default function Home({ nftData }: {nftData: AuctionDetailData}) {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

  return (
    <div className="p-4">
      <TabBar onChange={handleChange}>
        <Tab label="出价历史" />
        <Tab label="属性" />
        <Tab label="详情" />
      </TabBar>
      <div className="mt-4">
        <TabContent value={value as 0 | 1 | 2} nftData={nftData} />
      </div>
    </div>
  );
}
