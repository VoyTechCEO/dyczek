import { atom } from 'recoil';
import AkademiaTraining from '@/interfaces/akademiaTraining';

const siteThemeState = atom({
  key: `siteThemeState`,
  default: ``,
});

const isLangBtnClosedState = atom({
  key: `isLangBtnClosedState`,
  default: false,
});

const isUserLoggedInState = atom({
  key: `isUserLoggedInState`,
  default: false,
});

const isAppLoadedState = atom({
  key: `isAppLoadedState`,
  default: false,
});

const advancedNoticesListState = atom({
  key: `advancedNoticesListState`,
  default: [
    {
      date: '',
      content: '',
    },
  ] as AkademiaTraining[],
});

export {
  siteThemeState,
  isLangBtnClosedState,
  isUserLoggedInState,
  isAppLoadedState,
  advancedNoticesListState,
};
