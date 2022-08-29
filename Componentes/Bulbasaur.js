import React from 'react';
import { Text, View, Image} from 'react-native';
import estilo from './styles';

import TelaBulbasaur from '../img/Bulbasaur.png';

export default function Bulbasaur() {
  return (
    <View style={estilo.container}>
      <Image style={estilo.imagem} source={TelaBulbasaur}/>
    </View>
  );
}