// core lib
import { ReactElement } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

// utils
import { COLORS, FONTS, SIZES, assets } from '../../utils';

// props type definition
interface IProps {
    onChangeText: (text: string) => void
}

// Component definition
export default function HomeHeader({ onChangeText }: IProps): ReactElement {
    return (
        <View style={styles.container}>
            {/** Logo and Profile avatar */}
            <View style={styles.logoContainer}>
                <Image
                    source={assets.logo}
                    resizeMode='contain'
                    style={{ width: 90, height: 25 }}
                />
                
                {/** Profile avatar */}
                <View style={{ width: 45, height: 45 }}>
                    <Image
                        source={assets.person01}
                        resizeMode='contain'
                        style={{ width: '100%', height: '100%' }}
                    />

                    <Image
                        source={assets.badge}
                        resizeMode='contain'
                        style={styles.badge}
                    />
                </View>
            </View>

            {/** User name & caption*/}
            <View style={{ marginVertical: SIZES.font }}>
                <Text style={styles.userName}>Hello, Mayur 👋</Text>
                <Text style={styles.caption}>Let's find a masterpiece</Text>
            </View>

            {/** Search Elements */}
            <View style={{ marginTop: SIZES.font }}>
                <View style={styles.searchContainer}>
                    <Image
                        source={assets.search}
                        resizeMode='contain'
                        style={styles.searchImg}
                    />

                    <TextInput
                        placeholder='Search NFT'
                        style={{ flex: 1 }}
                        onChangeText={onChangeText}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    badge: {
        position: 'absolute',
        width: 20,
        height: 20,
        right: 0,
        bottom: 0
    },
    userName: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
    },
    caption: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        marginTop: SIZES.base / 2
    },
    searchContainer: {
        width: '100%',
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.font - 2
    },
    searchImg: {
        width: 20,
        height: 20,
        marginRight: SIZES.base
    }
})