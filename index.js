const fs = require('fs');

// employees.json dosyasına veri ekleyelim
const employee = {
  name: "Employee 1 Name",
  salary: 2000
};

// JSON formatında dosyaya yazalım
fs.writeFile('employees.json', JSON.stringify(employee, null, 2), (err) => {
  if (err) {
    console.log('Dosya oluşturulamadı:', err);
  } else {
    console.log('Dosya başarıyla oluşturuldu ve veri eklendi!');
  }
});
