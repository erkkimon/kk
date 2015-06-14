/* Toimialat */
Router.route('toimialat', function() {
    Router.go('toimialatIndex');
});
Router.route('toimialat/index/:limit?/', {
    name: 'toimialatIndex',
    controller: ToimialatController,
    action: 'index',
});
Router.route('toimialat/insert/', {
    name: 'toimialatInsert',
    controller: ToimialatController,
    action: 'insert',
});
Router.route('toimialat/update/:_id?', {
    name: 'toimialatUpdate',
    controller: ToimialatController,
    action: 'update',
});
Router.route('toimialat/view/:_id?', {
    name: 'toimialatView',
    controller: ToimialatController,
    action: 'view',
});
/* EOF Toimialat */