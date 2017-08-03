/// <reference path="../node_modules/@types/requirejs/index.d.ts"/>

declare var require: Require;

require.config({
    baseUrl: ''
});

require(['bootstrapper'],
    (bootstrapper) => {
        bootstrapper.run();
    });