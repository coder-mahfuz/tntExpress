// Cache the DOM

const form = document.querySelector('#form');
const collectionSuburb = document.querySelector('#csuburb');
const collectionState = document.querySelector('#cstate');
const collectionPostCode = document.querySelector('#cpcode');

const deliverySuburb = document.querySelector('#dsuburb');
const deliveryState = document.querySelector('#dstate');
const deliveryPostCode = document.querySelector('#dpcode');

const goodsDescription = document.querySelector('#goods_description');
const quantity = document.querySelector('#quantity');
const weight = document.querySelector('#weight');
const length = document.querySelector('#lenth');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
const payer = document.querySelector('#payer');
const collectionDate = document.querySelector('#collection_date');
const dangerousGoods = document.querySelector('#dgoods');


const userName = "CIT00000000000144187";
const password = "prodTNT123";
const senderAccount = 20194618;
// const userCurrentLocalDateTime = 

const showCost = document.querySelector('#show_cost');


form.addEventListener('submit', showShippingCost);
// make api call and show on frontEnd
function showShippingCost(e) {
  e.preventDefault()

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Cookie", "ASPSESSIONIDQQTQATQT=AAGNPFADHOAEGFJJLGFHDMFJ; lb=rd1o00000000000000000000ffffcb1abeb0o443");

  var urlencoded = new URLSearchParams();
  urlencoded.append("username", userName);
  urlencoded.append("password", password);
  urlencoded.append("xmlRequest", `<?xml version=\"1.0\"?> \n<enquiry xmlns=\"http://www.tntexpress.com.au\"> \n <ratedTransitTimeEnquiry> \n <cutOffTimeEnquiry> \n <collectionAddress> \n <suburb>${collectionSuburb.value}</suburb> \n <postCode>${collectionPostCode.value}</postCode> \n <state>${collectionState.value}</state> \n </collectionAddress> \n <deliveryAddress> \n <suburb>${deliverySuburb.value}</suburb> \n <postCode>${deliveryPostCode.value}</postCode> \n <state>${deliveryState}</state> \n </deliveryAddress> \n <shippingDate>2007-11-05</shippingDate> \n <userCurrentLocalDateTime> \n 28/10/2022 07:44:16 \n </userCurrentLocalDateTime> \n <dangerousGoods> \n <dangerous>${dangerousGoods.value}</dangerous> \n </dangerousGoods> \n <packageLines packageType=\"${goodsDescription.value}\"> \n <packageLine> \n <numberOfPackages>${quantity.value}</numberOfPackages> \n <dimensions unit=\"cm\"> \n <length>${length.valueOf}</length> \n <width>${width.valueOf}</width> \n <height>${height.valueOf}</height> \n </dimensions> \n <weight unit=\"kg\"> \n <weight>${weight.valueOf}</weight> \n </weight> \n </packageLine> \n </packageLines> \n </cutOffTimeEnquiry> \n <termsOfPayment> \n <senderAccount>${senderAccount}</senderAccount> \n <payer>${payer.value}</payer> \n </termsOfPayment> \n </ratedTransitTimeEnquiry> \n</enquiry>`);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://www.tntexpress.com.au/Rtt/inputRequest.asp", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


};