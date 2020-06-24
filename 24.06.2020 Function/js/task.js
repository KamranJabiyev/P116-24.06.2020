let credit = 1000;
let month = 3;

if (credit > month) {
    let modul = credit % month;
    let monthly_payment = (credit - modul) / month;

    for (let i = 1; i < month; i++) {
        // debugger;
        // if(i<month){
        //     console.log(i+"-ci ay uchun odenish: "+monthly_payment+"Azn");
        // }else{
        //     console.log(i+"-ci ay uchun odenish: "+(monthly_payment+modul)+"Azn");
        // }
        console.log(i + "-ci ay uchun odenish: " + monthly_payment + "Azn");
    }
    console.log(month + "-ci ay uchun odenish: " + (monthly_payment + modul) + "Azn");
}else{
    console.log("zehmet olmasa duzgun daxil edin")
}
