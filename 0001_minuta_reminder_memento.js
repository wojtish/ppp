// 001_minuta_reminder_memento.js
moment.locale('pl');
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(1, 'minutes');

entry().remind(R.toDate());
