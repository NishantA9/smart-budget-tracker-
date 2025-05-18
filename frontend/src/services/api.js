import axios from 'axios';

const API_BASE = 'http://localhost:5000'; // Update with your API base URL

export const addExpense = async (data) => {
    try{
        const res = await axios.post(`${API_BASE}/expenses`, data);
        return res.data;
    } catch (error) {
        console.error('Error adding expense:', error);
        throw error;
    }
};

export const getExpenses = async () => {
    try{
        const res = await axios.get(`${API_BASE}/expenses`);
        return res.data;
    } catch (error) {
        console.error('Error fetching expenses:', error);
        // throw error;
        return [];
    }
};