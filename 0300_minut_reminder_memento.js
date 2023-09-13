// 0300_minut_reminder_memento.js
moment.locale('pl');
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(300, 'minutes');

entry().remind(R.toDate());
