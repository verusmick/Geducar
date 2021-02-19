"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _commentsReducer = require("./commentsReducer");

var _postsReducer = require("./postsReducer");

var _uiReducer = require("./uiReducer");

var _usersReducer = require("./usersReducer");

var rootReducer = (0, _redux.combineReducers)({
  ui: _uiReducer.uiReducer,
  users: _usersReducer.usersReducer,
  posts: _postsReducer.postsReducer,
  comments: _commentsReducer.commentsReducer
});
exports.rootReducer = rootReducer;