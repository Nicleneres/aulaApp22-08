import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaBulbasaur from './Componentes/Bulbasaur';
import TelaPikachu from './Componentes/Pikachu';
import TelaCharmander from './Componentes/Charmander';
import TelaPidgeot from './Componentes/Pidgeot';
import TelaRattata from './Componentes/Rattata';


const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Bulbasaur' component={TelaBulbasaur}/>
        <Drawer.Screen name='Pikachu' component={TelaPikachu}/>
        <Drawer.Screen name='Charmander' component={TelaCharmander}/>
        <Drawer.Screen name='Pidgeot' component={TelaPidgeot}/>
        <Drawer.Screen name='Rattata' component={TelaRattata}/>
        
      </Drawer.Navigator>

      {/* <BottomTab.Navigator>
        <BottomTab.Screen name='Home' component={telaHom}/>
        <BottomTab.Screen name='Descrição' component={telaDescricao}/>
        <BottomTab.Screen name='Biblioteca' component={telaBiblioteca}/>
        <BottomTab.Screen name='Rota' component={telaRota}/>
      </BottomTab.Navigator> */}

    </NavigationContainer>
  );
}
