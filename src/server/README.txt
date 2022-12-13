ana dizinde iken aşağıdaki komut çalıştırılır böylece json-server kurulur.
npm install json-server

Sonra json servisleri sunmak için aşağıdaki komut çalıştırılır.
cd src/server
json-server --watch ./database.json

json-server ın bazen gerçek ortamı simule edebilmek için bir gecikme parametresi eklememiz gerekebilir
json-server --watch --delay 500 db.json
isteklere 5 sn geç cevap verecektir.
