# CookieManager
Simple JS cookie manager

## Install
```bash
npm i @thibka/cookie-manager
```

## Usage
```javascript
import CookieManager from '@thibka/cookie-manager';

CookieManager.setCookie('myCookie', 'Hello.');

// Optionnaly you can set a duration in days
CookieManager.setCookie('myCookie', 'Hello.', 12); // will expire in 12 days

var myCookie = CookieManager.getCookie('myCookie'); // Returns "Hello."
```