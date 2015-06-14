Meteor.publishComposite('toimialueet', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Toimialueet with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Toimialueet.find(doc, sort);
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
    "Toimialueet.insert": function(doc) {
        var _id = Toimialueet.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Toimialueet.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */