import axios from "axios";

const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            authorization: token
        },
    baseURL: 'https://water-my-plants-6-2020.herokuapp.com/'})
};
export default axiosWithAuth;