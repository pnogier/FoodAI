import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import Button from '../../components/button/button.component';
import {RANDOM_RECIPE_SUGGESTION_CONTEXT} from '../../constants/contexts.contants';
import {push} from '../../navigation/RootNavigation';
import {
  HorizontalBox,
  H1,
  RoundedBox,
  Body,
  Caption,
} from '../../styles/base.style';
import * as SC from './home.style';

const HomeScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const handleAskGpt = () => {
    axios
      .post(`http://localhost:3001/askGpt`, {
        messages: RANDOM_RECIPE_SUGGESTION_CONTEXT['fr'],
      })
      .then(({data}) => {
        navigation.navigate('RecipeDetails', {message: data});
        console.log(data);
      })
      .catch(error => {});
  };

  const handleOnGenerateRandomRecipe = () => {
    handleAskGpt();
    console.log('random generation');
  };

  const handleOnGenerateRecipeFromCountry = () => {
    console.log('generation from country');
  };

  const handleOnSearchRecipe = () => {
    console.log('search');
  };

  const handleOnGenerateRecipeFromPantry = () => {
    console.log('from pantry');
  };

  return (
    <SC.HomeScreen>
      <HorizontalBox margin="0 0 24px 0">
        <H1>{t('screens.home.header.title')}</H1>
      </HorizontalBox>
      <RoundedBox margin="0 0 24px 0" padding="16px" backgroundColor="bisque">
        <Body margin="0 0 4px 0">
          {t('screens.home.generate-random-recipe.title')}
        </Body>
        <Caption margin="0 0 8px 0">
          {t('screens.home.generate-random-recipe.usage-warning.caption')}
        </Caption>
        <Button
          backgroundColor="darkolivegreen"
          onPress={handleOnGenerateRandomRecipe}
        >
          <Body color="white">
            {t('screens.home.generate-random-recipe.button')}
          </Body>
        </Button>
      </RoundedBox>
      <RoundedBox margin="0 0 24px 0" padding="16px" backgroundColor="bisque">
        <Body margin="0 0 4px 0">{t('screens.home.search-recipe.title')}</Body>
        <Caption margin="0 0 8px 0">
          {t('screens.home.search-recipe.usage-warning.caption')}
        </Caption>
        <Button backgroundColor="darkolivegreen" onPress={handleOnSearchRecipe}>
          <Body color="white">{t('screens.home.search-recipe.button')}</Body>
        </Button>
      </RoundedBox>
      <RoundedBox margin="0 0 24px 0" padding="16px" backgroundColor="bisque">
        <Body margin="0 0 8px 0">
          {t('screens.home.generate-recipe-from-country.title')}
        </Body>
        <Button
          backgroundColor="darkolivegreen"
          onPress={handleOnGenerateRecipeFromCountry}
        >
          <Body color="white">
            {t('screens.home.generate-recipe-from-country.button')}
          </Body>
        </Button>
      </RoundedBox>
      <RoundedBox margin="0 0 24px 0" padding="16px" backgroundColor="bisque">
        <Body margin="0 0 8px 0">
          {t('screens.home.generate-recipe-from-pantry.title')}
        </Body>
        <Button
          backgroundColor="darkolivegreen"
          onPress={handleOnGenerateRecipeFromPantry}
        >
          <Body color="white">
            {t('screens.home.generate-recipe-from-pantry.button')}
          </Body>
        </Button>
      </RoundedBox>
    </SC.HomeScreen>
  );
};

export default HomeScreen;
