// 拍卖类型枚举
export enum AuctionType {
  ENGLISH = 1, // 英式拍卖
  DUTCH = 0,   // 荷兰式拍卖
  FIXED_PRICE = 2, // 固定价格
  BLIND = 3    // 盲拍
}
  
  // 拍卖类型菜单
  export const AUCTION_TYPE_MENU: Record<AuctionType, { title: string; description: string; icon: string }> = {
    [AuctionType.ENGLISH]: {
      title: '英式拍卖',
      description: '公开竞价，价高者得。拍卖期间价格逐渐上升，最终卖给出价最高的买家。',
      icon: '🔨'
    },
    [AuctionType.DUTCH]: {
      title: '荷兰式拍卖',
      description: '价格随时间递减，首个出价者成交。拍卖开始时价格较高，然后逐渐降低。',
      icon: '📉'
    },
    [AuctionType.FIXED_PRICE]: {
      title: '固定价格销售',
      description: '直接定价购买，无需等待拍卖结束。创作者设定固定价格，买家可立即购买。',
      icon: '💲'
    },
    [AuctionType.BLIND]: {
      title: '盲拍',
      description: '隐藏其他用户出价，仅显示最高价。保护买家隐私，减少价格操纵。',
      icon: '🕶️'
    }
  }
  
  // 默认拍卖持续时间选项（以天为单位）
  export const AUCTION_DURATION_OPTIONS = [
    { value: 1, label: '1天' },
    { value: 3, label: '3天' },
    { value: 7, label: '7天' },
    { value: 14, label: '14天' },
    { value: 30, label: '30天' },
  ];