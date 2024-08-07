import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "@/components/Title";
import { Link, router } from "expo-router";

export default function Home() {
    return (
        <View>
            <Title titleText="Welcome to quizX" />
            <View style={styles.imgContainer}>
                <Image
                    source={{
                        uri: "https://images.pond5.com/quiz-symbol-answer-question-sign-illustration-153412523_iconl.jpeg",
                    }}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>
            
            <TouchableOpacity style={styles.button}
                onPress={() => router.replace("/quiz")}
            >
                
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 500,
    },
    imgContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#5d5a8c",
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 5,

        width: "50%",
        marginTop: 50,
        marginHorizontal: "auto",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
});
