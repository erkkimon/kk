/* Liikuntakasvatus */
Router.route('liikuntakasvatus', function() {
    Router.go('liikuntakasvatusIndex');
});
Router.route('liikuntakasvatus/index/:limit?/', {
    name: 'liikuntakasvatusIndex',
    controller: LiikuntakasvatusController,
    action: 'index',
});
Router.route('liikuntakasvatus/insert/', {
    name: 'liikuntakasvatusInsert',
    controller: LiikuntakasvatusController,
    action: 'insert',
});
Router.route('liikuntakasvatus/update/:_id?', {
    name: 'liikuntakasvatusUpdate',
    controller: LiikuntakasvatusController,
    action: 'update',
});
Router.route('liikuntakasvatus/view/:_id?', {
    name: 'liikuntakasvatusView',
    controller: LiikuntakasvatusController,
    action: 'view',
});
/* EOF Liikuntakasvatus */