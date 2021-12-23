import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HiBookmark, HiHome, HiSearch, HiSupport, HiX } from 'react-icons/hi';

import volume from '@/api/books';
import { TextField } from '@/components/Fields';
import { useKeyPressEnter } from '@/hooks/onKeyPress';
import useWindowDistance from '@/hooks/useHideOnScroll';

const BaseLayout: React.FC = ({ children }) => {
  const { push } = useRouter();

  return (
    <div className="min-h-screen flex-col h-full justify-center">
      <nav className="w-full sticky top-4">
        <div className="flex w-full justify-center items-center z-10">
          <AppBar />
        </div>
      </nav>
      <div className="flex-1 flex justify-center mb-4">
        <div className="max-w-md w-full p-4">{children}</div>
      </div>
      <div className="fixed bottom-0 h-12 flex bg-white w-full justify-center">
        <div className="max-w-md w-full flex">
          <div role="button" className="flex-1 flex items-center justify-center">
            <HiHome
              onClick={() => {
                push('/');
                setHide(false);
              }}
              className="w-6 h-6 text-gray-600"
            />
          </div>
          <div role="button" className="flex-1 flex items-center justify-center">
            <HiBookmark className="w-6 h-6 text-gray-600" />
          </div>
          <div role="button" className="flex-1 flex items-center justify-center">
            <HiSupport className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AppBar = () => {
  const [focus, setOnFocus] = useState(false);
  const [query, setQuery] = useState('');
  const { push } = useRouter();

  const isHide = useWindowDistance();
  const [vert, setVert] = useState(0);
  const [hide, setHide] = useState(false);
  const setQueryEmpty = useKeyPressEnter(() => {
    push({
      pathname: '/search',
      query: {
        search: query,
      },
    });
  });

  useEffect(() => {
    if (vert !== isHide.vertical && isHide.vertical > 200) {
      console.log(vert < isHide.vertical, vert);
      setHide(vert < isHide.vertical);
      setVert(isHide.vertical);
    }
  }, [isHide.vertical, vert]);
  return (
    <div
      className="w-full py-3 bg-white -mx-4 px-4 -mt-4 max-w-md"
      style={{
        transition: 'all .2s ease-in-out',
        transform: hide ? 'translateY(-68px)' : 'translateY(0px)',
      }}
    >
      <TextField
        Icon={<HiSearch />}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOnFocus(true)}
        onBlur={() => {
          setTimeout(() => setOnFocus(false), 300);
        }}
        onKeyPress={setQueryEmpty}
        placeholder="Search"
        variant="contained"
        EndIcon={
          focus ? (
            () => (
              <HiX
                role="button"
                onClick={() => setQuery('')}
                className="cursor-pointer text-gray-600 hover:text-gray-800 text"
              />
            )
          ) : (
            <div />
          )
        }
      />
    </div>
  );
};

export default BaseLayout;
