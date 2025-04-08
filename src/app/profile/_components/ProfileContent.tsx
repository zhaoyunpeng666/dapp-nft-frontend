import { Box } from '@mui/material';
import Collections from './tabs/Collections';
import Created from './tabs/Created';
import Auctions from './tabs/Auctions';
import Bids from './tabs/Bids';
import Transactions from './tabs/Transactions';
import Wallet from './tabs/Wallet';
import Settings from './tabs/Settings';

interface ProfileContentProps {
  activeTab: string;
}

export default function ProfileContent({ activeTab }: ProfileContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'collections':
        return <Collections />;
      case 'created':
        return <Created />;
      case 'auctions':
        return <Auctions />;
      case 'bids':
        return <Bids />;
      case 'transactions':
        return <Transactions />;
      case 'wallet':
        return <Wallet />;
      case 'settings':
        return <Settings />;
      default:
        return <Collections />;
    }
  };

  return (
    <Box className="bg-[#f9f9f9] rounded-lg p-8 shadow-lg">
      {renderContent()}
    </Box>
  );
} 