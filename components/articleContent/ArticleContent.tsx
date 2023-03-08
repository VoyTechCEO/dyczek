import { siteThemeState } from '@/recoilMain';
import React from 'react';
import { useRecoilState } from 'recoil';
import articleContentStyles from './articleContent.module.css';

interface Props {
  children: JSX.Element;
}

const ArticleContent = ({ children }: Props) => {
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);

  return (
    <>
      <article
        className={`container ${articleContentStyles.container} ${
          siteTheme === `imo` ? articleContentStyles.imo : ``
        }`}
      >
        {children}
      </article>
    </>
  );
};

export default ArticleContent;
