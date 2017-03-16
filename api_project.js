define({
  "name": "Core-Services API Documentation",
  "version": "1.0.0",
  "description": "Description of the API defined by the core-services project.",
  "title": "Core-Services API",
  "url": "https://domain.com",
  "footer": {
    "title": "URL Query Parameters",
    "content": "<h2>URL query parameters</h2>\n<p>For all of the &quot;Read data of (resource)&quot; requests, it is possible to pass parameters into the url of the request to filter the results. These parameters can be any of the attributes that that particular resource has. So, it is possible to do something like</p>\n<pre><code>GET https://domain.com/users?firstName=John&amp;lastName=Smith\n</code></pre>\n<p>This will retrieve all users with first name John and last name Smith. The <code>&amp;</code> in the url is analogous to the <code>AND</code> operator of a SQL query.</p>\n<p>It is also possible to search on multiple values using commas, which will act similarly to the <code>OR</code> operator of a SQL query:</p>\n<pre><code>GET https://domain.com/groups?name=Admin,Super\n</code></pre>\n<p>This will retrieve the groups named &quot;Admin&quot; or &quot;Super&quot;.</p>\n<p>These operators can be combined to form more complex queries:</p>\n<pre><code>GET https://domain.com/users?firstName=John,Jane&amp;lastName=Doe\n</code></pre>\n<p>This will retrieve John and Jane Doe.</p>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": false
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-03-16T17:35:30.381Z",
    "url": "http://apidocjs.com",
    "version": "0.17.5"
  }
});
