Meteor.publishComposite('liikuntakasvatus', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Liikuntakasvatus with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Liikuntakasvatus.find(doc, sort);
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
return Kunnat.find(collection.toimenpide);}
},
/* return all related Liikuntakasvatus */
{
find: function(collection) {
return Liikuntakasvatus.find(collection.tilanne);}
},
/* return all related Liikuntakasvatus */
{
find: function(collection) {
return Liikuntakasvatus.find(collection.toimintasuunnitelma);}
},
/* return all related Liikuntakasvatus */
{
find: function(collection) {
return Liikuntakasvatus.find(collection.paivitetty);}
},
/* return all related Liikuntakasvatus */
{
find: function(collection) {
return Liikuntakasvatus.find(collection.yhteyshenkilo);}
},

        ],
    }
});


Meteor.methods({
    "Liikuntakasvatus.insert": function(doc) {
        var _id = Liikuntakasvatus.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Liikuntakasvatus.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */