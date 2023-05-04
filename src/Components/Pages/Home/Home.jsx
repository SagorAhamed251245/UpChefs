import React from 'react';
import Banner from '../../layout/Banner/Banner';
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';
import RecipesCard from '../ChefDetails/RecipesCard';
import HomeRecipesCard from './HomeRecipesCard';
import Marquee from 'react-fast-marquee';
import UserReview from './UserReview';

const Home = () => {
  const allChefs = useLoaderData()

  return (
    <section className='w-[90%] mx-auto font-Playfair mt-5 '>
      <Banner></Banner>
      <div>
        <p className=' text-center my-24 text-4xl font-bold'>Our Available Chef</p>
      </div>
      <div className='flex  flex-wrap items-center justify-center md:justify-between gap-5 mt-10 mb-10'>

        {
          allChefs.map(chef => <ChefCard
            key={chef.id}
            chef={chef}
          ></ChefCard>)
        }
      </div>

      <div>
        <p className=' text-center my-24 text-4xl font-bold'>Featured Recipes </p>
      </div>
      <Marquee
        gradient
        gradientWidth={'10px'}
        direction='right'
        style={{ display: 'flex', gap: '20px', border: 'rounded' }}
      >
        <HomeRecipesCard></HomeRecipesCard>
      </Marquee>
      
      <div>
        <p className=' text-center my-24 text-4xl font-bold'>Client Review</p>
      </div>


      <Marquee gradient
        gradientWidth={'10px'}
        direction='left'
        style={{ display: 'flex', gap: '20px', border: 'rounded' }}
        >
        <div className='flex gap-5 justify-evenly w-full'>
          <UserReview >

          </UserReview>
          <UserReview >

          </UserReview>
          <UserReview >

          </UserReview>
          <UserReview >

          </UserReview>
        </div>
      </Marquee>
      





    </section>
  );
};

export default Home;