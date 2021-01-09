"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var express = require('express');
var _a = require('apollo-server-express'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String\n  }\n"], ["\n  type Query {\n    hello: String\n  }\n"])));
var resolvers = {
    Query: {
        hello: function () { return 'Hello world!'; }
    }
};
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
var app = express();
server.applyMiddleware({ app: app });
app.listen({ port: 4000 }, function () {
    return console.log('Now browse to http://localhost:4000' + server.graphqlPath);
});
var templateObject_1;
