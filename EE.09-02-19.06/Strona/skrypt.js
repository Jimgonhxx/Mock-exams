
// let wybor = prompt("Prosze podaj rodzaj paliwa (1,2)")
// let koszt=0;
// if (wybor === paliwo1)
//      rodzaj ===1
//     koszt = littry


// functionobliczKoszt() {

// let litry  =  document.getElementById="litry";
// let rodzaj = document.getElementById="rodzaj";






function oblicz() {
    
    let rodzaj = parseInt(document.getElementById("rodzaj").value);
    let litry = parseFloat(document.getElementById("litry").value);
    let wynik = document.getElementById("wynik");
    let koszt = 0;

    
    if (rodzaj === 1) {
        koszt = litry * 4;
    } else if (rodzaj === 2) {
        koszt = litry * 3.5;
    } else {
        koszt = 0;
    }

    
   
wynik.innerHTML= ("<p>Koszt paliwa: " + koszt.toFixed(2) + " zł </p>" );
}

