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

// Optionnaly you can set a duration
CookieManager.setCookie('myCookie', 'Hello.', 12);

var myCookie = CookieManager.getCookie('myCookie'); // Returns "Hello."
```