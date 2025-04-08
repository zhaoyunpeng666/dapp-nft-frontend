import { Box, Typography, Button } from '@mui/material';

export default function Wallet() {
  const wallets = [
    {
      id: 1,
      name: '以太坊钱包',
      balance: '8.5 ETH',
      address: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
    },
    {
      id: 2,
      name: 'Solana钱包',
      balance: '15.2 SOL',
      address: '5Uj7qZ8XnRB9KuTjvhP2qH1XnJhmj6YdvK2HQHJmfQbS',
    },
  ];

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    alert('钱包地址已复制到剪贴板');
  };

  return (
    <>
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-[#1a1a2e]">
          钱包管理
        </Typography>
      </Box>

      {wallets.map((wallet) => (
        <Box key={wallet.id} className="bg-white rounded-lg p-6 mb-6">
          <Box className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="font-bold text-[#1a1a2e]">
              {wallet.name}
            </Typography>
            <Typography variant="h5" className="font-bold text-[#6c63ff]">
              {wallet.balance}
            </Typography>
          </Box>

          <Box className="flex items-center bg-gray-100 p-3 rounded mb-4">
            <Typography
              variant="body2"
              className="font-mono text-gray-600 break-all flex-grow"
            >
              {wallet.address}
            </Typography>
            <Button
              onClick={() => handleCopyAddress(wallet.address)}
              className="text-[#6c63ff] min-w-0 p-0 ml-2"
            >
              复制
            </Button>
          </Box>

          <Box className="flex gap-3">
            <Button variant="contained" className="bg-[#6c63ff] text-white">
              充值
            </Button>
            <Button variant="outlined" className="border-[#6c63ff] text-[#6c63ff]">
              提现
            </Button>
          </Box>
        </Box>
      ))}

      <Box className="bg-white rounded-lg p-6">
        <Typography variant="h6" className="font-bold text-[#1a1a2e] mb-4">
          连接新钱包
        </Typography>
        <Box className="flex gap-3">
          <Button variant="outlined" className="border-[#6c63ff] text-[#6c63ff]">
            连接MetaMask
          </Button>
          <Button variant="outlined" className="border-[#6c63ff] text-[#6c63ff]">
            连接Phantom
          </Button>
          <Button variant="outlined" className="border-[#6c63ff] text-[#6c63ff]">
            连接其他钱包
          </Button>
        </Box>
      </Box>
    </>
  );
} 