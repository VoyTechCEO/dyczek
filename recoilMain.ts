import { TFunction } from 'i18next';
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
