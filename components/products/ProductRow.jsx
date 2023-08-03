import { StyleSheet, FlatList, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from "../../constants/index";
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';


export default function ProductRow() {
  const {data, error, isLoading} = useFetch();
  
  return (
    <View style={{marginTop:SIZES.medium, marginBottom: SIZES.xxLarge*3}}>
      {isLoading? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
      ): error ? (
        <Text>Something went wrong</Text>
      ):(
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => <ProductCardView item={item}/>}
        keyExtractor={(item) => item._id}
    />
      )}
    </View>
  )
}

