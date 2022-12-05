import React from 'react';
import {
  FlatList,
  View,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Film } from '../components/FIlm';
import data from '../data.json';

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = React.useState(data.results);

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FullFilm', { id: item.id, title: item.title, data: item })}>
            <Film title={item.title} imageUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
