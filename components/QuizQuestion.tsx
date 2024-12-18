// components/QuizQuestion.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

interface QuizQuestionProps {
  questionId: string; // Assume we pass a unique question ID
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion = ({ questionId, onAnswer }: QuizQuestionProps) => {
  const [question, setQuestion] = useState<string | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  // Fetch quiz question from Firebase
  useEffect(() => {
    const fetchQuestion = async () => {
      const questionRef = database().ref(`/quizQuestions/${questionId}`);

      questionRef.once('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setQuestion(data.question);
          setOptions(data.options);
          setCorrectAnswer(data.correctAnswer);
        }
      });
    };

    fetchQuestion();
  }, [questionId]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswered(true);
    onAnswer(answer === correctAnswer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View>
        {options.map((option, index) => (
          <Button
            key={index}
            title={option}
            onPress={() => handleAnswer(option)}
            disabled={answered}
          />
        ))}
      </View>
      {answered && (
        <Text style={styles.result}>
          {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  result: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default QuizQuestion;
