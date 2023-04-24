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

export { siteThemeState, isLangBtnClosedState };
