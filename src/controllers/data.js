const dataModel = require("../models/data");

module.exports = {
  getData: (req, res) => {
    dataModel
      .getData()
      .then(result => {
        res.json({
          status: 200,
          message: "Succes gan",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error njing"
        });
      });
  },
  postData: (req, res) => {
    const { name, message } = req.body;
    const data = { name, message };
    dataModel
      .postData(data)
      .then(result => {
        res.json({
          status: 200,
          message: "Succes gan",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error njing"
        });
      });
  },
  putData: (req, res) => {
    const { name, message } = req.body;
    const data = { name, message };
    dataModel
      .putData([data, { id: req.params.id }])
      .then(result => {
        res.json({
          status: 200,
          message: "Succes gan",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error njing"
        });
      });
  },
  deleteData: (req, res) => {
    dataModel
      .deleteData(req.params.id)
      .then(result => {
        res.json({
          status: 200,
          message: "Succes gan",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error njing"
        });
      });
  }
};
