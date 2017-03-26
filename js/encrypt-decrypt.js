/*
 * Code by BakaDzgn
 */

function encrypt(){ // encrypt URL
	var t = document.getElementById("encrypt-input"),
	z = document.getElementById("encrypt-output"),
	f = document.getElementById("copy-btn"),
	e = ["http://","https://"],
	l = {
		http: t.value.includes(e[0]),
		https: t.value.includes(e[1])
	};
	if ("" != t.value)
		if(l.http || l.https){
			var a = Base64.encode(t.value);
			f.style.display = "block";
			f.value = "Copy";
			z.value = location.protocol + "//" + location.hostname + "/get/?url=" + a;
		}
	else l.http && l.https || (t.value = "", t.placeholder = "URL harus mengandung http:// atau https://");
	else "" == t.value && (t.placeholder = "URL tidak boleh kosong")
}
