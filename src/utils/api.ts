import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
      },
}) 
export const postApi = async (url: string, body: any) => {
    try {
      const response = await instance.post(url, body);
      return response.data;
    } catch (error: any) {
      console.error('API POST Error:', error);
        if (error.response) {
        throw new Error(error.response.data || error.response.statusText || 'Something went wrong');
      } else if (error.request) {
        throw new Error('No response from server');
      } else {
        throw new Error(error.message || 'Unexpected error');
      }
    }
  };

  export const getApi = async (url: string) => {
    try {
      const response = await instance.get(url);
      return response.data;
    } catch (error: any) {
      console.error('API GET Error:', error);
      if (error.response) {
        throw new Error(error.response.data || error.response.statusText || 'Something went wrong');
      } else if (error.request) {
        throw new Error('No response from server');
      } else {
        throw new Error(error.message || 'Unexpected error');
      }
    }
  };