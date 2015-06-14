/* Kunnat */
Router.route('kunnat', function() {
    Router.go('kunnatIndex');
});
Router.route('kunnat/index/:limit?/', {
    name: 'kunnatIndex',
    controller: KunnatController,
    action: 'index',
});
Router.route('kunnat/insert/', {
    name: 'kunnatInsert',
    controller: KunnatController,
    action: 'insert',
});
Router.route('kunnat/update/:_id?', {
    name: 'kunnatUpdate',
    controller: KunnatController,
    action: 'update',
});
Router.route('kunnat/view/:_id?', {
    name: 'kunnatView',
    controller: KunnatController,
    action: 'view',
});
/* EOF Kunnat */