/* Tilanteet */
Router.route('tilanteet', function() {
    Router.go('tilanteetIndex');
});
Router.route('tilanteet/index/:limit?/', {
    name: 'tilanteetIndex',
    controller: TilanteetController,
    action: 'index',
});
Router.route('tilanteet/insert/', {
    name: 'tilanteetInsert',
    controller: TilanteetController,
    action: 'insert',
});
Router.route('tilanteet/update/:_id?', {
    name: 'tilanteetUpdate',
    controller: TilanteetController,
    action: 'update',
});
Router.route('tilanteet/view/:_id?', {
    name: 'tilanteetView',
    controller: TilanteetController,
    action: 'view',
});
/* EOF Tilanteet */