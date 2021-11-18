function increasePhoneCount(){
     const phoneCountElement = document.getElementById('phone-count');
     const phoneCount = phoneCountElement.value;
     const newPhoneCount = parseInt(phoneCount) + 1;
     phoneCountElement.value = newPhoneCount;
     updatePhonePrice();
  }
  function decreasePhoneCount(){
     const phoneCountElement = document.getElementById('phone-count');
     const phoneCount = phoneCountElement.value;
     const newPhoneCount = parseInt(phoneCount) - 1;
     phoneCountElement.value = newPhoneCount;
     updatePhonePrice();
  }
  function updatePhonePrice(){
     const phoneCountElement = document.getElementById('phone-count');
     const phoneCount = phoneCountElement.value;
     const phonePrice = parseInt(phoneCount) * 1219;
     const phonePriceElement = document.getElementById('phone-price');
     phonePriceElement.innerText = '$' + phonePrice;
     updateTotalPrice();
  }
  function increaseCaseCount(){
     const phoneCountElement = document.getElementById('case-count');
     const phoneCount = phoneCountElement.value;
     const newPhoneCount = parseInt(phoneCount) + 1;
     phoneCountElement.value = newPhoneCount;
     updateCasePrice();
  }
  function decreaseCaseCount(){
     const phoneCountElement = document.getElementById('case-count');
     const phoneCount = phoneCountElement.value;
     const newPhoneCount = parseInt(phoneCount) - 1;
     phoneCountElement.value = newPhoneCount;
     updateCasePrice();
  }
  function updateCasePrice(){
     const phoneCountElement = document.getElementById('case-count');
     const phoneCount = phoneCountElement.value;
     const phonePrice = parseInt(phoneCount) * 59;
     const phonePriceElement = document.getElementById('case-price');
     phonePriceElement.innerText = '$' + phonePrice;
     updateTotalPrice();
  }

  function updateTotalPrice(){
     const phoneCount = document.getElementById('phone-count').value;
     const caseCount = document.getElementById('case-count').value;
     const totalPrice = parseInt(phoneCount) * 1219 + parseInt(caseCount) * 59;
     
     const taxAmount = (totalPrice / 100 * 10).toFixed(2); 
     console.log(totalPrice, taxAmount);
     const grandTotal = totalPrice + parseFloat(taxAmount);
     
     const totalPriceElement = document.getElementById('total-price');
     totalPriceElement.innerText = '$' +  totalPrice;
     const taxElement = document.getElementById('tax-amount');
     taxElement.innerText = '$' +  taxAmount;
     const grandTotalElement = document.getElementById('grand-total');
     grandTotalElement.innerText = '$' +  grandTotal;
  }
  function(){
      // variable declaration for use after and after
      const phoneValueElement = document.getElementById('phone_count');
      const phonePriceElement = document.getElementById('phone_price');
      const caseValueElement = document.getElementById('case_count');
      const casePriceElement = document.getElementById('case_price');
      // increase phone count btn handler
      function increasePhoneCount(){
         increaseValue(phoneValueElement);
         increasePrice(phoneValueElement, phonePriceElement);
         TotalPrice();
         
      }
      // decrease Phone count btn handler
      function decreasePhoneCount(){
         decreaseValue(phoneValueElement);
         decreasePrice(phoneValueElement, phonePriceElement);
         TotalPrice();
      }
      // increase case count btn handler
      function increaseCaseCount(){
         increaseValue(caseValueElement);
         increasePrice(caseValueElement, casePriceElement);
         TotalPrice();
      }
      // decrease case count btn handler
      function decreaseCaseCount(){
         decreaseValue(caseValueElement);
         decreasePrice(caseValueElement, casePriceElement);
         TotalPrice();
      }
      // increase item value function
      function increaseValue(CountElement){
         const itemCount = CountElement.value;
         if (itemCount > 0) {
         const itemNewCount = parseInt(itemCount) + 1;
         CountElement.value = itemNewCount;            
         }
      }
      // decrease item value function
      function decreaseValue(CountElement){
         const itemCount = CountElement.value;
         if (itemCount > 1) {
         const itemNewCount = parseInt(itemCount) - 1;
         CountElement.value = itemNewCount;            
         }
      }
      // increase item price function 
      function increasePrice(item, price){
         const itemCount = item.value;
         const priceCount = price.innerText;
         const newPrice = parseInt(itemCount) * parseInt(priceCount);
         price.innerText = newPrice;
      }
      // decrease item price function 
      function decreasePrice(item, price){
         const itemCount = item.value;
         const priceCount = price.innerText;
         const newPrice = parseInt(priceCount) / parseInt(itemCount);
         price.innerText = newPrice;
      }
      function TotalPrice(){
         const phoneCount = phoneValueElement.value;
         const caseCount = caseValueElement.value;
         const phonePrice = phonePriceElement.innerText;
         const casePrice = casePriceElement.innerText;
         // sub total amount
         const subTotal = parseInt(phoneCount) * parseInt(phonePrice) + parseInt(caseCount) * parseInt(casePrice);
         const subTotalElement = document.getElementById('subTotal_price');
         subTotalElement.innerText = subTotal;
         // tax amount
         const taxAmount = (subTotal / 100 * 10).toFixed(2);
         const taxAmountElement = document.getElementById('tax_amount');
         taxAmountElement.innerText = taxAmount;
         // in total amount
         const inTotal = parseInt(subTotal) + parseFloat(taxAmount);
         const totalAmount = document.getElementById('total_price');
         totalAmount.innerText = inTotal;
      }
  }