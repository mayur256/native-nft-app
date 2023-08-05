// core lib
import { ReactElement } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

// utils
import { assets, COLORS, FONTS, SIZES } from "../../utils";

// props type definition
type IProps = {
    price: number
}

// component definition
export const EtheriumPrice = ({ price = 0 }: IProps): ReactElement => {
    return (
        <View style={styles.container}>
            <Image
                source={assets.eth}
                resizeMode='contain'
                style={styles.currencyIcon}
            />
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}

// style definition
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencyIcon: {
        width: 20,
        height: 20,
        marginRight: 2
    },
    price: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
    }
})