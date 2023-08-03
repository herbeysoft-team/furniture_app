import { StyleSheet, FlatList, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from "../../constants/index";
import useFetch from '../../hook/useFetch';
import ProductCardView from './ProductCardView';


const ProductList = () => {
    const {data, error, isLoading} = useFetch();
    if(isLoading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xLarge}/>
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({item}) => <ProductCardView item={item}/>}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=> <View style={styles.seperator}/>} 
                keyExtractor={(item) => item._id}
           />  
        </View>
    )

  
}

export default ProductList

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        alignItems:"center",
        paddingTop:SIZES.xxLarge,
        paddingLeft:SIZES.small/2
    },
    seperator:{
        height: 16
    }
})