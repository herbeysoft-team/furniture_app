import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants/index";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}> {item.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}> {`N${item.price}`}</Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color="gold" />
              ))}
              <Text style={styles.ratingText}> (4.9)</Text>
            </View>

            <View style={styles.rating}>
              <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={styles.ratingText}> {count} </Text>
              <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item.description}</Text>
          </View>

          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="location-outline" size={20} />
                <Text> Ilorin </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={20}
                />
                <Text>Free Delivery </Text>
              </View>
            </View>
          </View>

          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.addCart}>
              <Fontisto
                name="shopping-bag"
                size={22}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    fkex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    wifth: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.xSmall,
  },
  title: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  price: {
    padding: 10,
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.large,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: 12,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width,
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: "black",
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 12,
  },
  cartTitle: {
    marginLeft: SIZES.small,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
