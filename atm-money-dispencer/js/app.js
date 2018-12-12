var getAmount = {
    notes : [1,2,5,10,20,50,100,200,500,2000],
    dispenceNotes : function(amt){
      var getAmt = document.getElementById(amt).value;
	
	for(i=notes.length-1; i>=0 ; i--){ 
	var remainder = 0; 
	if(getAmt >= notes[i]){
		var remainder = getAmt % notes[i];
		var quotient = Math.floor(getAmt / notes[i]); 
		getAmt = remainder;
		//console.log(remainder);
		console.log(quotient+' notes of '+ notes[i]+' rs');
		
	}else{
	console.log('0 notes of '+ notes[i]+' rs');
	}	
    }
}
