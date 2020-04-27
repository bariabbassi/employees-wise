//Selectors
const url = "https://api.sandbox.transferwise.tech/v1/accounts";
const token = "Bearer 3935411c-fe61-4c00-bf7d-66f07eee9c61";

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const employeeList = document.querySelector(".employee-list");


//const accounts = getAccounts();
getAccounts();


//Event Listeners
button.addEventListener("click", addEmployee);

//Functions
function displayAccounts() {
    const accounts = getAccounts();
    Promise.resolve(accounts);
    console.log(accounts);
    alert(accounts);
    //for(const account of accounts) {
        
    //}
}
function addEmployee(event) {
    event.preventDefault();
    if(input.value !== '') {
        //const employeeDiv = document.createElement('div');
        //employeeDiv.classList.add('employee');

        const newEmployee = document.createElement('li');
        newEmployee.classList.add('employee-item');
        newEmployee.appendChild(document.createTextNode(input.value));
        employeeList.appendChild(newEmployee);
        input.value = '';
    }
}

async function getAccounts() {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": token,
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for(const account of data) {
            showEmployee(account);
        }
    });
}

function showEmployee(account) {
    const newEmployee = document.createElement('li');
    newEmployee.classList.add('employee-item');
    newEmployee.appendChild(document.createTextNode(account.accountHolderName));
    employeeList.appendChild(newEmployee);
}

