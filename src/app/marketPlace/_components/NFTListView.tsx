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

interface NFTListViewProps {
  item: NFTItem;
}

export default function NFTListView({ item }: NFTListViewProps) {
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
      className="flex bg-white rounded-lg overflow-hidden shadow-lg mb-4"
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
        width={200}
        height={150}
        className="object-cover h-[150px] w-[200px]"
      />
      <Box className="flex-1 p-4 flex flex-col justify-between">
        <Box>
          <Box className="flex justify-between items-start mb-2">
            <Box>
              <Typography className="font-bold text-[#1a1a2e]" variant="h6">
                {item.title}
              </Typography>
              <Box className="flex items-center">
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
            </Box>
            <Box 
              className={`px-2 py-1 rounded-full text-xs ${getAuctionTypeClass(item.auctionType)}`}
            >
              {item.auctionType === 'english' ? '英式拍卖' : 
               item.auctionType === 'dutch' ? '荷兰式拍卖' : 
               item.auctionType === 'fixed' ? '固定价格' : '盲拍'}
            </Box>
          </Box>
          {item.description && (
            <Typography className="text-sm text-gray-600 mb-3 line-clamp-2">
              {item.description}
            </Typography>
          )}
        </Box>
        <Box className="flex justify-between items-center">
          <Box>
            <Typography className="text-xs text-gray-400">
              {item.fixedPrice ? '当前价格' : '当前出价'}
            </Typography>
            <Typography className="font-bold text-[#6c63ff]">
              {item.price}
            </Typography>
            <Typography className="text-xs text-gray-500">
              {item.fixedPrice ? '可立即购买' : item.auctionEndsIn}
            </Typography>
          </Box>
          <Box className="flex gap-2">
            <Button 
              variant="outlined" 
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
    </Box>
  );
} 