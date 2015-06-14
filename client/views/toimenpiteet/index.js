Template.toimenpiteetIndex.helpers({
  kouvola: function () {
  return Kunnat.find({kunta: "Kouvola"});
}
});

Template.toimenpiteetIndex.events = {
    'click #btnRemove': function(e) {
        e.preventDefault();
        if (confirm("Haluatko varmasti poistaa tavoitteen?"))
            Router.current().remove(this._id);
    },
    /* sorting by parameter */
'click #btnSortkunta': function(e) {
MeteorisGridView.sort('kunta');
},
/* sorting by parameter */
'click #btnSorttoimiala': function(e) {
MeteorisGridView.sort('toimiala');
},
/* sorting by parameter */
'click #btnSorttoimenpide': function(e) {
MeteorisGridView.sort('toimenpide');
},
/* sorting by parameter */
'click #btnSorttilanne': function(e) {
MeteorisGridView.sort('tilanne');
},
/* sorting by parameter */
'click #btnSortsuunnitelma': function(e) {
MeteorisGridView.sort('suunnitelma');
},
/* sorting by parameter */
'click #btnSortpaivitetty': function(e) {
MeteorisGridView.sort('paivitetty');
},
/* sorting by parameter */
'click #btnSortyhteys': function(e) {
MeteorisGridView.sort('yhteys');
},

    'keyup #search': function(e, t) {
        e.preventDefault();
        Router.current().search(t);        
    },
    /* check all checkbox */
    'change #checkAll': function(e) {
        e.preventDefault();
        var checkboxes = $('.checkAll');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            checkboxes[i].checked = e.target.checked;
        }
    },
    /* remove all selected item */
    'click #btnRemoveAll': function(e) {
        e.preventDefault();
        var checkboxes = $('.checkAll');
        var checkedLength = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedLength++;
            }
        }

        if (checkedLength > 0) {
            if (confirm("Haluatko varmasti poistaa tavoitteen (Yhteensä " + checkedLength + " tavoitetta poistetaan)")) {
                // loop over them all
                for (var i = 0; i < checkboxes.length; i++) {
                    // And stick the checked ones onto an array...
                    if (checkboxes[i].checked) {
                        Router.current().remove($(checkboxes[i]).val());
                    }
                }
            }
        } else {
            MeteorisFlash.set('danger', 'Valitse poistettava kohde');
        }

        //set checkAll header to uncheck
        $('#checkAll').attr("checked", false);
    },
};