const { Transaction} = require("../models");

const send = async (req, res) => {
  const { user_id, account_type, amount, transaction_type, to_address, status } = req.body;
  try {
    const transaction = await Transaction.create({
        user_id, 
        account_type, 
        amount, 
        transaction_type, 
        to_address, 
        status
    });
    res.status(200).send({ message: "Insert successful" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const withdraw = async (req, res) => {
    const { user_id, account_type, amount, transaction_type, to_address, status } = req.body;
    try {
      const transaction = await Transaction.create({
          user_id, 
          account_type, 
          amount, 
          transaction_type, 
          to_address, 
          status
      });
      res.status(200).send({ message: "Insert successful" });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  };

module.exports = { send, withdraw };
