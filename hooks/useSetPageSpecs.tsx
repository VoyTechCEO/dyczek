import { useRouter } from 'next/router';
import SubNavItem from '../interfaces/subNavItem';
import pageSpecsList from '../utils/pageSpecsList';

const useSetSubNavContent = () => {
  const router = useRouter();

  let subNavContent: SubNavItem[] = [];
  let description = ``;

  if (router.pathname.includes(`/akademia_chiropraktyki`)) {
    subNavContent = pageSpecsList!.find(
      (item) => item.name === `akademiaCh`
    )!.subNavContent;
  } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
    subNavContent = pageSpecsList!.find(
      (item) => item.name === `akuChiro`
    )!.subNavContent;
  } else if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
    subNavContent = pageSpecsList!.find(
      (item) => item.name === `imo`
    )!.subNavContent;
  }

  return { subNavContent };
};

export default useSetSubNavContent;
