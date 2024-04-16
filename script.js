function firstNonRepeatedChar(str) {
 // Write your code here
	let f=0;
 for(let i=0;i<str.length;i++){
     f=0;
     for(let j=0; j< str.length;j++){
     if(str[j]==str[i] && i!=j){f++;
         break;
     }
 }
 if(f==0){return str[i];}
 
 }
 return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
