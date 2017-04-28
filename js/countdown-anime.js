// Code by Ex10sionlabs
var DeadlineAnime = {
	waktuSekarang: function(deadline){
		var waktu = Date.parse(deadline) - Date.parse(new Date());
		var detik = Math.floor((waktu / 1000) % 60);
		var menit = Math.floor((waktu / 1000 / 60) % 60);
		var jam = Math.floor((waktu / (1000 * 60 * 60)) % 24);
		var hari = Math.floor(waktu / (1000 * 60 * 60 * 24));
		return{
			"total": waktu,
			"detik": detik,
			"menit": menit,
			"jam": jam,
			"hari": hari
		};
	},
	hitungMundur: function(className, idJadwal, judulAnime, deadline){
		var b = "";
		var a = setInterval(function(){
			var c = DeadlineAnime.waktuSekarang(deadline);
			b = document.getElementsByClassName(className)[idJadwal - 1];
			if(c.total > 0){
				b.innerHTML = "<b>" + judulAnime + "</b>: " + c.hari + " hari " + c.jam + " jam " + c.menit + " menit " + c.detik + " detik.";
			}else if(c.total <= 0){
				b.innerHTML = "<b>" + judulAnime + "</b>: silahkan ditunggu...";
			}
		}, 1000);
	},
	bacaJadwal: function(className, jadwalAnime){
		for(var x = 0; x < jadwalAnime.length; x++){
			var sekarang = Date.parse(new Date());
			DeadlineAnime.hitungMundur(className, jadwalAnime[x][0], jadwalAnime[x][1], jadwalAnime[x][2]);
		}
	}
}
