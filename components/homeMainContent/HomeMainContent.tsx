import Link from 'next/link';
import React from 'react';
import homeMainContentStyles from './homeMainContent.module.css';

interface Company {
  name: string;
  text: string;
  span?: string;
  link?: string;
}

const HomeMainContent = () => {
  const companies: Company[] = [
    {
      name: `Traditional Acupuncture Society`,
      text: `(członek zwyczajny 1990 – 1995)`,
      span: `Zastąpione przez British Acupuncture Council`,
    },
    {
      name: `British Acupuncture Council`,
      text: `(członek zwyczajny 1995 – 2018)`,
      link: `https://acupuncture.org.uk/`,
    },
    {
      name: `British Association of Applied Chiropractic`,
      text: `(członek zwyczajny 1995 – 2018)`,
      span: `Już nie istnieje`,
    },
    {
      name: `Stowarzyszeniu „Chiropraktycy Polscy”`,
      text: `KRS 0000082388 (pomysłodawca i założyciel, prezes od 2002 i prezes honorowy od 2022)`,
      link: `http://www.chiropraktycy.pl/`,
    },
    {
      name: `Polskim Towarzystwie Medycyny Manualnej`,
      text: `(członek zwyczajny od 1998)`,
      link: `#test`,
    },
    {
      name: `Polskiego Stowarzyszenia Akupunkturzystów Zawodowych`,
      text: `(członek Komisji Rewizyjnej do 2018)`,
    },
  ];

  return (
    <>
      <div className={`container ${homeMainContentStyles.container}`}>
        <article className={homeMainContentStyles.frame}>
          <div className={homeMainContentStyles.edge} />
          <p>
            Nazywam się Henryk Dyczek. <br />
            <br />
            Jestem dyplomowanym Akupunkturzystą i Chiropraktykiem zrzeszonym w:
          </p>
          <ul>
            {companies.map((item, index) => {
              return (
                <li key={`${item.name}${index}`}>
                  <strong>{item.name}</strong>
                  {` `}
                  {item.text}.{` `}
                  {item.span ? <span>{item.span}</span> : ``}
                  {` `}
                  {item.link ? <a href={item.link}>Zobacz</a> : ``}
                </li>
              );
            })}
          </ul>
          <p>Jestem również pomysłodawcą i założycielem:</p>
          <ul>
            <li>
              <strong>Akademii Chiropraktyki</strong> -{' '}
              <Link href='/akademia_chiropraktyki'>Zobacz</Link>
            </li>
            <li>
              <strong>Szkoły Akupunktury Tradycyjnej</strong> -{' '}
              <a href='#test'>Zobacz</a>
            </li>
          </ul>
          <p>
            Utworzyłem{' '}
            <Link href='/instytut_medycyny_orientalnej'>
              <strong>Instytut Medycyny Orientalnej</strong>
            </Link>{' '}
            dla stworzenia wiarygodnego źródła i informacji dotyczącej nauki i
            sztuki Dalekiego Wschodu. <br /> <br />
            Zapraszam do zapoznania się formami mojej działalności, klikając na
            poszczególne ikony.
          </p>
          <div className={homeMainContentStyles.edge} />
        </article>
      </div>
    </>
  );
};

export default HomeMainContent;
