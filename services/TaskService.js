import database from '@react-native-firebase/database';

// Function to add a new task
const addTask = async () => {
  try {
    const taskRef = database().ref('tasks'); // Reference to tasks node
    const newTaskRef = taskRef.push(); // Automatically generates a unique taskId
    
    // Set the task data
    await newTaskRef.set({
      title: 'Task 1',
      description: 'Description of Task 1',
      completed: false,
    });
    console.log('Task added successfully!');
  } catch (error) {
    console.error('Error adding task: ', error);
  }
};
