// core lib
import { ReactElement } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// utils
import { IBid } from '../../utils/types';
import { COLORS, FONTS, SIZES } from '../../utils';

// Component definition
export default function DetailsBid({ bid }: { bid: IBid }): ReactElement {
    return (
        <View style={styles.container}>
            <Image
                source={bid.image}
                resizeMode='contain'
                style={{ width: 48, height: 48 }}
            />

            <View>
                <Text style={styles.placedBy}> Bid placed by {bid.name}</Text>
                <Text style={styles.placedOn}>{bid.date}</Text>
            </View>
        </View>
    )
}

// style definition
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base
    },
    placedBy: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    placedOn: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 2,
        color: COLORS.secondary,
        marginTop: 3
    }
})