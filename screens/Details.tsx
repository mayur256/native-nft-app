// core lib
import { ReactElement } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

// Constituent Components
import { DetailsBid, DetailsHeader, FocusedStatusBar, RectButton } from '../components';
import InfoSummary from '../components/InfoSummary';

// utils
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../utils';

// props type definition
interface IProps {
    route: any;
    navigation: any
}

// Component definition
export default function Details({ route, navigation }: IProps): ReactElement {
    const { data } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                background='transparent'
                barStyle='dark-content'
                transluscent={true}
            />
            <View style={styles.placeBidBtnContainer}>
                <RectButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.light}
                />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item }: any) => <DetailsBid />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => (
                    <>
                        <DetailsHeader data={data} navigation={navigation} />
                        <InfoSummary />
                    </>
                )}
            />
        </SafeAreaView>
    )
}

// style definitions
const styles = StyleSheet.create({
    placeBidBtnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1
    }
})