$(document).ready(
    function() {
        //event handlers
        $("#calculateButton").click(calculateBAC);

        //other functions
        function calculateBAC()
        {
            //get all input from boxes and parse to number data type

            var beersConsumed = $("#beersConsumed").val();
            beersConsumed = parseFloat(beersConsumed);

            var wineConsumed = $("#wineConsumed").val();
            wineConsumed = parseFloat(wineConsumed);

            var shotsConsumed = $("#shotsConsumed").val();
            shotsConsumed = parseFloat(shotsConsumed);

            var weight = $("#weight").val();
            weight = parseFloat(weight);

            var hoursSince = $("#hoursSince").val();
            hoursSince  = parseFloat(hoursSince);


            //calculate

            var beerBAC = beersConsumed * 0.54;
            var wineBAC = wineConsumed * 0.6;
            var shotBAC = shotsConsumed * 0.6;
            var amountDrank = beerBAC + wineBAC + shotBAC;
            var avgAlcAbs = amountDrank * 7.5;
            var almostFinal = avgAlcAbs / weight;
            var timeAfterDrink = hoursSince * .015
            var finalBAC = almostFinal - timeAfterDrink


            //put output into paragraphs

            $("#totalBACCalc").text(`Your BAC is ${finalBAC.toFixed(3)}`);
        }
    }
);