const ele=document.getElementById("btn");
const jokeel=document.getElementById("joke");
const apikey="gE/mSZAD2GSLFeqgocALiA==ZLQqbFc9zRZLsKSR";
const option={
         method:"GET",
         headers:{
                  "X-Api-key":apikey,
         },
};
// ele.addEventListener("click",getjokes)

// const apikey="gE/mSZAD2GSLFeqgocALiA==ZLQqbFc9zRZLsKSR";
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke(){
         const response=  await fetch(apiURL,option);
         const data =await response.json();
      jokeel.innerText= data[0].joke;
}
ele.addEventListener("click",getjoke);