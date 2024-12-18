// src/components/TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggleCompletion }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onToggleCompletion(task.taskId, task.completed)}
      >
        <Text style={styles.buttonText}>
          {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default TaskItem;
