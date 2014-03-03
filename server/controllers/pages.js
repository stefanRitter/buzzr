'use strict';

exports.getRoot = function (req, res) {
  res.render('index', {
    bootstrappedUser: req.user,
    bootstrappedBuzzr: req.params.id
  });
};

exports.getLogin = function (req, res) {
  res.render('login', {
    bootstrappedUser: req.user,
    bootstrappedBuzzr: req.params.id
  });
};

exports.getJoin = function (req, res) {
  res.render('join', {
    bootstrappedUser: req.user,
    bootstrappedBuzzr: req.params.id
  });
};

exports.getAbout = function (req, res) {
  res.render('about', {
    bootstrappedUser: req.user,
    bootstrappedBuzzr: req.params.id
  });
};

exports.getTerms = function (req, res) {
  res.render('terms', {
    bootstrappedUser: req.user,
    bootstrappedBuzzr: req.params.id
  });
};

exports.getReadLater = function (req, res) {
  res.render('index', {
    bootstrappedUser: req.user,
    bootstrappedBuzzr: req.params.id
  });
};