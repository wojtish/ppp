// 80_minut_reminder_memento.js
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(80, 'minutes');

entry().remind(R.toDate());
