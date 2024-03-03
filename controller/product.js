// Correct the function parameters to use `req` and `res` instead of `response`
const getallproduct = async (req, res) => {
    res.status(200).json("helle iam getallproduct");
};

const getallproducttesting = async (req, res) => {
    res.status(200).json("hello iam getallproduct testing");
};


module.exports = { getallproduct, getallproducttesting };
