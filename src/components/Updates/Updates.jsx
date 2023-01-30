import styles from './Updates.module.scss';
import { useContext } from 'react';
import { Context } from '../../context';

const Updates = () => {
  const {
    getUpdate,
    emailUpdate,
    setEmailUpdate,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    insta_ac,
    setInsta_ac,
  } = useContext(Context);

  return (
    <div className={styles.updates__wrapper}>
      <h1>Get regular update</h1>
      <form autoComplete='on' method='post' onSubmit={getUpdate}>
        <input
          type='email'
          placeholder='Your email'
          value={emailUpdate}
          onChange={(e) => setEmailUpdate(e.target.value)}
          required={true}
        />
        <input
          type='text'
          placeholder='Your first name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required={true}
        />
        <input
          type='text'
          placeholder='Your last name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required={true}
        />
        <input
          type='text'
          placeholder='Your Instagram username'
          value={insta_ac}
          onChange={(e) => setInsta_ac(e.target.value)}
          required={true}
        />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
};

export default Updates;
