var bookmarkName = document.getElementById('bookmarkName');
var url = document.getElementById('vauleUrl');
var visit = document.getElementById('visited')
allData = [];

if( localStorage.getItem('myData') != null)
{
    allData = JSON.parse(localStorage.getItem('myData'));
    displayData(allData);
};

function addData()
{
   dataList = {
    Name : bookmarkName.value ,
    website : url.value
   } ;

   allData.push(dataList);


   localStorage.setItem("myData" , JSON.stringify(allData))


   displayData(allData)
   clearData()

   
}

function displayData(dis)
{
    container = '';
    for(i=0; i<dis.length ; i++)
    {
        container += ` 
         <tr>
                <td>${i+1}</td>
                <td >${allData[i].Name}</td>
                <td><a href="${allData[i].website}" target = "blank" class="btn btn-success px-3 "  id = "visited"> <i class="fa-solid fa-eye p-1"></i>Visit</a></td>
                <td><button class="btn btn-danger px-3 " onclick="deleteData(${i})"><i class="fa-solid fa-trash-can p-1"></i> Delete</button></td>
            </tr>
        `
    }
    document.getElementById("bodyData").innerHTML = container;
}

function clearData()
{
    bookmarkName.value = null;
    url.value = null; 
}


function deleteData(index)
{
    allData.splice(index , 1);
    displayData(allData)
    localStorage.setItem("myData" , JSON.stringify(allData));
    
}

var bookMarkRegex = /^[A-Za-z]{5,15}$/
function demo1(bookmarkName)
{
    if(bookMarkRegex.test(bookmarkName))
    {
        document.getElementById("bookmarkName").classList.add("is-valid")
        document.getElementById("bookmarkName").classList.remove("is-invalid")
    }
    else
    {
        document.getElementById("bookmarkName").classList.add("is-invalid")
        document.getElementById("bookmarkName").classList.remove("is-valid")
    }
}

var vauleUrlRegex = /^((www.)[a-zA-Z0-9]+(.com))/
function demo2(vauleUrl)
{
    if(vauleUrlRegex.test(vauleUrl))
    {
        document.getElementById("vauleUrl").classList.add("is-valid")
        document.getElementById("vauleUrl").classList.remove("is-invalid")
    }
    else
    {
        document.getElementById("vauleUrl").classList.add("is-invalid")
        document.getElementById("vauleUrl").classList.remove("is-valid")
    }
}