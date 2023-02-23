import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import HomeHeader from '@/components/homeHeader/HomeHeader';
import Footer from '@/components/footer/Footer';
import HomeMainContent from '@/components/homeMainContent/HomeMainContent';

export default function Home() {
  return (
    <>
      <HeadSet />
      <main id='main'>
        <HomeHeader />
        <MainNav />
        <HomeMainContent />
        <Footer sinceYear={2008} />
      </main>
    </>
  );
}
