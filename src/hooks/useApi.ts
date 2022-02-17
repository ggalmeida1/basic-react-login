import axios from "axios";

const api = axios.create({
    baseURL: 'process.env.REACT_APP_API'
})

export const useApi = ()  => ({
    validateToken: async (token: string) => {

        //mock response
        return {
            user: { id: 3, name: 'John', email: 'email@email.com' },
        }

        const response = await api.post('/validate', {token});
        return response.data;

    },
    signin: async (email: string, password: string) => {

        //mock response
        return {
            user: { id: 3, name: 'John', email: 'email@email.com' },
            token: '123456789'
        }

        const response = await api.post('/signin', { email, password });

        return response.data;
    },
    logout: async () => {
        //mock response
        return { status: true }

        const response = await api.post('/logout');
        return response.data;
    }

})