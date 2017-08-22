app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state({
            url: '/',
            name: 'word_sent',
            controller: 'WordSentCtrl',
            templateUrl: "./static/app/word_sent/word_sent.html"
        })
        .state({
            url: '/pos_tag',
            name: 'pos_tag',
            templateUrl: "./static/app/pos_tag/pos_tag.html"
        });
});
