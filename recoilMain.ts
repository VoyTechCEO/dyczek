import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const siteThemeState = atom({
  key: `siteThemeState`,
  default: ``,
});

const isLangBtnClosedState = atom({
  key: `isLangBtnClosedState`,
  default: false,
});

const isUserLoggedInState = atom({
  key: `isUserLoggedIn`,
  default: false,
});

const isAppLoadedState = atom({
  key: `isAppLoaded`,
  default: false,
});

export {
  siteThemeState,
  isLangBtnClosedState,
  isUserLoggedInState,
  isAppLoadedState,
};
