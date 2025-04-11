"use client";

import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  SelectChangeEvent,
  Button,
  Tabs,
  Tab,
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, SyntheticEvent, useEffect, useRef } from "react";
import Image from "next/image";
import { ViewModule, ViewList } from "@mui/icons-material";
import FilterSidebar from "./_components/FilterSidebar";
import services from "@/services";
import { AuctionListParams, AuctionListResponse } from "@/services/did/types";
import { toast } from "react-toastify";
import { FilterParamsType } from "./_type";

export default function MarketPlace() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortValue, setSortValue] = useState("updated_at"); // 排序
  const [activeCategory, setActiveCategory] = useState(""); // 分类
  const [nftData, setNftData] = useState<AuctionListResponse['data']['result']>([]); // NFT数据
  const [count, setCount] = useState(0); // 总页数
  const [total, setTotal] = useState(0); // 总条数
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageSize, setPageSize] = useState(10); // 每页条数
  const [page, setPage] = useState(1); // 当前页
  const auctionParamsRef = useRef<AuctionListParams>({
    filters: {
      category: activeCategory,
      auction_type: [],
      chain_id: [],
      min_price: 0,
      max_price: 0,
      order_by: sortValue,
      page: 1,
      page_size: pageSize,
    }
  });

  // 分类
  const categories = [
    { value: "", label: "全部" },
    { value: "art", label: "艺术" },
    { value: "music", label: "音乐" },
    { value: "photography", label: "摄影" },
    { value: "game_assets", label: "游戏资产" },
    { value: "collectibles", label: "收藏品" },
  ];

  const fetchNftData = async (auctionListParams: AuctionListParams) => {
    const res = await services.did.getAuctionList(auctionListParams);
    console.log("ZYP-dev 📍 page.tsx 📍 fetchNftData 📍 res:", res);
    if (res.code === 200) {
      setNftData(res.data.result || []);
      setTotal(res.data.count || 0);
      // Math.ceil天花板函数，向上取整
      setCount(Math.ceil(res.data.count / pageSize) || 0);
    } else {
      setNftData([]);
      setTotal(0);
      setCount(0);
      toast.error("获取NFT数据失败");
    }
  };

  useEffect(() => {
    const auctionListParams: AuctionListParams = {
      filters: {
        category: activeCategory,
        auction_type: [],
        chain_id: [],
        order_by: sortValue,
        page: 1,
        page_size: pageSize,
      }
    };
    fetchNftData(auctionListParams);
  }, []);

  // 切换排序
  const handleSortChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value);
    const auctionListParams = auctionParamsRef.current;
    auctionListParams.filters.order_by = event.target.value;
    fetchNftData(auctionListParams);
  };

  // 切换分类
  const handleCategoryChange = (event: SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue);
    const auctionListParams = auctionParamsRef.current;
    auctionListParams.filters.category = newValue;
    fetchNftData(auctionListParams);
  };

  // 应用筛选
  const handleSidebarFilterChange = (params: FilterParamsType) => {
    console.log('ZYP-dev 📍 page.tsx 📍 handleSidebarFilterChange 📍 params:', params);

    const BlockchainNameToId = {
      ethereum: 1,
      solana: 2,
      polygon: 137,
      binance: 56
    }

    // 生成一个通用的方法，将auctionTypes和chainIds转换为auction_type和chain_id
    const auction_type = Object.keys(params.auctionTypes).filter(key => params.auctionTypes[key as keyof typeof params.auctionTypes]);
    const chain_ids = Object.keys(params.chainIds).filter(key => params.chainIds[key as keyof typeof params.chainIds]);
    // 根据BlockchainNameToId将chain_id转换为[1,2,137,56]格式
    const chain_id = chain_ids.map(key => BlockchainNameToId[key as keyof typeof BlockchainNameToId]);

    // 将params中的auctionTypes、blockchains、categories、priceRange转换为AuctionListParams
    const auctionListParams: AuctionListParams = {
      filters: {
        category: activeCategory,
        auction_type,
        chain_id,
        min_price: params.priceRange.min ? Number(params.priceRange.min) : 0,
        max_price: params.priceRange.max ? Number(params.priceRange.max) : 0,
        order_by: sortValue,
        page: 1,
        page_size: pageSize,
      }
    };
    // 使用一个useRef对象缓存auctionListParams的值
    auctionParamsRef.current = auctionListParams;
    fetchNftData(auctionListParams);
  };

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
  };

  // 切换分页
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const auctionListParams = auctionParamsRef.current;
    auctionListParams.filters.page = value;
    fetchNftData(auctionListParams);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
      sx: {
        color: "black",
        "&.Mui-selected": {
          color: "#6c63ff",
        },
      },
    };
  }

  const getAuctionTypeClass = (type: string) => {
    switch (type) {
      case "english":
        return "bg-[#e6f7e6] text-[#28a745]";
      case "dutch":
        return "bg-[#f7e6e6] text-[#dc3545]";
      case "fixed_price":
        return "bg-[#e6e6f7] text-[#6c63ff]";
      case "blind":
        return "bg-[#f7f7e6] text-[#ffc107]";
      default:
        return "bg-[#e6e6f7] text-[#6c63ff]";
    }
  };

  return (
    <Box className="bg-[#f5f5f5] min-h-screen">
      {/* 页面标题 */}
      <Box
        className="flex flex-col items-center justify-center py-10"
        sx={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          color: "white",
        }}
      >
        <Typography variant="h4" className="text-center font-bold">
          NFT市场
        </Typography>
        <Typography variant="h6" className="text-center font-bold pt-2">
          探索、收藏和拍卖独特的数字艺术品和收藏品。
        </Typography>
      </Box>

      <Container maxWidth="lg" className="py-12">
        <Grid container spacing={4}>
          {/* 侧边栏 */}
          <Grid size={{ xs: 12, md: 3 }}>
            <FilterSidebar
              handleSidebarFilterChange={handleSidebarFilterChange}
            />
          </Grid>

          {/* 内容区域 */}
          <Grid size={{ xs: 12, md: 9 }}>
            {/* 内容头部 */}
            <Box className="flex justify-between items-center mb-5">
              <Typography
                variant="h6"
                className="text-xl font-semibold"
                sx={{ color: "#1a1a2e" }}
              >
                所有NFT
              </Typography>
              <Box className="flex items-center">
                {/* 排序下拉菜单 */}
                <Box className="mr-3">
                  <Select
                    value={sortValue}
                    onChange={handleSortChange}
                    size="small"
                    displayEmpty
                    sx={{
                      minWidth: 150,
                      fontSize: "14px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ddd",
                      },
                    }}
                  >
                    <MenuItem value="updated_at">最新上架</MenuItem>
                    <MenuItem value="low_to_high_price">价格从低到高</MenuItem>
                    <MenuItem value="high_to_low_price">价格从高到低</MenuItem>
                    <MenuItem value="end_time">即将结束</MenuItem>
                    <MenuItem value="bid_count">出价最多</MenuItem>
                  </Select>
                </Box>

                {/* 视图切换 */}
                <Box
                  className="border rounded overflow-hidden flex"
                  sx={{ borderColor: "#ddd" }}
                >
                  <Button
                    onClick={() => handleViewModeChange("grid")}
                    sx={{
                      borderRadius: 0,
                      minWidth: "40px",
                      backgroundColor:
                        viewMode === "grid" ? "#6c63ff" : "transparent",
                      color: viewMode === "grid" ? "white" : "black",
                      "&:hover": {
                        backgroundColor:
                          viewMode === "grid" ? "#6c63ff" : "#f5f5f5",
                      },
                    }}
                  >
                    <ViewModule fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => handleViewModeChange("list")}
                    sx={{
                      borderRadius: 0,
                      minWidth: "40px",
                      backgroundColor:
                        viewMode === "list" ? "#6c63ff" : "transparent",
                      color: viewMode === "list" ? "white" : "black",
                      "&:hover": {
                        backgroundColor:
                          viewMode === "list" ? "#6c63ff" : "#f5f5f5",
                      },
                    }}
                  >
                    <ViewList fontSize="small" />
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* 分类标签 */}
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
              <Tabs
                value={activeCategory}
                onChange={handleCategoryChange}
                textColor="inherit"
                indicatorColor="primary"
                sx={{
                  "& .MuiTab-root": {
                    color: "black",
                    textTransform: "none",
                    "&.Mui-selected": {
                      color: "#6c63ff",
                    },
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#6c63ff",
                  },
                }}
              >
                {categories.map((category, index) => (
                  <Tab
                    key={category.value}
                    label={category.label}
                    value={category.value}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            </Box>

            {/* NFT列表 - 网格视图 */}
            {viewMode === "grid" && (
              <Grid container spacing={3}>
                {nftData.map((item) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.nft_id}>
                    <Box
                      className="bg-white rounded-lg overflow-hidden shadow-lg"
                      sx={{
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.nft_name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Box className="p-4">
                        <Typography
                          className="font-bold text-[#1a1a2e] mb-2"
                          variant="subtitle1"
                        >
                          {item.nft_name}
                        </Typography>
                        <Box className="flex items-center mb-2">
                          <Image
                            src={`https://via.placeholder.com/30x30/1a1a2e/ffffff?text=${item.nft_creator.charAt(
                              0
                            )}`}
                            alt="创作者头像"
                            width={25}
                            height={25}
                            className="rounded-full mr-2"
                          />
                          <Typography className="text-xs text-gray-500">
                            由 {item.nft_creator} 创作
                          </Typography>
                        </Box>
                        <Box className="flex justify-between items-center mb-2">
                          <Box>
                            <Typography className="text-xs text-gray-400">
                              {item.auction_type === 'fixed_price' ? "当前价格" : "当前出价"}
                            </Typography>
                            <Typography className="font-bold text-[#6c63ff]">
                              {item.current_price + item.currency_symbol}
                            </Typography>
                          </Box>
                          <Box
                            className={`px-2 py-1 rounded-full text-xs ${getAuctionTypeClass(
                              item.auction_type
                            )}`}
                          >
                            {item.auction_type === "english"
                              ? "英式"
                              : item.auction_type === "dutch"
                              ? "荷兰式"
                              : item.auction_type === "fixed_price"
                              ? "固定价"
                              : "盲拍"}
                          </Box>
                        </Box>
                        <Typography className="text-xs text-gray-500 mb-3">
                          {item.auction_type === 'fixed_price' ? "可立即购买" : item.status === "pending" ? "待拍卖" : "已结束"}
                        </Typography>
                        <Box className="flex gap-2">
                          <Button
                            variant="outlined"
                            className="flex-1"
                            sx={{
                              textTransform: "none",
                              color: "#6c63ff",
                              borderColor: "#6c63ff",
                              "&:hover": {
                                borderColor: "#5a52d5",
                                backgroundColor: "rgba(108, 99, 255, 0.04)",
                              },
                            }}
                          >
                            查看
                          </Button>
                          <Button
                            variant="contained"
                            className="flex-1"
                            sx={{
                              textTransform: "none",
                              backgroundColor: "#6c63ff",
                              "&:hover": {
                                backgroundColor: "#5a52d5",
                              },
                            }}
                          >
                            {item.auction_type === 'fixed_price' ? "购买" : "出价"}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* NFT列表 - 列表视图 */}
            {viewMode === "list" && (
              <Box>
                {nftData.map((item) => (
                  <Box
                    key={item.nft_id}
                    className="flex bg-white rounded-lg overflow-hidden shadow-lg mb-4"
                    sx={{
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.nft_name}
                      width={200}
                      height={150}
                      className="object-cover h-[150px] w-[200px]"
                    />
                    <Box className="flex-1 p-4 flex flex-col justify-between">
                      <Box>
                        <Box className="flex justify-between items-start mb-2">
                          <Box>
                            <Typography
                              className="font-bold text-[#1a1a2e]"
                              variant="h6"
                            >
                              {item.nft_name}
                            </Typography>
                            <Box className="flex items-center">
                              <Image
                                src={`https://via.placeholder.com/30x30/1a1a2e/ffffff?text=${item.nft_creator.charAt(
                                  0
                                )}`}
                                alt="创作者头像"
                                width={25}
                                height={25}
                                className="rounded-full mr-2"
                              />
                              <Typography className="text-xs text-gray-500">
                                由 {item.nft_creator} 创作
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            className={`px-2 py-1 rounded-full text-xs ${getAuctionTypeClass(
                              item.auction_type
                            )}`}
                          >
                            {item.auction_type === "english"
                              ? "英式拍卖"
                              : item.auction_type === "dutch"
                              ? "荷兰式拍卖"
                              : item.auction_type === "fixed_price"
                              ? "固定价格"
                              : "盲拍"}
                          </Box>
                        </Box>
                      </Box>
                      <Box className="flex justify-between items-center">
                        <Box>
                          <Typography className="text-xs text-gray-400">
                            {item.auction_type === 'fixed_price' ? "当前价格" : "当前出价"}
                          </Typography>
                          <Typography className="font-bold text-[#6c63ff]">
                            {item.current_price + item.currency_symbol}
                          </Typography>
                          <Typography className="text-xs text-gray-500">
                            {item.auction_type === 'fixed_price'
                              ? "可立即购买"
                              : item.status === "pending"
                              ? "待拍卖"
                              : "已结束"}
                          </Typography>
                        </Box>
                        <Box className="flex gap-2">
                          <Button
                            variant="outlined"
                            sx={{
                              textTransform: "none",
                              color: "#6c63ff",
                              borderColor: "#6c63ff",
                              "&:hover": {
                                borderColor: "#5a52d5",
                                backgroundColor: "rgba(108, 99, 255, 0.04)",
                              },
                            }}
                          >
                            查看
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              backgroundColor: "#6c63ff",
                              "&:hover": {
                                backgroundColor: "#5a52d5",
                              },
                            }}
                          >
                            {item.auction_type === 'fixed_price' ? "购买" : "出价"}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}

            {/* 分页 */}
            <Box className="flex justify-center mt-8">
              {total > 0 && (
                <Pagination
                  count={count} // 总页数
                  page={page} // 当前页
                  onChange={handlePageChange} // 切换分页
                  color="primary"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "#333",
                    },
                    "& .Mui-selected": {
                      backgroundColor: "#6c63ff !important",
                      color: "white",
                    },
                  }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
