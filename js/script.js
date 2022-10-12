let recpies=[]
getRecpies('pizza')

var links=document.querySelectorAll('.nav-link');

for(var i=0;i<links.length;i++)
{
        links[i].addEventListener('click',function(e)
        {
                let mealName=e.target.innerHTML;
                getRecpies(mealName)
        })
}

async function getRecpies(meal)
{
        var apiResp= await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
        var response=await apiResp.json();
        recpies=response.recipes;
        displayRecpies();

        // let myHttp=new XMLHttpRequest();
        // myHttp.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
        // myHttp.send();
        // myHttp.addEventListener('readystatechange',function()
        // {
        //         if(myHttp.readyState==4 && myHttp.status==200)
        //         {
        //                 recpies=JSON.parse(myHttp.response).recipes;
        //                 displayRecpies()
        //         }
        // })
}

function displayRecpies()
{
        var cartonna=``;
        for(var i=0;i<recpies.length;i++)
        {
                cartonna+=
                `<div class="col-md-4 my-4">
                        <div class="text-center item ">
                                <img src='${recpies[i].image_url}' class='w-100'>
                                <h5 class='pt-3'>${recpies[i].title}</h5>
                                <button class='btn btn-outline-dark mr-2'>
                                        <a href='${recpies[i].source_url}' target='_blank'>Source</a>
                                </button>
                                <button class='btn btn-outline-dark'>
                                        <a href='details.html?rId=${recpies[i].recipe_id}' target='_blank'>Details</a>
                                </button>
                        </div>
                </div>`
        }
        document.getElementById('data').innerHTML=cartonna
}

