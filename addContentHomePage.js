setTimeout(function(){
        createCalculateButtonOnDOM();
    }, 2000);

var createCalculateButtonOnDOM = function(){
    var htmlToAppend = `&nbsp;&nbsp;<button id="buttonCalculateHours" class="btn btn-sm btn-outline-primary">Monthly by Project</button>`;
    $("span.week-info-create-request").first().append(htmlToAppend);

    $("#buttonCalculateHours").on("click", function(){
        window.location.href = "https://acdc2.avenuecode.com/monthly-report";
    });
};