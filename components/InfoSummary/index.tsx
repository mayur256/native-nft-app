// core lib
import { ReactElement } from "react";
import { Text, View, StyleSheet } from 'react-native';

// Constituent Components
import { People } from "./People";
import { EndDate } from "./EndDate";

// utils
import { SIZES } from "../../utils";

// component definition
export default function InfoSummary(): ReactElement {
    return (
        <View style={styles.container}>
            <People />
            <EndDate />
        </View>
    )
}

// style definitions
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})