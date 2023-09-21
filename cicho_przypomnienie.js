// cicho_przypomnienie.js
if (entry().field("zong") == "cicho"){
entry().set("zong","Sprawdź to przypomnienie");
entry().set("zongob","sp.rawdź");
}
//message(entry().field("mniejwiecej"))}
else  {
entry().set("zong","cicho");
entry().set("zongob","ci.cho");
}
message(entry().field("zong"))
