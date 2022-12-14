import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value:
      window.sessionStorage.isMySessionActive &&
      localStorage.getItem('usuarioLogado')
        ? JSON.parse(localStorage.getItem('usuarioLogado'))
        : null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('usuarioLogado', JSON.stringify(state.value));
    },
    logout: state => {
      state.value = null;
      localStorage.removeItem('usuarioLogado');
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.value;

export default userSlice.reducer;