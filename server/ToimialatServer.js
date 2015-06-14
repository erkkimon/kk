Meteor.publishComposite('toimialat', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Toimialat with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Toimialat.find(doc, sort);
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find({
                        $or: [
                            {_id: collection.createdUserId},
                            {_id: collection.updatedUserId},
                        ]
                    });
                }
            },
            
        ],
    }
});


Meteor.methods({
    "Toimialat.insert": function(doc) {
        var _id = Toimialat.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Toimialat.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */