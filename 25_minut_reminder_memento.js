// 25_minut_reminder_memrnto.js
var D = entry().field("modyfikacji zobaczony");
var R = moment(D).add(25, 'minutes');

entry().remind(R.toDate());
