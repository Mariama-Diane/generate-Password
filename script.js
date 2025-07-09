const generatepassword=(annyway)=>{
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nombres="0123456789";
    const symbole="&@(){}~\_-*%£$#!";
    const nombreHasard=lowercase+uppercase+nombres+symbole;

    let password="";
    for(let i=0;i<=annyway;i++){
        // on declare une variable qui vas stocker un nombre alléatoire
        // en utilisant math.floor()pour larrondissement et math.random() pour generer un nombre au hasar
        const nombreAleatoire=Math.floor(Math.random()*nombreHasard.length);

        // on concatene chaque caractere generer au hasar a la variable password
        // pour generer un mot de passe aleatoire
        password +=nombreHasard[nombreAleatoire];
    }
    return password;
}

const button=document.querySelector(".btn");
button.addEventListener("click",()=>{
    const span=document.querySelector(".password span");
    span.textContent=generatepassword(10);
});


console.log("un mot de passGenerer   "+generatepassword(10))