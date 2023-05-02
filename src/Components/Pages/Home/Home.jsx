import React from 'react';
import Banner from '../../layout/Banner/Banner';
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const allChefs = useLoaderData()

    return (
      <section className='w-[90%] mx-auto font-Playfair mt-5 bg-[#012649]'>
        <Banner></Banner>
        
          <div className='flex  flex-wrap items-center justify-between gap-5 mt-10'>
              {
                allChefs.map(chef => <ChefCard
                key={chef.id}
                chef={chef}
                ></ChefCard>)
              }
          </div>
        
      </section>
    );
};

export default Home;