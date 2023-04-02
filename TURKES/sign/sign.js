var yeni = []
function login() {
	var values = ["email", "pass"];
	for (var i = values.length - 1; i >= 0; i--) {
		var value = values[i];
		document.getElementById(value).value;
	}
	const x = document.getElementById("email").value;
	console.log(x);
}

function registerPage(){
	// kayıt sayfasına yönlendirir.
	var values = ["email", "pass"];
	var new_values = [];
	var new_keys = [];
	
	for (var i = values.length - 1; i >= 0; i--) {
		value = document.getElementById(values[i]).value;
		if (values[i] == "email" || values[i] == "pass") {
			new_values.push(value); new_keys.push(values[i]);
		};
		value = "";
	};
	document.getElementById("name").style.display = 'inline-block';
	document.getElementById("surname").style.display = 'inline-block';
	document.getElementById("login").setAttribute("onclick", "loginPage();");
	document.getElementById("register").setAttribute("onclick", "register();");
	document.getElementById("head").innerText = "KAYIT OL";
	document.title = "Kayıt Ol - Türkeş";
	for (var i = 0; i < new_keys.length; i++) {
		documentElement.getElementById(new_keys[i]).value = new_values[i];
	}
}


function loginPage(){
	// Giriş sayfasına yönlendirir.
	var values = ["name", "surname", "email", "pass"];
	var new_values = [];
	var new_keys = [];
	
	for (var i = values.length - 1; i >= 0; i--) {
		value = document.getElementById(values[i]).value;
		if (values[i] == "email" || values[i] == "pass") {
			new_values.push(value); new_keys.push(values[i]);
		};
		value = "";
	};
	document.getElementById("name").style.display = 'none';
	document.getElementById("surname").style.display = 'none';
	document.getElementById("login").setAttribute("onclick", "login();");
	document.getElementById("register").setAttribute("onclick", "registerPage();");
	document.getElementById("head").innerText = "GİRİŞ YAP";
	document.title = "Giriş Yap - Türkeş";

	for (var i = 0; i < new_keys.length; i++) {
		documentElement.getElementById(new_keys[i]).value = new_values[i];
	}
};

function register(){
	console.log("msg")
	const x = document.getElementById("input-group").submit();
}

function autoCompleted(keys, values){
	for(var i = 0, length1 = keys.length; i < length1; i++){
		document.getElementById(keys[i]).value = values[i];
	}
}

function dataControl(){
	const sqlite3 = require('sqlite3').verbose();

  // open the database
  let db = new sqlite3.Database('../Database/turkes.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });

  db.serialize(() => {
  db.each(`SELECT * FROM users`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
});

}

dataControl()