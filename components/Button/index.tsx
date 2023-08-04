// core lib
import { ReactElement } from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageSourcePropType } from 'react-native';

// utils
import { COLORS, SHADOWS, SIZES } from '../../utils';

// props type definition
interface IProps {
    imageUrl: ImageSourcePropType;
    onPress: () => void;
    [prop: string]: any;
}

// Component definition
export function CircleButton({
    imageUrl,
    onPress,
    ...rest
}: IProps): ReactElement {
    return (
        <Pressable
            style={[styles.circleBtn, { ...rest }]}
            onPress={onPress}
        >
            <Image
                source={imageUrl}
                style={{ height: 24, width: 24 }}
            />
        </Pressable>
    )
}

// style definition
const styles = StyleSheet.create({
    circleBtn: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light
    }
})