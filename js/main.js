// Email decoder
var emailElement = document.getElementById('email');
var encodeString = '115101114103101121064107117116111118111121046100101118';
var encodeStringLen = encodeString.length;
var email = '';

for (var j = 0; j < encodeStringLen; j += 3) {
    email += String.fromCharCode(parseInt(encodeString.substr(j, 3)));
}

emailElement.setAttribute('href', 'mailto:' + email);
emailElement.setAttribute('title', email);
emailElement.style.visibility = 'visible';
// /Email decoder

// Blinking cursor
var blinkElement = document.getElementById('blink');
setInterval(function () {
    if (blinkElement.style.visibility === 'hidden') {
        blinkElement.style.visibility = 'visible';
    } else {
        blinkElement.style.visibility = 'hidden';
    }
}, 500);
// /Blinking cursor

// Typewrite
var typewriteElement = document.getElementById('typewriter');
var typewriteText = typewriteElement.innerText;
var typewriteCountChars = typewriteText.length;
var i = 0;
typewriteElement.innerText = '';

var typewriteInterval = setInterval(function () {
    if (i > typewriteCountChars) {
        clearTimeout(typewriteInterval);
    }

    typewriteElement.innerText = typewriteText.substring(i++, 0);
}, 60);
// /Typewrite

// Yandex
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(86475649, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true
});
// /Yandex