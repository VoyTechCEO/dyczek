import React, { useState } from 'react';
import adminPassFrameStyles from './adminPassFrame.module.css';
import { useRouter } from 'next/router';

const AdminPassFrame = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
        }),
      });
      const data = res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
