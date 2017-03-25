function $_GET(n){var o={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(n,i,a){o[i]=void 0!==a?a:""}),n?o[n]?o[n]:null:o}
/*
 * Code by BakaDzgn
 */
function getTiming(){setTimeout(setTiming,1e3),setTimeout(setTiming,2e3),setTimeout(setTiming,3e3),setTimeout(setTiming,4e3),setTimeout(setTiming,5e3),setTimeout(setTiming,6e3)}function setTiming(){totalSeconds-=1,totalSeconds>0?(document.getElementById("continue").style.display="block",document.getElementById("continue").value="Please wait.."+totalSeconds):0==totalSeconds&&(document.getElementById("continue").value="Continue",document.getElementById("continue").onclick=function(){var e=Base64.decode($_GET("url"));location.href=e})}var totalSeconds=6;
function encrypt(){var t=document.getElementById("encrypt-input"),e=["http://","https://"],l={http:t.value.includes(e[0]),https:t.value.includes(e[1])};if(""!=t.value)if(l.http||l.https){var a=Base64.encode(t.value);t.value=location.protocol+"//"+location.hostname+"/get/?url="+a}else l.http&&l.https||(t.value="",t.placeholder="URL harus mengandung http:// atau https://");else""==t.value&&(t.placeholder="URL tidak boleh kosong")}
