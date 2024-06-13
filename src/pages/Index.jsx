import { Container, VStack, Heading, Text, Button, Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      answer: "Tokyo",
    },
  ];

  const handleNext = () => {
    if (selectedOption === questions[step].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setStep(step + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setScore(0);
    setSelectedOption("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Online Quiz Platform</Heading>
        {step < questions.length ? (
          <Box>
            <Text fontSize="xl">{questions[step].question}</Text>
            <RadioGroup onChange={setSelectedOption} value={selectedOption}>
              <Stack direction="column">
                {questions[step].options.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
            <Button mt={4} onClick={handleNext} isDisabled={!selectedOption}>
              Next
            </Button>
          </Box>
        ) : (
          <Box textAlign="center">
            <Text fontSize="xl">Your score is {score} out of {questions.length}</Text>
            <Button mt={4} onClick={handleRestart}>
              Restart Quiz
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;