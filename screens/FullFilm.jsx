import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';

const FilmImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const FilmView = styled.View`
  background-color: #374151;
  height: 100%;
`;

const FilmText = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 24px;
`;

export const FullFilmscreen = ({ route, navigation }) => {
  const { id, title, data } = route.params;

  return (
    <FilmView style={{ padding: 20 }}>
      <FilmImage source={{ uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` }} />
      <FilmText>Назва: {data.title}</FilmText>
      <FilmText>Дата виходу: {data.release_date}</FilmText>
      <FilmText>Оцінка: {data.vote_average}</FilmText>
      <FilmText>Опис: {data.overview}</FilmText>
    </FilmView>
  );
};
