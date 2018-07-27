
function calculateDivisors(){
  var number = document.getElementById("txtInputNumber").value;
  var divisors=[];

  var cont=0;
  for(var i=1; i<=number; i++){
      if( number%i === 0 ){
          divisors[cont] = i;
          cont++;
      }
  }

  document.getElementById("textarea1").textContent = divisors;
  document.getElementById("numberDivisors").textContent = "(Total: "+cont+")";
}
