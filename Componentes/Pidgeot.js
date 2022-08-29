import React from 'react';
import { View, Image} from 'react-native';
import estilo from './styles';

import TelaPidgeot from '../img/pidgeot.png';

export default function Pidgeot () {
  return (
    <View style={estilo.container}>
      <Image style={estilo.imagem} source={TelaPidgeot}/>
    </View>
  );
}