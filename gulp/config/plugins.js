import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщение (подсказки)
import browsersync from "browser-sync"; //Сообщение (подсказки)
import newer from "gulp-newer"; //Сообщение (подсказки)
import ifPlugin from "gulp-if"; //Сообщение (подсказки)

// Export объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}