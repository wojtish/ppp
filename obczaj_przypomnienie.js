// obczaj_przypomnienie.js
if (entry().field("zong") == "cicho"){
entry().set("zong","Obczaj to przypomnienie")
entry().set("zongob","ob.czaj")
}
//message(entry().field("mniejwiecej"))}
else  {
entry().set("zong","cicho")
entry().set("zongob","ci.cho")
}
message(entry().field("zong"))
