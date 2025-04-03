import { 
    // mainnet, 
    sepolia 
} from 'wagmi/chains';

// FACET的配置文件
const FACET_MAIN_CONFIG = {
  SCAN_URL: 'https://api.facet.org/',
  SCAN_FE_URL: 'https://facetscan.com',
  RECEIVE_ADDRESS: '0x00000000000000000000000000000000000FacE7',
  FETH_ADDRESS: '0x1673540243e793b0e77c038d4a88448eff524dce',
};

// const FACET_GOERLI_CONFIG = {
//   SCAN_URL: 'https://goerli-api.facet.org/',
//   SCAN_FE_URL: 'https://goerli.facetscan.com',
//   RECEIVE_ADDRESS: '0x00000000000000000000000000000000000FacE7',
//   FETH_ADDRESS: '0xcffc7fbd459d4c028163029d0db0fa26f44b0ed1',
// };

// 后端API服务的配置文件
// const SERVER_MAIN_CONFIG = {
//   BASE_URL: '/api',
//   CHAIN: [mainnet],
// };

const SERVER_GOERLI_CONFIG = {
  BASE_URL: process.env.NODE_ENV === 'development' ? '/api/v1' : 'http://fangchao1988.xicp.net/api/v1',
  CHAIN: [sepolia],
};

// 开启哪一个 配置
export const SERVER_CONFIG = SERVER_GOERLI_CONFIG; // SERVER_MAIN_CONFIG;
export const FACET_CONFIG = FACET_MAIN_CONFIG; // FACET_GOERLI_CONFIG;
