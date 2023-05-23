import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utility/reducer/reducer.utils';

export const setCurrentUser = function (user) {
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
