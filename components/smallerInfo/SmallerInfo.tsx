import React from 'react';
import smallerInfoStyles from './smallerInfo.module.css';

const SmallerInfo = () => {
  return (
    <div className={`container ${smallerInfoStyles.container}`}>
      <p>
        Informacja zawarta na stronach internetowych Instytutu Medycyny
        Orientalnej ma charakter wyłącznie edukacyjny w związku z czym Instytut
        nie ponosi odpowiedzialności za to w jaki sposób informacja zawarta na
        tych stronach jest używana. Instytut Medycyny Orientalnej nie
        diagnozuje, nie leczy, nie przepisuje leków, oraz nie rekomenduje
        sposobu leczenia choroby jak to ma miejsce w medycynie ortodoksyjnej
        (konwencjonalnej). Informacja a zawarta na tych stronach nie jest
        przeznaczona do diagnozowania, leczenia i profilaktyki.
      </p>
    </div>
  );
};

export default SmallerInfo;
