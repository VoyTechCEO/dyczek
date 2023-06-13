import React, { useState } from 'react';
import adminPassFrameStyles from './adminPassFrame.module.css';
import { useRouter } from 'next/router';

const AdminPassFrame = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={`container ${adminPassFrameStyles.container}`}>
        <form className={adminPassFrameStyles.frame} onSubmit={onSubmit}>
          <button
            className={adminPassFrameStyles.back}
            onClick={() => router.back()}
          >{`< Wróć`}</button>
          <p>Wprowadź hasło:</p>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className={adminPassFrameStyles.confirm} type='submit'>
            Zatwierdź
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminPassFrame;
