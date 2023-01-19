import { createContext, useState } from 'react';

import Base from './components/Configurator/Base/Base';

import gold_24k from './assets/images/24k-gold.png';
import american_dream2 from './assets/images/american_dream2.png';
import bitcoin_1 from './assets/images/bitcoin_1.png';
import donald_duck_rose from './assets/images/donald_duck_rose.png';
import american_dream3 from './assets/images/american_dream3.png';
import bitcoin_2 from './assets/images/bitcoin_2.png';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [name, setName] = useState('kinglet');
  const [component, setComponent] = useState(<Base type='base' />);
  const [namePosition, setNamePosition] = useState(0);
  const [minDataPosition, setMinDataPosition] = useState(0);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Movies',
    },
    {
      id: 3,
      name: 'Anime',
    },
    {
      id: 4,
      name: 'Zodiac Signs',
    },
    {
      id: 5,
      name: 'Profession',
    },
    {
      id: 6,
      name: 'Unique-Highrollers',
    },
    {
      id: 7,
      name: 'Animals',
    },
    {
      id: 8,
      name: 'Crypto',
    },
    {
      id: 9,
      name: 'Cars',
    },
    {
      id: 10,
      name: 'Exclusive club',
    },
    {
      id: 11,
      name: 'Superhero',
    },
    {
      id: 12,
      name: 'Luxury',
    },
  ];

  const cards = [
    {
      id: 1,
      img: gold_24k,
      name: 'Darth Vader',
    },
    {
      id: 2,
      img: american_dream2,
      name: 'American dream 2',
    },
    {
      id: 3,
      img: bitcoin_1,
      name: 'Bitcoin 1',
    },
    {
      id: 4,
      img: donald_duck_rose,
      name: 'Donald Duck Dollars',
    },
    {
      id: 5,
      img: american_dream3,
      name: 'American dream 3',
    },
    {
      id: 6,
      img: bitcoin_2,
      name: 'Bitcoin 2',
    },
  ];

  return (
    <Context.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        categories,
        cards,
        name,
        setName,
        component,
        setComponent,
        namePosition,
        setNamePosition,
        minDataPosition,
        setMinDataPosition,
        text,
        setText,
        image,
        setImage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
