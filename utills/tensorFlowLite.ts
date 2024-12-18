// utils/tensorFlowLite.ts
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { fetch } from '@tensorflow/tfjs-react-native';
import { Platform } from 'react-native';

// Function to load the model from a URL
const loadModel = async (modelUrl: string) => {
  await tf.ready(); // Ensure TensorFlow.js is ready

  // Load the model from a URL (remote model)
  const model = await tf.loadGraphModel(modelUrl);
  return model;
};

// Function to make recommendations
const getRecommendation = async (userData: number[], modelUrl: string) => {
  const model = await loadModel(modelUrl);

  // Preprocess userData for the model input
  const inputTensor = tf.tensor(userData);

  // Make a prediction
  const outputTensor = model.predict(inputTensor);
  const recommendation = outputTensor.arraySync();

  // Process recommendation and return it
  return recommendation;
};

export default getRecommendation;
