// core lib
import { ReactElement } from "react";
import { StyleSheet, Text, View } from 'react-native';

// utils
import { COLORS, FONTS } from "../../utils";

// props type 
interface IProps {
    title: string;
    caption: string;
    titleSize: number;
    captionSize: number;
}

// Component definition
export const NftTitle = ({
    title,
    caption,
    titleSize,
    captionSize
}: IProps): ReactElement => {
    return (
        <View>
            <Text
                style={[styles.title, { fontSize: titleSize }]}
            >
                {title}
            </Text>

            <Text
                style={[styles.caption, { fontSize: captionSize }]}
            >
                {caption}
            </Text>
        </View>
    )
}

// style definition
const styles = StyleSheet.create({
    title: {
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    caption: {
        fontFamily: FONTS.regular,
        color: COLORS.primary
    }
});
