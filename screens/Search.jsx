import { View, TouchableOpacity, Image, Text, TextInput, StyleSheet, FlatList } from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Search = () => {
  const [searchKey, setSearchKey] = useState("")
  const [serachResult, setSearchResult] = useState([])
  //https://herbeysoft.com/api/products/search/${searchKey}
  const handleSearch = async() =>{
      try {
        const response =await axios.get(`https://herbeysoft.com/api/products/search/${searchKey}`)
        setSearchResult(response.data)
      } catch (error) {
          console.log("failed to get data",  error)
      }
  }
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" style={styles.searchIcon} size={SIZES.xLarge} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>handleSearch()}>
            <Feather name="search" size={24}  />
          </TouchableOpacity>
        </View>
      </View>
      {serachResult.length === 0 ?(
      <View style={{flex:1}}>
        <Image
          source={require('../assets/images/Pose23.png')}
          style={styles.searchImage}
        />
      </View>):
      <FlatList
        data={serachResult}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (<Text>{item.title}</Text>)}
      />}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, size) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 10,
    marginTop: size,
    color: color,
    marginHorizontal: 12,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginTop: SIZES.small,
    color: COLORS.gray,
    marginHorizontal: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  searchImage:{
    resizeMode:"contain",
    width: SIZES.width-80,
    height: SIZES.height-300,
    opacity:0.9
  }
});
