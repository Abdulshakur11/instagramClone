const customFs = require("../lib/fsDeals");

const users = new customFs("../model/formData.json");
const portfolioIntro = new customFs("../model/portfolioIntro.json");
const portfolioSection = new customFs("../model/portfolio.json");
const portfolioCards = new customFs("../model/portfolioCards.json");

module.exports = {
	GET: (req, res) => {
		try {
			const intro = JSON.parse(portfolioIntro.read());
			const portfolioInfo = JSON.parse(portfolioSection.read());
			const cards = JSON.parse(portfolioCards.read());

			res.render("index", { intro, portfolioInfo, cards});
		} catch (err) {
			console.log("Hato ukam to`xta!");
		}
	},

	POST: (req, res) => {
		const formData = req.body;

		const allUsers = JSON.parse(users.read());
		allUsers.push({ id: allUsers.length + 1, ...formData });

		users.write(allUsers);
		res.redirect("/portfolio");
	},
};
