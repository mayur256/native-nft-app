// core lib
import { ReactElement } from 'react';
import { StatusBar } from 'react-native';

// navigation
import { useIsFocused } from '@react-navigation/core';

// props type definition
interface IProps {
    background: string
}

// Component definition
export default function FocusedStatusBar({ background }: IProps): ReactElement | null {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar backgroundColor={background} animated={true}  /> : null
}