'use strict';

// Declare app level module which depends on views, and components
angular.module('tempmon', [
  'ui.router',
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                    // ngSanitize
	'tempmon.services'
]);
