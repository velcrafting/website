import React from 'react';
import Hero from '../components/common/Hero'; // Adjust the path as necessary
import AppCardWork from '../components/common/WorkCard'; // Adjust the path as necessary
import AppCardOverview from '../components/common/OverviewCard'; // Adjust the path as necessary
import { Card } from 'flowbite-react';

function Home() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-[-50px] xl:mt-[-50px] md:mb-50p">
        <Hero />
        <div className="my-12 mt-[-50px] md:mt-[-45px] ">
          <Card>
            <AppCardOverview />
          </Card>
        </div>
        <div className="my-12 mt-[-20px] md:mt-[-25px] ">
          <Card>
            <AppCardWork />
          </Card>
        </div>
      </div>
    );
}

export default Home;
