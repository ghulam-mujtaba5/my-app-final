// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import getRecommendation from '../utils/tensorFlowLite';
import CourseCard from '../components/CourseCard';

const HomeScreen = () => {
  const [recommendedCourses, setRecommendedCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Fetch user data (e.g., progress, preferences)
    const userData = [/* some mock data representing user's preferences or progress */];

    // Model URL (it could be hosted on your Firebase, AWS, or other platforms)
    const modelUrl = 'https://your-server-url.com/model/model.tflite';

    // Get recommendations from the model
    const fetchRecommendations = async () => {
      setLoading(true);
      const recommendations = await getRecommendation(userData, modelUrl);
      setRecommendedCourses(recommendations);
      setLoading(false);
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <Text>Loading Recommendations...</Text>;
  }

  return (
    <View>
      <Text>Recommended Courses</Text>
      <FlatList
        data={recommendedCourses}
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
