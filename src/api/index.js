import axios from "axios";

const getTests = async (number, category) => { 
    try {
        const res = await axios.get(`https://opentdb.com/api.php?amount=${number}&category=${category}`);
        console.log(res.data)
        console.log(number + " " + category);
        return res.data;
    } catch (error) {
        console.log(error);
        return {status: "error"};
    }
}

export { getTests };