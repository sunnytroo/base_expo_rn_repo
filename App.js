/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  Text, TouchableOpacity, ScrollView
} from 'react-native';

import {
  moderateScale,
} from 'react-native-size-matters';

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      firstSelect: true,
      secondSelect: false,
      thirdSelect: false,
      fourthSelect: false,
      fifthSelect : false,
    }
  }

  clickPosition(position) {
    if (position === 1) {
      this.setState({firstSelect: true,
        secondSelect: false,
        thirdSelect: false,
        fourthSelect: false,
        fifthSelect : false,})
    }else if (position === 2) {
      this.setState({firstSelect: false,
        secondSelect: true,
        thirdSelect: false,
        fourthSelect: false,
        fifthSelect : false,})
    } else if (position === 3) {
      this.setState({firstSelect: false,
        secondSelect: false,
        thirdSelect: true,
        fourthSelect: false,
        fifthSelect : false,})
    } else if (position === 4) {
      this.setState({firstSelect: false,
        secondSelect: false,
        thirdSelect: false,
        fourthSelect: true,
        fifthSelect : false,})
    }else if (position === 5) {
      this.setState({firstSelect: false,
        secondSelect: false,
        thirdSelect: false,
        fourthSelect: false,
        fifthSelect : true,})
    }
    
  }

  render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor:'rgb(255,255,255'}}>
        <ImageBackground
          style={{ width: '100%', height: moderateScale(120), marginTop:moderateScale(-40) }}
          source={require('./assets/topBackground.png')}
          resizeMode='cover'>
          <View style={{ flex: 1, flexDirection: "row",justifyContent:'center' }}>
            <Image
              style={{width:moderateScale(24),height:moderateScale(24), marginTop:moderateScale(53), position:"absolute", start:moderateScale(10)}}
              source={require('./assets/ic_menu.png')} />
            <Image
              style={{width:'35%',height:moderateScale(33),marginStart:moderateScale(15), alignSelf:'center',justifyContent:'center', marginTop:moderateScale(20)}}
              source={require('./assets/logo_main.png')}/>
          </View>
        </ImageBackground>

        <Text style={{ alignSelf: "center", fontSize: moderateScale(28), marginTop: moderateScale(5), fontFamily:'Raleway-Bold' }}>New Contact</Text>
        <ScrollView>
        <View style={{
            marginHorizontal:moderateScale(10)
          }}>
          <TouchableOpacity style={{
            paddingVertical: moderateScale(20),
            backgroundColor: this.state.firstSelect ?'rgb(236,233,252)':'rgb(86,83,246)',
            borderRadius: moderateScale(10),
            marginVertical:moderateScale(5)
          }} onPress={() => this.clickPosition(1)}>
            <View style={{flexDirection:'row'}}>
            <Text style={{
              fontSize: moderateScale(18),
              paddingHorizontal: moderateScale(10),
                  color: this.state.firstSelect ? 'rgb(89,87,90)' : 'white',
              fontFamily:'Raleway-Medium'
              }}>1. Overview</Text>
              <Image
              style={{width:moderateScale(24),height:moderateScale(24),position:"absolute", end:moderateScale(10)}}
              source={this.state.firstSelect?require('./assets/help.png'):require('./assets/edit.png')} />
            </View>
            {this.state.firstSelect ?
              <View style={{ backgroundColor: "rgb(236,233,252)", marginHorizontal: moderateScale(10), marginVertical:moderateScale(30) }}>
              <View style={{flexDirection:'row'}}>
              <Image
              style={{width:moderateScale(18),height:moderateScale(18),}}
                  source={this.state.firstSelect ? require('./assets/info.png') : require('./assets/edit.png')} />
                <Text style={{marginStart:moderateScale(5),fontFamily:'Raleway-Medium'}}>Lorel ipsum dolot sit amet</Text>
                </View>
                <TextInput
                    style={{
                      height: moderateScale(90), marginTop: moderateScale(10), fontSize: moderateScale(14),
                      fontFamily:'Raleway-Medium'  }}
                  placeholder="i commit to..."
                  numberOfLines={5} />
                <View>
                <Image
                    style={{ width: moderateScale(18), height: moderateScale(18), position: "absolute", end: moderateScale(15),bottom:moderateScale(20), tintColor:'red' }}
                    source={this.state.firstSelect ? require('./assets/info.png') : require('./assets/alert.png')} />
                  <View style={{backgroundColor:'red', height:moderateScale(1), width:'97%', }}/>
                </View>
                <View style={{ flexDirection: "row", marginTop:moderateScale(10) }}>
                  <Text style={{ marginStart: moderateScale(5), fontSize: moderateScale(18), color: 'rgb(88,88,89)',fontFamily:'Raleway-Medium' }}>by</Text>
                  <View style={{ width: '85%', marginStart:moderateScale(25) }}>
                    <Text style={{ width: '100%', fontSize: moderateScale(18), color: 'rgb(119,118,124)', textAlign: 'center',fontFamily:'Raleway-Medium' }}>22/08/2020</Text>
                    <View style={{backgroundColor:'rgb(148,138,255)', height:moderateScale(1), width:'97%', }}/>
                  </View>
                  </View>
                  <View style={{ position: "absolute", bottom:moderateScale(-30),end: moderateScale(10),flexDirection: "row",alignItems:'center' }}>
                    <Text style={{ color: 'rgb(0,0,249)', marginTop: moderateScale(0), fontSize: moderateScale(16), fontFamily:'Raleway-Bold' }}>NEXT </Text>
                    <Image
                    style={{ width: moderateScale(14), height: moderateScale(14), tintColor:'rgb(0,0,249)' }}
                    source={require('./assets/nextIcon.png')} />
                  </View>
            </View>:null}
          </TouchableOpacity>
          <TouchableOpacity style={{
            paddingVertical: moderateScale(20),
            backgroundColor: this.state.secondSelect ?'rgb(236,233,252)':'rgb(86,83,246)',
            borderRadius: moderateScale(10),
            marginVertical:moderateScale(5)
            }} onPress={() => this.clickPosition(2)}>
              <View style={{flexDirection:'row'}}>
            <Text style={{
              fontSize: moderateScale(18),
              paddingHorizontal: moderateScale(10),
              color:this.state.secondSelect ?'rgb(89,87,90)':'white',
              fontFamily:'Raleway-Medium'
              }}>2. Actions</Text>
              <Image
              style={{width:moderateScale(24),height:moderateScale(24),position:"absolute", end:moderateScale(10)}}
              source={this.state.secondSelect?require('./assets/help.png'):require('./assets/edit.png')} />
              </View>
              {this.state.secondSelect ? <View style={{ backgroundColor: "rgb(236,233,252)", marginHorizontal: moderateScale(10), marginVertical:moderateScale(30) }}>
              <View style={{flexDirection:'row'}}>
              <Image
              style={{width:moderateScale(18),height:moderateScale(18),}}
                  source={this.state.secondSelect ? require('./assets/info.png') : require('./assets/edit.png')} />
                <Text style={{marginStart:moderateScale(5),fontFamily:'Raleway-Medium'}}>Lorel ipsum dolot sit amet</Text>
                </View>

                <View style={{ backgroundColor: 'white', borderColor: 'rgb(206,208,243)', borderWidth:moderateScale(2), borderRadius:moderateScale(10), padding :moderateScale(15), marginTop:moderateScale(10)}}>
                  <View style={{ flexDirection: 'row' }}>
                  <Text style={{marginStart:moderateScale(5), fontSize:moderateScale(18), fontWeight:'400', color:'black',fontFamily:'Raleway-Medium'}}>20 situps</Text>
                  <Image
              style={{width:moderateScale(18),height:moderateScale(18),position:"absolute", end:moderateScale(20)}}
                  source={require('./assets/edit.png')} />
                
                  </View>
                  <View style={{ flexDirection: 'row', marginTop:moderateScale(10) }}>
                  <Text style={{marginStart:moderateScale(5), fontSize:moderateScale(14), color:'rgb(85,66,249)',fontFamily:'Raleway-Medium'}}>Mo, Wed</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'white', borderColor: 'rgb(206,208,243)', borderWidth:moderateScale(2), borderRadius:moderateScale(10), padding :moderateScale(15), marginTop:moderateScale(10)}}>
                  <View style={{ flexDirection: 'row' }}>
                  <Text style={{marginStart:moderateScale(5), fontSize:moderateScale(18), fontWeight:'400', color:'black',fontFamily:'Raleway-Medium'}}>Lorel ipsum dolot sit amet</Text>
                  <Image
              style={{width:moderateScale(18),height:moderateScale(18),position:"absolute", end:moderateScale(20)}}
                  source={require('./assets/edit.png')} />
                
                  </View>
                  <View style={{ flexDirection: 'row', marginTop:moderateScale(10) }}>
                  <Text style={{marginStart:moderateScale(5), fontSize:moderateScale(14), color:'rgb(85,66,249)',fontFamily:'Raleway-Medium'}}>Everyday</Text>
                  </View>
                </View>
                <View style={{width:moderateScale(24),height:moderateScale(24), borderRadius:moderateScale(24), backgroundColor:'rgb(255,155,64)', alignSelf:'center', alignItems:'center', justifyContent:'center', marginTop:moderateScale(10)}}>
      <Image style={{width:moderateScale(18),height:moderateScale(18), }} source={require('./assets/plus.png')}></Image>
                </View>
                <View style={{ position: "absolute", bottom:moderateScale(-30),end: moderateScale(10),flexDirection: "row", alignItems:'center' }}>
                    <Text style={{ color: 'rgb(0,0,249)', marginTop: moderateScale(0), fontSize: moderateScale(16), fontFamily:'Raleway-Bold'}}>NEXT </Text>
                    <Image
                    style={{ width: moderateScale(14), height: moderateScale(14), tintColor:'rgb(0,0,249)' }}
                    source={require('./assets/nextIcon.png')} />
                  </View>
              </View>:null}
          </TouchableOpacity>
          <TouchableOpacity style={{
            paddingVertical: moderateScale(20),
            backgroundColor: 'rgb(249,247,255)',
            borderRadius: moderateScale(10),
            marginVertical:moderateScale(5)
            }} onPress={() => this.clickPosition(3)}>
              
            <Text style={{
              fontSize: moderateScale(18),
              paddingHorizontal: moderateScale(10),
              color:this.state.thirdSelect ?'rgb(89,87,90)':'rgb(176,176,176)',
              fontFamily:'Raleway-Medium'
              }}>3. Stakes</Text>
              
          </TouchableOpacity>
          <TouchableOpacity style={{
            paddingVertical: moderateScale(20),
            backgroundColor: 'rgb(249,247,255)',
            borderRadius: moderateScale(10),
            marginVertical:moderateScale(5)
          }} onPress={()=>this.clickPosition(4)}>
            <Text style={{
              fontSize: moderateScale(18),
              paddingHorizontal: moderateScale(10),
              color:this.state.fourthSelect ?'rgb(89,87,90)':'rgb(176,176,176)',
              fontFamily:'Raleway-Medium'
          }}>4. Accountability partner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            paddingVertical: moderateScale(20),
            backgroundColor: 'rgb(249,247,255)',
            borderRadius: moderateScale(10),
            marginVertical:moderateScale(5)
          }} onPress={()=>this.clickPosition(5)}>
            <Text style={{
              fontSize: moderateScale(18),
              paddingHorizontal: moderateScale(10),
              color:this.state.fifthSelect ?'rgb(89,87,90)':'rgb(176,176,176)',
              fontFamily:'Raleway-Medium'
          }}>5. Social sharing</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
      </SafeAreaView>
    </>
  );
}
};


export default App;
