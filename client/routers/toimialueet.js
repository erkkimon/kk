/* Toimialueet */
Router.route('toimialueet', function() {
    Router.go('toimialueetIndex');
});
Router.route('toimialueet/index/:limit?/', {
    name: 'toimialueetIndex',
    controller: ToimialueetController,
    action: 'index',
});
Router.route('toimialueet/insert/', {
    name: 'toimialueetInsert',
    controller: ToimialueetController,
    action: 'insert',
});
Router.route('toimialueet/update/:_id?', {
    name: 'toimialueetUpdate',
    controller: ToimialueetController,
    action: 'update',
});
Router.route('toimialueet/view/:_id?', {
    name: 'toimialueetView',
    controller: ToimialueetController,
    action: 'view',
});
/* EOF Toimialueet */