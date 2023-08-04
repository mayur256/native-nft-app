import { ImageSourcePropType } from "react-native/types";

export interface IBid {
    id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    date: string;
}

export interface INft {
    id: string;
    name: string;
    creator: string;
    price: number,
    description: string,
    image: ImageSourcePropType,
    bids: Array<IBid>
}