ToimenpiteetController = MeteorisController.extend({
    /* get subscribtion from server with parameter criteria, and sort/limit */
    subscriptions: function() {
        var sort = MeteorisGridView.getSorting();
        sort.limit = this.limit();

        this.subs.subscribe('kunnat', {});
this.subs.subscribe('toimialat', {});
this.subs.subscribe('tilanteet', {});

        this.subscription = this.subs.subscribe('toimenpiteet', this.getCriteria(), sort);
    },
    /* event searching data by user input with parameter */
    search: function(t) {
        Router.go(Router.current().route.getName(), {limit: this.limit()}, {query: "q=" + t.find('#search').value});
    },
    /* @override getCriteria */
    getCriteria: function() {
        var search = this.params.query.q ? this.params.query.q : "";
        return {
            $or: [
                {kunta: {$regex: search, $options: 'i'}},
{toimiala: {$regex: search, $options: 'i'}},
{toimenpide: {$regex: search, $options: 'i'}},
{tilanne: {$regex: search, $options: 'i'}},
{suunnitelma: {$regex: search, $options: 'i'}},
{paivitetty: {$regex: search, $options: 'i'}},
{yhteys: {$regex: search, $options: 'i'}},

            ]
        };
    },
    index: function() {
        var sort = MeteorisGridView.getSorting();
        sort.limit = this.limit();
        var models = Toimenpiteet.find(this.getCriteria(), sort);

        return this.render('toimenpiteetIndex', {
            data: {
                ready: this.subscription.ready,
                isEmpty: models.count() === 0 ? true : false,
                models: models,
                hasMore: this.limit() == models.fetch().length ? this.route.path({limit: this.limit() + this.increment}) : null,
            }
        });
    },
    view: function() {
        return this.render('toimenpiteetView', {
            data: {
                model: this._loadModel(this.getId()),
            }
        });
    },
    /* private get user input docs */
    _getDoc: function(t) {
        return {
            kunta: t.find('#kunta').value,
toimiala: t.find('#toimiala').value,
toimenpide: t.find('#toimenpide').value,
tilanne: t.find('#tilanne').value,
suunnitelma: t.find('#suunnitelma').value,
paivitetty: t.find('#paivitetty').value? new Date(t.find('#paivitetty').value):null,
yhteys: t.find('#yhteys').value,

        };
    },
    /* uploading file using cfs:fileSystem package + cfs:ejson */
    _uploadImage: function() {
        var imageId = null;
        var file = $('#image').get(0).files[0];
        if (file) {
            var image = Images.insert(file, function(err) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                }
            });
            imageId = image._id;
        }

        return imageId;
    },
    /* event inserting data */
    insert: function(t) {
        if (this._post) {
            //uploading file using cfs:fileSystem package + cfs:ejson
            //var imageId = this._uploadImage();

            //set inserted doc
            var doc = this._getDoc(t);
            //doc.imageId = imageId;

            Toimenpiteet.insert(doc, function(err, _id) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                }
                MeteorisFlash.set('success', "Success Inserting Toimenpiteet");
                Router.go('toimenpiteetView', {_id: _id});
            });
        }
        return this.render('toimenpiteetInsert', {});
    },
    /* event updating data */
    update: function(t) {
        var _id = this.getId();
        var model = this._loadModel(_id);

        if (this._post) {
            //uploading file using cfs:fileSystem package + cfs:ejson
            //var imageId = this._uploadImage();

            //remove old image if user inputting new image        
            //if (imageId && model.imageId)
            //Images.remove(model.imageId);

            //set updated doc
            var doc = this._getDoc(t);
            //doc.imageId = imageId ? imageId : model.imageId;

            Toimenpiteet.update(_id, {$set: doc}, function(err) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                }
                MeteorisFlash.set('success', "Success Updating Toimenpiteet");
            });
            Router.go('toimenpiteetView', {_id: _id});
        }
        return this.render('toimenpiteetUpdate', {
            data: {
                model: model,
            }
        });
    },
    /* event removing data by id */
    remove: function(_id) {
        Toimenpiteet.remove(_id, function(err) {
            if (err) {
                MeteorisFlash.set('danger', err.message);
                throw new Meteor.Error(err);
            }
            MeteorisFlash.set('success', "Success Removing Toimenpiteet");
        });
    },
    _loadModel: function(_id) {
        return Toimenpiteet.findOne(_id);
    },
});