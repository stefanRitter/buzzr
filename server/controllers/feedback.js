'use strict';

exports.createFeedback = function (req, res) {
  var feedback = req.body;

  console.log(feedback.message);

  res.json({success: true});
};
