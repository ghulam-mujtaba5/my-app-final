// hooks/useFetchCourses.ts
import { useState, useEffect } from 'react';
import { firestore } from '../utils/firebaseConfig';

const useFetchCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await firestore.collection('courses').get();
        const data = snapshot.docs.map(doc => doc.data());
        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading };
};

export default useFetchCourses;
