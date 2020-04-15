import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Input = ({placeholder, ...rest}) => {
    return (
        <TextInput 
            style={styles.input} 
            placeholder={placeholder} 
            placeholderTextColor={colors.default}
            {...rest}
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.default,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 14,
        color: colors.default
    }
})