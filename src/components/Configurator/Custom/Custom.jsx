import { useContext } from 'react';
import styles from '../global.module.scss';

import { Context } from '../../../context';

const Custom = () => {
  const { setText, setImage } = useContext(Context);

  const handleChange = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setImage(url);
  };

  return (
    <div className={styles.base__wrapper}>
      <form>
        <h3>Text</h3>
        <input
          type='text'
          placeholder='Text'
          maxLength={20}
          onChange={(event) => setText(event.target.value)}
        />
        <h3>Your design</h3>
        <label htmlFor='file_input' className={styles.cus_label}>
          Choose file
        </label>
        <input id='file_input' type='file' onChange={handleChange} />
      </form>
    </div>
  );
};

export default Custom;
