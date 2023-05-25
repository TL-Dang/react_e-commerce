import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utility/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utility/firebase/firebase.utility';

export const fetchCategoriesStart = function () {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = function (categoriesArray) {
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailure = function (error) {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

//the thunk, common practice to end thunk function names w/ 'Async'
export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
