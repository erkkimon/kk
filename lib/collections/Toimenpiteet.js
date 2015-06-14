/**
 * This Code was created on April 2014
 * If you find any bug, unreadable code, messy code, potential bug code, etc
 * Please contact me at:
 * Ega Radiegtya / radiegtya@yahoo.co.id / 085641278479
 */

Toimenpiteet = new Mongo.Collection("toimenpiteet");

var schemas = new SimpleSchema({
  kunta: {
    type: String,
    label: 'Kunta',
  },
  toimiala: {
    type: String,
    label: 'Toimiala',
  },
  toimenpide: {
    type: String,
    label: 'Toimenpide',
  },
  tilanne: {
    type: String,
    label: 'TIlanne',
  },
  suunnitelma: {
    type: String,
    label: 'Toimintasuunnitelma / aikataulu',
  },
  paivitetty: {
    type: Date,
    label: 'Tilanne päivitetty',
  },
  yhteys: {
    type: String,
    label: 'Yhteyshenkilö kunnassa',
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

Toimenpiteet.attachSchema(schemas);

Toimenpiteet.allow({
  insert: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'toimenpiteet', 'insert');
    return result;
  },
  update: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'toimenpiteet', 'update');
    return result;
  },
  remove: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'toimenpiteet', 'remove');
    return result;
  },
});

//activate groundDB for toimenpiteet collection to work offline
/* uncomment to use
 Ground.Collection(Toimenpiteet);
 */

/* register helper for default relations */
Toimenpiteet.helpers({
  kunta: function () {
    return Kunnat.findOne(this.kunta);
  },
  toimiala: function () {
    return Toimialat.findOne(this.toimiala);
  },
  tilanne: function () {
    return Tilanteet.findOne(this.tilanne);
  },

  createdUser: function () {
    return Meteor.users.findOne(this.createdUserId);
  },
  updatedUser: function () {
    return Meteor.users.findOne(this.updatedUserId);
  },
});