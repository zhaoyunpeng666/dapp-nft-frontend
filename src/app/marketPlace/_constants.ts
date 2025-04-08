interface NFT_LIST_DATA_INTERFACE {
    id: number
    imgUrl: string
    name: string
    createAuthor: string
    describe: string
    currentPrice: string
    endTime: string
}

export const NFT_LIST_DATA: NFT_LIST_DATA_INTERFACE[] = [
    {
        id: 1,
        imgUrl: 'https://example.com/nft1.jpg',
        name: '数字艺术作品1',
        createAuthor: '艺术家A',
        describe: '这是一幅美丽的数字艺术作品，展示了未来世界的景象。',
        currentPrice: '0.5 ETH',
        endTime: '2023-12-31T23:59:59Z',
    },
    {
        id: 2,
        imgUrl: 'https://example.com/nft2.jpg',
        name: '像素角色2',
        createAuthor: '艺术家B',
        describe: '一个可爱的角色，以像素风格呈现，适合用于游戏和动画。',
        currentPrice: '1.2 ETH',
        endTime: '2023-11-15T18:00:00Z',
    },
    {
        id: 3,
        imgUrl: 'https://example.com/nft3.jpg',
        name: '虚拟土地3',
        createAuthor: '土地所有者C',
        describe: '位于虚拟世界的宝贵土地，可用于建设或投资。',
        currentPrice: '3.0 ETH',
        endTime: '2023-10-20T23:59:59Z',
    },
    {
        id: 4,
        imgUrl: 'https://example.com/nft4.jpg',
        name: '音乐作品4',
        createAuthor: '音乐家D',
        describe: '一首独特的音乐作品，包含在区块链上的唯一凭证。',
        currentPrice: '0.8 ETH',
        endTime: '2023-09-30T20:00:00Z',
    }
];
