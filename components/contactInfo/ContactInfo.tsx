import React from 'react';
import { useTranslation } from 'next-i18next';

interface Contact {
  type: string;
}

const ContactInfo = () => {
  const { t } = useTranslation();
  const contact: Contact = t('main:contact', { returnObjects: true });

  return (
    <>
      <p>
        <b>Henryk Dyczek</b>
        <br />
        ul. Tulipanowa 6<br />
        87-134 Przysiek k. Torunia
        <br />
        {contact.type}: 56 6789 343
        <br />
        e-mail: <a href='mailto: henryk@dyczek.pl'>henryk@dyczek.pl</a>
      </p>
    </>
  );
};

export default ContactInfo;
