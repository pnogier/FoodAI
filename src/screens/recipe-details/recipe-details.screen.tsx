import axios from 'axios';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Button from '../../components/button/button.component';
import {
  RANDOM_RECIPE_SUGGESTION_CONTEXT,
  REGENERATE,
} from '../../constants/contexts.contants';
import {Body, Paragraph} from '../../styles/base.style';
import * as SC from './recipe-details.style';

const RecipeDetailsScreen = ({route}) => {
  const {t} = useTranslation();
  const {message} = route.params;
  const [recipe, setRecipe] = useState(message.content);

  const handleAskGpt = () => {
    console.log('onemore');
    axios
      .post(`http://localhost:3001/askGpt`, {
        messages: [
          ...RANDOM_RECIPE_SUGGESTION_CONTEXT['fr'],
          message,
          REGENERATE['fr'],
        ],
      })
      .then(({data}) => {
        setRecipe(data.content);
      })
      .catch(error => {});
  };

  return (
    <SC.RecipeDetailsScreen>
      <Paragraph>{recipe}</Paragraph>
      <Button onPress={handleAskGpt}>
        <Body color="white">
          {t('screens.home.generate-random-recipe.button')}
        </Body>
      </Button>
    </SC.RecipeDetailsScreen>
  );
};

export default RecipeDetailsScreen;
