// // src/services/firebaseService.js
// import database from '@react-native-firebase/database';

// // Function to get all tasks
// export const getTasks = async () => {
//   const snapshot = await database().ref('tasks').once('value');
//   const data = snapshot.val() || {};
//   return Object.keys(data).map(key => ({
//     taskId: key,
//     ...data[key],
//   }));
// };

// // Function to add a task
// export const addTask = async (task) => {
//   const taskRef = database().ref('tasks').push();
//   await taskRef.set(task);
// };

// // Function to update task status
// export const updateTaskStatus = async (taskId, completed) => {
//   const taskRef = database().ref(`tasks/${taskId}`);
//   await taskRef.update({ completed: !completed });
// };

// src/services/firebaseService.js
import firebase from 'firebase/app';
import 'firebase/database'; // Import the database service

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  databaseURL: 'your-database-url',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Use the existing Firebase app
}

// Function to get all tasks
export const getTasks = async () => {
  const snapshot = await firebase.database().ref('tasks').once('value');
  const data = snapshot.val() || {};
  return Object.keys(data).map(key => ({
    taskId: key,
    ...data[key],
  }));
};

// Function to add a task
export const addTask = async (task) => {
  const taskRef = firebase.database().ref('tasks').push();
  await taskRef.set(task);
};

// Function to update task status
export const updateTaskStatus = async (taskId, completed) => {
  const taskRef = firebase.database().ref(`tasks/${taskId}`);
  await taskRef.update({ completed: !completed });
};
