// 03_minuty_reminder.js
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(3, 'minutes');

entry().remind(R.toDate());
