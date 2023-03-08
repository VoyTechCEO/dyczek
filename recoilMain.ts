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

export { siteThemeState };
