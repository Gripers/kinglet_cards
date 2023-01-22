import { useContext, useEffect, useState } from 'react';
import './CreateOwn.scss';

import { useParams } from 'react-router-dom';

import { Context } from '../../context';
import Navbar from '../../components/Navbar/Navbar';
import Configurator from '../../components/Configurator/Configurator';

import chip from '../../assets/icons/chip.png';

const CreateOwn = () => {
  const { cards } = useContext(Context);

  const [detail, setDetail] = useState();
  const params = useParams();

  const currentCart = cards.find((el) => {
    return el.title == params.title;
  });

  // async function ll() {
  //     let g = await axios
  //         .get(`https://api.flakon.kannas.uz/bottles/${params.id}`)
  //     setDetail(g.data)
  // }

  useEffect(() => {
    // ll()
  }, []);

  return (
    <>
      <Navbar />
      <div className='current-cart'>
        <div
          className='cart'
          style={{ backgroundImage: `url(${currentCart?.image})` }}
        >
          <img className='chip' src={chip} alt='' />
        </div>
      </div>
      <Configurator type={currentCart?.type} />
    </>
  );
};

export default CreateOwn;
