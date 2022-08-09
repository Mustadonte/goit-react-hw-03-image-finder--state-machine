import axios from 'axios';
import { toast } from 'react-toastify';
export const apiService = async (query, perPage, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    per_page: perPage,
    q: query,
    image_type: 'photo',
    key: '28183118-48feee04d7eb975b8c223533e',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    if (response.data.hits.length === 0) {
      toast.error('There is no result');
      return [];
    }
    return response.data.hits;
  } catch (error) {}
};
