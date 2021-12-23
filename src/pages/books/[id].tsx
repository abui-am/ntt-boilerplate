import HTMLReactParser from 'html-react-parser';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import volume from '@/api/books';
import { FindVolumeByIdResponse } from '@/typings/books';

const BookById = () => {
  const { query } = useRouter();
  const [data, setData] = useState<FindVolumeByIdResponse>({});

  useEffect(() => {
    initialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const initialFetch = async () => {
    if (query.id) {
      const { data } = await volume.findById((query?.id as string) ?? '');
      setData(data);
    }
  };

  const { imageLinks, title, description, categories } = data?.volumeInfo ?? {};
  return (
    <div>
      <img src={imageLinks?.extraLarge} alt="book cover" className="mb-4" width="100%" height="100%" />
      <h1 className="text-2xl mb-4 font-bold">{title}</h1>
      <p className="text-indigo-600  mb-4">{categories}</p>
      <p className="text-gray-800">{HTMLReactParser(description ?? '')}</p>
    </div>
  );
};

export default BookById;
