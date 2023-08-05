// core lib
import { ReactElement } from 'react';
import { View, StyleSheet, Image } from 'react-native';

// navigation
import { useNavigation } from '@react-navigation/native';

// Constituent components
import InfoSummary from '../InfoSummary';
import { CircleButton } from '../Button';
import { NftTitle } from '../NftTitle';
import { EtheriumPrice } from '../EtheriumPrice';
import { RectButton as BidButton } from '../Button/RectButton';

// utils
import { COLORS, SIZES, SHADOWS, assets } from '../../utils';
// types
import { INft } from '../../utils/types';

// props type definition
interface IProps {
    data: INft
}

// Component definition
export default function NFTCard({ data }: IProps): ReactElement {

    const navigation = useNavigation<any>();

    const onBidPress = () => {
        navigation.navigate('Details', { data });
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardImgContainer}>
                <Image
                    style={styles.cardImg}
                    source={data.image}
                    resizeMode='cover'
                />

                <CircleButton
                    imageUrl={assets.heart}
                    onPress={() => alert('I\'m pressed')}
                    right={10}
                    top={10}
                />
            </View>

            <InfoSummary />

            <View style={styles.titleContainer}>
                <NftTitle
                    title={data.name}
                    caption={data.creator}
                    titleSize={SIZES.large}
                    captionSize={SIZES.small}
                />

                <View style={styles.priceContainer}>
                    <EtheriumPrice price={data.price} />
                    <BidButton
                        minWidth={120}
                        fontSize={SIZES.font}
                        onPress={onBidPress}
                    />
                </View>
            </View>
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
    },
    titleContainer: {
        width: '100%',
        padding: SIZES.font
    },
    priceContainer: {
        marginTop: SIZES.font,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})