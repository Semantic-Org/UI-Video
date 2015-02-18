var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-video',
  summary : 'Semantic UI - Video (official): Single component release of video',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Video.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
