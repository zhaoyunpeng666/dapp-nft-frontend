'use client'

import { Box } from "@mui/material";

interface CustomPaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

export default function CustomPagination({ count, page, onChange }: CustomPaginationProps) {
  const pages = Array.from({ length: count }, (_, i) => i + 1);
  
  // 处理省略号逻辑
  const getVisiblePages = () => {
    if (count <= 7) return pages;
    
    if (page <= 3) {
      return [...pages.slice(0, 5), '...', count];
    }
    
    if (page >= count - 2) {
      return [1, '...', ...pages.slice(count - 5)];
    }
    
    return [1, '...', page - 1, page, page + 1, '...', count];
  };
  
  const visiblePages = getVisiblePages();
  
  return (
    <Box className="flex justify-center mt-8">
      {visiblePages.map((p, index) => (
        <Box
          key={index}
          className={`w-10 h-10 flex justify-center items-center border rounded mx-1 cursor-pointer ${
            p === page ? 'bg-[#6c63ff] text-white border-[#6c63ff]' : 'border-gray-200 hover:border-[#6c63ff] hover:text-[#6c63ff]'
          } ${p === '...' ? 'cursor-default hover:border-gray-200 hover:text-inherit' : ''}`}
          onClick={() => p !== '...' && onChange(p as number)}
        >
          {p}
        </Box>
      ))}
    </Box>
  );
} 