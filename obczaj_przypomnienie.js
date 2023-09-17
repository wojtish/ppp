// obczaj_przypomnienie.js
if (entry().field("zong") == "cicho"){
entry().set("zong","Obczaj to przypomnienie")}
//message(entry().field("mniejwiecej"))}
else  {
entry().set("zong","cicho")}
message(entry().field("zong"))
