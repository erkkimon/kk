Template.liikuntakasvatus_form.rendered = function() {
    $('#paivitetty').datepicker();
};

Template.liikuntakasvatus_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(Liikuntakasvatus, field);
    },
    /* get current selected dropdown */
    selected: function(_id) {
        if (this._id === _id)
            return "selected";
    },
    kunnat: function() {
return Kunnat.find({});
},
liikuntakasvatus: function() {
return Liikuntakasvatus.find({});
},
liikuntakasvatus: function() {
return Liikuntakasvatus.find({});
},
liikuntakasvatus: function() {
return Liikuntakasvatus.find({});
},
liikuntakasvatus: function() {
return Liikuntakasvatus.find({});
},

});