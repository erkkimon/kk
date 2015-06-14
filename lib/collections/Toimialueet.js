/**
 * This Code was created on April 2014
 * If you find any bug, unreadable code, messy code, potential bug code, etc
 * Please contact me at:
 * Ega Radiegtya / radiegtya@yahoo.co.id / 085641278479
 */

Toimialueet = new Mongo.Collection("toimialueet");

var schemas = new SimpleSchema({
  liikuntakasvatus: {
    type: String,
    label: 'Liikuntakasvatus',
    optional: true,
  },
  liikuntatoiminta: {
    type: String,
    label: 'Liikuntatoiminta',
    optional: true,
  },
  varhaiskasvatus: {
    type: String,
    label: 'Varhaiskasvatus',
    optional: true,
  },

  /* AUTOVALUE */
  appId: {
    type: String,
    label: "App Id",
    autoValue: function () {
      if (this.isInsert)
        return App.id;
    },
  },
  createdAt: {
    type: Date,
    label: "Created Date",
    autoValue: function () {
      if (this.isInsert)
        return new Date;
    },
    denyUpdate: true,
    optional: true
  },
  updatedAt: {
    type: Date,
    label: "Updated Date",
    autoValue: function () {
      return new Date();
    },
    optional: true
  },
  createdUserId: {
    type: String,
    label: "Created by",
    autoValue: function () {
      if (this.isInsert && !this.value)
        return this.userId;
    },
    denyUpdate: true,
    optional: true
  },
  updatedUserId: {
    type: String,
    label: "Updated by",
    autoValue: function () {
      if (!this.value)
        return this.userId;
    },
    optional: true
  },
});

Toimialueet.attachSchema(schemas);

Toimialueet.allow({
  insert: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'toimialueet', 'insert');
    return result;
  },
  update: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'toimialueet', 'update');
    return result;
  },
  remove: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'toimialueet', 'remove');
    return result;
  },
});

//activate groundDB for toimialueet collection to work offline
/* uncomment to use
 Ground.Collection(Toimialueet);
 */

/* register helper for default relations */
Toimialueet.helpers({

  createdUser: function () {
    return Meteor.users.findOne(this.createdUserId);
  },
  updatedUser: function () {
    return Meteor.users.findOne(this.updatedUserId);
  },
});