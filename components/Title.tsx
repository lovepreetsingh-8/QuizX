import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ titleText }: { titleText: string }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{titleText}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "700",
    },
    titleContainer: {
        paddingVertical: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});
