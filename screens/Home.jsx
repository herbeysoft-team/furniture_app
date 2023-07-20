import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {SIZE, COLORS, SIZES} from "../constants/index"
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Welcome, Carousel, Headings, ProductRow} from "../components"

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24}/>
            <Text style={styles.location}>Ilorin, Nigeria</Text>
            <View style={{alignItems:"flex-end"}}>
                <View style={styles.cartCount}>
                    <Text style={styles.cartNumber}> 8 </Text>
                </View>
                <TouchableOpacity>
                <Fontisto name='shopping-bag' size={24}/>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      <ScrollView>
          <Welcome/>  
          <Carousel/>
          <Headings/>
          <ProductRow/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    appBarWrapper: {
      marginHorizontal: 22,
      marginTop: SIZES.small,
      
    },
    appBar: {
      flexDirection: "row",
      justifyContent:'space-between',
      alignItem: "center",
    },
    location:{
        fontFamily:"semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    cartCount :{
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex: 999
    },
    cartNumber :{
        fontFamily:"regular",
        fontWeight:"600",
        fontSize: 10,
        color: COLORS.lightWhite
    },
  });