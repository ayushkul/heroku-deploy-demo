/**
 * Created by AyushK on 09/06/2021.
 */

module.exports = (app) => {
  app.get("/", (req, res) => res.send("The Indian Dev from Heroku!"));
};
