// core lib
import { ReactElement, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Constituent components
import { EtheriumPrice } from '../EtheriumPrice';

// utils
import { INft } from '../../utils/types';
import { COLORS, FONTS, SIZES } from '../../utils';
import { NftTitle } from '../NftTitle';

// props type definition
interface IProps {
    data: INft
}

// Component definition
export default function DetailsDesc({ data }: IProps): ReactElement {

    // state definitions
    const [text, setText] = useState<string>(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState<boolean>(false);

    const handleTextToggle = () => {
        if (!readMore) {
            setText(data.description);
            setReadMore(true);
        } else {
            setText(data.description.slice(0, 100))
            setReadMore(false)
        }
    }

    return (
        <>
            <View style={styles.header}>
                <NftTitle
                    title={data.name}
                    caption={data.creator}
                    titleSize={SIZES.extraLarge}
                    captionSize={SIZES.font}
                />

                <EtheriumPrice price={data.price} />
            </View>
            
            <View style={{ marginTop: SIZES.base }}>
                <Text style={styles.descHeader}>Description</Text>
                <Text style={styles.description}>
                    {text}
                    {!readMore && '...'}

                    <Text
                        style={{ 
                            fontSize: SIZES.small,
                            fontFamily: FONTS.semiBold,
                            color: COLORS.primary
                        }}
                        onPress={handleTextToggle}
                    >
                        {readMore ? ' Show less' : ' Read more'}
                    </Text>
                </Text>
            </View>
        </>
    )
}

// style definition
const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descHeader: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    description: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large
    }
})