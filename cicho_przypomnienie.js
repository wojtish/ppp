// cicho_przypomnienie.js
if (entry().field("zong") == "cicho"){
entry().set("zong","Sprawdź to przypomnienie")}
//message(entry().field("mniejwiecej"))}
else  {
entry().set("zong","cicho")}
message(entry().field("zong"))
