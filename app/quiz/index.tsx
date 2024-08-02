// components/QuizPage.tsx

import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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
        <ScrollView >
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
                    <Text >
                        You scored {score} out of {questions.length}
                    </Text>
                    <Link href={"/"} >
                        <Text >Home page</Text>
                    </Link>
                </View>
            ) : (
                <View>
                    <Text >
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
                                onPress={() =>
                                    handleAnswerButtonClick(
                                        answerOption ===
                                            questions[currentQuestionIndex]
                                                .correct_answer
                                    )
                                }
                            >
                                <Text >
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

export default QuizPage;