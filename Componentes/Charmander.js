import React from 'react';
import { View, Image } from 'react-native';
import estilo from './styles';

import TelaCharmander from '../img/charmander.png';

export default function Charmander () {
  return (
       <View style={estilo.container}>
      <Image style={estilo.imagem} source={TelaCharmander}/>
    </View>
  );
}