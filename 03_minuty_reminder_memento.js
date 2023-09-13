// 03_minuty_reminder.js
moment.locale('pl');
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(3, 'minutes');

entry().remind(R.toDate());
