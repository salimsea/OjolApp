import React, { useState } from 'react';
import {View, Text ,Image, ScrollView} from 'react-native';
import { Input, Button } from '../../components';
import { colors } from '../../utils';
import { iconBack, IllustrationRegister } from '../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const sendData = () => {
        console.log('data yang dikirim:', form);
        //send axios
    }

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        })
    }
    return(
        <View style={styles.wrapper.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity>
                <Image source={iconBack} />
                </TouchableOpacity>
                <IllustrationRegister 
                    width={106} 
                    height={115} 
                    style={styles.illustration}
                />
                <Text style={styles.text.desc}>
                    Mohon Mengisi beberapa data untuk proses daftar anda
                </Text>
                <View style={styles.space(64)} />
                <Input 
                    placeholder="Nama Lengkap" 
                    value={form.fullName} 
                    onChangeText={(value) => onInputChange(value, 'fullName')} 
                />
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Email"
                    value={form.email} 
                    onChangeText={(value) => onInputChange(value, 'email')} 
                />
                <View style={styles.space(33)} />
                <Input 
                    placeholder="Password" 
                    value={form.password} 
                    onChangeText={(value) => onInputChange(value, 'password')} 
                    secureTextEntry={true}
                />
                <View style={styles.space(83)} />
                <Button title="Daftar" onPress={sendData} />
            </ScrollView>
        </View>
    )
}

const styles = {
    wrapper: {
        page : {padding: 20}
    },
    iconBack: {
        width: 25, 
        height: 25, 
    },
    illustration: {
        width: 106, 
        height: 115, 
        marginTop: 8
    },
    text: {
        desc: {
            fontSize: 14, 
            fontWeight: 'bold', 
            color: colors.default, 
            marginTop: 16,
            maxWidth: 200
        },
    },
    space: (value) => {
        return {
            height: value
        };
    }
}

export default Register;