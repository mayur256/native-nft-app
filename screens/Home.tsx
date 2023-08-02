// core lib
import { ReactElement } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

// Common components
import { HomeHeader, NFTCard, FocusedStatusBar } from '../components';

// Utils
import { COLORS, NFTData } from '../constants';

// Component definition
export default function Home(): ReactElement {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }: any): ReactElement => <Text>{item.name}</Text>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}