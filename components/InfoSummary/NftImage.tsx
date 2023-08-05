// core lib
import { ReactElement } from "react";
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

// utils
import { SIZES } from "../../utils";

// props type definition
interface IProps {
    imgSource: ImageSourcePropType;
    index: number
}

// Component definition
export const NftImage = ({ imgSource, index }: IProps): ReactElement => {
    return (
        <Image
            source={imgSource}
            resizeMode="contain"
            style={[styles.container, { marginLeft: index === 0 ? 0 : -SIZES.font }]}
        />
    )
}

// style definition
const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
    }
})