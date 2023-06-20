import React from 'react';
import akademiaNoticePanelStyles from './akademiaNoticePanel.module.css';
import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  desc: string;
  date: string;
}

const AkademiaNoticePanel = ({ id, title, desc, date }: Props) => {
  return (
    <>
      <Link
        className={`container ${akademiaNoticePanelStyles.container}`}
        href={{
          pathname: `/akademia_chiropraktyki/szkolenie_zaawansowane/[notice]`,
          query: { notice: id },
        }}
      >
        <h4>{date}</h4>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Link>
    </>
  );
};

export default AkademiaNoticePanel;
