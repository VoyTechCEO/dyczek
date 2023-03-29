import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
import Link from 'next/link';
import SubNavItem from '../../../interfaces/subNavItem';

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  const recommendedLinksList: SubNavItem[] = [
    {
      name: `Akademia Chiropraktyki`,
      link: `/akademia_chiropraktyki`,
    },
    {
      name: `Chiropraktycy polscy`,
      link: `http://www.chiropraktycy.pl/`,
    },
    {
      name: `Akupunktura i chiropraktyka - Henryk Dyczek`,
      link: `/akupunktura_chiropraktyka`,
    },
    {
      name: `Akupunktura Kosmetyczna`,
      link: `/akupunktura_kosmetyczna`,
    },
    {
      name: `Szlachetne Zdrowie`,
      link: `/szlachetne_zdrowie`,
    },
  ];

  const otherLinksList: SubNavItem[] = [
    {
      name: `Wielka Księga Tao, Lao Tzu`,
      link: `http://www.mybook.pl/5/0/search/tao`,
    },
    {
      name: `Introduction to Taoizm`,
      link: `http://taoism.about.com/od/taoism101/p/Intro.htm`,
    },
    {
      name: `Yi Jing (the Book of Changes), also known as I Ching`,
      link: `http://universeyi.org/Yi_Jing_EN/reducfallacy.htm`,
    },
    {
      name: `Classical Chinese Medicine - About us`,
      link: `http://www.classicalchinesemedicine.org/aboutus.htm`,
    },
    {
      name: `Classical Chinese Medicine - Science of symbols`,
      link: `http://www.classicalchinesemedicine.org/scienceofsymbols/index.htm`,
    },
    {
      name: `China Culture Centre`,
      link: `http://www.chinaculturecenter.org/academics/index.php`,
    },
    {
      name: `Dao of Chinese Medicine: Understanding an Ancient Healing Art`,
      link: `http://www.amazon.com/Dao-Chinese-Medicine-Understanding-Ancient/dp/0195921046`,
    },
    {
      name: `Taoism & Sexuality`,
      link: `http://www.ofspirit.com/rachelcarltonabrams1.htm`,
    },
    {
      name: `Neidan - Traditional Meditative Practice`,
      link: `http://www.literati-tradition.com/meditative_practice.html`,
    },
    {
      name: `Tao of Healing Love`,
      link: `http://www.taomotion.com/en/articles/tao-of-healing-love-feb-2003/`,
    },
    {
      name: `Emotional Mastery`,
      link: `http://www.tandao.com/2009/09/14/emotional-mastery/`,
    },
    {
      name: `The Seven Dao Alchemy Formulas of the Immortal Self`,
      link: `http://www.healingdao.com/tao_alchemy_formulas.html`,
    },
    {
      name: `Chinese Medicinal Cuisine`,
      link: `http://food.chinese.cn/en/node_605.htm`,
    },
    {
      name: `Needham Research Institute`,
      link: `http://www.nri.org.uk/index.html`,
    },
    {
      name: `Tao of Wellness`,
      link: `http://www.taoofwellness.com/history.htm`,
    },
    {
      name: `Universal Healing Tao`,
      link: `http://www.universal-tao.com/article/through-power-inner-smile.html`,
    },
    {
      name: `The Complete I Ching: The Definitive Translation by the Taoist Master Alfred Huang`,
      link: `http://www.amazon.com/s/ref=rdr_ext_aut?_encoding=UTF8&index=books&field-author=Taoist%20Master%20Alfred%20Huang`,
    },
    {
      name: `Dr and Master Zhi Gang Sha`,
      link: `http://www.drsha.com/index.php?id=575,%20http://www.thetaobums.com/index.php?showtopic=8427`,
    },
  ];

  return (
    <>
      <HeadSet
        title={pageSpecs.title}
        keywords={pageSpecs.keywords}
        desc={pageSpecs.description}
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>Polecane serwisy</h1>
            <ul className='dashed'>
              {recommendedLinksList.map((item) => {
                return (
                  <li key={`${item}recommended`}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
            <h1>Pozostałe linki</h1>
            <ul className='dashed'>
              {otherLinksList.map((item) => {
                return (
                  <li key={`${item}recommended`}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default IMO;
