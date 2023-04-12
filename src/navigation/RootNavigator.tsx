import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/home/home.screen';
import RecipeDetailsScreen from '../screens/recipe-details/recipe-details.screen';

const Stack = createNativeStackNavigator<any>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={'RecipeDetails'} component={RecipeDetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
