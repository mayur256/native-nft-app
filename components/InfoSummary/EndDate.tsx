// core lib
import { ReactElement } from "react";
import { StyleSheet, Text, View } from 'react-native';

// utils
import { COLORS, FONTS, SHADOWS, SIZES } from "../../utils";

// Component definition
export const EndDate = (): ReactElement => {
    return (
        <View style={styles.container}>
            <Text style={styles.dateGeneral}>Ending in</Text>
            <Text style={styles.date}>5h 45m</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
    },
    dateGeneral: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    date: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    }

})