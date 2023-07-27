import axios from "axios";

const BASE_URL = 'http://localhost:8080/users';

export const finAll = async () => {

    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const save = async ({ userName, email, password }) => {

    try {
        return await axios.post(BASE_URL, {
            userName,
            email,
            password,
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const updateUser = async ({ id, userName, email }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            userName,
            email,
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}