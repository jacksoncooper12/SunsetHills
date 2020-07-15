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
        if (currentBldg > tallest) {
            output.push(currentBldg);
            tallest = currentBldg;
        }
        $("#output").html(`Given the input, ${output.length} building(s) can see the sun. <br/> The building(s) with heights of [${output}] can see the sun.`);
    }
});
function produce() {
    var b1 = parseInt($("#sunsetIn1").val());
    var b2 = parseInt($("#sunsetIn2").val());
    var b3 = parseInt($("#sunsetIn3").val());
    var b4 = parseInt($("#sunsetIn4").val());
    var b5 = parseInt($("#sunsetIn5").val());
    var b6 = parseInt($("#sunsetIn6").val());
    var valueArray = [NaN, b1, b2, b3, b4, b5, b6];
    zingchart.render({
        id: "myChart",
        output: "svg",
        height: 600,
        width: '100%',
        data: {
            type: "bar3d",
            title: {
                text: "Building Heights"
            },
            "background-image": 'images/realbestSunBG.jpg',
            'scale-y': {
                "visible": false,
                "item": {
                    "visible": false
                },
                "tick": {
                    "visible": false,
                    "line-color": "none"
                }

            },
            'scale-x': {
                "visible": false,
                labels: ["", "Building 1", "Building 2", "Building 3", "Building 4", "Building 5", "Building 6"]
            },
            series: [
                {
                    values: valueArray
                }
            ]
        }
    });
};
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
$(document).ready(function () {
    $("#sunsetIn1").keydown(function (event) {
        if (event.which === 13) {
            $("#btnSunset").click();
        }
    }
    )
    $("#sunsetIn2").keydown(function (event) {
        if (event.which === 13) {
            $("#btnSunset").click();
        }
    }
    )
    $("#sunsetIn3").keydown(function (event) {
        if (event.which === 13) {
            $("#btnSunset").click();
        }
    }
    )
    $("#sunsetIn4").keydown(function (event) {
        if (event.which === 13) {
            $("#btnSunset").click();
        }
    }
    )
    $("#sunsetIn5").keydown(function (event) {
        if (event.which === 13) {
            $("#btnSunset").click();
        }
    }
    )
    $("#sunsetIn6").keydown(function (event) {
        if (event.which === 13) {
            $("#btnSunset").click();
        }
    }
    )
});
$("#clear").on("click", function () {
    $("#output").text("");
    $("#sunsetIn1").val("");
    $("#sunsetIn2").val("");
    $("#sunsetIn3").val("");
    $("#sunsetIn4").val("");
    $("#sunsetIn5").val("");
    $("#sunsetIn6").val("");
})