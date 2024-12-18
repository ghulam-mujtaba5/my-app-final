
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Modal,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [isLoading, setIsLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, [currentScreen]);

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const HomeScreen = () => (
    <Animated.View style={[styles.screen, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Welcome to the Learning App</Text>
      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626935.jpg' }}
        style={styles.image}
      />
      <Text style={styles.subtitle}>Your journey to knowledge starts here.</Text>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => setCurrentScreen('Recommendation')}
      >
        <Text>Recommendations</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => setCurrentScreen('Registration')}
      >
        <Text>Registration</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => setCurrentScreen('Profile')}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  const RecommendationScreen = () => {
    const recommendations = [
      { title: 'React Native', description: 'Learn the basics of mobile app development' },
      { title: 'TypeScript', description: 'Improve your JavaScript with type safety' },
      { title: 'GraphQL', description: 'Explore efficient data querying' },
    ];

    return (
      <Animated.View style={[styles.screen, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Recommended Topics</Text>
        {recommendations.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => setCurrentScreen('Home')}
        >
          <Text>Back to Home</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const RegistrationScreen = () => {
    return (
      <Animated.View style={[styles.screen, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Registration</Text>
        <Text style={styles.subtitle}>Enter your details to sign up</Text>
        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <Text>Enter your full name</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <Text>Enter your email address</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Password</Text>
          <Text>Enter your password</Text>
        </View>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => setIsLoading(true)}
        >
          <Text>Submit Registration</Text>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator size="large" color="#007BFF" />}
      </Animated.View>
    );
  };

  const ProfileScreen = () => {
    const profileData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      coursesCompleted: 5,
      recommendations: 3,
    };

    return (
      <Animated.View style={[styles.screen, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Personal Details</Text>
        <Text>Name: {profileData.name}</Text>
        <Text>Email: {profileData.email}</Text>
        <Text>Courses Completed: {profileData.coursesCompleted}</Text>
        <Text>Recommendations: {profileData.recommendations}</Text>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => setCurrentScreen('Home')}
        >
          <Text>Back to Home</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Recommendation':
        return <RecommendationScreen />;
      case 'Registration':
        return <RegistrationScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {renderScreen()}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Recommendation')}>
          <Text style={styles.navText}>Recommendation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Registration')}>
          <Text style={styles.navText}>Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  optionButton: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDescription: {
    color: '#555',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  inputContainer: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    width: '80%',
    alignItems: 'flex-start',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default App;
