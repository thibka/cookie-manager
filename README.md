# CookieManager
Simple JS cookie manager

## Install
### ES5
```html
<script src="https://cdn.jsdelivr.net/npm/@thibka/cookie-manager@1.0.2/cookie-manager.es5.min.js"></script>
```
### NPM
```bash
npm i @thibka/cookie-manager
```
```javascript
import CookieManager from '@thibka/cookie-manager';
```

## Usage
```javascript
CookieManager.setCookie('myCookie', 'Hello.');

// Optionnaly you can set a duration in days
CookieManager.setCookie('myCookie', 'Hello.', 12); // will expire in 12 days

var myCookie = CookieManager.getCookie('myCookie'); // Returns "Hello."
```