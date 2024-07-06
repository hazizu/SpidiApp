import React from "react";
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, View, Image, StyleSheet } from "react-native";

const HomeSlider = ()=>{
    const width = Dimensions.get('window').width;
    const list = [
       {
        id:1,
        title:'image 1',
        image: require('./../assets/img/image1.png')
       },
       {
        id:2,
        title:'image 2',
        image:require('./../assets/img/image2.png')
       },
       {
        id:3,
        title:'image 3',
        image:require('./../assets/img/image3.png')
       }
    ]
    return(
     
        <Carousel
         loop
         width={width}
         height={width*1.2}
         autoPlay={false}
         data={list}
         scrollAnimationDuration={1000}
         onSnapToItem={(index) => console.log('current index:', index)}
         renderItem={({ item, index }) => (
             <View
                 style={{
                     flex: 1,
                     height:'50%',
                     justifyContent: 'center',
                 }}
             >
                 <Image source={item.image} style={styles.imgestyle}/>
             </View>
         )}
     />

 
        
    )
}

export default HomeSlider;
const styles = StyleSheet.create({
    imgestyle:{
        width:"100%",
        height:'100%'
    },
    

})