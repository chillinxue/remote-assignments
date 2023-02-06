function ajax(url){
    fetch("https://appworks-school.github.io/Remote-Assignment-Data/products").then(function(response){
        return response.json();
    }).then(function(url){
        console.log(url);
        let result=document.querySelector("#result");
        for(let i=0; i<url.length; i++){
            let product = url[i];
            result.innerHTML+="<div>"+product.name+","+product.price+","+product.description+"</div>";}
    });
}
