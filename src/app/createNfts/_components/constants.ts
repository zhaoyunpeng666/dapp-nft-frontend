// 类别枚举
export enum Category {
  ART = 'art',
  MUSIC = 'music',
  PHOTOGRAPHY = 'photography',
  GAME_ASSETS = 'game_assets',
  COLLECTIBLES = 'collectibles',
  // DOMAIN_NAME = 'domain_name',
  // SPORTS = 'sport',
  // VIRTUAL_WORLD = 'virtual_world',
  // OTHER = 'other'
}

// english
// dutch
// fixed_price
// blind

// 区块链枚举
export enum Blockchain {
  ETHEREUM = 1,
  SOLANA = 2,
  // ETHEREUM_GOERLI = 5,
  BSC = 56,
  // OPTIMISM = 10,
  POLYGON = 137,
  // SEPOLIA = 11155111
}

// 类别菜单
export const CATEGORY_MENU: Record<Category, string> = {
  [Category.ART]: '艺术',
  [Category.MUSIC]: '音乐',
  [Category.PHOTOGRAPHY]: '摄影',
  [Category.GAME_ASSETS]: '游戏资产',
  [Category.COLLECTIBLES]: '收藏品',
  // [Category.DOMAIN_NAME]: '域名',
  // [Category.SPORTS]: '体育',
  // [Category.VIRTUAL_WORLD]: '虚拟世界',
  // [Category.OTHER]: '其他'
}

// 将CATEGORY_MENU转换成对象数组
export const CATEGORY_MENU_ARRAY = Object.entries(CATEGORY_MENU).map(([key, value]) => ({
  key,
  value
}));

// 区块链菜单
export const BLOCKCHAIN_MENU: Record<Blockchain, string> = {
  [Blockchain.ETHEREUM]: '以太坊(Ethereum)',
  [Blockchain.SOLANA]: '索拉纳(Solana)',
  // [Blockchain.ETHEREUM_GOERLI]: 'Ethereum Goerli',
  // [Blockchain.OPTIMISM]: 'Optimism',
  [Blockchain.POLYGON]: 'Polygon',
  // [Blockchain.SEPOLIA]: 'Ethereum Sepolia',
  [Blockchain.BSC]: '币安智能链(BSC)',
}

// 将BLOCKCHAIN_MENU转换成对象数组
export const BLOCKCHAIN_MENU_ARRAY = Object.entries(BLOCKCHAIN_MENU).map(([key, value]) => ({
  key,
  value
}));
