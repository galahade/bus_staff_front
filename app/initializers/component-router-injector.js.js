export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
    application.inject('component', 'router', 'router:main');
}

export default {
  name: 'component-router-injector.js',
  initialize: initialize
};
