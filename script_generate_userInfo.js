var phone = '0913' + _.random(100000, 999999);
var idNumber = _.random(100000000, 999999999);
var randomLetter = (length = 8) => {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
var firstName = randomLetter();
var middleName = randomLetter();
var lastName = randomLetter();

var genderCode = ['MALE', 'FEMALE'];
var randomDate = (start, end) => {
  var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};
var birthDate = randomDate(new Date(1970, 0, 1), new Date(1998, 0, 1));
postman.setEnvironmentVariable("phone", phone);
postman.setEnvironmentVariable("identificationNumber", idNumber);
postman.setEnvironmentVariable("firstName", firstName);
postman.setEnvironmentVariable("middleName", middleName);
postman.setEnvironmentVariable("lastName", lastName);
postman.setEnvironmentVariable("genderCode", _.sample(genderCode));
postman.setEnvironmentVariable("birthday", birthDate);
