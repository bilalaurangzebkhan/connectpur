import React from 'react';
import { InfoSection, Pricing, Cards, BusinessSuite, Sustainable, AgricultureTwo } from '../../components';
// import Cards from '../../components/Cards/Cards';
import { businessSuiteOne, sustainableOne, agricultureOne, businessSuiteTwo } from './Data';

const Home = () => {
    return (
        <>
            <Cards />
            <BusinessSuite {...businessSuiteOne} />
            <InfoSection {...agricultureOne} />
            <Sustainable {...sustainableOne} />
            {/* <AgricultureTwo /> */}
            {/* <InfoSection {...businessSuiteTwo} /> */}
            {/* <InfoSection {...homeObjThree} /> */}
        </>
    )
}

export default Home;