// 类别枚举
export enum Category {
  ART = 'art',
  MUSIC = 'music',
  VIDEO = 'video',
  PHOTOGRAPHY = 'photography'
}

// 区块链枚举
export enum Blockchain {
  ETHEREUM = 'Ethereum',
  POLYGON = 'Polygon',
  BSC = 'BSC'
}

// 类别菜单
export const CATEGORY_MENU: Record<Category, string> = {
  [Category.ART]: '艺术',
  [Category.MUSIC]: '音乐',
  [Category.VIDEO]: '视频',
  [Category.PHOTOGRAPHY]: '摄影'
}

// 区块链菜单
export const BLOCKCHAIN_MENU: Record<Blockchain, string> = {
  [Blockchain.ETHEREUM]: '以太坊(Ethereum)',
  [Blockchain.POLYGON]: 'Polygon',
  [Blockchain.BSC]: 'BSC'
}