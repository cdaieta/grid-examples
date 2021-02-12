//configuration
var cfgIniDate = "2021-01-01";
var cfgEndDate = "2021-03-05";

var iniDate = new Date(cfgIniDate + "T00:00:00");
var endDate = new Date(cfgEndDate + "T00:00:00");

var container;

// Create all dates between inidate and end date
var isNewMonth = true;
var currentDate = iniDate;

while (currentDate<=endDate)
{
    //Add Title 
    if(isNewMonth)
    {
        // Create title of month
        let titleMonth = document.createElement("h1");
        titleMonth.innerText = currentDate.toLocaleString('default', { month: 'long' });
        titleMonth.classList.add("titleMonth")
        document.body.appendChild(titleMonth);

        // create container for new month
        container = document.createElement("section");
        container.classList.add("container")
        document.body.appendChild(container);

        // leave spaces so beginning starts the correct day of week
        for (let index = 0; index < currentDate.getDay(); index++) {
            let dateElem = document.createElement("div");
            //set text = day of current date
            //dateElem.innerText = currentDate.getDate();
            //dateElem.classList.add("card")
            container.appendChild(dateElem);
        }
    }

    let dateElem = document.createElement("div");
    //set text = day of current date
    dateElem.innerText = currentDate.getDate();
    dateElem.classList.add("card")
    container.appendChild(dateElem);

    currentDate.setDate(currentDate.getDate()+1)
    isNewMonth = (currentDate.getDate() == 1);
}


