import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS } from "../../constants/index";
import { useNavigation } from "@react-navigation/native";

const SearchTile = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View style={styles.image}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.supplier}>{item.supplier}</Text>
        <Text style={styles.supplier}>{`N${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.small,
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },
  productImg: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  productTitle: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    color: COLORS.primary,
  },
  supplier: {
    fontSize: SIZES.small + 2,
    fontFamily: "regular",
    color: COLORS.gray,
    marginTop: 3,
  },
});
