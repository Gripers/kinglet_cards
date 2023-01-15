import styles from './Testimonials.module.scss';

import ReactOwlCarousel from 'react-owl-carousel';

import testimonials_array from './arr';
import carousel_config from './carousel_config';

const Testimonials = () => {
  return (
    <div className={styles.testimonials__wrapper}>
      <h1>Testimonials</h1>
      <ReactOwlCarousel
        {...carousel_config}
        className={styles.testimonials__carousel}
      >
        {testimonials_array.map((item) => (
          <div style={{ height: '100%' }}>
            <div
              className={styles.testimonials__carousel_item}
              style={{ height: '100%' }}
            >
              <p>{item.content}</p>
            </div>
            <button>{item.author}</button>
          </div>
        ))}
      </ReactOwlCarousel>
    </div>
  );
};

export default Testimonials;
