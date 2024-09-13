

import React, { useEffect, useState } from "react";
import { View, StyleSheet,Text, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { Link } from "expo-router";

interface Question {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

const QuizPage: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        axios
            .get(
                "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986"
            )
            .then((response) => {
                setQuestions(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleAnswerButtonClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    if (!questions.length) {
        return (
            <Text>
                <Text>Loading...</Text>
            </Text>
        );
    }
    return (
        <ScrollView contentContainerStyle={styles.container} >
            {showScore ? (
                <View>
                    <Text>
                        {score === 10 &&
                            "👏 Well done! Perfect score right there"}
                        {score < 5 &&
                            "😕 less than half!! better luck next time"}
                        {score > 5 &&
                            "😊 You scored more than half!! well done"}
                    </Text>
                    <Text style={styles.scoreText} >
                        You scored {score} out of {questions.length}
                    </Text>
                    <Link href={"/"} style={styles.backLink} >
                        <Text style={styles.buttonText} >Home page</Text>
                    </Link>
                </View>
            ) : (
                <View>
                    <Text style={styles.questionText}>
                        {decodeURIComponent(
                            questions[currentQuestionIndex].question
                        )}
                    </Text>
                    <View>
                    {questions[currentQuestionIndex].incorrect_answers
                        .concat(questions[currentQuestionIndex].correct_answer)
                        .sort()
                        .map((answerOption, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.optionButton}
                                onPress={() =>
                                    handleAnswerButtonClick(
                                        answerOption ===
                                            questions[currentQuestionIndex]
                                                .correct_answer
                                    )
                                }
                            >
                                <Text style={styles.optionText} >
                                    {decodeURIComponent(answerOption)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                        </View>
                </View>
            )}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    optionButton: {
        backgroundColor: "#8A2BE2", 
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    optionText: {
        fontSize: 16,
        color: "#fff",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    questionText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 20,
        textAlign: "center",
    },
    scoreText: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        textAlign: "center",
    },
    backLink: {
        backgroundColor: "#5d5a8c",
        borderRadius: 10,
        overflow: "hidden",
        padding: 10,
        marginHorizontal: "auto",
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
});


export default QuizPage;