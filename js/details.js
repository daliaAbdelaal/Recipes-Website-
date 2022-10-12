var parm=new URLSearchParams(location.search);
var recpieId=parm.get('rId');
var img=document.getElementById('img')
var mealDetails=[];
var ingredient=[];
async function getRecpieDetails(recpieId)
{
        var apiResp=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recpieId}`);
        var response=await apiResp.json();
        mealDetails =response.recipe;
        ingredient=mealDetails.ingredients;
        img.setAttribute('src',`${mealDetails.image_url}`);
        displayIngrdient();
        
        // let myHttp=new XMLHttpRequest();
        // myHttp.open('GET',`https://forkify-api.herokuapp.com/api/get?rId=${recpieId}`);
        // myHttp.send();
        // myHttp.addEventListener('readystatechange',function()
        // {
        //         if(myHttp.readyState==4 && myHttp.status==200)
        //         {
        //                 mealDetails=JSON.parse(myHttp.response).recipe;
        //                 ingredient=mealDetails.ingredients
        //                 img.setAttribute('src',`${mealDetails.image_url}`)
        //                 displayIngrdient()
        //         }
        // })
}
getRecpieDetails(recpieId)

function displayIngrdient()
{
        var cartonna=``;
        for(var i=0;i<ingredient.length;i++)
        {
                cartonna+=`<li class='mb-2'>${ingredient[i]}</li>`
        }
        document.getElementById('list').innerHTML=cartonna
}
