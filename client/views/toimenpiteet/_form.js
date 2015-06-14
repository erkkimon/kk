Template.toimenpiteet_form.rendered = function () {
  $('#paivitetty').datepicker();
};

Template.toimenpiteet_form.helpers({
  /* show error message on view */
  error: function (field) {
    return MeteorisSimpleSchema.error(Toimenpiteet, field);
  },
  /* get current selected dropdown */
  selected: function (_id) {
    if (this._id === _id)
      return "selected";
  },
  kunnat: function () {
    return Kunnat.find({});
  },
  toimialat: function () {
    return Toimialat.find({});
  },
  tilanteet: function () {
    return Tilanteet.find({});
  },
  aktiiviset: function () {
    return Kunnat.find({kunta: "Kouvola"});
  }

});