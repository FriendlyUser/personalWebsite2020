{ status: 200,
  statusText: 'OK',
  headers:
   { server: 'GitHub.com',
     date: 'Wed, 06 Nov 2019 06:09:07 GMT',
     'content-type': 'application/json; charset=utf-8',
     'content-length': '162958',
     connection: 'close',
     status: '200 OK',
     'x-ratelimit-limit': '5000',
     'x-ratelimit-remaining': '4998',
     'x-ratelimit-reset': '1573024146',
     'cache-control': 'private, max-age=60, s-maxage=60',
     vary: 'Accept, Authorization, Cookie, X-GitHub-OTP',
     etag: '"5d23b6c197363e426e4badff6ced2521"',
     'x-oauth-scopes': 'notifications, read:discussion, read:packages, user',
     'x-accepted-oauth-scopes': '',
     'x-github-media-type': 'github.v3',
     link:
      '<https://api.github.com/user/13860264/repos?page=2>; rel="next", <https://api.github.com/user/13860264/repos?page=2>; rel="last"',
     'access-control-expose-headers':
      'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
     'access-control-allow-origin': '*',
     'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
     'x-frame-options': 'deny',
     'x-content-type-options': 'nosniff',
     'x-xss-protection': '1; mode=block',
     'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
     'content-security-policy': 'default-src \'none\'',
     'x-github-request-id': 'F073:4280:43F3A5E:8377564:5DC26382' },
  config:
   { url: 'https://api.github.com/users/FriendlyUser/repos',
     method: 'get',
     headers:
      { Accept: 'application/json, text/plain, */*',
        Authorization: 'token 379c14e422a7d2eb48478e6bad7d22096f4b45fa',
        'User-Agent': 'axios/0.19.0' },
     transformRequest: [ [Function: transformRequest] ],
     transformResponse: [ [Function: transformResponse] ],
     timeout: 0,
     adapter: [Function: httpAdapter],
     xsrfCookieName: 'XSRF-TOKEN',
     xsrfHeaderName: 'X-XSRF-TOKEN',
     maxContentLength: -1,
     validateStatus: [Function: validateStatus],
     data: undefined },
  request:
   ClientRequest {
     _events:
      { socket: [Function],
        abort: [Function],
        aborted: [Function],
        error: [Function],
        timeout: [Function],
        prefinish: [Function: requestOnPrefinish] },
     _eventsCount: 6,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: true,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: false,
     sendDate: false,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: 0,
     _hasBody: true,
     _trailer: '',
     finished: true,
     _headerSent: true,
     socket:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'api.github.com',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 8,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'api.github.com',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 24,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     connection:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'api.github.com',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 8,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'api.github.com',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 24,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     _header:
      'GET /users/FriendlyUser/repos HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nAuthorization: token 379c14e422a7d2eb48478e6bad7d22096f4b45fa\r\nUser-Agent: axios/0.19.0\r\nHost: api.github.com\r\nConnection: close\r\n\r\n',
     _onPendingData: [Function: noopPendingOutput],
     agent:
      Agent {
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        defaultPort: 443,
        protocol: 'https:',
        options: [Object],
        requests: {},
        sockets: [Object],
        freeSockets: {},
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxCachedSessions: 100,
        _sessionCache: [Object] },
     socketPath: undefined,
     timeout: undefined,
     method: 'GET',
     path: '/users/FriendlyUser/repos',
     _ended: true,
     res:
      IncomingMessage {
        _readableState: [ReadableState],
        readable: false,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        socket: [TLSSocket],
        connection: [TLSSocket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 200,
        statusMessage: 'OK',
        client: [TLSSocket],
        _consuming: true,
        _dumped: false,
        req: [Circular],
        responseUrl: 'https://api.github.com/users/FriendlyUser/repos',
        redirects: [] },
     aborted: undefined,
     timeoutCb: null,
     upgradeOrConnect: false,
     parser: null,
     maxHeadersCount: null,
     _redirectable:
      Writable {
        _writableState: [WritableState],
        writable: true,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _options: [Object],
        _redirectCount: 0,
        _redirects: [],
        _requestBodyLength: 0,
        _requestBodyBuffers: [],
        _onNativeResponse: [Function],
        _currentRequest: [Circular],
        _currentUrl: 'https://api.github.com/users/FriendlyUser/repos' },
     [Symbol(isCorked)]: false,
     [Symbol(outHeadersKey)]:
      { accept: [Array],
        authorization: [Array],
        'user-agent': [Array],
        host: [Array] } },
  data:
   [ { id: 152832302,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNTI4MzIzMDI=',
       name: 'BattleTD',
       full_name: 'FriendlyUser/BattleTD',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/BattleTD',
       description: 'Tower Defence Game made in Unity.',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/BattleTD',
       forks_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/collaborators{/collaborator}',
       teams_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/teams',
       hooks_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/issues/events{/number}',
       events_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/compare/{base}...{head}',
       merges_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/BattleTD/deployments',
       created_at: '2018-10-13T03:43:48Z',
       updated_at: '2019-01-12T05:51:11Z',
       pushed_at: '2019-01-12T07:01:35Z',
       git_url: 'git://github.com/FriendlyUser/BattleTD.git',
       ssh_url: 'git@github.com:FriendlyUser/BattleTD.git',
       clone_url: 'https://github.com/FriendlyUser/BattleTD.git',
       svn_url: 'https://github.com/FriendlyUser/BattleTD',
       homepage: null,
       size: 241060,
       stargazers_count: 1,
       watchers_count: 1,
       language: 'C#',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 1,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 1,
       open_issues: 0,
       watchers: 1,
       default_branch: 'master',
       permissions: [Object] },
     { id: 106222158,
       node_id: 'MDEwOlJlcG9zaXRvcnkxMDYyMjIxNTg=',
       name: 'Brick-Game-',
       full_name: 'FriendlyUser/Brick-Game-',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/Brick-Game-',
       description:
        'This contains an basic brick game in unity, some of the sprites are ugly, I know.',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/Brick-Game-',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/Brick-Game-/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/Brick-Game-/deployments',
       created_at: '2017-10-09T01:06:47Z',
       updated_at: '2018-07-10T19:37:40Z',
       pushed_at: '2017-10-09T01:09:58Z',
       git_url: 'git://github.com/FriendlyUser/Brick-Game-.git',
       ssh_url: 'git@github.com:FriendlyUser/Brick-Game-.git',
       clone_url: 'https://github.com/FriendlyUser/Brick-Game-.git',
       svn_url: 'https://github.com/FriendlyUser/Brick-Game-',
       homepage: null,
       size: 33,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'C#',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 66906833,
       node_id: 'MDEwOlJlcG9zaXRvcnk2NjkwNjgzMw==',
       name: 'C',
       full_name: 'FriendlyUser/C',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/C',
       description: 'Some C files examples in Visual Studio and some coursework',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/C',
       forks_url: 'https://api.github.com/repos/FriendlyUser/C/forks',
       keys_url: 'https://api.github.com/repos/FriendlyUser/C/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/C/collaborators{/collaborator}',
       teams_url: 'https://api.github.com/repos/FriendlyUser/C/teams',
       hooks_url: 'https://api.github.com/repos/FriendlyUser/C/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/C/issues/events{/number}',
       events_url: 'https://api.github.com/repos/FriendlyUser/C/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/C/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/C/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/C/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/C/git/blobs{/sha}',
       git_tags_url: 'https://api.github.com/repos/FriendlyUser/C/git/tags{/sha}',
       git_refs_url: 'https://api.github.com/repos/FriendlyUser/C/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/C/git/trees{/sha}',
       statuses_url: 'https://api.github.com/repos/FriendlyUser/C/statuses/{sha}',
       languages_url: 'https://api.github.com/repos/FriendlyUser/C/languages',
       stargazers_url: 'https://api.github.com/repos/FriendlyUser/C/stargazers',
       contributors_url: 'https://api.github.com/repos/FriendlyUser/C/contributors',
       subscribers_url: 'https://api.github.com/repos/FriendlyUser/C/subscribers',
       subscription_url: 'https://api.github.com/repos/FriendlyUser/C/subscription',
       commits_url: 'https://api.github.com/repos/FriendlyUser/C/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/C/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/C/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/C/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/C/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/C/compare/{base}...{head}',
       merges_url: 'https://api.github.com/repos/FriendlyUser/C/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/C/{archive_format}{/ref}',
       downloads_url: 'https://api.github.com/repos/FriendlyUser/C/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/C/issues{/number}',
       pulls_url: 'https://api.github.com/repos/FriendlyUser/C/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/C/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/C/notifications{?since,all,participating}',
       labels_url: 'https://api.github.com/repos/FriendlyUser/C/labels{/name}',
       releases_url: 'https://api.github.com/repos/FriendlyUser/C/releases{/id}',
       deployments_url: 'https://api.github.com/repos/FriendlyUser/C/deployments',
       created_at: '2016-08-30T04:35:33Z',
       updated_at: '2019-06-01T13:48:07Z',
       pushed_at: '2019-06-01T13:48:05Z',
       git_url: 'git://github.com/FriendlyUser/C.git',
       ssh_url: 'git@github.com:FriendlyUser/C.git',
       clone_url: 'https://github.com/FriendlyUser/C.git',
       svn_url: 'https://github.com/FriendlyUser/C',
       homepage: '',
       size: 8355,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'C',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 211428089,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMTE0MjgwODk=',
       name: 'ChickenOutBreak',
       full_name: 'FriendlyUser/ChickenOutBreak',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/ChickenOutBreak',
       description: 'Qml Game using felgo',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/ChickenOutBreak',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/deployments',
       created_at: '2019-09-28T01:44:56Z',
       updated_at: '2019-10-12T21:02:22Z',
       pushed_at: '2019-10-12T21:02:20Z',
       git_url: 'git://github.com/FriendlyUser/ChickenOutBreak.git',
       ssh_url: 'git@github.com:FriendlyUser/ChickenOutBreak.git',
       clone_url: 'https://github.com/FriendlyUser/ChickenOutBreak.git',
       svn_url: 'https://github.com/FriendlyUser/ChickenOutBreak',
       homepage: null,
       size: 5074,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'QML',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 165587544,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNjU1ODc1NDQ=',
       name: 'CrowdFund',
       full_name: 'FriendlyUser/CrowdFund',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/CrowdFund',
       description: 'CrowdFunding Smart Contract',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/CrowdFund',
       forks_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/collaborators{/collaborator}',
       teams_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/teams',
       hooks_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/issues/events{/number}',
       events_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/compare/{base}...{head}',
       merges_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/CrowdFund/deployments',
       created_at: '2019-01-14T03:12:33Z',
       updated_at: '2019-01-14T05:10:43Z',
       pushed_at: '2019-01-14T05:10:41Z',
       git_url: 'git://github.com/FriendlyUser/CrowdFund.git',
       ssh_url: 'git@github.com:FriendlyUser/CrowdFund.git',
       clone_url: 'https://github.com/FriendlyUser/CrowdFund.git',
       svn_url: 'https://github.com/FriendlyUser/CrowdFund',
       homepage: null,
       size: 446,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'JavaScript',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 59339659,
       node_id: 'MDEwOlJlcG9zaXRvcnk1OTMzOTY1OQ==',
       name: 'CSC115',
       full_name: 'FriendlyUser/CSC115',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/CSC115',
       description: 'Information on some of my work in Java',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/CSC115',
       forks_url: 'https://api.github.com/repos/FriendlyUser/CSC115/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/collaborators{/collaborator}',
       teams_url: 'https://api.github.com/repos/FriendlyUser/CSC115/teams',
       hooks_url: 'https://api.github.com/repos/FriendlyUser/CSC115/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/issues/events{/number}',
       events_url: 'https://api.github.com/repos/FriendlyUser/CSC115/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/CSC115/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/statuses/{sha}',
       languages_url: 'https://api.github.com/repos/FriendlyUser/CSC115/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/compare/{base}...{head}',
       merges_url: 'https://api.github.com/repos/FriendlyUser/CSC115/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/{archive_format}{/ref}',
       downloads_url: 'https://api.github.com/repos/FriendlyUser/CSC115/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/CSC115/deployments',
       created_at: '2016-05-21T03:26:25Z',
       updated_at: '2019-10-12T23:50:49Z',
       pushed_at: '2019-10-12T23:50:47Z',
       git_url: 'git://github.com/FriendlyUser/CSC115.git',
       ssh_url: 'git@github.com:FriendlyUser/CSC115.git',
       clone_url: 'https://github.com/FriendlyUser/CSC115.git',
       svn_url: 'https://github.com/FriendlyUser/CSC115',
       homepage: '',
       size: 1262,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Java',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 216148786,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMTYxNDg3ODY=',
       name: 'dart-basic-math-lib',
       full_name: 'FriendlyUser/dart-basic-math-lib',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/dart-basic-math-lib',
       description:
        'Simple linear congruent generator written in dart inspired by SENG475 assignment 1. ',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/deployments',
       created_at: '2019-10-19T04:25:42Z',
       updated_at: '2019-10-21T04:02:42Z',
       pushed_at: '2019-10-21T04:02:40Z',
       git_url: 'git://github.com/FriendlyUser/dart-basic-math-lib.git',
       ssh_url: 'git@github.com:FriendlyUser/dart-basic-math-lib.git',
       clone_url: 'https://github.com/FriendlyUser/dart-basic-math-lib.git',
       svn_url: 'https://github.com/FriendlyUser/dart-basic-math-lib',
       homepage: null,
       size: 16,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Dart',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 170261540,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNzAyNjE1NDA=',
       name: 'dash-pear-sharpening',
       full_name: 'FriendlyUser/dash-pear-sharpening',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/dash-pear-sharpening',
       description:
        'Basic OpenCv sharpening filter applied in a dash application.',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/deployments',
       created_at: '2019-02-12T06:01:39Z',
       updated_at: '2019-02-13T06:11:52Z',
       pushed_at: '2019-02-13T06:11:51Z',
       git_url: 'git://github.com/FriendlyUser/dash-pear-sharpening.git',
       ssh_url: 'git@github.com:FriendlyUser/dash-pear-sharpening.git',
       clone_url: 'https://github.com/FriendlyUser/dash-pear-sharpening.git',
       svn_url: 'https://github.com/FriendlyUser/dash-pear-sharpening',
       homepage: null,
       size: 1270,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Python',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 190664453,
       node_id: 'MDEwOlJlcG9zaXRvcnkxOTA2NjQ0NTM=',
       name: 'discord-assistant-bot',
       full_name: 'FriendlyUser/discord-assistant-bot',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/discord-assistant-bot',
       description:
        'Built with koa, mongodb, discordjs and typescript with graphql.',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/deployments',
       created_at: '2019-06-06T23:47:05Z',
       updated_at: '2019-11-06T01:32:41Z',
       pushed_at: '2019-11-06T01:34:57Z',
       git_url: 'git://github.com/FriendlyUser/discord-assistant-bot.git',
       ssh_url: 'git@github.com:FriendlyUser/discord-assistant-bot.git',
       clone_url: 'https://github.com/FriendlyUser/discord-assistant-bot.git',
       svn_url: 'https://github.com/FriendlyUser/discord-assistant-bot',
       homepage: null,
       size: 504,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'TypeScript',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 3,
       license: null,
       forks: 0,
       open_issues: 3,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 205478595,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMDU0Nzg1OTU=',
       name: 'dli-postGrad-docs',
       full_name: 'FriendlyUser/dli-postGrad-docs',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/dli-postGrad-docs',
       description:
        'Self Study docs creating using vuepress and my personal vuepress theme',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/deployments',
       created_at: '2019-08-31T01:21:16Z',
       updated_at: '2019-08-31T03:03:25Z',
       pushed_at: '2019-08-31T03:05:40Z',
       git_url: 'git://github.com/FriendlyUser/dli-postGrad-docs.git',
       ssh_url: 'git@github.com:FriendlyUser/dli-postGrad-docs.git',
       clone_url: 'https://github.com/FriendlyUser/dli-postGrad-docs.git',
       svn_url: 'https://github.com/FriendlyUser/dli-postGrad-docs',
       homepage: null,
       size: 797,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Shell',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 213209086,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMTMyMDkwODY=',
       name: 'dli-scrapping-lib',
       full_name: 'FriendlyUser/dli-scrapping-lib',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/dli-scrapping-lib',
       description: 'Various scrapping libraries ',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/deployments',
       created_at: '2019-10-06T17:05:52Z',
       updated_at: '2019-10-06T17:07:50Z',
       pushed_at: '2019-10-06T17:07:48Z',
       git_url: 'git://github.com/FriendlyUser/dli-scrapping-lib.git',
       ssh_url: 'git@github.com:FriendlyUser/dli-scrapping-lib.git',
       clone_url: 'https://github.com/FriendlyUser/dli-scrapping-lib.git',
       svn_url: 'https://github.com/FriendlyUser/dli-scrapping-lib',
       homepage: null,
       size: 10,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Python',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 205454324,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMDU0NTQzMjQ=',
       name: 'dli-vue-docs',
       full_name: 'FriendlyUser/dli-vue-docs',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/dli-vue-docs',
       description:
        'Documentation ill suited for latex created in vue (interactive quizzes and whatnot)',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/dli-vue-docs',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/dli-vue-docs/deployments',
       created_at: '2019-08-30T20:44:10Z',
       updated_at: '2019-09-28T16:56:17Z',
       pushed_at: '2019-11-03T23:06:31Z',
       git_url: 'git://github.com/FriendlyUser/dli-vue-docs.git',
       ssh_url: 'git@github.com:FriendlyUser/dli-vue-docs.git',
       clone_url: 'https://github.com/FriendlyUser/dli-vue-docs.git',
       svn_url: 'https://github.com/FriendlyUser/dli-vue-docs',
       homepage: null,
       size: 12558,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Vue',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 3,
       license: null,
       forks: 0,
       open_issues: 3,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 127354596,
       node_id: 'MDEwOlJlcG9zaXRvcnkxMjczNTQ1OTY=',
       name: 'docs',
       full_name: 'FriendlyUser/docs',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/docs',
       description: 'Linode guides and tutorials.',
       fork: true,
       url: 'https://api.github.com/repos/FriendlyUser/docs',
       forks_url: 'https://api.github.com/repos/FriendlyUser/docs/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/docs/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/docs/collaborators{/collaborator}',
       teams_url: 'https://api.github.com/repos/FriendlyUser/docs/teams',
       hooks_url: 'https://api.github.com/repos/FriendlyUser/docs/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/docs/issues/events{/number}',
       events_url: 'https://api.github.com/repos/FriendlyUser/docs/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/docs/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/docs/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/docs/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/docs/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/docs/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/docs/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/docs/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/docs/statuses/{sha}',
       languages_url: 'https://api.github.com/repos/FriendlyUser/docs/languages',
       stargazers_url: 'https://api.github.com/repos/FriendlyUser/docs/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/docs/contributors',
       subscribers_url: 'https://api.github.com/repos/FriendlyUser/docs/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/docs/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/docs/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/docs/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/docs/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/docs/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/docs/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/docs/compare/{base}...{head}',
       merges_url: 'https://api.github.com/repos/FriendlyUser/docs/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/docs/{archive_format}{/ref}',
       downloads_url: 'https://api.github.com/repos/FriendlyUser/docs/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/docs/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/docs/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/docs/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/docs/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/docs/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/docs/releases{/id}',
       deployments_url: 'https://api.github.com/repos/FriendlyUser/docs/deployments',
       created_at: '2018-03-29T22:39:58Z',
       updated_at: '2018-07-08T04:18:32Z',
       pushed_at: '2018-07-08T04:18:26Z',
       git_url: 'git://github.com/FriendlyUser/docs.git',
       ssh_url: 'git@github.com:FriendlyUser/docs.git',
       clone_url: 'https://github.com/FriendlyUser/docs.git',
       svn_url: 'https://github.com/FriendlyUser/docs',
       homepage: 'https://www.linode.com/docs/',
       size: 318658,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'CSS',
       has_issues: false,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 130767107,
       node_id: 'MDEwOlJlcG9zaXRvcnkxMzA3NjcxMDc=',
       name: 'ENGRCoopReportTemplate',
       full_name: 'FriendlyUser/ENGRCoopReportTemplate',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/ENGRCoopReportTemplate',
       description: 'A latex report made to meet uvic standards.',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/deployments',
       created_at: '2018-04-23T23:09:54Z',
       updated_at: '2018-10-22T19:48:20Z',
       pushed_at: '2018-09-08T17:36:51Z',
       git_url: 'git://github.com/FriendlyUser/ENGRCoopReportTemplate.git',
       ssh_url: 'git@github.com:FriendlyUser/ENGRCoopReportTemplate.git',
       clone_url: 'https://github.com/FriendlyUser/ENGRCoopReportTemplate.git',
       svn_url: 'https://github.com/FriendlyUser/ENGRCoopReportTemplate',
       homepage: null,
       size: 17172,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'TeX',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 148860687,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNDg4NjA2ODc=',
       name: 'file-track-Dapp',
       full_name: 'FriendlyUser/file-track-Dapp',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/file-track-Dapp',
       description:
        'Upload and track IPFS files securely on the Ethereum Network',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/file-track-Dapp',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/file-track-Dapp/deployments',
       created_at: '2018-09-15T02:11:20Z',
       updated_at: '2019-01-04T23:48:41Z',
       pushed_at: '2018-11-30T04:09:33Z',
       git_url: 'git://github.com/FriendlyUser/file-track-Dapp.git',
       ssh_url: 'git@github.com:FriendlyUser/file-track-Dapp.git',
       clone_url: 'https://github.com/FriendlyUser/file-track-Dapp.git',
       svn_url: 'https://github.com/FriendlyUser/file-track-Dapp',
       homepage: 'https://FriendlyUser.github.io/file-track-Dapp',
       size: 10062,
       stargazers_count: 4,
       watchers_count: 4,
       language: 'JavaScript',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 1,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 2,
       license: [Object],
       forks: 1,
       open_issues: 2,
       watchers: 4,
       default_branch: 'master',
       permissions: [Object] },
     { id: 207206169,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMDcyMDYxNjk=',
       name: 'finance-dashboard',
       full_name: 'FriendlyUser/finance-dashboard',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/finance-dashboard',
       description:
        'Financial databoard that uses web scrapping to grab financial data',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/finance-dashboard/deployments',
       created_at: '2019-09-09T02:19:27Z',
       updated_at: '2019-11-02T23:46:24Z',
       pushed_at: '2019-11-02T23:46:22Z',
       git_url: 'git://github.com/FriendlyUser/finance-dashboard.git',
       ssh_url: 'git@github.com:FriendlyUser/finance-dashboard.git',
       clone_url: 'https://github.com/FriendlyUser/finance-dashboard.git',
       svn_url: 'https://github.com/FriendlyUser/finance-dashboard',
       homepage: null,
       size: 199,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Python',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 171366697,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNzEzNjY2OTc=',
       name: 'flappyPlane',
       full_name: 'FriendlyUser/flappyPlane',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/flappyPlane',
       description: 'Flappy Plane Game',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/flappyPlane',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/flappyPlane/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/flappyPlane/deployments',
       created_at: '2019-02-18T22:39:50Z',
       updated_at: '2019-09-24T17:57:59Z',
       pushed_at: '2019-09-24T17:57:57Z',
       git_url: 'git://github.com/FriendlyUser/flappyPlane.git',
       ssh_url: 'git@github.com:FriendlyUser/flappyPlane.git',
       clone_url: 'https://github.com/FriendlyUser/flappyPlane.git',
       svn_url: 'https://github.com/FriendlyUser/flappyPlane',
       homepage: null,
       size: 1726,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Go',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 2,
       license: [Object],
       forks: 0,
       open_issues: 2,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 187713140,
       node_id: 'MDEwOlJlcG9zaXRvcnkxODc3MTMxNDA=',
       name: 'Getting-rid-of-fork',
       full_name: 'FriendlyUser/Getting-rid-of-fork',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/Getting-rid-of-fork',
       description:
        'A tiny Go library + client for downloading Youtube videos. The library is capable of fetching Youtube video metadata, in addition to downloading videos.',
       fork: true,
       url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/deployments',
       created_at: '2019-05-20T21:04:41Z',
       updated_at: '2019-06-28T00:24:48Z',
       pushed_at: '2019-06-10T18:19:45Z',
       git_url: 'git://github.com/FriendlyUser/Getting-rid-of-fork.git',
       ssh_url: 'git@github.com:FriendlyUser/Getting-rid-of-fork.git',
       clone_url: 'https://github.com/FriendlyUser/Getting-rid-of-fork.git',
       svn_url: 'https://github.com/FriendlyUser/Getting-rid-of-fork',
       homepage: '',
       size: 48,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Go',
       has_issues: false,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 1,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 1,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 147041962,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNDcwNDE5NjI=',
       name: 'go-api',
       full_name: 'FriendlyUser/go-api',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/go-api',
       description:
        'RESTFul API with postgres and unit tests for my personal web scrapping script',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/go-api',
       forks_url: 'https://api.github.com/repos/FriendlyUser/go-api/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/go-api/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/go-api/collaborators{/collaborator}',
       teams_url: 'https://api.github.com/repos/FriendlyUser/go-api/teams',
       hooks_url: 'https://api.github.com/repos/FriendlyUser/go-api/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/go-api/issues/events{/number}',
       events_url: 'https://api.github.com/repos/FriendlyUser/go-api/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/go-api/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/go-api/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/go-api/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/go-api/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/go-api/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/go-api/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/go-api/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/go-api/statuses/{sha}',
       languages_url: 'https://api.github.com/repos/FriendlyUser/go-api/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/go-api/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/go-api/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/go-api/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/go-api/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/go-api/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/go-api/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/go-api/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/go-api/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/go-api/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/go-api/compare/{base}...{head}',
       merges_url: 'https://api.github.com/repos/FriendlyUser/go-api/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/go-api/{archive_format}{/ref}',
       downloads_url: 'https://api.github.com/repos/FriendlyUser/go-api/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/go-api/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/go-api/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/go-api/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/go-api/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/go-api/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/go-api/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/go-api/deployments',
       created_at: '2018-09-02T00:23:31Z',
       updated_at: '2019-09-24T18:02:30Z',
       pushed_at: '2019-09-24T18:02:28Z',
       git_url: 'git://github.com/FriendlyUser/go-api.git',
       ssh_url: 'git@github.com:FriendlyUser/go-api.git',
       clone_url: 'https://github.com/FriendlyUser/go-api.git',
       svn_url: 'https://github.com/FriendlyUser/go-api',
       homepage: '',
       size: 622,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Go',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 182199547,
       node_id: 'MDEwOlJlcG9zaXRvcnkxODIxOTk1NDc=',
       name: 'gridsome-app-landing-template',
       full_name: 'FriendlyUser/gridsome-app-landing-template',
       private: false,
       owner: [Object],
       html_url:
        'https://github.com/FriendlyUser/gridsome-app-landing-template',
       description: 'An App Landing Page Template for Gridsome.',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/deployments',
       created_at: '2019-04-19T04:07:41Z',
       updated_at: '2019-06-17T05:09:54Z',
       pushed_at: '2019-04-19T16:38:17Z',
       git_url:
        'git://github.com/FriendlyUser/gridsome-app-landing-template.git',
       ssh_url:
        'git@github.com:FriendlyUser/gridsome-app-landing-template.git',
       clone_url:
        'https://github.com/FriendlyUser/gridsome-app-landing-template.git',
       svn_url:
        'https://github.com/FriendlyUser/gridsome-app-landing-template',
       homepage: null,
       size: 5438,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Vue',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 1,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 1,
       license: [Object],
       forks: 1,
       open_issues: 1,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 210261516,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMTAyNjE1MTY=',
       name: 'gridsome-starter-buefy',
       full_name: 'FriendlyUser/gridsome-starter-buefy',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/gridsome-starter-buefy',
       description: 'Starter theme for gridsome and buefy.',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/deployments',
       created_at: '2019-09-23T04:02:14Z',
       updated_at: '2019-09-24T04:10:54Z',
       pushed_at: '2019-09-24T04:12:24Z',
       git_url: 'git://github.com/FriendlyUser/gridsome-starter-buefy.git',
       ssh_url: 'git@github.com:FriendlyUser/gridsome-starter-buefy.git',
       clone_url: 'https://github.com/FriendlyUser/gridsome-starter-buefy.git',
       svn_url: 'https://github.com/FriendlyUser/gridsome-starter-buefy',
       homepage: null,
       size: 330,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Vue',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 1,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 1,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 210263130,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMTAyNjMxMzA=',
       name: 'gridsome.org',
       full_name: 'FriendlyUser/gridsome.org',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/gridsome.org',
       description: 'Website for Gridsome.org',
       fork: true,
       url: 'https://api.github.com/repos/FriendlyUser/gridsome.org',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/gridsome.org/deployments',
       created_at: '2019-09-23T04:15:41Z',
       updated_at: '2019-09-25T15:26:12Z',
       pushed_at: '2019-09-25T15:26:10Z',
       git_url: 'git://github.com/FriendlyUser/gridsome.org.git',
       ssh_url: 'git@github.com:FriendlyUser/gridsome.org.git',
       clone_url: 'https://github.com/FriendlyUser/gridsome.org.git',
       svn_url: 'https://github.com/FriendlyUser/gridsome.org',
       homepage: 'https://gridsome.org',
       size: 26371,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Vue',
       has_issues: false,
       has_projects: true,
       has_downloads: true,
       has_wiki: false,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: null,
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 203492542,
       node_id: 'MDEwOlJlcG9zaXRvcnkyMDM0OTI1NDI=',
       name: 'hugo-academic',
       full_name: 'FriendlyUser/hugo-academic',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/hugo-academic',
       description:
        '📝 The website builder for Hugo. Build and deploy a beautiful website in minutes!',
       fork: true,
       url: 'https://api.github.com/repos/FriendlyUser/hugo-academic',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/hugo-academic/deployments',
       created_at: '2019-08-21T02:42:25Z',
       updated_at: '2019-08-21T02:42:28Z',
       pushed_at: '2019-08-19T16:15:07Z',
       git_url: 'git://github.com/FriendlyUser/hugo-academic.git',
       ssh_url: 'git@github.com:FriendlyUser/hugo-academic.git',
       clone_url: 'https://github.com/FriendlyUser/hugo-academic.git',
       svn_url: 'https://github.com/FriendlyUser/hugo-academic',
       homepage: 'https://sourcethemes.com/academic/',
       size: 7370,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'HTML',
       has_issues: false,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 1,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 1,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 163621023,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNjM2MjEwMjM=',
       name: 'Keras-Reinforcement-Learning-Projects',
       full_name: 'FriendlyUser/Keras-Reinforcement-Learning-Projects',
       private: false,
       owner: [Object],
       html_url:
        'https://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects',
       description: 'Keras Reinforcement Learning Projects published by Packt',
       fork: true,
       url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/deployments',
       created_at: '2018-12-30T22:11:19Z',
       updated_at: '2018-12-30T22:12:15Z',
       pushed_at: '2018-12-30T22:12:14Z',
       git_url:
        'git://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects.git',
       ssh_url:
        'git@github.com:FriendlyUser/Keras-Reinforcement-Learning-Projects.git',
       clone_url:
        'https://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects.git',
       svn_url:
        'https://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects',
       homepage: null,
       size: 268,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Python',
       has_issues: false,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 184919874,
       node_id: 'MDEwOlJlcG9zaXRvcnkxODQ5MTk4NzQ=',
       name: 'LatexDiagrams',
       full_name: 'FriendlyUser/LatexDiagrams',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/LatexDiagrams',
       description: 'Latex Diagrams that I have generated/taken from internet.',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/LatexDiagrams',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/LatexDiagrams/deployments',
       created_at: '2019-05-04T16:36:45Z',
       updated_at: '2019-11-03T22:35:42Z',
       pushed_at: '2019-11-03T22:35:40Z',
       git_url: 'git://github.com/FriendlyUser/LatexDiagrams.git',
       ssh_url: 'git@github.com:FriendlyUser/LatexDiagrams.git',
       clone_url: 'https://github.com/FriendlyUser/LatexDiagrams.git',
       svn_url: 'https://github.com/FriendlyUser/LatexDiagrams',
       homepage: '',
       size: 7194,
       stargazers_count: 29,
       watchers_count: 29,
       language: 'TeX',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 8,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 1,
       license: [Object],
       forks: 8,
       open_issues: 1,
       watchers: 29,
       default_branch: 'master',
       permissions: [Object] },
     { id: 141662518,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNDE2NjI1MTg=',
       name: 'markdown-notes-template',
       full_name: 'FriendlyUser/markdown-notes-template',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/markdown-notes-template',
       description:
        'By leveraging the note taking abilities Boostnote and using Vuepress to publish markdown, an excellent reusable markdown based notes/wiki format is accessible.',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/markdown-notes-template/deployments',
       created_at: '2018-07-20T04:12:58Z',
       updated_at: '2018-10-22T19:47:15Z',
       pushed_at: '2018-08-02T04:07:11Z',
       git_url: 'git://github.com/FriendlyUser/markdown-notes-template.git',
       ssh_url: 'git@github.com:FriendlyUser/markdown-notes-template.git',
       clone_url:
        'https://github.com/FriendlyUser/markdown-notes-template.git',
       svn_url: 'https://github.com/FriendlyUser/markdown-notes-template',
       homepage: 'https://friendlyuser.github.io/markdown-notes-template/',
       size: 498,
       stargazers_count: 1,
       watchers_count: 1,
       language: 'Python',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 1,
       default_branch: 'master',
       permissions: [Object] },
     { id: 59381384,
       node_id: 'MDEwOlJlcG9zaXRvcnk1OTM4MTM4NA==',
       name: 'Matlab',
       full_name: 'FriendlyUser/Matlab',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/Matlab',
       description:
        'Assignments done in matlab for my courses as well as my custom publishing files',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/Matlab',
       forks_url: 'https://api.github.com/repos/FriendlyUser/Matlab/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/collaborators{/collaborator}',
       teams_url: 'https://api.github.com/repos/FriendlyUser/Matlab/teams',
       hooks_url: 'https://api.github.com/repos/FriendlyUser/Matlab/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/issues/events{/number}',
       events_url: 'https://api.github.com/repos/FriendlyUser/Matlab/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/branches{/branch}',
       tags_url: 'https://api.github.com/repos/FriendlyUser/Matlab/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/statuses/{sha}',
       languages_url: 'https://api.github.com/repos/FriendlyUser/Matlab/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/compare/{base}...{head}',
       merges_url: 'https://api.github.com/repos/FriendlyUser/Matlab/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/{archive_format}{/ref}',
       downloads_url: 'https://api.github.com/repos/FriendlyUser/Matlab/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/Matlab/deployments',
       created_at: '2016-05-21T21:05:12Z',
       updated_at: '2019-04-27T02:12:52Z',
       pushed_at: '2019-04-27T02:12:51Z',
       git_url: 'git://github.com/FriendlyUser/Matlab.git',
       ssh_url: 'git@github.com:FriendlyUser/Matlab.git',
       clone_url: 'https://github.com/FriendlyUser/Matlab.git',
       svn_url: 'https://github.com/FriendlyUser/Matlab',
       homepage: '',
       size: 8448,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'MATLAB',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 160972399,
       node_id: 'MDEwOlJlcG9zaXRvcnkxNjA5NzIzOTk=',
       name: 'nuxt-url-shorter',
       full_name: 'FriendlyUser/nuxt-url-shorter',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/nuxt-url-shorter',
       description: 'URL shortener on the Ethereum Blockchain',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/deployments',
       created_at: '2018-12-08T19:36:48Z',
       updated_at: '2018-12-23T02:07:35Z',
       pushed_at: '2018-12-23T02:07:34Z',
       git_url: 'git://github.com/FriendlyUser/nuxt-url-shorter.git',
       ssh_url: 'git@github.com:FriendlyUser/nuxt-url-shorter.git',
       clone_url: 'https://github.com/FriendlyUser/nuxt-url-shorter.git',
       svn_url: 'https://github.com/FriendlyUser/nuxt-url-shorter',
       homepage: null,
       size: 307,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'Vue',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 5,
       license: [Object],
       forks: 0,
       open_issues: 5,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] },
     { id: 127659391,
       node_id: 'MDEwOlJlcG9zaXRvcnkxMjc2NTkzOTE=',
       name: 'personal-dashboard',
       full_name: 'FriendlyUser/personal-dashboard',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/personal-dashboard',
       description:
        'Created using dash and uploaded to heroku, this dashboard will highlight some interesting statistics about me and things that I do.',
       fork: false,
       url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/personal-dashboard/deployments',
       created_at: '2018-04-01T18:24:02Z',
       updated_at: '2019-05-10T12:44:33Z',
       pushed_at: '2019-01-03T05:13:38Z',
       git_url: 'git://github.com/FriendlyUser/personal-dashboard.git',
       ssh_url: 'git@github.com:FriendlyUser/personal-dashboard.git',
       clone_url: 'https://github.com/FriendlyUser/personal-dashboard.git',
       svn_url: 'https://github.com/FriendlyUser/personal-dashboard',
       homepage: null,
       size: 116,
       stargazers_count: 2,
       watchers_count: 2,
       language: 'Python',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: false,
       forks_count: 2,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 2,
       open_issues: 0,
       watchers: 2,
       default_branch: 'master',
       permissions: [Object] },
     { id: 111951156,
       node_id: 'MDEwOlJlcG9zaXRvcnkxMTE5NTExNTY=',
       name: 'Pirates-Game',
       full_name: 'FriendlyUser/Pirates-Game',
       private: false,
       owner: [Object],
       html_url: 'https://github.com/FriendlyUser/Pirates-Game',
       description:
        'CENG 356 Simple Networked Game --- an simple game that implements a client-server architecture.',
       fork: false,
       url: 'https://api.github.com/repos/FriendlyUser/Pirates-Game',
       forks_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/forks',
       keys_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/keys{/key_id}',
       collaborators_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/collaborators{/collaborator}',
       teams_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/teams',
       hooks_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/hooks',
       issue_events_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/issues/events{/number}',
       events_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/events',
       assignees_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/assignees{/user}',
       branches_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/branches{/branch}',
       tags_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/tags',
       blobs_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/blobs{/sha}',
       git_tags_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/tags{/sha}',
       git_refs_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/refs{/sha}',
       trees_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/trees{/sha}',
       statuses_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/statuses/{sha}',
       languages_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/languages',
       stargazers_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/stargazers',
       contributors_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/contributors',
       subscribers_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/subscribers',
       subscription_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/subscription',
       commits_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/commits{/sha}',
       git_commits_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/commits{/sha}',
       comments_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/comments{/number}',
       issue_comment_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/issues/comments{/number}',
       contents_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/contents/{+path}',
       compare_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/compare/{base}...{head}',
       merges_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/merges',
       archive_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/{archive_format}{/ref}',
       downloads_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/downloads',
       issues_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/issues{/number}',
       pulls_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/pulls{/number}',
       milestones_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/milestones{/number}',
       notifications_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/notifications{?since,all,participating}',
       labels_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/labels{/name}',
       releases_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/releases{/id}',
       deployments_url:
        'https://api.github.com/repos/FriendlyUser/Pirates-Game/deployments',
       created_at: '2017-11-24T19:49:26Z',
       updated_at: '2018-04-18T04:53:17Z',
       pushed_at: '2018-04-18T04:53:17Z',
       git_url: 'git://github.com/FriendlyUser/Pirates-Game.git',
       ssh_url: 'git@github.com:FriendlyUser/Pirates-Game.git',
       clone_url: 'https://github.com/FriendlyUser/Pirates-Game.git',
       svn_url: 'https://github.com/FriendlyUser/Pirates-Game',
       homepage: '',
       size: 9349,
       stargazers_count: 0,
       watchers_count: 0,
       language: 'JavaScript',
       has_issues: true,
       has_projects: true,
       has_downloads: true,
       has_wiki: true,
       has_pages: true,
       forks_count: 0,
       mirror_url: null,
       archived: false,
       disabled: false,
       open_issues_count: 0,
       license: [Object],
       forks: 0,
       open_issues: 0,
       watchers: 0,
       default_branch: 'master',
       permissions: [Object] } ] }
