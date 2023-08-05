// core lib
import { ReactElement } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

// utils
import { COLORS, FONTS, SHADOWS, SIZES } from '../../utils';

// props type definition
interface IProps {
    minWidth: number;
    fontSize: any;
    onPress: () => void;
}

// Component definition
export function RectButton({
    minWidth,
    fontSize,
    onPress,
    ...rest
}: IProps): ReactElement {
    return (
        <Pressable
            style={[styles.container, { minWidth, ...rest }]}
            onPress={onPress}
        >
            <Text style={[styles.btnText, { fontSize }]}>Place a bid</Text>
        </Pressable>
    )
}

// style definition
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small
    },
    btnText: {
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: 'center'
    }
});
