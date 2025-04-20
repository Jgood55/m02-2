import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const PlanetsScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlanets = async () => {
    try {
      const response = await fetch('https://swapi.tech/api/planets/');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error('Failed to load planets:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loading} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loading: { flex: 1, justifyContent: 'center' },
  item: { fontSize: 18, paddingVertical: 8 },
});

export default PlanetsScreen;
