import { StyleSheet, FlatList, Text, View} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from "../../constants/index";
import ProductCardView from './ProductCardView';

export default function ProductRow() {
    const product = [1,2,3,4]
  return (
    <View style={{marginTop:SIZES.medium, marginBottom: SIZES.xxLarge*3}}>
    <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={product}
        renderItem={({item}) => <ProductCardView/>}
    />
    </View>
  )
}

const styles = StyleSheet.create({

})