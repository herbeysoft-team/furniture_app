import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from "../../constants/index";
import {Ionicons} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"

const ProductCardView = React.memo(() => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{uri:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/645536/1.jpg?9103"}}
                style={styles.image}
                />
                
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}> Product Name</Text>
                <Text style={styles.supplier} numberOfLines={1}> Product Supplier</Text>
                <Text style={styles.price} numberOfLines={1}> N235657</Text>
             </View>
             <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
             </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
})


export default ProductCardView


const styles = StyleSheet.create({
    container:{
        width: 182,
        height: 240,
        marginEnd: 22, 
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer:{
        flex:1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",
        backgroundColor: COLORS.gray2
    },
    image:{
        aspectRatio: 1,
        resizeMode: "cover"
    }, 
    details:{
        padding: SIZES.small
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
        marginBottom: 2
    },
    supplier:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        color: COLORS.gray
    },
    price:{
        fontFamily:"bold",
        fontSize:SIZES.medium,
    },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xSmall,
        right:SIZES.xSmall
    }
   
})