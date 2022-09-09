<h1 align=center> DRIVENPASS </h1>

<h2 align=center> WHAT IS IT? </h2>
<p align=center> This app is a password management service that stores sensitive information in an encrypted vault.</p>

<h2 align=center> HOW THE API WORKS? </h2>

```
TO SIGN UP:
HTTP request method: .POST('/signup');
req object expects:
    body: email, password;
```

```
TO LOGIN:
HTTP request method: .POST('/login');
req object expects:
    body: email, password;
```

```
TO CREATE CREDENTIAL:
HTTP request method: .POST('/newcredential');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    body: url, username, password, title;
```

```
TO SEARCH ALL CREDENTIALS:
HTTP request method: .GET('/credentials');
req object expects:
    headers: { "Authorization": "Bearer $token" };
```

```
TO SEARCH CREDENTIAL BY ID:
HTTP request method: .GET('/credentials/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO DELETE CREDENTIAL:
HTTP request method: .DELETE('/credentials/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO CREATE SAFE NOTE:
HTTP request method: .POST('/newnote');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    body: title, note;
```

```
TO SEARCH ALL SAFE NOTES:
HTTP request method: .GET('/safenotes');
req object expects:
    headers: { "Authorization": "Bearer $token" };
```

```
TO SEARCH SAFE NOTE BY ID:
HTTP request method: .GET('/safenotes/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO DELETE CREDENTIAL:
HTTP request method: .DELETE('/safenotes/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO CREATE CARD:
HTTP request method: .POST('/newcard');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    body: number, name, cvc, expirationDate, password, isVirtual, type, title;
```

```
TO SEARCH ALL CARDS:
HTTP request method: .GET('/cards');
req object expects:
    headers: { "Authorization": "Bearer $token" };
```

```
TO SEARCH CARD BY ID:
HTTP request method: .GET('/cards/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO DELETE CARD:
HTTP request method: .DELETE('/cards/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO CREATE WIFI:
HTTP request method: .POST('/newcard');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    body: name, password, title;
```

```
TO SEARCH ALL WIFIS:
HTTP request method: .GET('/wifis');
req object expects:
    headers: { "Authorization": "Bearer $token" };
```

```
TO SEARCH WIFI BY ID:
HTTP request method: .GET('/wifis/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```

```
TO DELETE WIFI:
HTTP request method: .DELETE('/wifis/:id');
req object expects:
    headers: { "Authorization": "Bearer $token" };
    params: id;
```
