import React from 'react';
import articleContentStyles from './articleContent.module.css';

interface Props {
  children: JSX.Element;
}

const ArticleContent = ({ children }: Props) => {
  return (
    <>
      <article className={`container ${articleContentStyles.container}`}>
        {children}
      </article>
    </>
  );
};

export default ArticleContent;
