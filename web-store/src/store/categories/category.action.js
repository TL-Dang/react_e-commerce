import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utility/reducer/reducer.utils';

export const setCategories = function (categoriesArray) {
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
