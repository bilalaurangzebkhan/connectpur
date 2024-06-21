import React from 'react';
import { InfoSection, AppCards } from '../../components';
import { agricultureOne, agricultureTwo, agricultureThree, agricultureFour } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...agricultureOne} />
      <InfoSection {...agricultureThree} />
      {/* <AppCards /> */}
      <InfoSection {...agricultureTwo} />
      
      <InfoSection {...agricultureFour} />
    </>
  );
}

export default Products;