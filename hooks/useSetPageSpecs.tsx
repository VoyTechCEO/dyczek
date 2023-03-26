import { useRouter } from 'next/router';
import pageSpecsList from '../utils/pageSpecsList';
import PageSpecs from '../interfaces/pageSpecs';

const useSetSubNavContent = () => {
  const router = useRouter();

  let pageSpecs!: PageSpecs;

  if (router.pathname.includes(`/akademia_chiropraktyki`)) {
    pageSpecs = pageSpecsList!.find((item) => item.name === `akademiaCh`)!;
  } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
    pageSpecs = pageSpecsList!.find((item) => item.name === `akuChiro`)!;
  } else if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
    pageSpecs = pageSpecsList!.find((item) => item.name === `imo`)!;
  }

  return pageSpecs;
};

export default useSetSubNavContent;
