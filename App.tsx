// core lib
import { ReactElement } from 'react';

// Navigation-Stack
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

// fonts
import { useFonts } from 'expo-font';

// Screen
import Home from './screens/Home';
import Details from './screens/Details';

// create stack component
const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        background: 'transparent'
    }
}

// Component definition
export default function App(): ReactElement | null {
    const [loaded] = useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    })

    if (!loaded) return null;

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
