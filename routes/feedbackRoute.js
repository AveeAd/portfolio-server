const nodemailer = require("nodemailer");

exports.feedbackRoute = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSW,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: "abhisekadhikari0099@gmail.com",
    subject: `Feedback on your website`,
    text: req.body.feedback,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.json(err);
    } else {
      res.json(info);
    }
  });
};
