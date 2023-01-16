import styles from './Updates.module.scss';

const Updates = () => {
  return (
    <div className={styles.updates__wrapper}>
      <h1>Get regular update</h1>
      <form>
        <input type='email' placeholder='Yout email' />
        <input type='text' placeholder='Yout first name' />
        <input type='text' placeholder='Yout last name' />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
};

export default Updates;
