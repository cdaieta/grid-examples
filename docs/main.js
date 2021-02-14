var currentState = {
    currentDate : new Date(),
    numberOfActiveDays : 30,
    initialYearMonth: "",
    endYearMonth: ""
}

var container;
var mainContainer = document.querySelector("#main-container");

// var currentDate = 

drawCalendar("2021-01-11", "2021-02-12");

function drawCalendar(pInitialYearMonth, pEndYearMonth) {
    var firstDay = new Date(getYear(pInitialYearMonth), getMonth(pInitialYearMonth), 1);
    var lastDay = new Date(getYear(pEndYearMonth), getMonth(pEndYearMonth) + 1, 0);

    // Create all dates between startMoht of inidate and end month of enddate
    var isNewMonth = true;
    var currentDate = firstDay;

    while (currentDate <= lastDay) {
        //Add Title 
        if (isNewMonth) {
            // Create title of month
            let titleMonth = document.createElement("h1");
            titleMonth.innerText = currentDate.toLocaleString('default', { month: 'long' }) + " " + currentDate.getFullYear();
            titleMonth.classList.add("titleMonth")
            mainContainer.appendChild(titleMonth);

            // create container for new month
            container = document.createElement("section");
            container.classList.add("container")
            mainContainer.appendChild(container);

            // leave spaces so beginning starts the correct day of week
            for (let index = 0; index < currentDate.getDay(); index++) {
                let dateElem = document.createElement("div");
                container.appendChild(dateElem);
            }
        }

        let dateElem = document.createElement("div");

        dateElem.innerText = currentDate.getDate();
        dateElem.classList.add("card")
        container.appendChild(dateElem);

        currentDate.setDate(currentDate.getDate() + 1)
        isNewMonth = (currentDate.getDate() == 1);
    }

}

// "2021-01" => 2021 (number)
function getYear(pYearMonth) {
    return parseInt(pYearMonth.substr(0,4));
}

// "2021-01" => 1 (number)
function getMonth(pYearMonth) {
    return parseInt(pYearMonth.substr(5,2));
}

