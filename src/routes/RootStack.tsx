import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';

export type StackParamList = {
    Home: undefined;
    Detail: { idMovie: number };
  };

const Stack = createNativeStackNavigator<StackParamList>();

function RootStack(): ReactNode{
    return (
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={MovieList} />
            <Stack.Screen name="Detail" component={MovieDetail} initialParams={{ idMovie: 1 }}/>
          </Stack.Navigator>
      );
}

export default RootStack;