//services\TaskRealTimeSync.js
// /services/TaskRealTimeSync.js
import { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';

const useTaskRealTimeSync = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksRef = database().ref('tasks'); // Reference to tasks node

    // Listen for real-time data
    const onValueChange = tasksRef.on('value', snapshot => {
      const data = snapshot.val();
      const tasksArray = [];

      for (const key in data) {
        tasksArray.push({
          taskId: key,
          ...data[key],
        });
      }

      setTasks(tasksArray); // Set tasks in state
    });

    // Cleanup listener on unmount
    return () => tasksRef.off('value', onValueChange);
  }, []); // Empty dependency array to run only once when component mounts

  return tasks;
};

export default useTaskRealTimeSync;
