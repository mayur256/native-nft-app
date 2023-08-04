// core lib
import { ReactElement } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// navigation
import { useNavigation } from '@react-navigation/native';

// utils
import { COLORS, SIZES, SHADOWS, assets } from '../../utils';
// types
import { INft } from '../../utils/types';
import { CircleButton } from '../Button';

// props type definition
interface IProps {
    data: INft
}

// Component definition
export default function NFTCard({ data }: IProps): ReactElement {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardImgContainer}>
                <Image
                    style={styles.cardImg}
                    source={data.image}
                    resizeMode='cover'
                />
            </View>
            <CircleButton
                imageUrl={assets.heart}
                onPress={() => alert('I\'m pressed')}
                right={10}
                top={10}
            />
        </View>
    )
}

// style definitions
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    cardImgContainer: {
        width: '100%',
        height: 250
    },
    cardImg: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font
    }
})