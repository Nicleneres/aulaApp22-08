import React from 'react';
import {View, Image } from 'react-native';
import estilo from './styles';

import TelaPikachu from '../img/Pikachu.png';

export default function Pikachu () {
  return (
          <View style={estilo.container}>
      <Image style={estilo.imagem} source={TelaPikachu}/>
    </View>
  );
}