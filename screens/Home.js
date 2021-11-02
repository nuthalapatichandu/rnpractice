import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,FlatList,Image,Pressable} from "react-native";
import myApp from "../App";

const DATA = [
  {
    title: "TechMNxt",
    data: [{name:"Covid Help Desk",img:"https://cdn.dribbble.com/users/1787323/screenshots/7003575/media/f09620a77deb456e82968e482130ef0f.png?compress=1&resize=400x300"},
    {name:"Self Health Declaration",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/global-health-2393468-1994723.png"},
    {name:"ID Card",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pw3W1rGn0-rOC0fRS5-otSsZgcEQAna4cw&usqp=CAU"},
    {name:"FR Consent",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/consent-1728186-1468771.png"},
    {name:"UVO",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/uvo-2879906-2387569.png"},
    {name:"ATOM",img:"https://cdn-icons-png.flaticon.com/512/184/184671.png"}]
  },
  {
    title: "My Zone",
    data: [{name:"My Profile",img:"https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"},
    {name:"Payslips",img:"https://cdn-icons-png.flaticon.com/512/1570/1570994.png"},
    {name:"My Benefits",img:"https://icon-library.com/images/benefit-prize-award-best-adventage-sake-512.png"},
    {name:"Timesheet",img:"https://apprecs.org/gp/images/app-icons/300/5a/com.gurisingh.smarttimesheet.jpg"},
    {name:"Variable Pay",img:"https://cdn-icons-png.flaticon.com/512/2620/2620382.png"},
    {name:"My Letters",img:"https://cdn.iconscout.com/icon/free/png-256/letter-27-108405.png"}]
  },
  {
    title: "Approvals",
    data: [{name:"Leave Approval",img:"https://cdn-icons-png.flaticon.com/512/748/748463.png"},
    {name:"Timesheet Approval",img:"https://cdn-cgafm.nitrocdn.com/hWtUCjwcBWmxCnEssfNYbRCovcEemSwJ/assets/static/optimized/mm/wp-content/uploads/2020/10/e783154b1b2ef97aa802dbed975cbe34.JustLogin_Product-Icons_FA_JustLeave.png"},
    {name:"Travel Approval",img:"https://cdn-icons-png.flaticon.com/512/2149/2149270.png"},
    {name:"Visa Approval",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/visa-approved-2053469-1732906.png"},
    {name:"PR Approval",img:"https://cdn-icons-png.flaticon.com/512/1721/1721925.png"},
    {name:"Expense Report Approval",img:"https://library.kissclipart.com/20181025/eqw/kissclipart-business-expense-icon-clipart-expense-management-z-741b09bdb2effb18.png"}]
  },
  {
    title: "Requests",
    data: [
    {name:"Leave Request",img:"https://cdn0.iconfinder.com/data/icons/data-analytics-orchid-vol-2/256/Scramble_System-512.png"},
    {name:"Audio Conference",img:"https://assets.lumen.com/is/image/Lumen/image-conferencing-tab-mananged-event?$PNG$&Creativeid=e640d792-d606-4ae4-9c50-bfaff7da5687"},
    {name:"Video Confererence",img:"https://i.pinimg.com/originals/09/ee/5a/09ee5a9dafb0a1910629f46dd63e12b5.png"},
    {name:"Conference Room",img:"https://icon-library.com/images/2-17-512_11801.png"},
    {name:"Expense Request",img:"https://cdn-icons-png.flaticon.com/512/2171/2171476.png"}
    ]
  },
  {
    title: "My TechM",
    data: [
      {name:"Holiday List",img:"https://previews.123rf.com/images/scusi/scusi1408/scusi140800025/30828382-travel-and-holiday-icon.jpg"},
      {name:"Advantage",img:"https://icon-library.com/images/profit-gain-return-goal-benefit-advantage-512.png"},
      {name:"Locations",img:"https://cdn-icons-png.flaticon.com/512/2928/2928883.png"},
      {name:"BMS",img:"https://cdn4.iconfinder.com/data/icons/home-automation-2/60/Home_Automation_-_Outline_-_018_-_Garage_Door_Open-512.png"},
      {name:"Search SO-JO",img:"https://cdn.amasty.com/media/catalog/product/cache/8b14a410c096e2fc1a81f19ab33fad4c/i/c/icon-advanced-search-lite-for-magento-2_2x.png"}
      ]
  }
];


const App = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
       renderItem={({ item }) => {
        return(
          null
        );
      }}
      renderSectionHeader={({ section}) => {
        return(
          <View style={styles.banner}>
             <View style={styles.hsection}>
                 <Text style={styles.header}>{section.title}</Text>
                   <Pressable onPress={()=>{
                     return(
                     navigation.navigate("Techmnxt")
                    );
                    }}><Text>more</Text></Pressable>
             </View>
           <View>
           <FlatList horizontal showsHorizontalScrollIndicator={false} data={section.data} renderItem={({item})=>{
             return(
                <View style={styles.layout}>
                <View style={styles.box}><Image style={styles.img} source={{uri:item.img}} resizeMode="stretch"/></View>
                 <Text style={styles.text}>{item.name}</Text>
                </View>
             );
           }}/>
           </View>
          </View>
        );
      }
        
      }
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f0f2f5",
    marginTop: 40
  },
  banner:{
    marginVertical: 10,
    marginHorizontal: 20,
    height: 170,
    backgroundColor:"#fff",
    padding: 10,
    borderRadius:10,
  },
  hsection:{
    flexDirection:"row",
    justifyContent:"space-between",

  },
  header:{
    fontSize: 18,
    fontWeight:"bold"
  },
  box:{
    width: 90,
    height: 70,
    backgroundColor:"pink",
    borderRadius:10,
    margin: 10,
  },
 
  text:{
    width: 100,
    textAlign:"center",
    alignSelf:"center",

  },
  img:{
    width:90,
    height: 70,
    borderRadius:10,
  }
  
});

export default App;