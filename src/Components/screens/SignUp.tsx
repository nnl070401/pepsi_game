import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import { useState } from 'react';

const SignUp = () => {
    const [text, onChangeText] = React.useState('');
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>
                Hey, chào mừng bạn đến với
            </Text>

            <Text style={styles.text2}>
                Pepsi Tet
            </Text>

            <Text style={styles.text3}>
                Đăng ký
            </Text>


            <TextInput style= {styles.textIp1}
                onChangeText={onChangeText}
                value={text}
                placeholder='Nhập số điện thoại'
            />

            <TextInput style= {styles.textIp2}
                onChangeText={onChangeText}
                value={text}
                placeholder='Tên người dùng'
            />

            <View style={styles.checkbox}>
                <CheckBox
                     disabled={false}
                     value={checked}
                     onValueChange={(newValue) => setChecked(newValue)}
                />
            </View>
            
            <View style={styles.btnOTP}>
                <Button
                title='Lấy mã OTP'
                color="#B7B9C0"
                onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <Text style={styles.text4}>
                Hoặc
            </Text>

            <View style={styles.btnDN}>
                <Button
                title='Đăng nhập'
                onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </View>
        
        
      );
};
export default SignUp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',

    },
    text1:{
        position: 'absolute',
        width:179,
        height:24,
        left:98,
        top:112,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontSize:16,
        fontWeight:'600',
        lineHeight:24,
    },

    text2:{
        position: 'absolute',
        width:163,
        height:148,
        left:106,
        top:136,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontSize:36,
        fontWeight:'bold',
        lineHeight:48,

        color:'#000000'
    },

    text3:{
        position: 'absolute',
        width:103,
        height:26,
        left:136,
        top:214,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize:22,
        fontWeight:'normal',
        lineHeight:26,

        textAlign:'center',
        letterSpacing:-0.3,

        color:'#414141',
    },

    

    textIp1:{
        position: 'absolute',
        width:340,
        height:44,
        left:17,
        top:290,

        borderRadius:8,
        borderWidth:1,
    },
    textIp2:{
        position: 'absolute',
        width:340,
        height:44,
        left:17,
        top:350,

        borderRadius:8,
        borderWidth:1,
    },
    checkbox:{
        position: 'absolute',
        width:405,
        height:13,
        left:1,
        top:397,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontSize:5,
        fontWeight:'normal',
        lineHeight:14,
    },
    btnOTP:{
        position: 'absolute',
        width:264,
        height:44,
        left:57,
        top:548,
    
        borderRadius:8,
    },
    text4:{
        position: 'absolute',
        width:24,
        height:14,
        left:175,
        top:600,

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontSize:10,
        fontWeight:'normal',
        lineHeight:14,

        color:'#000000'
    },

    btnDN:{
        position: 'absolute',
        width:264,
        height:44,
        left:57,
        top:625,
        
        backgroundColor:'Primary',
        borderColor:'Primary',
    },
});
