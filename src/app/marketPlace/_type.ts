export type AuctionTypes = {
    blind: boolean;
    dutch: boolean;
    english: boolean;
    fixed_price: boolean;
}

export type ChainIdTypes = {
    ethereum: boolean;
    solana: boolean;
    polygon: boolean;
    binance: boolean;
}

export type CategoryTypes = {
    art?: boolean;
    music?: boolean;
    photography?: boolean;
    game_assets?: boolean;
    collectibles?: boolean;
    domain_name?: boolean;
    sport?: boolean;
    virtual_world?: boolean;
    other?: boolean;
}

export type PriceRangeTypes = {
    min?: string;
    max?: string;
    currency?: string;
}

export type FilterParamsType = {
    auctionTypes: AuctionTypes;
    chainIds: ChainIdTypes;
    categories?: CategoryTypes;
    priceRange: PriceRangeTypes;
}


