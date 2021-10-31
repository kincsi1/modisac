const idezetek=[];
idezetek[0]="Hajnali negyed ötkor bármi lehetségesnek tűnik. Bármi.~Stephen King";
idezetek[1]="Jobb azt megbánni, hogy megtetted, mint azt, hogy elmulasztottad.~V. Henrik c. film"
idezetek[2]="A tanulás a legerősebb fegyver, amivel megváltoztathatod a világot.~Nelson Mandela"
idezetek[3]="A tanulás nem más, mint annak felfedezése, hogy valami lehetséges.~Fritz Perls"
idezetek[4]="Az élet olyan, mint egy sűrű erdő, amelyben vakon tapogatódzunk.~Bess Streeter Aldrich"
idezetek[5]="Nekünk arról kell döntenünk, mihez kezdjünk az idővel, amely megadatik.~A Gyűrűk Ura c. film"
idezetek[6]="Az embernek ahhoz, hogy boldog legyen, két dolgot kell tennie: először hinnie kell, hogy van az életének értelme. Másodszor meg kell találnia, hogy mi az.~Lev Tolsztoj"
idezetek[7]="A fa legnagyobb ereje nem az ágaiban, hanem a gyökereiben rejlik.~Matshona Dhliwayo"
idezetek[8]="A ma tettei a holnap sorsa.~Patricia Gibney"
idezetek[9]="A végzet az, ami akkor érkezik, amikor nem várjuk.~Marcel Proust" 
let random = Math.floor(Math.random()*10);
let x = idezetek[random];
alert(x);
document.body.style.backgroundColor = "beige";
const music=[];
music[0]= "https://youtu.be/EmRwe-oY3VQ"
music[1]= "https://youtu.be/MWbj_rKH7Wk"
music[2]= "https://youtu.be/lTRiuFIWV54"
music[3]= "https://youtu.be/VB6SIKl8Md0"
music[4]= "https://youtu.be/O3UenuM-SYY"
music[5]= "https://youtu.be/2OEL4P1Rz04"
music[6]= "https://youtu.be/A-sfd1J8yX4"
music[7]= "https://youtu.be/htCcgpisgtk"
music[8]= "https://youtu.be/ILnl5wtouvk"
music[9]= "https://youtu.be/O45XwvT9Fu4"
window.location.replace(music[random])