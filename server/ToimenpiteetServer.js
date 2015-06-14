Meteor.publishComposite('toimenpiteet', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Toimenpiteet with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Toimenpiteet.find(doc, sort);
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
            /* return all related Kunnat */
{
find: function(collection) {
return Kunnat.find(collection.kunta);}
},
/* return all related Toimialat */
{
find: function(collection) {
return Toimialat.find(collection.toimiala);}
},
/* return all related Tilanteet */
{
find: function(collection) {
return Tilanteet.find(collection.tilanne);}
},

        ],
    }
});


Meteor.methods({
    "Toimenpiteet.insert": function(doc) {
        var _id = Toimenpiteet.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Toimenpiteet.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */