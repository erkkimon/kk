Template.kunnatView.events = {
    'click #btnRemove': function(e) {
        e.preventDefault();
        if (confirm("Haluatko varmasti poistaa kunnan?")) {
            Router.current().remove(this._id);
            Router.go("kunnatIndex")
        }
    },
};

Template.kunnatView.helpers({
  findOne: function() {
    return Kunna
  }
});