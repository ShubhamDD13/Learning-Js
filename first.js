for(let i=10; i>=1; i--){
    setTimeout(()=>
    {
        console.log(i);
        if(i==1){
            console.log("To infinity and beyond! 🚀!");
        }
    },(10-i)*1000)
}