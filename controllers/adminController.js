const customFs = require("../lib/fsDeals");

const formData = new customFs('../model/formData.json');

module.exports = {
  GET: (req, res) => {
    try{
      const allData = JSON.parse(formData.read());

      res.render("admin", {allData})
    } catch(err) {
      console.log("Admin Hato");
    }
  }
}