
var data=[];
var i=0;
var cf;
var imgset;
function onsubmitdetails()
{
	
	
	
	var obj= {name:document.getElementById("name").value,
	address:document.getElementById("address").value,
phno:document.getElementById("phno").value,
email:document.getElementById("email").value,
img:imgset};

if(JSON.parse(localStorage.getItem("data"))!=null)
{
	data=JSON.parse(localStorage.getItem("data"));
}


data.push(obj);

if(localStorage.getItem("count")!=null)
{
	i=localStorage.getItem("count");
}

i++;
localStorage.setItem("data",JSON.stringify(data));
localStorage.setItem("count",i);

var tb=document.getElementById("infotable");
	var row=tb.insertRow();
	var c1=row.insertCell();
	var c2=row.insertCell();
	var c3=row.insertCell();
	var c4=row.insertCell();
	var c7=row.insertCell();
	var c5=row.insertCell();
	var c6=row.insertCell();
	
	
	c1.innerHTML=document.getElementById("name").value;
	c2.innerHTML=document.getElementById("address").value;
	c3.innerHTML=document.getElementById("phno").value;
	c4.innerHTML=document.getElementById("email").value;
	//img code here...
	var img=document.createElement('img');
	img.src=imgset;
	img.style.height="40px";
	img.style.width="40px";
	c7.appendChild(img);

	
	var btn = document.createElement('input');
	
btn.type = "button";
btn.className = "btndelete";
btn.value ="delete x";
btn.onclick =function(){
	var rIndex1=row.rowIndex;
	document.getElementById("infotable").deleteRow(rIndex1);
	//document.write(rIndexx);
	var out1=JSON.parse(localStorage.getItem("data"));
	out1.splice(rIndex1,1);
	localStorage.setItem("data",JSON.stringify(out1));
	var current1=localStorage.getItem("count");
	localStorage.setItem("count",current1-1);

};
c5.appendChild(btn);


	var btnedit = document.createElement('input');
	var rIndexx2;
btnedit.type = "button";
btnedit.className = "btnedit";
btnedit.value ="edit ✎";
btnedit.onclick =function(){
	rIndexx2=row.rowIndex;
		document.getElementById("name").value=row.cells[0].innerHTML;
		document.getElementById("address").value=row.cells[1].innerHTML;
		document.getElementById("phno").value=row.cells[2].innerHTML;
		document.getElementById("email").value=row.cells[3].innerHTML;
		document.getElementById("infotable").deleteRow(rIndexx2);
		var out2=JSON.parse(localStorage.getItem("data"));
	out2.splice(rIndexx2-1,1);
	localStorage.setItem("data",JSON.stringify(out2));
	var current2=localStorage.getItem("count");
	localStorage.setItem("count",current2-1);

	
};
c6.appendChild(btnedit);

}

function fetchlocal()
{
	
	cf=localStorage.getItem("count");
	for(var j=0;j<cf;j++)
	{
		var tb=document.getElementById("infotable");
		var row=tb.insertRow();
		var c1=row.insertCell();
		var c2=row.insertCell();
		var c3=row.insertCell();
		var c4=row.insertCell();
		var c7=row.insertCell();
		var c5=row.insertCell();
		var c6=row.insertCell();

		var out3=JSON.parse(localStorage.getItem("data"));
		c1.innerHTML=out3[j].name;
		c2.innerHTML=out3[j].address;
		c3.innerHTML=out3[j].phno;
		c4.innerHTML=out3[j].email;
		//image code here
		var img=document.createElement('img');
		img.src=out3[j].img;
		img.style.height="40px";
		img.style.width="40px";
		c7.appendChild(img);

    //delete functionality....
	var btndelete = document.createElement('input');
	
	btndelete.type = "button";
	btndelete.className = "btndelete";
	btndelete.value ="delete x";
	btndelete.onclick =function(){
	var rIndex=row.rowIndex;
	//document.write(rIndex);
	document.getElementById("infotable").deleteRow(rIndex);
	
	var out5=JSON.parse(localStorage.getItem("data"));
	out5.splice(rIndex,1);
	localStorage.setItem("data",JSON.stringify(out5));
	var current3=localStorage.getItem("count");
	localStorage.setItem("count",current3-1);

};
c5.appendChild(btndelete);
//delete functionality till here.....and edit starts here....
var btnedit = document.createElement('input');
	var rIndex2;
btnedit.type = "button";
btnedit.className = "btnedit";
btnedit.value ="edit ✎";
btnedit.onclick =function(){
	rIndex2=row.rowIndex;
	
	document.getElementById("name").value=row.cells[0].innerHTML;
		document.getElementById("address").value=row.cells[1].innerHTML;
		document.getElementById("phno").value=row.cells[2].innerHTML;
		document.getElementById("email").value=row.cells[3].innerHTML;
		document.getElementById("infotable").deleteRow(rIndex2);
		var out6=JSON.parse(localStorage.getItem("data"));
	out6.splice(rIndex2-1,1);
	localStorage.setItem("data",JSON.stringify(out6));
	var current4=localStorage.getItem("count");
	localStorage.setItem("count",current4-1);

		
	
};
	c6.appendChild(btnedit);
	

	}


}
//displaypic...
function displaypic(){
	if(this.files && this.files[0])
	{

		var obj=new FileReader();
		obj.onload= function(data){
			var image= document.getElementById("profile_pic_uploaded");
			image.src=data.target.result;
			imgset=data.target.result;
			image.style.display="block";
			image.style.padding="5px";
		}
		obj.readAsDataURL(this.files[0]);
	}
	
}