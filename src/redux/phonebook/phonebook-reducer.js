import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  onSubmitHandler,
  onDeleteUser,
  changeFilter,
} from './phonebook-actions';
// import {
//   ON_SUBMIT_HANDLER,
//   ON_DELETE_USER,
//   CHANGE_FILTER,
// } from './phonebook-types';

const itemsReducer = createReducer([], {
  [onSubmitHandler]: (state, action) => {
    console.log(state);
    const { name, number } = action.payload;

    const nameSearch = state.find(user => user.name === name);
    const numberSearch = state.find(user => user.number === number);

    if (nameSearch || numberSearch) {
      alert('Номер или имя уже есть в базе');
    } else {
      const userId = nanoid();
      return [...state, { id: userId, name: name, number: number }];
    }
    return state;
  },

  [onDeleteUser]: (state, action) =>
    state.filter(user => user.id !== action.payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const phonebookReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default phonebookReducer;

// const itemsReducer = (state = localStorageContacts, { type, payload }) => {
//   switch (type) {
//     case ON_SUBMIT_HANDLER:
//       const { name, number } = payload;
//       const nameSearch = state.find(user => user.name === name);
//       const numberSearch = state.find(user => user.number === number);

//       if (nameSearch || numberSearch) {
//         alert('Номер или имя уже есть в базе');
//       } else {
//         const userId = nanoid();
//         return [...state, { id: userId, name: name, number: number }];
//       }
//       return state;

//     case ON_DELETE_USER:
//       return state.filter(user => user.id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
