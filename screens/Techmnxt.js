import React from "react";
import {View,Text,StyleSheet,FlatList,Image} from "react-native";


const Screen1 =[
  {name:"Covid Help Desk",img:"https://cdn.dribbble.com/users/1787323/screenshots/7003575/media/f09620a77deb456e82968e482130ef0f.png?compress=1"},
  {name:"Self Health Declaration",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/global-health-2393468-1994723.png"},
  {name:"ID Card",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pw3W1rGn0-rOC0fRS5-otSsZgcEQAna4cw&usqp=CAU"},
  {name:"FR Consent",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/consent-1728186-1468771.png"},
  {name:"UVO",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/uvo-2879906-2387569.png"},
  {name:"ATOM",img:"https://cdn-icons-png.flaticon.com/512/184/184671.png"},
  {name:"My Profile",img:"https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"},
  {name:"Payslips",img:"https://cdn-icons-png.flaticon.com/512/1570/1570994.png"},
  {name:"My Benefits",img:"https://icon-library.com/images/benefit-prize-award-best-adventage-sake-512.png"},
  {name:"Timesheet",img:"https://apprecs.org/gp/images/app-icons/300/5a/com.gurisingh.smarttimesheet.jpg"},
  {name:"Variable Pay",img:"https://cdn-icons-png.flaticon.com/512/2620/2620382.png"},
  {name:"My Letters",img:"https://cdn.iconscout.com/icon/free/png-256/letter-27-108405.png"}

];





function Techmnxt(){
  return(
    <FlatList  style={styles.main}numColumns={3} data={Screen1} renderItem={({item})=>{
      return(
         <View style={styles.box}>
           <Image source={{uri:item.img}} style={styles.img}/>
           <Text style={styles.text}>{item.name}</Text>
         </View>
      );
    }}/>
    
  );
}
const styles=StyleSheet.create({
  main:{
    margin: 20,
    alignItems:"center"
    
  },
  box:{
    margin: 15,
    alignItems:"center"

  },
  img:{
    height:80,
    width: 80,
    borderRadius: 10,
  },
  text:{
    width: 70,
    textAlign:"center",
    alignSelf:"center"
  }
  
});
export default Techmnxt;