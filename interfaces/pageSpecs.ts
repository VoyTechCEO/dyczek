import SocialIcons from '../interfaces/socialIcons';
import SubNavItem from '../interfaces/subNavItem';

export default interface PageSpecs {
  name: string;
  subNavContent: SubNavItem[];
  title: string;
  keywords: string;
  description: string;
  sinceYear: number;
  socialIcons?: SocialIcons[];
}
