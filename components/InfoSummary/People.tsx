// core lib
import { ReactElement } from "react";
import { Text, View, StyleSheet, ImageSourcePropType } from 'react-native';

// Constituent components
import { NftImage } from "./NftImage";

// utils
import { SHADOWS, SIZES, FONTS, assets } from "../../utils";

// Component definition
export const People = (): ReactElement => {
    return (
        <View style={styles.container}>
            {[assets.person01, assets.person02, assets.person03].map((imageUrl: ImageSourcePropType, index): ReactElement => (
                <NftImage
                    key={`People-${index}`}
                    index={index}
                    imgSource={imageUrl}
                />
            ))}
        </View>
    )
}

// style definition
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})