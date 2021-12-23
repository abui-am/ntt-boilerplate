import { AxiosRequestConfig } from 'axios';

import { FindVolumeByIdResponse, VolumeResponse } from '@/typings/books';

import { bookApi } from './api';

const volume = {
  getAll: async (configs?: AxiosRequestConfig) => {
    return bookApi().get<VolumeResponse>('/volumes', configs);
  },
  findById: async (id: string, configs?: AxiosRequestConfig) => {
    return bookApi().get<FindVolumeByIdResponse>(`/volumes/${id}`, configs);
  },
};

export default volume;
