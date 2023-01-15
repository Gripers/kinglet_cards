import paint from '../../assets/images/brush.svg';
import order from '../../assets/images/local_shipping.svg';
import draw from '../../assets/images/draw.svg';
import stars from '../../assets/images/preferences.svg';

const how_array = [
  {
    id: 1,
    pic: paint,
    title: 'Design your card',
    des: 'Choose a metal, personalize & upload your design with our user-friendly card builder',
  },
  {
    id: 2,
    pic: order,
    title: 'Send us your card',
    des: 'Wait for your email confirmation with shipping instructions to mail your old card',
  },
  {
    id: 3,
    pic: draw,
    title: 'We create your card',
    des: 'Upon arrival, we transfer your information onto your new metal card',
  },
  {
    id: 4,
    pic: stars,
    title: 'Luxury Begins',
    des: 'Both your old & new metal card will be shipped back to you within 24 hours of receiving',
  },
];

export default how_array;
