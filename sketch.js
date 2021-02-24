let coll

function rand(){
 let x=Math.floor(1+Math.random() *4 );
 return x;
}

function play(){
	
    for(let j=1;j<5;j++){//cell[j]=[];
    for(let k=1;k<5;k++){cell[j][k]=0;}
	}
	let tes1=rand();
	if(tes1==1){Pic11();}
	if(tes1==2){Pic12();}
	if(tes1==3){Pic13();}
	if(tes1==4){Pic14();}
	
	let tes2=rand();
	if(tes2==1){Pic21();}
	if(tes2==2){Pic22();}
	if(tes2==3){Pic23();}
	if(tes2==4){Pic24();}
	
	let tes3=rand();
	if(tes3==1){Pic31();}
	if(tes3==2){Pic32();}
	if(tes3==3){Pic33();}
	if(tes3==4){Pic34();}
	
    
	document.getElementById("testNum").innerHTML="1st is "+tes1+" 2cd is "+tes2+" 3rd is "+tes3;
    check();
}

function check(){
if(coll[1][1]==1&&cell[2][1]==1&&cell[3][1]==1){
	document.getElementById("testNum").innerHTML="Winner!";}
	
if(coll[1][2]==1&&cell[2][2]==1&&cell[3][2]==1){
	document.getElementById("testNum").innerHTML="Winner!";}
	
if(coll[1][3]==1&&cell[2][3]==1&&cell[3][3]==1){
	document.getElementById("testNum").innerHTML="Winner!";}
	
if(coll[1][4]==1&&cell[2][4]==1&&cell[3][4]==1){
	document.getElementById("testNum").innerHTML="Winner!";}
	

}	
	