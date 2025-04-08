import { Box, Button, Typography, Theme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NFTItemProps {
  item: {
    id: number;
    name: string;
    createAuthor: string;
    describe: string;
    currentPrice: string;
    endTime: string;
    imgUrl: string;
  };
}

export default function NFTItem({ item }: NFTItemProps) {
  const router = useRouter();

  return (
    <Box
      className="flex items-center p-5 bg-white shadow-md rounded-lg relative"
      sx={{
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        borderRadius: '10px',
        '&:hover': {
          transform: 'translateY(-5px)',
          transition: 'transform 0.3s'
        }
      }}
    >
      <Box className="w-26 h-30 bg-gray-300 rounded-lg mr-4">
        <Image src={item.imgUrl} alt={item.name} width={104} height={120} />
      </Box>
      <Box className="flex-1">
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="caption">{item.createAuthor}</Typography>
        <Typography variant="body2">{item.describe}</Typography>
        <Typography variant="caption">当前出价</Typography>
        <Box sx={{ color: (theme: Theme) => theme.palette.violet.main, fontWeight: 'bold' }}>
          {item.currentPrice}
        </Box>
        <Typography variant="body2">{new Date(item.endTime).toLocaleString()}</Typography>
      </Box>
      <Button
        variant="contained"
        color="violet"
        onClick={() => {
          console.log('购买');
          router.push(`/nftDetail/?id=${item.id}`);
        }}
        sx={{
          position: 'absolute',
          right: '12px',
          bottom: '20px',
        }}
      >
        购买
      </Button>
    </Box>
  );
}