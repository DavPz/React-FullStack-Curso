import axios from "axios";

export const loginUser = async ({ userName, password }) => {

    try {
        
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
            userName,
            password,
        });

    } catch (error) {
        throw error;
    }

}
