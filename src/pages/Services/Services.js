import React from 'react';
import { InfoSection, Pricing, BusinessSuiteTwo } from '../../components';
import { businessSuiteTwo, businessSuiteThree } from './Data';

function Services() {
  return (
    <>
      <InfoSection {...businessSuiteTwo} />
      <BusinessSuiteTwo {...businessSuiteThree}/>
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  );
}

export default Services;