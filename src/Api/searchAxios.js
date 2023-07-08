import axios from 'axios';

const searchAxios = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    const res = await searchAxios.get(path, option);
    return res.data;
};

export default searchAxios;
