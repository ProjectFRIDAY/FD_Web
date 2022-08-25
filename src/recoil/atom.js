import { atom } from 'recoil';

export const menuAtom = atom({
  key: 'menuState',
  default: 1,
});

export const prjState = atom({
  key: 'prjState',
  default: '웹사이트',
});

export const visibleState = atom({
  key: 'visibleState',
  default: false,
});
