import axios from 'axios';
import clsx from 'clsx';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';

import { bookApi } from '@/api/api';
import volume from '@/api/books';
import MultiCarousel from '@/components/carousel/Carousel';
import TrendingCuration from '@/components/curations/Trending';
import { TextField } from '@/components/Fields';
import Footer from '@/components/Footer';
import { useKeyPressEnter } from '@/hooks/onKeyPress';
import useWindowDistance from '@/hooks/useHideOnScroll';
import useOnScroll from '@/hooks/useOnScroll';
import { Item } from '@/typings/books';

const Home: NextPage = () => {
  return (
    <div>
      <div className="mt-6">
        <TrendingCuration />
      </div>

      <div className="mt-6">
        <TrendingCuration />
      </div>
    </div>
  );
};

export default Home;
