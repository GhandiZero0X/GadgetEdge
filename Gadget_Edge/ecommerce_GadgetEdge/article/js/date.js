// Mendapatkan elemen span dengan ID 'current-date'
var currentDateElement = document.getElementById('current-date');

// Mendapatkan tanggal sekarang
var currentDate = new Date();

// Mendapatkan nama hari
var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
var dayName = days[currentDate.getDay()];

// Mendapatkan nama bulan
var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var monthName = months[currentDate.getMonth()];

// Mendapatkan tanggal, bulan, dan tahun
var date = currentDate.getDate();
var year = currentDate.getFullYear();

// Menampilkan tanggal sekarang dalam format yang diinginkan
currentDateElement.textContent = dayName + ', ' + monthName + ' ' + date + ' ' + year;