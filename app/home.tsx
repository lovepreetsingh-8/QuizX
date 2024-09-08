import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  Linking, 
} from "react-native";
import React from "react";

interface Listing {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
}

const listings: Listing[] = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1387705771/photo/aerial-view-of-green-field-position-point-and-boundary-line-to-show-location-and-area-a-tract.jpg?s=612x612&w=0&k=20&c=lBscLZTDvnCfVv5vtxwYYmr8ninBfHd3wDT4SDn3Nd0=",
    title: "LAND 1",
    location: "REDSTONE",
    price: 25000,
  },
  {
    id: 2,
    image:
      "https://network.land.com/wp-content/uploads/2017/02/listingPhotographyTips.jpg",
    title: "LAND 2",
    location: "CASTLERIDGE",
    price: 50000,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYA5P7LDNJ6qj4Uvoap_NCDpLwzxdl-2Mf_dpeEL9US6sSxJBR37BH_iXPEQ&s",
    title: "LAND 3",
    location: "TUSKANY",
    price: 15000,
  },
  {
    id: 4,
    image:
      "https://jpmrealestatephotography.com/wp-content/uploads/2020/06/Ranch-PortfolioDSC06732_1.jpg",
    title: "LAND 4",
    location: "MCKNIGHT",
    price: 30000,
  }
];

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Where to?"
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Text style={styles.iconText}>🔍</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.detailsText}>
          Search Lands · Any Time · In Calgary
        </Text>
        <View style={styles.listingsContainer}>
          {listings.map((listing) => (
            <TouchableOpacity key={listing.id} style={styles.listingCard}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: listing.image }}
                  style={styles.listingImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.listingDetails}>
                <Text style={styles.listingTitle}>{listing.title}</Text>
                <Text style={styles.listingLocation}>{listing.location}</Text>
                <Text style={styles.listingPrice}>${listing.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          
          <Text style={styles.navText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    padding: 10,
    ...(Platform.OS === "web" ? {
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Web-specific shadow
    } : {
      shadowColor: "#000", // Mobile-specific shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    }),
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingHorizontal: 10,
  },
  iconContainer: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  iconText: {
    fontSize: 18,
  },
  detailsText: {
    marginTop: 10,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  listingsContainer: {
    marginTop: 20,
  },
  listingCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    ...(Platform.OS === "web" ? {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Web-specific shadow
    } : {
      shadowColor: "#000", // Mobile-specific shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    }),
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#f0f0f0",
  },
  listingImage: {
    width: "100%",
    height: "100%",
  },
  listingDetails: {
    padding: 15,
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  listingLocation: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  listingPrice: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
});