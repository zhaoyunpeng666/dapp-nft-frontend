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
import { useState, SyntheticEvent, useEffect } from "react";
import Image from "next/image";
import { ViewModule, ViewList } from "@mui/icons-material";
import FilterSidebar from "./_components/FilterSidebar";
import services from "@/services";
import { AuctionListParams } from "@/services/did/types";
import { toast } from "react-toastify";
import { FilterParamsType } from "./_type";

export default function MarketPlace() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortValue, setSortValue] = useState(""); // 排序
  const [activeCategory, setActiveCategory] = useState("all");
  // const [nftData, setNftData] = useState([]);

  // NFT数据
  const nftData = [
    {
      nft_id: 1,
      nft_name: "测试 NFT",
      nft_creator: "zhangsan",
      current_price: 15,
      auction_type: "english", // english dutch fixed_price blind
      auction_id: 1,
      category: "art",
      chain_id: 1,
      currency_symbol: "ETH",
      end_time: "2025-04-30T17:20:35+08:00",
      status: "pending",
      created_at: "2025-04-08T17:21:01+08:00",

      image:
        "https://via.placeholder.com/300x250/16213e/ffffff?text=Collectible",
    },
    // {
    //   id: 2,
    //   title: "像素猫咪 #103",
    //   creator: "PixelMaster",
    //   price: "1.8 ETH",
    //   image:
    //     "https://via.placeholder.com/300x250/16213e/ffffff?text=Collectible",
    //   auctionType: "fixed_price",
    //   fixedPrice: true,
    //   category: "collectibles",
    // },
    // {
    //   id: 3,
    //   title: "未来城市 #7",
    //   creator: "Future3D",
    //   price: "3.2 ETH",
    //   image: "https://via.placeholder.com/300x250/5a52d5/ffffff?text=3D+Model",
    //   auctionType: "dutch",
    //   auctionEndsIn: "价格每小时下降0.1 ETH",
    //   fixedPrice: false,
    //   category: "art",
    // },
    // {
    //   id: 4,
    //   title: "电子交响曲 #15",
    //   creator: "MusicMaker",
    //   price: "1.5 ETH",
    //   image: "https://via.placeholder.com/300x250/1a1a2e/ffffff?text=Music+NFT",
    //   auctionType: "blind",
    //   auctionEndsIn: "3天后结束",
    //   fixedPrice: false,
    //   category: "music",
    // },
    // {
    //   id: 5,
    //   title: "城市夜景 #12",
    //   creator: "PhotoArtist",
    //   price: "1.2 ETH",
    //   image:
    //     "https://via.placeholder.com/300x250/6c63ff/ffffff?text=Photography",
    //   auctionType: "english",
    //   auctionEndsIn: "2天后结束",
    //   fixedPrice: false,
    //   category: "photography",
    // },
    // {
    //   id: 6,
    //   title: "传奇武器 #28",
    //   creator: "GameDev",
    //   price: "0.8 ETH",
    //   image:
    //     "https://via.placeholder.com/300x250/16213e/ffffff?text=Game+Asset",
    //   auctionType: "fixed_price",
    //   fixedPrice: true,
    //   category: "game_assets",
    // },
  ];

  // 分类
  const categories = [
    { value: "all", label: "全部" },
    { value: "art", label: "艺术" },
    { value: "music", label: "音乐" },
    { value: "photography", label: "摄影" },
    { value: "game_assets", label: "游戏资产" },
    { value: "collectibles", label: "收藏品" },
  ];

  const fetchNftData = async () => {
    const params: AuctionListParams = {
      category: activeCategory,
      auction_type: "english",
      chain_id: "1",
      min_price: 0,
      max_price: 10,
      page: 1,
      page_size: 10,
    };
    const res = await services.did.getAuctionList(params);
    console.log("ZYP-dev 📍 page.tsx 📍 fetchNftData 📍 res:", res);
    if (res.code === 200) {
      // setNftData(res.data.result);
    } else {
      toast.error("获取NFT数据失败");
    }
  };

  useEffect(() => {
    fetchNftData();
  }, [activeCategory]);

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value);
  };

  const handleCategoryChange = (event: SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue);
  };

  const handleSidebarFilterChange = (params: FilterParamsType) => {
    console.log('ZYP-dev 📍 page.tsx 📍 handleSidebarFilterChange 📍 params:', params);
    // 将params中的auctionTypes、blockchains、categories、priceRange转换为AuctionListParams
    const auctionListParams: AuctionListParams = {
      category: params.categories.art ? "art" : "",
      auction_type: params.auctionTypes.english ? "english" : "",
      chain_id: params.blockchains.ethereum ? "1" : "",
      min_price: params.priceRange.min ? Number(params.priceRange.min) : 0,
      max_price: params.priceRange.max ? Number(params.priceRange.max) : 0,
      page: 1,
      page_size: 10,
    };
    console.log('ZYP-dev 📍 page.tsx 📍 handleSidebarFilterChange 📍 auctionListParams:', auctionListParams);
    // setActiveCategory(filter);
  };

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
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
                    <MenuItem value="">最新上架</MenuItem>
                    <MenuItem value="price-low">价格从低到高</MenuItem>
                    <MenuItem value="price-high">价格从高到低</MenuItem>
                    <MenuItem value="ending-soon">即将结束</MenuItem>
                    <MenuItem value="most-bids">出价最多</MenuItem>
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
              <Pagination
                count={5}
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