async function postAccounts() {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": token,
        }
    });
    return response.json();
}

    /*
    3935411c-fe61-4c00-bf7d-66f07eee9c61

    curl -X GET https://api.sandbox.transferwise.tech/v1/profiles -H "Authorization: Bearer 3935411c-fe61-4c00-bf7d-66f07eee9c61"
[{"id":15589,"type":"personal","details":{"firstName":"Bari","lastName":"Abbassi","dateOfBirth":"1970-03-19","phoneNumber":"+442038087139","avatar":null,"occupation":null,"occupations":null,"primaryAddress":7278942}},{"id":15590,"type":"business","details":{"name":"Bari Abbassi Business","registrationNumber":"07209813","acn":null,"abn":null,"arbn":null,"companyType":"LIMITED","companyRole":"OWNER","descriptionOfBusiness":"IT_SERVICES","primaryAddress":7278943,"webpage":null,"businessCategory":"IT_SERVICES","businessSubCategory":null}}]
    curl -X GET https://api.sandbox.transferwise.tech/v3/profiles/15589/borderless-accounts/7278942/statement.json? currency=EUR&intervalStart=2018-03-01T00:00:00.000Z&intervalEnd=2018-03-15T23:59:59.999Z -H "Authorization: Bearer 3935411c-fe61-4c00-bf7d-66f07eee9c61"

    curl -X GET https://api.sandbox.transferwise.tech/v1/accounts -H "Authorization: Bearer 3935411c-fe61-4c00-bf7d-66f07eee9c61"
    [{
        "id":13883579,
        "business":null,
        "profile":15589,
        "accountHolderName":"Will Smith",
        "currency":"GBP",
        "country":"GB",
        "type":"sort_code",
        "details":{
            "address":null,
            "email":null,
            "legalType":"PRIVATE","accountNumber":"28821822","sortCode":"231470","abartn":null,"accountType":null,"bankgiroNumber":null,"ifscCode":null,"bsbCode":null,"institutionNumber":null,"transitNumber":null,"phoneNumber":null,"bankCode":null,"russiaRegion":null,"routingNumber":null,"branchCode":null,"cpf":null,"cardNumber":null,"idType":null,"idNumber":null,"idCountryIso3":null,"idValidFrom":null,"idValidTo":null,"clabe":null,"swiftCode":null,"dateOfBirth":null,"clearingNumber":null,"bankName":null,"branchName":null,"businessNumber":null,"province":null,"city":null,"rut":null,"token":null,"cnpj":null,"payinReference":null,"pspReference":null,"orderId":null,"idDocumentType":null,"idDocumentNumber":null,"targetProfile":null,"targetUserId":null,"taxId":null,"job":null,"nationality":null,"interacAccount":null,"bban":null,"IBAN":null,"iban":null,"bic":null,"BIC":null},"user":5475131,"active":true,"ownedByCustomer":false},{"id":13883577,"business":null,"profile":15589,"accountHolderName":"Bari Abbassi","currency":"GBP","country":"GB","type":"balance","details":{"address":{"country":"GB","countryCode":"GB","firstLine":"56 Shoreditch High Street","postCode":"E16JJ","city":"London","state":null},"email":null,"legalType":"PRIVATE","accountNumber":null,"sortCode":null,"abartn":null,"accountType":null,"bankgiroNumber":null,"ifscCode":null,"bsbCode":null,"institutionNumber":null,"transitNumber":null,"phoneNumber":null,"bankCode":null,"russiaRegion":null,"routingNumber":null,"branchCode":null,"cpf":null,"cardNumber":null,"idType":null,"idNumber":null,"idCountryIso3":null,"idValidFrom":null,"idValidTo":null,"clabe":null,"swiftCode":null,"dateOfBirth":null,"clearingNumber":null,"bankName":null,"branchName":null,"businessNumber":null,"province":null,"city":null,"rut":null,"token":null,"cnpj":null,"payinReference":null,"pspReference":null,"orderId":null,"idDocumentType":null,"idDocumentNumber":null,"targetProfile":"15589","targetUserId":null,"taxId":null,"job":null,"nationality":null,"interacAccount":null,"bban":null,"IBAN":null,"iban":null,"bic":null,"BIC":null},"user":5475131,"active":true,"ownedByCustomer":true}]
    
    curl -X POST https://api.sandbox.transferwise.tech/v1/accounts \
     -H "Authorization: Bearer 3935411c-fe61-4c00-bf7d-66f07eee9c61" \
     -H "Content-Type: application/json" \
     -d '{ 
          "currency": "GBP", 
          "type": "sort_code", 
          "profile": "15589", 
          "accountHolderName": "Will Smith",
          "legalType": "PRIVATE",
           "details": { 
              "sortCode": "231470", 
              "accountNumber": "28821822" 
           } 
         }'
    {
        "id":13883579,
        "business":null,
        "profile":15589,
        "accountHolderName":"Will Smith",
        "currency":"GBP",
        "country":"GB",
        "type":"sort_code",
        "details":{
            "address":null,
            "email":null,
            "legalType":"PRIVATE",
            "accountNumber":"28821822",
            "sortCode":"231470",
            "abartn":null,
            "accountType":null,
            "bankgiroNumber":null,
            "ifscCode":null,
            "bsbCode":null,
            "institutionNumber":null,
            "transitNumber":null,
            "phoneNumber":null,
            "bankCode":null,
            "russiaRegion":null,
            "routingNumber":null,
            "branchCode":null,
            "cpf":null,
            "cardNumber":null,
            "idType":null,
            "idNumber":null,
            "idCountryIso3":null,
            "idValidFrom":null,
            "idValidTo":null,
            "clabe":null,
            "swiftCode":null,
            "dateOfBirth":null,
            "clearingNumber":null,
            "bankName":null,
            "branchName":null,
            "businessNumber":null,
            "province":null,
            "city":null,
            "rut":null,
            "token":null,
            "cnpj":null,
            "payinReference":null,
            "pspReference":null,
            "orderId":null,
            "idDocumentType":null,
            "idDocumentNumber":null,
            "targetProfile":null,
            "targetUserId":null,
            "taxId":null,
            "job":null,
            "nationality":null,
            "interacAccount":null,
            "bban":null,
            "IBAN":null,
            "iban":null,
            "BIC":null,
            "bic":null},
            "user":5475131,
            "active":true,
            "ownedByCustomer":false
        }
            */