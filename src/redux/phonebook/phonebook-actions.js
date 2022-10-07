import { createAction } from '@reduxjs/toolkit';
// import {
//   ON_SUBMIT_HANDLER,
//   ON_DELETE_USER,
//   CHANGE_FILTER,
// } from './phonebook-types';

export const onSubmitHandler = createAction('phonebook/submit');

// export const onSubmitHandler = info => {
//   return {
//     type: ON_SUBMIT_HANDLER,
//     payload: info,
//   };
// };

export const onDeleteUser = createAction('phonebook/delete');

// export const onDeleteUser = id => ({
//   type: ON_DELETE_USER,
//   payload: id,
// });

export const changeFilter = createAction('phonebook/filter');

// export const changeFilter = value => {
//   return {
//     type: CHANGE_FILTER,
//     payload: value,
//   };
// };
