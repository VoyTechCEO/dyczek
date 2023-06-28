import { useRouter } from 'next/router';
import pageSpecsList from '../utils/pageSpecsList';
import PageSpecs from '../interfaces/pageSpecs';
import { useTranslation } from 'next-i18next';

const useSetPageSpecs = () => {
  const router = useRouter();
  const { t } = useTranslation();

  let pageSpecs!: PageSpecs;

  if (router.pathname === `/`) {
    pageSpecs = pageSpecsList(t)!.find((item) => item.name === `homeDyczek`)!;
  } else if (router.pathname.includes(`/akademia_chiropraktyki`)) {
    pageSpecs = pageSpecsList(t)!.find((item) => item.name === `akademiaCh`)!;
  } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
    pageSpecs = pageSpecsList(t)!.find((item) => item.name === `akuChiro`)!;
  } else if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
    pageSpecs = pageSpecsList(t)!.find((item) => item.name === `imo`)!;
  } else if (router.pathname.includes(`/szlachetne_zdrowie`)) {
    pageSpecs = pageSpecsList(t)!.find((item) => item.name === `szlaZd`)!;
  } else if (router.pathname.includes(`/akupunktura_kosmetyczna`)) {
    pageSpecs = pageSpecsList(t)!.find((item) => item.name === `akuKos`)!;
  }

  return pageSpecs;
};

export default useSetPageSpecs;
