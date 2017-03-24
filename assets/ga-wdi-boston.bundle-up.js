"use strict";



define('ga-wdi-boston.bundle-up/adapters/application', ['exports', 'ga-wdi-boston.bundle-up/config/environment', 'active-model-adapter'], function (exports, _gaWdiBostonBundleUpConfigEnvironment, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _gaWdiBostonBundleUpConfigEnvironment['default'].apiHost
  });
});
define('ga-wdi-boston.bundle-up/app', ['exports', 'ember', 'ga-wdi-boston.bundle-up/resolver', 'ember-load-initializers', 'ga-wdi-boston.bundle-up/config/environment'], function (exports, _ember, _gaWdiBostonBundleUpResolver, _emberLoadInitializers, _gaWdiBostonBundleUpConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _gaWdiBostonBundleUpConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gaWdiBostonBundleUpConfigEnvironment['default'].podModulePrefix,
    Resolver: _gaWdiBostonBundleUpResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _gaWdiBostonBundleUpConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ga-wdi-boston.bundle-up/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ga-wdi-boston.bundle-up/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ga-wdi-boston.bundle-up/helpers/app-version', ['exports', 'ember', 'ga-wdi-boston.bundle-up/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _gaWdiBostonBundleUpConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _gaWdiBostonBundleUpConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ga-wdi-boston.bundle-up/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ga-wdi-boston.bundle-up/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("ga-wdi-boston.bundle-up/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('ga-wdi-boston.bundle-up/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ga-wdi-boston.bundle-up/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _gaWdiBostonBundleUpConfigEnvironment) {
  var _config$APP = _gaWdiBostonBundleUpConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ga-wdi-boston.bundle-up/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ga-wdi-boston.bundle-up/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ga-wdi-boston.bundle-up/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ga-wdi-boston.bundle-up/initializers/export-application-global', ['exports', 'ember', 'ga-wdi-boston.bundle-up/config/environment'], function (exports, _ember, _gaWdiBostonBundleUpConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_gaWdiBostonBundleUpConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _gaWdiBostonBundleUpConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_gaWdiBostonBundleUpConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ga-wdi-boston.bundle-up/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ga-wdi-boston.bundle-up/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ga-wdi-boston.bundle-up/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ga-wdi-boston.bundle-up/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ga-wdi-boston.bundle-up/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ga-wdi-boston.bundle-up/router', ['exports', 'ember', 'ga-wdi-boston.bundle-up/config/environment'], function (exports, _ember, _gaWdiBostonBundleUpConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _gaWdiBostonBundleUpConfigEnvironment['default'].locationType,
    rootURL: _gaWdiBostonBundleUpConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('ga-wdi-boston.bundle-up/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('ga-wdi-boston.bundle-up/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ga-wdi-boston.bundle-up/services/auth', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({});
});
define("ga-wdi-boston.bundle-up/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vtvN2O7F", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\" Welcome to Ember! \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ga-wdi-boston.bundle-up/templates/application.hbs" } });
});


define('ga-wdi-boston.bundle-up/config/environment', ['ember'], function(Ember) {
  var prefix = 'ga-wdi-boston.bundle-up';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ga-wdi-boston.bundle-up/app")["default"].create({"name":"ga-wdi-boston.bundle-up","version":"0.0.1+a5d90943"});
}
//# sourceMappingURL=ga-wdi-boston.bundle-up.map
