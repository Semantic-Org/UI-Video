
Package.describe({
  name    : 'semantic:ui-video',
  summary : 'Semantic UI - Video: Single component release',
  version : '1.12.3',
  git     : 'git://github.com/Semantic-Org/UI-Video.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'video.css',
    'video.js'
  ], 'client');
});
