let choose=document.querySelectorAll(".bus button");
let totaltickets=0;
let clickans;
let seatnumbers=[];
let statement=document.getElementById("ticketsno");
choose.forEach(btn => {
    btn.addEventListener("click", (event) => {
       clickans = event.target.id;
      let clickvalue=event.target.value;
      
      if(clickvalue==0 ){
        if(totaltickets==6){
            alert("you can't book more than 6 tickets");
            return;
        }
        event.target.value=1;
      document.getElementById(event.target.id).style.backgroundColor = "black";
      document.getElementById(event.target.id).style.color = "white";
      document.getElementById(event.target.id).innerText =clickans;
    totaltickets++;
  statement.innerText=`You have selected ${totaltickets} tickets`;
addseats();}
    else{document.getElementById(event.target.id).style.backgroundColor = "white";
        document.getElementById(event.target.id).innerText ='';
event.target.value=0;
totaltickets--;
  statement.innerText=`You have selected ${totaltickets} tickets`;
  passengerremove();
    }

 });
  });
  let k=0;
function addseats(){
    k++;
    let m;
    let passenger=document.createElement("tr");
    let psno=document.createElement("td");
     let pnamer=document.createElement("td");let pnamers=document.createElement("input");pnamers.type="input"
     let pmale=document.createElement("td");let pmales=document.createElement("input");pmales.type="checkbox";
     let pfemale=document.createElement("td");let pfemales=document.createElement("input");pfemales.type="checkbox";
     let pseatnum=document.createElement("td");pseatnum=clickans;
         let passengerlist=document.getElementById("selectiontable");
   passengerlist.append(passenger);
   passenger.append(psno);
   passenger.append(pnamer);
   pnamer.append(pnamers);
   passenger.append(pmale);
   pmale.append(pmales);
   passenger.append(pfemale);
   pfemale.append(pfemales);
   passenger.append(pseatnum);
   seatnumbers.push(clickans);
   
   for(m=1;m<=totaltickets;m++){
    let updatesno=passengerlist.rows[m].cells[0]
    updatesno.innerText=m;

   }

    
}
function passengerremove(){
    let n;
    let position =seatnumbers.indexOf(clickans) + 1;
    console.log(position)
   let deletelist=document.getElementById("selectiontable");
   deletelist.deleteRow(position); 
   seatnumbers.splice(position-1,1);
     for(n=1;n<=totaltickets;n++){
    let deletesno=deletelist.rows[n].cells[0];
    deletesno.innerText=n;

   }

}