# CookieManager
Simple JS Cookie Manager

## Install
```bash
npm i @thibka/cookiemanager
```

## Usage
```javascript
import CookieManager from 'CookieManager';

CookieManager.setCookie('myCookie', 'Hello.');

// Optionnaly you can set a duration in days
CookieManager.setCookie('myCookie', 'Hello.', 12); // will expire in 12 days

var myCookie = CookieManager.getCookie('myCookie'); // Returns "Hello."
```