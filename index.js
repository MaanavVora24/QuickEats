function pl(iname){
    food_items=[
        "Cake ", "Dosa ", "Idli ", "Poori ", "Burger ", 
        "Pizza ", "Sandwich ", "Pasta ", "Shawarma ", "Kebab ", 
        "Momo ", "Biryani ", "Noodles ", "Milkshake ", "Ice Cream "
    ];
    price_items=[
        120, 140, 150, 160, 180, 200, 
        100, 220, 130, 120, 150, 250, 
        180, 90, 120
    ]
    var list=document.getElementById("list");
    var list_child=list.childNodes;
    var flag=0;
    var ind;
    for(let i=0;i<list_child.length;i++){
        if(list_child[i].className==iname){
            flag=1;
            ind=i;
        }
    }
    req_price=price_items[ind];
    if(flag==0){
        var li=document.createElement('li');
        li.className=iname;
        li.innerText=food_items[iname]+"(1)";
        list.appendChild(li);
    }
    else{
        var str=list_child[ind].innerText;
        var newstr=str.split("");
        newstr[str.length-2]=(parseInt(newstr[str.length-2])+1);
        list_child[ind].innerText=newstr.join("")               
    }

    var total=document.getElementById("totall");
    var temp_tot=0;
    var temp_ind=0;
    for(let i=0;i<list_child.length;i++){
        str=list_child[i].innerText;
        newstr=str.split("");
        temp_ind=list_child[i].className
        var quantity=parseInt(newstr[str.length-2])
        temp_tot+=quantity*price_items[temp_ind]
    }
    document.getElementById("totall").innerText=(temp_tot)
}

function mi(iname){
    var list=document.getElementById("list");
    food_items=[
        "Cake", "Dosa", "Idli", "Poori", "Burger", 
        "Pizza", "Sandwich", "Pasta", "Shawarma", "Kebab", 
        "Momo", "Biryani", "Noodles", "Milkshake", "Ice Cream"
    ];
    price_items=[
        120, 140, 150, 160, 180, 200, 
        100, 220, 130, 120, 150, 250, 
        180, 90, 120
    ]
    var temp_tot=0;
    var list_child=list.childNodes;
    for(let i=0;i<list_child.length;i++){
        if(list_child[i].className==iname){
            var str=list_child[i].innerText;
            var newstr=str.split("");
            if(newstr[str.length-2]=='1'){
                list.removeChild(list_child[i]);
            }
            else{
                newstr[str.length-2]=(parseInt(newstr[str.length-2])-1);
                list_child[i].innerText=newstr.join("")
            }            
        }
    }
    list=document.getElementById("list");
    list_child=list.childNodes;
    var temp_ind=0;
    for(let i=0;i<list_child.length;i++){
        str=list_child[i].innerText;
        newstr=str.split("");
        temp_ind=list_child[i].className
        var quantity=parseInt(newstr[str.length-2])
        temp_tot+=quantity*price_items[temp_ind]
    }
    document.getElementById("totall").innerText=(temp_tot)
}

function pay(){
    alert("SUCCESSFULLY PAID")
}

