import React, { useState } from "react";
import { SafeAreaView , StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import LogoIcon from './../../assets/img/logo'
import HomeSlider from "../../composants/HomeSlider";
import { ScrollView } from "react-native-gesture-handler";
import Share from "react-native-share";




 

const Home = ()=>{

    const [activeEmojis, setActiveEmojis] = useState(false)
    const [emojiSelected, setEmojiSelected] = useState('')

    const listEmoji = [
        {
            emoji:'😍'
        },
        {
            emoji:'😮'
        },
        {
            emoji:'👏'
        },
        {
            emoji:'🙄'
        },
        {
            emoji:''
        },
        {
            emoji:'👍'
        }
    ]
    const options = {
        message: 'Check out this awesome content!',
        url: 'https://example.com',
        title: 'Awesome Content'
      };

    const EmojiContainer = ()=>{
        return(
            <View style={styles.emojiList}>
                {listEmoji.map((emoji, index)=>(
                    <TouchableOpacity key={index} onPress={()=>{
                        setEmojiSelected(emoji.emoji)
                        setActiveEmojis(false)
                    }}>
                    <Text style={styles.emojiLib}>{emoji.emoji}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
    const like = ()=>{
        setActiveEmojis(!activeEmojis)
    }
    const share = async (customOptions) => {
        try {
          await Share.open(customOptions);
        } catch (err) {
          console.log(err);
        }
      };
  

    return(
        <SafeAreaView style={{flex:1}}>
             {/* <TouchableWithoutFeedback style={{ backgroundColor:'red', height:100, width:100}} onPress={()=>setActiveEmojis(false)}> */}
            <View style={styles.container}>
               <View style={styles.headerBar}>
                <LogoIcon width="80" height="80" style={{marginLeft:-20}}/>
                <Text style={styles.logolib}>Spidi</Text>
               </View>
               <ScrollView   style={{flex:1}}>
               <HomeSlider/>
               <View style={styles.slideAction}>
                {activeEmojis && (
                    <EmojiContainer/>
                )}
                <TouchableOpacity style={styles.slideReactionBtn} onPress={()=>like()}>
                    {emojiSelected && (
                        <Text style={styles.emojiSelectedStyle}>{emojiSelected}</Text>
                    )}
                    {!emojiSelected && (
                        <Image source={require('./../../assets/img/emoji.png')} style={styles.btnEmoji}/>

                    )}
                   <Text style={styles.btnEmojiLib}>25 k</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slideReactionBtn} onPress={()=> share(options)}>
                    <Image source={require('./../../assets/img/share.png')} style={styles.btnEmoji}/>
                    <Text style={styles.btnEmojiLib}>600</Text>

                </TouchableOpacity>

               </View>
               <View style={styles.messageContainer}>
                <Text style={styles.messageText}>L'Afrique le soleil du monde . <Text style={styles.viewNumber}> 600 </Text>vues</Text>

               </View>
               <View style={styles.addBlock}>
                <TouchableOpacity style={styles.addBtn}>
                    <Image source={require('./../../assets/img/image4.png')} style={{width:70, height:70, borderRadius: 70/2}}/>
                    <View style={styles.addIcon}>
                       <Image source={require('./../../assets/img/plus.png')} style={{width:30, height:30}}/>
                    </View>
                </TouchableOpacity>
                <Text style={styles.addMessage}>Make africa Great</Text>
               </View>

               </ScrollView>
              
              
            </View>
            {/* </TouchableWithoutFeedback> */}
        </SafeAreaView>
    )
}

export default Home;


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logolib:{
        fontSize:25,
        fontWeight:'500'

    },
    headerBar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:40,
        backgroundColor: 'rgba(255,255,255, 0)'
    },
    btnEmoji:{
        width:30,
        height:30
    },
    slideAction:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:20,
        position:'relative',
        borderBottomWidth:1,
        borderBottomColor:'lightgray'

    },
    slideReactionBtn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    btnEmojiLib:{
        color:'black',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:10
    },
    emojiList:{
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        top:-50,
        left:30,
        backgroundColor:'#FFF',
       paddingHorizontal:15,
        borderRadius:30
    },
    emojiLib:{
        fontSize:50,
        marginLeft:6

    },
    emojiSelectedStyle:{
        fontSize:30
    },
    messageContainer:{
        marginTop:30,
        paddingHorizontal:10,
    },
    messageText:{
        fontSize:17,
        color:'#000'
    },
    viewNumber:{
        fontSize:18,
        marginHorizontal:5,
        display:'flex'
    },
    addBtn:{
        width:70,
        height:70,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 70/2,
        position:"relative",
    },
    addIcon:{
        backgroundColor:'#FFF',
        width:25,
        height:25,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        borderRadius:30/2,
        right:0,
        bottom:0,
        borderWidth:2
    },
    addBlock:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:10,
        marginTop:30
    },
    addMessage:{
        fontSize:17,
        fontWeight:'500',
        marginLeft:15
    }
  
})