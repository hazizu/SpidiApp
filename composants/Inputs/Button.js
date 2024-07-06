import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "react-native";

const ButtonStyle = ({libelle, onEventEmit})=>{

    const clicked = ()=>{
        onEventEmit()
    }
    return(
        
        <TouchableOpacity style={styles.btnStyle} onPress={()=>clicked()}>
            <Text style={styles.btnLib}>{libelle}</Text>
        </TouchableOpacity>
     
    )
}

export default ButtonStyle;
const styles = StyleSheet.create({
    btnStyle:{
     
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:"#000",
        paddingVertical:10,
        borderRadius:15

    },
    btnLib:{
        color:'#FFF',
        fontSize:17,
        fontWeight:"500"

    }
})