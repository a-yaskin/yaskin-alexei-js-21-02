
"browserify": "^17.0.0",
необходимо для того чтобы переносить написанный нами код,
транслировать его в javascript понятный для браузера

"tsify": "^5.0.4",
такая же вещь как у нас было с нашим gulp-typescript только
gulp-typescript переводил в некоторый формат node.js, который
немножко все-таки отличается от браузера, а этот будет переводить
непосредственно, предоставлять доступ до компилятору typescript
и компилировать в необходимый нам формат

"vinyl-source-stream": "^2.0.0"
позволяет нам адаптировать вывод того что нам выдал browserify
обратно в некоторый формат который gulp может понимать,
техническая такая вещь

"gulp": "^4.0.2",

"gulp-typescript": "^6.0.0-alpha.1",

"typescript": "^4.4.4",