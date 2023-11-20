var orderan = [];
var totalpembayaran = 0;

function addOrder() {
  var type = document.getElementById("Jenis").value;
  var kg = document.getElementById("kg").value;

  if (kg === "" || kg <= 0) {
    alert("Masukkan jenis sembako");
    return;
  }

  var hargaPerkg = 0;
  var totalbayar = 0;

  if (type === "beras") {
    hargaPerDay = 15000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "gula") {
    hargaPerkg = 13000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "minyak") {
    hargaPerkg = 30000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "bawang") {
    hargaPerkg = 5000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "gas elpiji") {
    hargaPerkg = 23000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "susu") {
    hargaPerDay = 20000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "telur") {
    hargaPerkg = 25000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "daging sapi") {
    hargaPerkg = 35000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "garam") {
    hargaPerkg = 4000;
    totalbayar = kg * hargaPerkg;
  } 

  var order = {
    type: type,
    berat: parseFloat(kg),
    totalbayar: totalbayar,
  };

  orderan.push(order);
  totalpembayaran += totalbayar;
  displayorderan();
  displaytotalpembayaran();
}

function displayorderan() {
  var table = document.getElementById("listorderan");
  table.innerHTML = `
    <tr>
      <th>Jenis</th>
      <th>kg (day)</th>
      <th>Total Harga</th>
      <th>Aksi</th>
    </tr>
  `;
}

for (var i = 0; i < orderan.length; i++) {
  var item = orderan[i];
  var totalbayar = item.totalbayar;

  var row = table.insertRow();
  var jenisCell = row.insertCell(0);
  var hariCell = row.insertCell(1);
  var totalHargaCell = row.insertCell(2);
  var aksiCell = row.insertCell(3);

  jenisCell.innerHTML = item.type;
  hariCell.innerHTML = item.kg;
  totalHargaCell.innerHTML = `<b>${totalbayar}</b>`;

  aksiCell.innerHTML = `<button onclick="editOrder(${i})">Edit</button> <button onclick="devareOrder(${i})">Devare</button>`;
}

function displaytotalpembayaran() {
  var totalpembayaranElement = document.getElementById("totalpembayaran");
  totalpembayaranElement.innerHTML = `<b>Total Pembayaran: ${totalpembayaran}</b>`;
}

function editOrder(index) {
  var newkg = prompt("Masukkan berapa kg:");
  if (newkg === null || newkg <= 0) {
    alert("Masukkan kg yang valid.");
    return;
  }

  var item = orderan[index];
  totalpembayaran -= item.totalbayar;

  item.kg = parseFloat(newkg);

  if (type === "beras") {
    hargaPerDay = 15000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "gula") {
    hargaPerkg = 13000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "minyak") {
    hargaPerkg = 30000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "bawang") {
    hargaPerkg = 5000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "gas elpiji") {
    hargaPerkg = 23000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "susu") {
    hargaPerDay = 20000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "telur") {
    hargaPerkg = 25000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "daging sapi") {
    hargaPerkg = 35000;
    totalbayar = kg * hargaPerkg;
  } else if (type === "garam") {
    hargaPerkg = 4000;
    totalbayar = kg * hargaPerkg;
  } 

  totalpembayaran += item.totalbayar;
  displayorderan();
  displaytotalpembayaran();
}

function devareOrder(index) {
  var devaredOrder = orderan[index];
  totalpembayaran -= devaredOrder.totalbayar;
  orderan.splice(index, 1);
  displayorderan();
  displaytotalpembayaran();
}

function calculatekembalian() {
  var amountPaid = parseFloat(document.getElementById("amountPaid").value);
  if (amountPaid < totalpembayaran) {
    alert("Jumlah bayar kurang!");
    return;
  }

  var kembalian = amountPaid - totalpembayaran;
  displaykembalian(kembalian);
}

function displaykembalian(kembalian) {
  var kembalianElement = document.getElementById("kembalian");
  if (kembalian >= 0) {
    kembalianElement.innerHTML = `<b>Kembalian: ${kembalian}</b>`;
  } else {
    kembalianElement.innerHTML = "<b>Jumlah bayar kurang!</b>";
  }
}
