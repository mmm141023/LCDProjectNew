module.exports = function main(number) {
  var targetArr1 = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
  var targetArr2 = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
  var targetArr3 = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
  var str1 = "";
  var str2 = "";
  var str3 = "";
  var numArr = (number+"").split('');
  for (let i = 0; i < numArr.length; i++) {
	  str1 += (targetArr1[numArr[i]] + " ");
	  str2 += (targetArr2[numArr[i]] + " ");
	  str3 += (targetArr3[numArr[i]] + " ");
  }
  str1 = str1.trim() + "\n";
  str2 = str2.trim() + "\n";
  str3 = str3.trim() + "\n";
  return str1 + str2 + str3;
};