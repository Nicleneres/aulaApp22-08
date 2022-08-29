import React from 'react';
import { View, Image } from 'react-native';
import estilo from './styles';

import TelaRattata from '../img/Rattata.png';

export default function Rattata () {
  return (
     <View style={estilo.container}>
      <Image style={estilo.imagem} source={TelaRattata}/>
    </View>
  );
}