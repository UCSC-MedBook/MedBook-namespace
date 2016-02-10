Package.describe({
  name: 'medbook:namespace',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'declares MedBook namespace variables',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("1.1.0.3");
  api.addFiles('namespace.js');
  api.export("MedBook");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('medbook:namespace');
  api.addFiles('namespace-tests.js');
});
