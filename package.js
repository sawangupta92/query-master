Package.describe({
  name: 'sawang:query',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package includes some common query interface methods',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sawangupta92/query-master',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['query.js'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sawang:query');
  api.addFiles('query-tests.js');
});
