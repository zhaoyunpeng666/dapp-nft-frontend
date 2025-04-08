// app/profile/page.tsx
'use client'

import { Box, Container } from '@mui/material';
import { useState } from 'react';
// import Navbar from './components/Navbar';
import PageTitle from './_components/PageTitle';
import ProfileSidebar from './_components/ProfileSidebar';
import ProfileContent from './_components/ProfileContent';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('collections');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* <Navbar /> */}
      <PageTitle />
      <Box component="main" className="py-12">
        <Container className="min-h-screen">
          <Box className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <ProfileSidebar activeTab={activeTab} onTabChange={handleTabChange} />
            <ProfileContent activeTab={activeTab} />
          </Box>
        </Container>
      </Box>
    </>
  );
}