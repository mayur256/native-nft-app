// core lib
import { ReactElement } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

// constituent components
import { CircleButton } from '../Button';

// utils
import { IBid } from '../../utils/types';
import { assets } from '../../utils';

// props type definition
interface IProps {
    data: IBid;
    navigation: any
}

// Component definition
export default function DetailsHeader({ data, navigation }: IProps): ReactElement {
    return (
        <View style={styles.conatiner}>
            <Image
                source={data.image}
                resizeMode='cover'
                style={{ width: '100%', height: '100%' }}
            />

            <CircleButton
                imageUrl={assets.left}
                left={15}
                top={StatusBar.currentHeight ?? 0}
                onPress={() => navigation.goBack()}
            />

            <CircleButton
                imageUrl={assets.heart}
                right={15}
                top={StatusBar.currentHeight ?? 0}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

// style definition
const styles = StyleSheet.create({
    conatiner: {
        width: '100%',
        height: 373
    }
});