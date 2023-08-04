// core lib
import { ReactElement } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';

// Common components
import { HomeHeader, NFTCard, FocusedStatusBar } from '../components';

// Utils
import { COLORS, NFTData } from '../utils';
import { INft } from '../utils/types';

// Component definition
export default function Home(): ReactElement {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }: { item: INft }): ReactElement => <NFTCard data={item} />}
                        keyExtractor={(item: INft) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
            </View>

            {/** background view */}
            <View style={styles.backgroundContainer}>
                <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
        </SafeAreaView>
    )
}

// style definition
const styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1
    }
})