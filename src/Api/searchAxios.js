import axios from 'axios';

const searchAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const res = await searchAxios.get(path, option);
    return res.data;
};

export default searchAxios;
