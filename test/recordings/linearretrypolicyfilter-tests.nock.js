// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('linearretry1')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:28:30Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('linearretry1')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>linearretry1</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'http://ciserversdk.table.core.windows.net/Tables(\'linearretry1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ba199b68-94df-4ab4-959e-eb6cce55535a',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>TableAlreadyExists</code>\r\n  <message xml:lang=\"en-US\">The table specified already exists.\nRequestId:5181e421-3aee-43a3-8014-9408fcc0b746\nTime:2013-02-21T00:28:32.2035975Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5181e421-3aee-43a3-8014-9408fcc0b746',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>http://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-21T00:28:32Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>http://ciserversdk.table.core.windows.net/Tables('linearretry1')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-02-21T00:28:32Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('linearretry1')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>linearretry1</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8e77a60b-64ca-4a85-8974-70673debcff3',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .delete('/Tables(%27linearretry1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e7fc851c-9e4b-4d6f-9ec0-3b05df2a2d03',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:32 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('linearretry2')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:28:33Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('linearretry2')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>linearretry2</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'http://ciserversdk.table.core.windows.net/Tables(\'linearretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a510d582-6dc1-4514-900e-61069310a699',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .delete('/Tables(%27linearretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f4064c23-5226-4df1-9e0c-a016020efdc8',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>TableBeingDeleted</code>\r\n  <message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:d44f6671-6cc4-4961-97cb-614b5cdd88a7\nTime:2013-02-21T00:28:35.4544464Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd44f6671-6cc4-4961-97cb-614b5cdd88a7',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:28:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>http://ciserversdk.table.core.windows.net/Tables('linearretry2')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-21T00:29:06Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('linearretry2')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>linearretry2</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'http://ciserversdk.table.core.windows.net/Tables(\'linearretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6bcd911b-94c1-4749-a6a5-a75e13cd5426',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>http://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-21T00:29:07Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>http://ciserversdk.table.core.windows.net/Tables('linearretry2')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-02-21T00:29:07Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('linearretry2')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>linearretry2</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '885f6e26-a19a-4a23-a796-bf9efcda5adb',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .delete('/Tables(%27linearretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8b847703-d90f-4d04-ae9e-82e5e8b24a0b',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:06 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:e9cc027e-6c63-435f-ac8e-853f7c95f23b\nTime:2013-02-21T00:29:06.8234675Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e9cc027e-6c63-435f-ac8e-853f7c95f23b',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:228dbcd7-74a6-42ab-b11e-d87745fd8b75\nTime:2013-02-21T00:29:08.4123313Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '228dbcd7-74a6-42ab-b11e-d87745fd8b75',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:5050bb66-aae8-4062-a9d5-b1ef288a9910\nTime:2013-02-21T00:29:08.9540938Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5050bb66-aae8-4062-a9d5-b1ef288a9910',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://ciserversdk.table.core.windows.net:80')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"http://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>http://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-21T00:29:09Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fd78ee74-b248-4ee3-933c-767a0cd23e1f',
  'x-ms-version': '2011-08-18',
  date: 'Thu, 21 Feb 2013 00:29:08 GMT' });
 return result; }]];