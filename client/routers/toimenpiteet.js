/* Toimenpiteet */
Router.route('toimenpiteet', function() {
    Router.go('toimenpiteetIndex');
});
Router.route('toimenpiteet/index/:limit?/', {
    name: 'toimenpiteetIndex',
    controller: ToimenpiteetController,
    action: 'index',
});
Router.route('toimenpiteet/insert/', {
    name: 'toimenpiteetInsert',
    controller: ToimenpiteetController,
    action: 'insert',
});
Router.route('toimenpiteet/update/:_id?', {
    name: 'toimenpiteetUpdate',
    controller: ToimenpiteetController,
    action: 'update',
});
Router.route('toimenpiteet/view/:_id?', {
    name: 'toimenpiteetView',
    controller: ToimenpiteetController,
    action: 'view',
});
/* EOF Toimenpiteet */