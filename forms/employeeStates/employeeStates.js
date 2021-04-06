/*
let req = ""
let results = ""
let netID = "trp36501"
let pw = "Forwarding12*"

employeeStates.onshow=function(){
  drpStates.clear()
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=trp36501&pass=Forwarding12*&database=trp36501&query=SELECT state FROM customer");  if(req1.status == 200) {
    results = JSON.parse(req1.responseText)
    if (results.length == 0){
      console.log = "There are no states in the database."
    }else{
      for(i=0; i< results.length; i++)
        drpStates.addItem(results[i])
    }
  }
}

drpStates.onclick=function(s){
  if(typeof(s) == 'object'){
    return
  }else {
    lstgCustomers.addItem(s)
  }
}
*/