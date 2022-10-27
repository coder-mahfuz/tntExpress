
// WARNING: For POST requests, body is set to null by browsers.
var data = "username=CIT00000000000144187&password=prodTNT123&xmlRequest=%3C%3Fxml%20version%3D%221.0%22%3F%3E%20%0A%3Cenquiry%20xmlns%3D%22http%3A%2F%2Fwww.tntexpress.com.au%22%3E%20%0A%20%3CratedTransitTimeEnquiry%3E%20%0A%20%3CcutOffTimeEnquiry%3E%20%0A%20%3CcollectionAddress%3E%20%0A%20%3Csuburb%3ESydney%3C%2Fsuburb%3E%20%0A%20%3CpostCode%3E2000%3C%2FpostCode%3E%20%0A%20%3Cstate%3ENSW%3C%2Fstate%3E%20%0A%20%3C%2FcollectionAddress%3E%20%0A%20%3CdeliveryAddress%3E%20%0A%20%3Csuburb%3EMelbourne%3C%2Fsuburb%3E%20%0A%20%3CpostCode%3E3000%3C%2FpostCode%3E%20%0A%20%3Cstate%3EVIC%3C%2Fstate%3E%20%0A%20%3C%2FdeliveryAddress%3E%20%0A%20%3CshippingDate%3E2007-11-05%3C%2FshippingDate%3E%20%0A%20%3CuserCurrentLocalDateTime%3E%20%0A%202007-11-05T10%3A00%3A00%20%0A%20%3C%2FuserCurrentLocalDateTime%3E%20%0A%20%3CdangerousGoods%3E%20%0A%20%3Cdangerous%3Efalse%3C%2Fdangerous%3E%20%0A%20%3C%2FdangerousGoods%3E%20%0A%20%3CpackageLines%20packageType%3D%22D%22%3E%20%0A%20%3CpackageLine%3E%20%0A%20%3CnumberOfPackages%3E1%3C%2FnumberOfPackages%3E%20%0A%20%3Cdimensions%20unit%3D%22cm%22%3E%20%0A%20%3Clength%3E20%3C%2Flength%3E%20%0A%20%3Cwidth%3E20%3C%2Fwidth%3E%20%0A%20%3Cheight%3E20%3C%2Fheight%3E%20%0A%20%3C%2Fdimensions%3E%20%0A%20%3Cweight%20unit%3D%22kg%22%3E%20%0A%20%3Cweight%3E1%3C%2Fweight%3E%20%0A%20%3C%2Fweight%3E%20%0A%20%3C%2FpackageLine%3E%20%0A%20%3C%2FpackageLines%3E%20%0A%20%3C%2FcutOffTimeEnquiry%3E%20%0A%20%3CtermsOfPayment%3E%20%0A%20%3CsenderAccount%3E20194618%3C%2FsenderAccount%3E%20%0A%20%3Cpayer%3ES%3C%2Fpayer%3E%20%0A%20%3C%2FtermsOfPayment%3E%20%0A%20%3C%2FratedTransitTimeEnquiry%3E%20%0A%3C%2Fenquiry%3E";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://www.tntexpress.com.au/Rtt/inputRequest.asp");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// WARNING: Cookies will be stripped away by the browser before sending the request.
xhr.setRequestHeader("Cookie", "ASPSESSIONIDQQTQATQT=AAGNPFADHOAEGFJJLGFHDMFJ; lb=rd1o00000000000000000000ffffcb1abeb0o443");

xhr.send(data);