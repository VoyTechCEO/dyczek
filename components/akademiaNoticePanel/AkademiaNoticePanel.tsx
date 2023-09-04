import React from 'react';
import akademiaNoticePanelStyles from './akademiaNoticePanel.module.css';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { advancedNoticesListState, isUserLoggedInState } from '@/recoilMain';
import { useSpring } from '@react-spring/web';
import { animated } from '@react-spring/web';

interface Props {
  id: string;
  title: string;
  desc: string;
  date: string;
}

const AkademiaNoticePanel = ({ id, title, desc, date }: Props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] =
    useRecoilState(isUserLoggedInState);
  const [advancedNoticesList, setAdvancedNoticesList] = useRecoilState(
    advancedNoticesListState
  );

  const deleteNotice = async () => {
    try {
      await fetch(`https://dyczek.netlify.app/api/notices/advanced/${id}`, {
        method: `DELETE`,
      });
      const newList = advancedNoticesList.filter((item) => {
        return item.id !== id;
      });
      setAdvancedNoticesList(newList);
    } catch (err) {
      console.log(err);
    }
  };

  // animations
  const [hoverPanel, animateHoverPanel] = useSpring(() => ({
    from: { top: `0` },
  }));

  return (
    <>
      <animated.li
        className={`container ${akademiaNoticePanelStyles.container}`}
        style={hoverPanel}
        onMouseOver={() =>
          animateHoverPanel.start({
            top: `-1rem`,
          })
        }
        onMouseOutCapture={() =>
          animateHoverPanel.start({
            top: `0`,
          })
        }
      >
        <Link
          className={`container ${akademiaNoticePanelStyles.container}`}
          href={`/akademia_chiropraktyki/szkolenie_zaawansowane/${id}#startView`}
        >
          <h4>{date}</h4>
          <h2>{title}</h2>
          <p>{desc}</p>
        </Link>
        {isUserLoggedIn && (
          <button
            className={akademiaNoticePanelStyles.delete}
            onClick={deleteNotice}
          >
            <svg
              width='15'
              version='1.1'
              viewBox='0 0 52.917 52.917'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='m16.734 43.194-9.7247 9.7221-7.0088-7.0088 19.444-19.449-19.444-19.449 7.0088-7.0088 19.449 19.444 19.449-19.444 7.0088 7.0088-19.444 19.449 19.444 19.449-7.0088 7.0088-19.449-19.444z'
                strokeWidth='.26458'
              />
            </svg>
          </button>
        )}
      </animated.li>
    </>
  );
};

export default AkademiaNoticePanel;
