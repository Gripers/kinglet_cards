import styles from './Testimonials.module.scss';
import ReactOwlCarousel from 'react-owl-carousel';
import carousel_config from './carousel_config';
import { useContext } from 'react';
import { Context } from '../../context';

const Testimonials = () => {
  const { testimonials } = useContext(Context);

  return (
    <div className={styles.testimonials__wrapper}>
      <h1>Testimonials</h1>
      <ReactOwlCarousel
        {...carousel_config}
        className={styles.testimonials__carousel}
      >
        {testimonials.map((el) => (
          <div style={{ height: '100%' }} key={el.id}>
            <div className={styles.testimonials__carousel_item}>
              <p>{el.comment}</p>
            </div>
            <button>{el.author}</button>
          </div>
        ))}
      </ReactOwlCarousel>
    </div>
  );
};

export default Testimonials;
