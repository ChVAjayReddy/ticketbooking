let choose = document.querySelectorAll(".bus button");
let totaltickets = 0;
let clickans;
let seatnum = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4", "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4", "I1", "I2", "I3", "I4", "J1", "J2", "J3", "J4"];
let price; let finalgender; let mobile; let email;
let confirmticket = document.getElementById("confirm");
let seatnumbers = []; let passengerdata = [];
let statement = document.getElementById("ticketsno");
let y; let ticketrandomnum = Math.floor(Math.random() * 9);


for (y = 1; y <= ticketrandomnum; y++) {
  let blockticket = Math.floor(Math.random() * 40);
  let seatblock = seatnum[blockticket];
  document.getElementById(seatblock).style.backgroundColor = "#B2BEB5";
  document.getElementById(seatblock).disabled = true;
  seatnum.splice(blockticket, 1);
}

choose.forEach(btn => {
  btn.addEventListener("click", (event) => {
    clickans = event.target.id;
    let clickvalue = event.target.value;

    if (clickvalue == 0) {
      if (totaltickets == 6) {
        alert("you can't book more than 6 tickets");
        return;
      }
      event.target.value = 1;
      document.getElementById(event.target.id).style.backgroundColor = "black";
      document.getElementById(event.target.id).style.color = "white";
      document.getElementById(event.target.id).innerText = clickans;
      totaltickets++;
      statement.innerText = `You have selected ${totaltickets} tickets`;
      confirmticket.innerText = `Pay ₹.${totaltickets * 500}`;
      addseats();
    }
    else {
      document.getElementById(event.target.id).style.backgroundColor = "pink";
      document.getElementById(event.target.id).innerText = '';
      event.target.value = 0;
      totaltickets--;
      statement.innerText = `You have selected ${totaltickets} tickets`;
      confirmticket.innerText = `Pay ₹.${totaltickets * 500}`;
      passengerremove();
    }

  });
});
let k = 0;
function addseats() {
  k++;
  let m;
  let passenger = document.createElement("tr");
  let psno = document.createElement("td"); psno.id = "sno";
  let pnamer = document.createElement("td");
  let pnamers = document.createElement("input"); pnamers.type = "text"; pnamers.id = "namep";
  let pmale = document.createElement("td"); let pmales = document.createElement("input"); pmales.type = "radio"; pmales.value = "0"; pmales.name = k;
  let pfemale = document.createElement("td"); let pfemales = document.createElement("input"); pfemales.type = "radio"; pfemales.value = "1"; pfemales.name = k;
  let pseatnum = document.createElement("td"); pseatnum.id = "seat"; pseatnum.innerText = clickans;
  let passengerlist = document.getElementById("selectiontable");
  passengerlist.append(passenger);
  passenger.append(psno);
  passenger.append(pnamer);
  pnamer.appendChild(pnamers);
  passenger.append(pmale);
  pmale.append(pmales);
  passenger.append(pfemale);
  pfemale.append(pfemales);
  passenger.append(pseatnum);
  seatnumbers.push(clickans);

  for (m = 1; m <= totaltickets; m++) {
    let updatesno = passengerlist.rows[m].cells[0]
    updatesno.innerText = m;
  }
}

function passengerremove() {
  let n;
  let position = seatnumbers.indexOf(clickans) + 1;
  let deletelist = document.getElementById("selectiontable");
  deletelist.deleteRow(position);
  seatnumbers.splice(position - 1, 1);
  for (n = 1; n <= totaltickets; n++) {
    let deletesno = deletelist.rows[n].cells[0];
    deletesno.innerText = n;
   }
}
let c; let d;
confirmticket.addEventListener("click", function () {
  if (totaltickets == 0) {
    alert("Please select seats");
  }
  else {
    let datatable = document.getElementById("selectiontable");
    for (let c = 1; c < datatable.rows.length; c++) {
      let row = datatable.rows[c];
      let nameInput = row.cells[1].querySelector('input[type="text"]');
      let checkboxex = row.querySelectorAll('input[type="radio"]');
      checkboxex.forEach(checkbox => {
        if (checkbox.checked) {
          if (checkbox.value == 0) {
            finalgender = "Male";
          }
          if (checkbox.value == 1) {
            finalgender = "Female";
          }
        }
      });
      passengerdata.push({
        sno: row.cells[0].innerText,
        name: nameInput.value,
        seat: row.cells[4].innerText,
        gender: finalgender,

      });
      mobile = document.getElementById("fname").value;
      email = document.getElementById("lname").value;
    }
    console.log(passengerdata);
    let div = document.getElementById("buschart");
    if (div.style.display === "none") {
      div.style.display = "block"; // 
    } else {
      div.style.display = "none";
    }
    document.getElementById("ticketsno").style.display = "none";
    document.getElementById("selectiontable").style.display = "none";
    document.getElementById("confirm").style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById("lname").style.display = "none";
    document.getElementById("front").style.display = "none";
    document.getElementById("icons").style.display = "none";
    let finaldis = document.getElementById("final");
    let fdis = document.createElement("h2");
    fdis.innerText = "Ticket Details";
    finaldis.append(fdis);
    let fname = document.createElement("p");
    fname.innerText = `Dear ${passengerdata[0].name},\n\nYou have successfully booked your tickets.\n\n Passenger Details:`;
    finaldis.append(fname)
    let finaltable = document.createElement("table"); finaltable.id = "final"
    finaldis.append(finaltable)
    let e = 0;
    for (e = 0; e <= passengerdata.length; e++) {
      let fpassenger = document.createElement("tr");
      let fpsno = document.createElement("td");
      let ffpsno = document.createElement("td");
      let genderdis = document.createElement("td");
      let fffpsno = document.createElement("td");
      if (e == 0) {
        fpsno.innerText = "S.No";
        ffpsno.innerText = "Name of the passenger";
        genderdis.innerText = "Gender";
        fffpsno.innerText = "Seat Number";
      }
      else {
        fpsno.innerText = passengerdata[e - 1].sno;
        ffpsno.innerText = passengerdata[e - 1].name;
        genderdis.innerText = passengerdata[e - 1].gender;
        fffpsno.innerText = passengerdata[e - 1].seat;

      }
      finaltable.append(fpassenger);
      fpassenger.append(fpsno);
      fpassenger.append(ffpsno);
      fpassenger.append(genderdis);
      fpassenger.append(fffpsno);

    }

    let mob = document.createElement("p");
    mob.innerText = `Contact Details \n Mobile : ${mobile} \n Email : ${email}`;
    finaldis.append(mob);
    let fstate = document.createElement("p");
    fstate.innerText = "Thanks for choosing our travel agency. \n \n Wish You a Happy Journey.\n \n Ajay Tours and Travels.";
    finaldis.append(fstate)

  }
})
