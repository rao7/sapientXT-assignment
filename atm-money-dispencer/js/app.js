var getAmount = {
    notes : [1,2,5,10,20,50,100,200,500,2000],
    dispenceNotes : function(amt , noteDisplay , notesTotal){
        var getAmt = amt , total_noteCount = 0;
        
        if(typeof amt != 'number' && !amt) { alert('Empty or Invalid input'); return false;}
        
            noteDisplay.innerHTML = '';
        
        for(i= this.notes.length-1; i>=0 ; i--){ 
            var remainder = 0; 
            
            if(getAmt >= this.notes[i]){
                var remainder = getAmt % this.notes[i];
                var quotient = Math.floor(getAmt / this.notes[i]); 
                getAmt = remainder;
                total_noteCount += quotient ;
                this.template(quotient,this.notes[i],noteDisplay);
                
            }else{  this.template(0,this.notes[i],noteDisplay); }	

            }

            notesTotal.innerHTML = total_noteCount;
    
    },

    template : function(noteCount , currentNote , targetEle ){ // templating function
        var listItem = document.createElement('li');
        var attr =  document.createAttribute("class");
        attr.value = 'row__half fs-14'
        listItem.setAttributeNode(attr);
        var textNode = document.createTextNode(noteCount+ ' note of Rs ' +currentNote);
        listItem.appendChild(textNode);
    
        targetEle.insertBefore(listItem, targetEle.childNodes[0]);
    }
}
