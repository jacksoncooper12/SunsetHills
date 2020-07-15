//click event handler
$("#btnSunset").on("click", function () {
    let b1 = parseInt($("#sunsetIn1").val());
    let b2 = parseInt($("#sunsetIn2").val());
    let b3 = parseInt($("#sunsetIn3").val());
    let b4 = parseInt($("#sunsetIn4").val());
    let b5 = parseInt($("#sunsetIn5").val());
    let b6 = parseInt($("#sunsetIn6").val());

    let bldgArray = [b1, b2, b3, b4, b5, b6]

    let output = new Array();
    let tallest = 0;
    let currentBldg = 0

    for (let loop = 0; loop <= 5; loop++) {
        currentBldg = bldgArray[loop];
        //see if previous buildings are taller
        if (currentBldg > tallest) {
            output.push(currentBldg);
            tallest = currentBldg;
        }

        //output to user
        $("#output").html(`Given the input ${output.length} buildings can see the sunset. <br/> The buildings with heights of [${output}] can see the sun`);

    }
})