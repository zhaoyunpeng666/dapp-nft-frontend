import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NFTItem {
  id: number;
  title: string;
  creator: string;
  creatorAvatar?: string;
  description?: string;
  price: string;
  image: string;
  auctionType: 'english' | 'dutch' | 'fixed' | 'blind';
  auctionEndsIn?: string;
  fixedPrice?: boolean;
  category: string;
}

interface NFTCardProps {
  item: NFTItem;
}

export default function NFTCard({ item }: NFTCardProps) {
  const router = useRouter();

  const getAuctionTypeClass = (type: string) => {
    switch (type) {
      case 'english':
        return 'bg-[#e6f7e6] text-[#28a745]';
      case 'dutch':
        return 'bg-[#f7e6e6] text-[#dc3545]';
      case 'fixed':
        return 'bg-[#e6e6f7] text-[#6c63ff]';
      case 'blind':
        return 'bg-[#f7f7e6] text-[#ffc107]';
      default:
        return 'bg-[#e6e6f7] text-[#6c63ff]';
    }
  };

  const handleViewDetail = () => {
    router.push(`/nftDetail/${item.id}`);
  };

  return (
    <Box 
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      sx={{ 
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)'
        }
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <Box className="p-4">
        <Typography className="font-bold text-[#1a1a2e] mb-2" variant="subtitle1">
          {item.title}
        </Typography>
        <Box className="flex items-center mb-2">
          <Image
            src={item.creatorAvatar || "https://via.placeholder.com/30x30/1a1a2e/ffffff?text=C"}
            alt="创作者头像"
            width={25}
            height={25}
            className="rounded-full mr-2"
          />
          <Typography className="text-xs text-gray-500">
            由 {item.creator} 创作
          </Typography>
        </Box>
        <Box className="flex justify-between items-center mb-2">
          <Box>
            <Typography className="text-xs text-gray-400">
              {item.fixedPrice ? '当前价格' : '当前出价'}
            </Typography>
            <Typography className="font-bold text-[#6c63ff]">
              {item.price}
            </Typography>
          </Box>
          <Box 
            className={`px-2 py-1 rounded-full text-xs ${getAuctionTypeClass(item.auctionType)}`}
          >
            {item.auctionType === 'english' ? '英式' : 
             item.auctionType === 'dutch' ? '荷兰式' : 
             item.auctionType === 'fixed' ? '固定价' : '盲拍'}
          </Box>
        </Box>
        <Typography className="text-xs text-gray-500 mb-3">
          {item.fixedPrice ? '可立即购买' : item.auctionEndsIn}
        </Typography>
        <Box className="flex gap-2">
          <Button 
            variant="outlined" 
            className="flex-1"
            onClick={handleViewDetail}
            sx={{ 
              textTransform: 'none',
              color: '#6c63ff',
              borderColor: '#6c63ff',
              '&:hover': {
                borderColor: '#5a52d5',
                backgroundColor: 'rgba(108, 99, 255, 0.04)'
              }
            }}
          >
            查看
          </Button>
          <Button 
            variant="contained" 
            className="flex-1"
            onClick={handleViewDetail}
            sx={{ 
              textTransform: 'none',
              backgroundColor: '#6c63ff',
              '&:hover': {
                backgroundColor: '#5a52d5'
              }
            }}
          >
            {item.fixedPrice ? '购买' : '出价'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
} 