// core lib
import { View, Text, SafeAreaView } from 'react-native';

// Component definition
export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
            <View>
                <Text>Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}