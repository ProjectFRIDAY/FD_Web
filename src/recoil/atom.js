import { atom } from 'recoil';

export const menuAtom = atom({
  key: 'menuState',
  default: 1,
});

export const prjState = atom({
  key: 'prjState',
  default: 0,
});
