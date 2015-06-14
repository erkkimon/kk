/**
 * This Code was created on April 2014
 * If you find any bug, unreadable code, messy code, potential bug code, etc
 * Please contact me at:
 * Ega Radiegtya / radiegtya@yahoo.co.id / 085641278479
 */

Liikuntakasvatus = new Mongo.Collection("liikuntakasvatus");

var schemas = new SimpleSchema({
  toimenpide: {
    type: String,
    label: 'Toimenpide',
  },
  tilanne: {
    type: String,
    label: 'Tilanne',
  },
  toimintasuunnitelma: {
    type: String,
    label: 'Toimintasuunnitelma / AIkataulu',
  },
  paivitetty: {
    type: Date,
    label: 'Tilanne päivitetty',
  },
  yhteyshenkilo: {
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

Liikuntakasvatus.attachSchema(schemas);

Liikuntakasvatus.allow({
  insert: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'liikuntakasvatus', 'insert');
    return result;
  },
  update: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'liikuntakasvatus', 'update');
    return result;
  },
  remove: function (userId, doc) {
    var result = Meteor.call('MugenRoleActions.getRoles', 'liikuntakasvatus', 'remove');
    return result;
  },
});

//activate groundDB for liikuntakasvatus collection to work offline
/* uncomment to use
 Ground.Collection(Liikuntakasvatus);
 */

/* register helper for default relations */
Liikuntakasvatus.helpers({
  kunta: function () {
    return Kunnat.findOne(this.toimenpide);
  },
  toimenpide: function () {
    return Liikuntakasvatus.findOne(this.tilanne);
  },
  toimenpide: function () {
    return Liikuntakasvatus.findOne(this.toimintasuunnitelma);
  },
  toimenpide: function () {
    return Liikuntakasvatus.findOne(this.paivitetty);
  },
  toimenpide: function () {
    return Liikuntakasvatus.findOne(this.yhteyshenkilo);
  },

  createdUser: function () {
    return Meteor.users.findOne(this.createdUserId);
  },
  updatedUser: function () {
    return Meteor.users.findOne(this.updatedUserId);
  },
});