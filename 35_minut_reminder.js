// 35_minut_reminder.js
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(35, 'minutes');

entry().remind(R.toDate());
