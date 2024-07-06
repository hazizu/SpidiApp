import React , {useState}from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import EyeOn from "./../../assets/img/eye-on"
import EyeOff from "./../../assets/img/eye-off"

const InputField = ({placeholder, type, libelle, handleChange, handleBlur, value, borderRed=false}) =>{

    const [showPassword, setShowPassword] = useState(false);

    const showValue = ()=>{
        setShowPassword(!showPassword)
    }

    let inputRed = {}
    borderRed ? inputRed = styles.fieldRed : inputRed = styles.input

    return(
        <View style={styles.field}>
            <TextInput style={inputRed}
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            onChangeText={handleChange(type)}
            onBlur={handleBlur(type)}
            value={value}
          
            secureTextEntry={(type === "password" || type === "oldPassword" || type === "newPassword" || type ==="confirmPassword") && !showPassword}
          />
          {(type === "password" || type === "oldPassword" || type ==="newPassword" || type ==="confirmPassword") && (
              <View style={styles.passEye}>
                 { !showPassword && (
                      <TouchableOpacity onPress={()=>showValue()}>
                      <EyeOn/>
                    </TouchableOpacity>
                 )}
            
              { showPassword && (
                     <TouchableOpacity onPress={()=>showValue()}>
                     <EyeOff/>
                   </TouchableOpacity>
              )}
         
              </View>
          )}
        
        </View>
    )

}

export default InputField;

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        height:50,
        paddingLeft:10,
        fontSize:16,
        borderColor:"#575757",
        marginTop:5,
        borderRadius:15,
        color:"#000",
        backgroundColor:'#ebebeb'
    },
    fieldRed:{
        backgroundColor:'#ebebeb',
        borderWidth:1,
        height:50,
        paddingLeft:10,
        fontSize:16,
        borderColor:"lightgray",
        marginTop:8,
        borderRadius:15,
        borderColor:"#EE751B"
    },
    inputLibelle:{
        fontSize:15,
        color:"#000"
    },
    field:{
        position:"relative"
    },
    passEye:{
        position:"absolute",
        right:10,
        top:20

    }

})