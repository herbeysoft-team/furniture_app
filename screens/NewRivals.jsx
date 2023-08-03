import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from "../constants/index";
import {
    Ionicons,
    SimpleLineIcons,
    MaterialCommunityIcons,
    Fontisto,
  } from "@expo/vector-icons";
import { ProductList } from '../components';
const NewRivals = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30}  color={COLORS.lightWhite}/>
          </TouchableOpacity>
        <Text style={styles.heading}> Products</Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  )
}

export default NewRivals

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.lightWhite,
    },
    wrapper:{
        flex: 1,
        backgroundColor:COLORS.lightWhite,
    },
    upperRow:{
        width: SIZES.width-50,
        marginHorizontal: SIZES.large,
        flexDirection: "row",
        justifyContent:"flex-start",
        alignItems:"center",
        positon:"absolute",
        backgroundColor:COLORS.primary,
        borderRadius: SIZES.large,
        top: SIZES.large,
        zIndex: 999
    },
    heading:{
        color:COLORS.lightWhite,
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        marginLeft:5

    }

})
