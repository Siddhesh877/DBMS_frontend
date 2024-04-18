// store.js
import {create} from 'zustand';

const useToken = create((set) => ({
  token: null,
  setToken: (token) => set({ token: token || null }),
}));

export default useToken;