[ { id: 152832302,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNTI4MzIzMDI=',
    name: 'BattleTD',
    full_name: 'FriendlyUser/BattleTD',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/BattleTD',
    description: 'Tower Defence Game made in Unity.',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/BattleTD',
    forks_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/teams',
    hooks_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/issues/events{/number}',
    events_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/FriendlyUser/BattleTD/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/BattleTD/deployments',
    created_at: '2018-10-13T03:43:48Z',
    updated_at: '2019-01-12T05:51:11Z',
    pushed_at: '2019-01-12T07:01:35Z',
    git_url: 'git://github.com/FriendlyUser/BattleTD.git',
    ssh_url: 'git@github.com:FriendlyUser/BattleTD.git',
    clone_url: 'https://github.com/FriendlyUser/BattleTD.git',
    svn_url: 'https://github.com/FriendlyUser/BattleTD',
    homepage: null,
    size: 241060,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'C#',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 106222158,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDYyMjIxNTg=',
    name: 'Brick-Game-',
    full_name: 'FriendlyUser/Brick-Game-',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/Brick-Game-',
    description:
     'This contains an basic brick game in unity, some of the sprites are ugly, I know.',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/Brick-Game-',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/Brick-Game-/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/Brick-Game-/deployments',
    created_at: '2017-10-09T01:06:47Z',
    updated_at: '2018-07-10T19:37:40Z',
    pushed_at: '2017-10-09T01:09:58Z',
    git_url: 'git://github.com/FriendlyUser/Brick-Game-.git',
    ssh_url: 'git@github.com:FriendlyUser/Brick-Game-.git',
    clone_url: 'https://github.com/FriendlyUser/Brick-Game-.git',
    svn_url: 'https://github.com/FriendlyUser/Brick-Game-',
    homepage: null,
    size: 33,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C#',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'apache-2.0',
       name: 'Apache License 2.0',
       spdx_id: 'Apache-2.0',
       url: 'https://api.github.com/licenses/apache-2.0',
       node_id: 'MDc6TGljZW5zZTI=' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 66906833,
    node_id: 'MDEwOlJlcG9zaXRvcnk2NjkwNjgzMw==',
    name: 'C',
    full_name: 'FriendlyUser/C',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/C',
    description: 'Some C files examples in Visual Studio and some coursework',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/C',
    forks_url: 'https://api.github.com/repos/FriendlyUser/C/forks',
    keys_url: 'https://api.github.com/repos/FriendlyUser/C/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/C/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/FriendlyUser/C/teams',
    hooks_url: 'https://api.github.com/repos/FriendlyUser/C/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/C/issues/events{/number}',
    events_url: 'https://api.github.com/repos/FriendlyUser/C/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/C/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/C/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/C/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/C/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/FriendlyUser/C/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/FriendlyUser/C/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/C/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/FriendlyUser/C/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/FriendlyUser/C/languages',
    stargazers_url: 'https://api.github.com/repos/FriendlyUser/C/stargazers',
    contributors_url: 'https://api.github.com/repos/FriendlyUser/C/contributors',
    subscribers_url: 'https://api.github.com/repos/FriendlyUser/C/subscribers',
    subscription_url: 'https://api.github.com/repos/FriendlyUser/C/subscription',
    commits_url: 'https://api.github.com/repos/FriendlyUser/C/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/C/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/C/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/C/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/C/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/C/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/FriendlyUser/C/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/C/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/FriendlyUser/C/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/C/issues{/number}',
    pulls_url: 'https://api.github.com/repos/FriendlyUser/C/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/C/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/C/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/FriendlyUser/C/labels{/name}',
    releases_url: 'https://api.github.com/repos/FriendlyUser/C/releases{/id}',
    deployments_url: 'https://api.github.com/repos/FriendlyUser/C/deployments',
    created_at: '2016-08-30T04:35:33Z',
    updated_at: '2019-06-01T13:48:07Z',
    pushed_at: '2019-06-01T13:48:05Z',
    git_url: 'git://github.com/FriendlyUser/C.git',
    ssh_url: 'git@github.com:FriendlyUser/C.git',
    clone_url: 'https://github.com/FriendlyUser/C.git',
    svn_url: 'https://github.com/FriendlyUser/C',
    homepage: '',
    size: 8355,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 211428089,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTE0MjgwODk=',
    name: 'ChickenOutBreak',
    full_name: 'FriendlyUser/ChickenOutBreak',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/ChickenOutBreak',
    description: 'Qml Game using felgo',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/ChickenOutBreak',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/ChickenOutBreak/deployments',
    created_at: '2019-09-28T01:44:56Z',
    updated_at: '2019-10-12T21:02:22Z',
    pushed_at: '2019-10-12T21:02:20Z',
    git_url: 'git://github.com/FriendlyUser/ChickenOutBreak.git',
    ssh_url: 'git@github.com:FriendlyUser/ChickenOutBreak.git',
    clone_url: 'https://github.com/FriendlyUser/ChickenOutBreak.git',
    svn_url: 'https://github.com/FriendlyUser/ChickenOutBreak',
    homepage: null,
    size: 5074,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'QML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 165587544,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjU1ODc1NDQ=',
    name: 'CrowdFund',
    full_name: 'FriendlyUser/CrowdFund',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/CrowdFund',
    description: 'CrowdFunding Smart Contract',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/CrowdFund',
    forks_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/teams',
    hooks_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/issues/events{/number}',
    events_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/FriendlyUser/CrowdFund/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/CrowdFund/deployments',
    created_at: '2019-01-14T03:12:33Z',
    updated_at: '2019-01-14T05:10:43Z',
    pushed_at: '2019-01-14T05:10:41Z',
    git_url: 'git://github.com/FriendlyUser/CrowdFund.git',
    ssh_url: 'git@github.com:FriendlyUser/CrowdFund.git',
    clone_url: 'https://github.com/FriendlyUser/CrowdFund.git',
    svn_url: 'https://github.com/FriendlyUser/CrowdFund',
    homepage: null,
    size: 446,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 59339659,
    node_id: 'MDEwOlJlcG9zaXRvcnk1OTMzOTY1OQ==',
    name: 'CSC115',
    full_name: 'FriendlyUser/CSC115',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/CSC115',
    description: 'Information on some of my work in Java',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/CSC115',
    forks_url: 'https://api.github.com/repos/FriendlyUser/CSC115/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/FriendlyUser/CSC115/teams',
    hooks_url: 'https://api.github.com/repos/FriendlyUser/CSC115/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/issues/events{/number}',
    events_url: 'https://api.github.com/repos/FriendlyUser/CSC115/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/CSC115/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/FriendlyUser/CSC115/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/FriendlyUser/CSC115/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/FriendlyUser/CSC115/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/CSC115/deployments',
    created_at: '2016-05-21T03:26:25Z',
    updated_at: '2019-10-12T23:50:49Z',
    pushed_at: '2019-10-12T23:50:47Z',
    git_url: 'git://github.com/FriendlyUser/CSC115.git',
    ssh_url: 'git@github.com:FriendlyUser/CSC115.git',
    clone_url: 'https://github.com/FriendlyUser/CSC115.git',
    svn_url: 'https://github.com/FriendlyUser/CSC115',
    homepage: '',
    size: 1262,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Java',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 216148786,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTYxNDg3ODY=',
    name: 'dart-basic-math-lib',
    full_name: 'FriendlyUser/dart-basic-math-lib',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/dart-basic-math-lib',
    description:
     'Simple linear congruent generator written in dart inspired by SENG475 assignment 1. ',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/dart-basic-math-lib/deployments',
    created_at: '2019-10-19T04:25:42Z',
    updated_at: '2019-10-21T04:02:42Z',
    pushed_at: '2019-10-21T04:02:40Z',
    git_url: 'git://github.com/FriendlyUser/dart-basic-math-lib.git',
    ssh_url: 'git@github.com:FriendlyUser/dart-basic-math-lib.git',
    clone_url: 'https://github.com/FriendlyUser/dart-basic-math-lib.git',
    svn_url: 'https://github.com/FriendlyUser/dart-basic-math-lib',
    homepage: null,
    size: 16,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Dart',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 170261540,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNzAyNjE1NDA=',
    name: 'dash-pear-sharpening',
    full_name: 'FriendlyUser/dash-pear-sharpening',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/dash-pear-sharpening',
    description:
     'Basic OpenCv sharpening filter applied in a dash application.',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/dash-pear-sharpening/deployments',
    created_at: '2019-02-12T06:01:39Z',
    updated_at: '2019-02-13T06:11:52Z',
    pushed_at: '2019-02-13T06:11:51Z',
    git_url: 'git://github.com/FriendlyUser/dash-pear-sharpening.git',
    ssh_url: 'git@github.com:FriendlyUser/dash-pear-sharpening.git',
    clone_url: 'https://github.com/FriendlyUser/dash-pear-sharpening.git',
    svn_url: 'https://github.com/FriendlyUser/dash-pear-sharpening',
    homepage: null,
    size: 1270,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 190664453,
    node_id: 'MDEwOlJlcG9zaXRvcnkxOTA2NjQ0NTM=',
    name: 'discord-assistant-bot',
    full_name: 'FriendlyUser/discord-assistant-bot',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/discord-assistant-bot',
    description:
     'Built with koa, mongodb, discordjs and typescript with graphql.',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/discord-assistant-bot/deployments',
    created_at: '2019-06-06T23:47:05Z',
    updated_at: '2019-11-06T01:32:41Z',
    pushed_at: '2019-11-06T01:34:57Z',
    git_url: 'git://github.com/FriendlyUser/discord-assistant-bot.git',
    ssh_url: 'git@github.com:FriendlyUser/discord-assistant-bot.git',
    clone_url: 'https://github.com/FriendlyUser/discord-assistant-bot.git',
    svn_url: 'https://github.com/FriendlyUser/discord-assistant-bot',
    homepage: null,
    size: 504,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3,
    license: null,
    forks: 0,
    open_issues: 3,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 205478595,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMDU0Nzg1OTU=',
    name: 'dli-postGrad-docs',
    full_name: 'FriendlyUser/dli-postGrad-docs',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/dli-postGrad-docs',
    description:
     'Self Study docs creating using vuepress and my personal vuepress theme',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/dli-postGrad-docs/deployments',
    created_at: '2019-08-31T01:21:16Z',
    updated_at: '2019-08-31T03:03:25Z',
    pushed_at: '2019-08-31T03:05:40Z',
    git_url: 'git://github.com/FriendlyUser/dli-postGrad-docs.git',
    ssh_url: 'git@github.com:FriendlyUser/dli-postGrad-docs.git',
    clone_url: 'https://github.com/FriendlyUser/dli-postGrad-docs.git',
    svn_url: 'https://github.com/FriendlyUser/dli-postGrad-docs',
    homepage: null,
    size: 797,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 213209086,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTMyMDkwODY=',
    name: 'dli-scrapping-lib',
    full_name: 'FriendlyUser/dli-scrapping-lib',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/dli-scrapping-lib',
    description: 'Various scrapping libraries ',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/dli-scrapping-lib/deployments',
    created_at: '2019-10-06T17:05:52Z',
    updated_at: '2019-10-06T17:07:50Z',
    pushed_at: '2019-10-06T17:07:48Z',
    git_url: 'git://github.com/FriendlyUser/dli-scrapping-lib.git',
    ssh_url: 'git@github.com:FriendlyUser/dli-scrapping-lib.git',
    clone_url: 'https://github.com/FriendlyUser/dli-scrapping-lib.git',
    svn_url: 'https://github.com/FriendlyUser/dli-scrapping-lib',
    homepage: null,
    size: 10,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 205454324,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMDU0NTQzMjQ=',
    name: 'dli-vue-docs',
    full_name: 'FriendlyUser/dli-vue-docs',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/dli-vue-docs',
    description:
     'Documentation ill suited for latex created in vue (interactive quizzes and whatnot)',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/dli-vue-docs',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/dli-vue-docs/deployments',
    created_at: '2019-08-30T20:44:10Z',
    updated_at: '2019-09-28T16:56:17Z',
    pushed_at: '2019-11-03T23:06:31Z',
    git_url: 'git://github.com/FriendlyUser/dli-vue-docs.git',
    ssh_url: 'git@github.com:FriendlyUser/dli-vue-docs.git',
    clone_url: 'https://github.com/FriendlyUser/dli-vue-docs.git',
    svn_url: 'https://github.com/FriendlyUser/dli-vue-docs',
    homepage: null,
    size: 12558,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Vue',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3,
    license: null,
    forks: 0,
    open_issues: 3,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 127354596,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjczNTQ1OTY=',
    name: 'docs',
    full_name: 'FriendlyUser/docs',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/docs',
    description: 'Linode guides and tutorials.',
    fork: true,
    url: 'https://api.github.com/repos/FriendlyUser/docs',
    forks_url: 'https://api.github.com/repos/FriendlyUser/docs/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/docs/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/docs/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/FriendlyUser/docs/teams',
    hooks_url: 'https://api.github.com/repos/FriendlyUser/docs/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/docs/issues/events{/number}',
    events_url: 'https://api.github.com/repos/FriendlyUser/docs/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/docs/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/docs/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/docs/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/docs/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/docs/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/docs/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/docs/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/docs/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/FriendlyUser/docs/languages',
    stargazers_url: 'https://api.github.com/repos/FriendlyUser/docs/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/docs/contributors',
    subscribers_url: 'https://api.github.com/repos/FriendlyUser/docs/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/docs/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/docs/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/docs/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/docs/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/docs/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/docs/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/docs/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/FriendlyUser/docs/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/docs/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/FriendlyUser/docs/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/docs/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/docs/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/docs/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/docs/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/docs/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/docs/releases{/id}',
    deployments_url: 'https://api.github.com/repos/FriendlyUser/docs/deployments',
    created_at: '2018-03-29T22:39:58Z',
    updated_at: '2018-07-08T04:18:32Z',
    pushed_at: '2018-07-08T04:18:26Z',
    git_url: 'git://github.com/FriendlyUser/docs.git',
    ssh_url: 'git@github.com:FriendlyUser/docs.git',
    clone_url: 'https://github.com/FriendlyUser/docs.git',
    svn_url: 'https://github.com/FriendlyUser/docs',
    homepage: 'https://www.linode.com/docs/',
    size: 318658,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'CSS',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 130767107,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzA3NjcxMDc=',
    name: 'ENGRCoopReportTemplate',
    full_name: 'FriendlyUser/ENGRCoopReportTemplate',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/ENGRCoopReportTemplate',
    description: 'A latex report made to meet uvic standards.',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/ENGRCoopReportTemplate/deployments',
    created_at: '2018-04-23T23:09:54Z',
    updated_at: '2018-10-22T19:48:20Z',
    pushed_at: '2018-09-08T17:36:51Z',
    git_url: 'git://github.com/FriendlyUser/ENGRCoopReportTemplate.git',
    ssh_url: 'git@github.com:FriendlyUser/ENGRCoopReportTemplate.git',
    clone_url: 'https://github.com/FriendlyUser/ENGRCoopReportTemplate.git',
    svn_url: 'https://github.com/FriendlyUser/ENGRCoopReportTemplate',
    homepage: null,
    size: 17172,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TeX',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 148860687,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDg4NjA2ODc=',
    name: 'file-track-Dapp',
    full_name: 'FriendlyUser/file-track-Dapp',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/file-track-Dapp',
    description:
     'Upload and track IPFS files securely on the Ethereum Network',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/file-track-Dapp',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/file-track-Dapp/deployments',
    created_at: '2018-09-15T02:11:20Z',
    updated_at: '2019-01-04T23:48:41Z',
    pushed_at: '2018-11-30T04:09:33Z',
    git_url: 'git://github.com/FriendlyUser/file-track-Dapp.git',
    ssh_url: 'git@github.com:FriendlyUser/file-track-Dapp.git',
    clone_url: 'https://github.com/FriendlyUser/file-track-Dapp.git',
    svn_url: 'https://github.com/FriendlyUser/file-track-Dapp',
    homepage: 'https://FriendlyUser.github.io/file-track-Dapp',
    size: 10062,
    stargazers_count: 4,
    watchers_count: 4,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license:
     { key: 'mpl-2.0',
       name: 'Mozilla Public License 2.0',
       spdx_id: 'MPL-2.0',
       url: 'https://api.github.com/licenses/mpl-2.0',
       node_id: 'MDc6TGljZW5zZTE0' },
    forks: 1,
    open_issues: 2,
    watchers: 4,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 207206169,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMDcyMDYxNjk=',
    name: 'finance-dashboard',
    full_name: 'FriendlyUser/finance-dashboard',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/finance-dashboard',
    description:
     'Financial databoard that uses web scrapping to grab financial data',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/finance-dashboard/deployments',
    created_at: '2019-09-09T02:19:27Z',
    updated_at: '2019-11-02T23:46:24Z',
    pushed_at: '2019-11-02T23:46:22Z',
    git_url: 'git://github.com/FriendlyUser/finance-dashboard.git',
    ssh_url: 'git@github.com:FriendlyUser/finance-dashboard.git',
    clone_url: 'https://github.com/FriendlyUser/finance-dashboard.git',
    svn_url: 'https://github.com/FriendlyUser/finance-dashboard',
    homepage: null,
    size: 199,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 171366697,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNzEzNjY2OTc=',
    name: 'flappyPlane',
    full_name: 'FriendlyUser/flappyPlane',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/flappyPlane',
    description: 'Flappy Plane Game',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/flappyPlane',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/flappyPlane/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/flappyPlane/deployments',
    created_at: '2019-02-18T22:39:50Z',
    updated_at: '2019-09-24T17:57:59Z',
    pushed_at: '2019-09-24T17:57:57Z',
    git_url: 'git://github.com/FriendlyUser/flappyPlane.git',
    ssh_url: 'git@github.com:FriendlyUser/flappyPlane.git',
    clone_url: 'https://github.com/FriendlyUser/flappyPlane.git',
    svn_url: 'https://github.com/FriendlyUser/flappyPlane',
    homepage: null,
    size: 1726,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Go',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 187713140,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODc3MTMxNDA=',
    name: 'Getting-rid-of-fork',
    full_name: 'FriendlyUser/Getting-rid-of-fork',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/Getting-rid-of-fork',
    description:
     'A tiny Go library + client for downloading Youtube videos. The library is capable of fetching Youtube video metadata, in addition to downloading videos.',
    fork: true,
    url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/Getting-rid-of-fork/deployments',
    created_at: '2019-05-20T21:04:41Z',
    updated_at: '2019-06-28T00:24:48Z',
    pushed_at: '2019-06-10T18:19:45Z',
    git_url: 'git://github.com/FriendlyUser/Getting-rid-of-fork.git',
    ssh_url: 'git@github.com:FriendlyUser/Getting-rid-of-fork.git',
    clone_url: 'https://github.com/FriendlyUser/Getting-rid-of-fork.git',
    svn_url: 'https://github.com/FriendlyUser/Getting-rid-of-fork',
    homepage: '',
    size: 48,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Go',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 147041962,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDcwNDE5NjI=',
    name: 'go-api',
    full_name: 'FriendlyUser/go-api',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/go-api',
    description:
     'RESTFul API with postgres and unit tests for my personal web scrapping script',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/go-api',
    forks_url: 'https://api.github.com/repos/FriendlyUser/go-api/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/go-api/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/go-api/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/FriendlyUser/go-api/teams',
    hooks_url: 'https://api.github.com/repos/FriendlyUser/go-api/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/go-api/issues/events{/number}',
    events_url: 'https://api.github.com/repos/FriendlyUser/go-api/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/go-api/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/go-api/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/go-api/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/go-api/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/go-api/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/go-api/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/go-api/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/go-api/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/FriendlyUser/go-api/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/go-api/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/go-api/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/go-api/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/go-api/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/go-api/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/go-api/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/go-api/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/go-api/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/go-api/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/go-api/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/FriendlyUser/go-api/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/go-api/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/FriendlyUser/go-api/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/go-api/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/go-api/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/go-api/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/go-api/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/go-api/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/go-api/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/go-api/deployments',
    created_at: '2018-09-02T00:23:31Z',
    updated_at: '2019-09-24T18:02:30Z',
    pushed_at: '2019-09-24T18:02:28Z',
    git_url: 'git://github.com/FriendlyUser/go-api.git',
    ssh_url: 'git@github.com:FriendlyUser/go-api.git',
    clone_url: 'https://github.com/FriendlyUser/go-api.git',
    svn_url: 'https://github.com/FriendlyUser/go-api',
    homepage: '',
    size: 622,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Go',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'gpl-3.0',
       name: 'GNU General Public License v3.0',
       spdx_id: 'GPL-3.0',
       url: 'https://api.github.com/licenses/gpl-3.0',
       node_id: 'MDc6TGljZW5zZTk=' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 182199547,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODIxOTk1NDc=',
    name: 'gridsome-app-landing-template',
    full_name: 'FriendlyUser/gridsome-app-landing-template',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url:
     'https://github.com/FriendlyUser/gridsome-app-landing-template',
    description: 'An App Landing Page Template for Gridsome.',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-app-landing-template/deployments',
    created_at: '2019-04-19T04:07:41Z',
    updated_at: '2019-06-17T05:09:54Z',
    pushed_at: '2019-04-19T16:38:17Z',
    git_url:
     'git://github.com/FriendlyUser/gridsome-app-landing-template.git',
    ssh_url:
     'git@github.com:FriendlyUser/gridsome-app-landing-template.git',
    clone_url:
     'https://github.com/FriendlyUser/gridsome-app-landing-template.git',
    svn_url:
     'https://github.com/FriendlyUser/gridsome-app-landing-template',
    homepage: null,
    size: 5438,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Vue',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 1,
    open_issues: 1,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 210261516,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTAyNjE1MTY=',
    name: 'gridsome-starter-buefy',
    full_name: 'FriendlyUser/gridsome-starter-buefy',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/gridsome-starter-buefy',
    description: 'Starter theme for gridsome and buefy.',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/gridsome-starter-buefy/deployments',
    created_at: '2019-09-23T04:02:14Z',
    updated_at: '2019-09-24T04:10:54Z',
    pushed_at: '2019-09-24T04:12:24Z',
    git_url: 'git://github.com/FriendlyUser/gridsome-starter-buefy.git',
    ssh_url: 'git@github.com:FriendlyUser/gridsome-starter-buefy.git',
    clone_url: 'https://github.com/FriendlyUser/gridsome-starter-buefy.git',
    svn_url: 'https://github.com/FriendlyUser/gridsome-starter-buefy',
    homepage: null,
    size: 330,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Vue',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 210263130,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMTAyNjMxMzA=',
    name: 'gridsome.org',
    full_name: 'FriendlyUser/gridsome.org',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/gridsome.org',
    description: 'Website for Gridsome.org',
    fork: true,
    url: 'https://api.github.com/repos/FriendlyUser/gridsome.org',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/gridsome.org/deployments',
    created_at: '2019-09-23T04:15:41Z',
    updated_at: '2019-09-25T15:26:12Z',
    pushed_at: '2019-09-25T15:26:10Z',
    git_url: 'git://github.com/FriendlyUser/gridsome.org.git',
    ssh_url: 'git@github.com:FriendlyUser/gridsome.org.git',
    clone_url: 'https://github.com/FriendlyUser/gridsome.org.git',
    svn_url: 'https://github.com/FriendlyUser/gridsome.org',
    homepage: 'https://gridsome.org',
    size: 26371,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Vue',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 203492542,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMDM0OTI1NDI=',
    name: 'hugo-academic',
    full_name: 'FriendlyUser/hugo-academic',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/hugo-academic',
    description:
     '📝 The website builder for Hugo. Build and deploy a beautiful website in minutes!',
    fork: true,
    url: 'https://api.github.com/repos/FriendlyUser/hugo-academic',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/hugo-academic/deployments',
    created_at: '2019-08-21T02:42:25Z',
    updated_at: '2019-08-21T02:42:28Z',
    pushed_at: '2019-08-19T16:15:07Z',
    git_url: 'git://github.com/FriendlyUser/hugo-academic.git',
    ssh_url: 'git@github.com:FriendlyUser/hugo-academic.git',
    clone_url: 'https://github.com/FriendlyUser/hugo-academic.git',
    svn_url: 'https://github.com/FriendlyUser/hugo-academic',
    homepage: 'https://sourcethemes.com/academic/',
    size: 7370,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 163621023,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjM2MjEwMjM=',
    name: 'Keras-Reinforcement-Learning-Projects',
    full_name: 'FriendlyUser/Keras-Reinforcement-Learning-Projects',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url:
     'https://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects',
    description: 'Keras Reinforcement Learning Projects published by Packt',
    fork: true,
    url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/Keras-Reinforcement-Learning-Projects/deployments',
    created_at: '2018-12-30T22:11:19Z',
    updated_at: '2018-12-30T22:12:15Z',
    pushed_at: '2018-12-30T22:12:14Z',
    git_url:
     'git://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects.git',
    ssh_url:
     'git@github.com:FriendlyUser/Keras-Reinforcement-Learning-Projects.git',
    clone_url:
     'https://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects.git',
    svn_url:
     'https://github.com/FriendlyUser/Keras-Reinforcement-Learning-Projects',
    homepage: null,
    size: 268,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 184919874,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODQ5MTk4NzQ=',
    name: 'LatexDiagrams',
    full_name: 'FriendlyUser/LatexDiagrams',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/LatexDiagrams',
    description: 'Latex Diagrams that I have generated/taken from internet.',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/LatexDiagrams',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/LatexDiagrams/deployments',
    created_at: '2019-05-04T16:36:45Z',
    updated_at: '2019-11-03T22:35:42Z',
    pushed_at: '2019-11-03T22:35:40Z',
    git_url: 'git://github.com/FriendlyUser/LatexDiagrams.git',
    ssh_url: 'git@github.com:FriendlyUser/LatexDiagrams.git',
    clone_url: 'https://github.com/FriendlyUser/LatexDiagrams.git',
    svn_url: 'https://github.com/FriendlyUser/LatexDiagrams',
    homepage: '',
    size: 7194,
    stargazers_count: 29,
    watchers_count: 29,
    language: 'TeX',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 8,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 8,
    open_issues: 1,
    watchers: 29,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 141662518,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDE2NjI1MTg=',
    name: 'markdown-notes-template',
    full_name: 'FriendlyUser/markdown-notes-template',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/markdown-notes-template',
    description:
     'By leveraging the note taking abilities Boostnote and using Vuepress to publish markdown, an excellent reusable markdown based notes/wiki format is accessible.',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/markdown-notes-template/deployments',
    created_at: '2018-07-20T04:12:58Z',
    updated_at: '2018-10-22T19:47:15Z',
    pushed_at: '2018-08-02T04:07:11Z',
    git_url: 'git://github.com/FriendlyUser/markdown-notes-template.git',
    ssh_url: 'git@github.com:FriendlyUser/markdown-notes-template.git',
    clone_url:
     'https://github.com/FriendlyUser/markdown-notes-template.git',
    svn_url: 'https://github.com/FriendlyUser/markdown-notes-template',
    homepage: 'https://friendlyuser.github.io/markdown-notes-template/',
    size: 498,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'gpl-3.0',
       name: 'GNU General Public License v3.0',
       spdx_id: 'GPL-3.0',
       url: 'https://api.github.com/licenses/gpl-3.0',
       node_id: 'MDc6TGljZW5zZTk=' },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 59381384,
    node_id: 'MDEwOlJlcG9zaXRvcnk1OTM4MTM4NA==',
    name: 'Matlab',
    full_name: 'FriendlyUser/Matlab',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/Matlab',
    description:
     'Assignments done in matlab for my courses as well as my custom publishing files',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/Matlab',
    forks_url: 'https://api.github.com/repos/FriendlyUser/Matlab/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/FriendlyUser/Matlab/teams',
    hooks_url: 'https://api.github.com/repos/FriendlyUser/Matlab/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/issues/events{/number}',
    events_url: 'https://api.github.com/repos/FriendlyUser/Matlab/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/branches{/branch}',
    tags_url: 'https://api.github.com/repos/FriendlyUser/Matlab/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/FriendlyUser/Matlab/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/FriendlyUser/Matlab/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/FriendlyUser/Matlab/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/Matlab/deployments',
    created_at: '2016-05-21T21:05:12Z',
    updated_at: '2019-04-27T02:12:52Z',
    pushed_at: '2019-04-27T02:12:51Z',
    git_url: 'git://github.com/FriendlyUser/Matlab.git',
    ssh_url: 'git@github.com:FriendlyUser/Matlab.git',
    clone_url: 'https://github.com/FriendlyUser/Matlab.git',
    svn_url: 'https://github.com/FriendlyUser/Matlab',
    homepage: '',
    size: 8448,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'MATLAB',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'apache-2.0',
       name: 'Apache License 2.0',
       spdx_id: 'Apache-2.0',
       url: 'https://api.github.com/licenses/apache-2.0',
       node_id: 'MDc6TGljZW5zZTI=' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 160972399,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjA5NzIzOTk=',
    name: 'nuxt-url-shorter',
    full_name: 'FriendlyUser/nuxt-url-shorter',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/nuxt-url-shorter',
    description: 'URL shortener on the Ethereum Blockchain',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/nuxt-url-shorter/deployments',
    created_at: '2018-12-08T19:36:48Z',
    updated_at: '2018-12-23T02:07:35Z',
    pushed_at: '2018-12-23T02:07:34Z',
    git_url: 'git://github.com/FriendlyUser/nuxt-url-shorter.git',
    ssh_url: 'git@github.com:FriendlyUser/nuxt-url-shorter.git',
    clone_url: 'https://github.com/FriendlyUser/nuxt-url-shorter.git',
    svn_url: 'https://github.com/FriendlyUser/nuxt-url-shorter',
    homepage: null,
    size: 307,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Vue',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 5,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 5,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 127659391,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjc2NTkzOTE=',
    name: 'personal-dashboard',
    full_name: 'FriendlyUser/personal-dashboard',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/personal-dashboard',
    description:
     'Created using dash and uploaded to heroku, this dashboard will highlight some interesting statistics about me and things that I do.',
    fork: false,
    url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/personal-dashboard/deployments',
    created_at: '2018-04-01T18:24:02Z',
    updated_at: '2019-05-10T12:44:33Z',
    pushed_at: '2019-01-03T05:13:38Z',
    git_url: 'git://github.com/FriendlyUser/personal-dashboard.git',
    ssh_url: 'git@github.com:FriendlyUser/personal-dashboard.git',
    clone_url: 'https://github.com/FriendlyUser/personal-dashboard.git',
    svn_url: 'https://github.com/FriendlyUser/personal-dashboard',
    homepage: null,
    size: 116,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'apache-2.0',
       name: 'Apache License 2.0',
       spdx_id: 'Apache-2.0',
       url: 'https://api.github.com/licenses/apache-2.0',
       node_id: 'MDc6TGljZW5zZTI=' },
    forks: 2,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } },
  { id: 111951156,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTE5NTExNTY=',
    name: 'Pirates-Game',
    full_name: 'FriendlyUser/Pirates-Game',
    private: false,
    owner:
     { login: 'FriendlyUser',
       id: 13860264,
       node_id: 'MDQ6VXNlcjEzODYwMjY0',
       avatar_url: 'https://avatars0.githubusercontent.com/u/13860264?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/FriendlyUser',
       html_url: 'https://github.com/FriendlyUser',
       followers_url: 'https://api.github.com/users/FriendlyUser/followers',
       following_url:
        'https://api.github.com/users/FriendlyUser/following{/other_user}',
       gists_url: 'https://api.github.com/users/FriendlyUser/gists{/gist_id}',
       starred_url:
        'https://api.github.com/users/FriendlyUser/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/FriendlyUser/subscriptions',
       organizations_url: 'https://api.github.com/users/FriendlyUser/orgs',
       repos_url: 'https://api.github.com/users/FriendlyUser/repos',
       events_url: 'https://api.github.com/users/FriendlyUser/events{/privacy}',
       received_events_url: 'https://api.github.com/users/FriendlyUser/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/FriendlyUser/Pirates-Game',
    description:
     'CENG 356 Simple Networked Game --- an simple game that implements a client-server architecture.',
    fork: false,
    url: 'https://api.github.com/repos/FriendlyUser/Pirates-Game',
    forks_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/forks',
    keys_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/keys{/key_id}',
    collaborators_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/collaborators{/collaborator}',
    teams_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/teams',
    hooks_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/hooks',
    issue_events_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/issues/events{/number}',
    events_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/events',
    assignees_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/assignees{/user}',
    branches_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/branches{/branch}',
    tags_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/tags',
    blobs_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/blobs{/sha}',
    git_tags_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/tags{/sha}',
    git_refs_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/refs{/sha}',
    trees_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/trees{/sha}',
    statuses_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/statuses/{sha}',
    languages_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/languages',
    stargazers_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/stargazers',
    contributors_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/contributors',
    subscribers_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/subscribers',
    subscription_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/subscription',
    commits_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/commits{/sha}',
    git_commits_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/git/commits{/sha}',
    comments_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/comments{/number}',
    issue_comment_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/issues/comments{/number}',
    contents_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/contents/{+path}',
    compare_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/compare/{base}...{head}',
    merges_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/merges',
    archive_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/{archive_format}{/ref}',
    downloads_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/downloads',
    issues_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/issues{/number}',
    pulls_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/pulls{/number}',
    milestones_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/milestones{/number}',
    notifications_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/notifications{?since,all,participating}',
    labels_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/labels{/name}',
    releases_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/releases{/id}',
    deployments_url:
     'https://api.github.com/repos/FriendlyUser/Pirates-Game/deployments',
    created_at: '2017-11-24T19:49:26Z',
    updated_at: '2018-04-18T04:53:17Z',
    pushed_at: '2018-04-18T04:53:17Z',
    git_url: 'git://github.com/FriendlyUser/Pirates-Game.git',
    ssh_url: 'git@github.com:FriendlyUser/Pirates-Game.git',
    clone_url: 'https://github.com/FriendlyUser/Pirates-Game.git',
    svn_url: 'https://github.com/FriendlyUser/Pirates-Game',
    homepage: '',
    size: 9349,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license:
     { key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit',
       node_id: 'MDc6TGljZW5zZTEz' },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true } } ]
 DONE  Compiled successfully in 10264ms10:09:22 PM


  Site running at:                                         
  - Local:                 http://localhost:8080/          
  - Network:               http://10.0.75.1:8080/          
                                                           
  Explore GraphQL data at: http://localhost:8080/___explore

 DONE  Compiled successfully in 802ms10:11:44 PM


  Site running at:                                         
  - Local:                 http://localhost:8080/          
  - Network:               http://10.0.75.1:8080/          
                                                           
  Explore GraphQL data at: http://localhost:8080/___explore

