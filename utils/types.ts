export interface IBid {
    id: string;
    name: string;
    price: number;
    image: string;
    date: string;
}

export interface INft {
    id: string;
    name: string;
    creator: string;
    price: number,
    description: string,
    image: string,
    bids: Array<IBid>
}