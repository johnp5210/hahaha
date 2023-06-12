window.onload = function() {


    function getP(pName) {
        let parameters = new URLSearchParams(window.location.search)
        return parameters.get(pName);
    }


    var gridCountWidth = 48 * 6 + 5;
    var endString = ""

    var changer = 0
    var ticker = 0;
    var curveMtrx = []
    var gridUnit = 48;
    for (var x = 0; x < gridUnit; x++) {
        curveMtrx[x] = []
        for (var y = 0; y < gridUnit; y++) {
            curveMtrx[x][y] = [.5]

        }
    }

    freqX = getP('x')
    freqY = getP('y')
    var random_number = getP('r')
    if (random_number > 0.6) {
        change = getP('change')
    } else {
        change = 0
    }
    var rDoodle = getP('start')

    console.log(rDoodle)
    //lissajou algo
    function drawCurve() {
        var ticker = 0;
        var sinLength = 100
        var loop = 1;
        var doodler
        var ss = (Math.floor(gridUnit / 2.01));
        var ssX = (Math.floor(gridUnit / 2.01));
        for (var x = 0; x < gridUnit; x++) {
            for (var y = 0; y < gridUnit; y++) {
                doodler = rDoodle * Math.PI
                var xx = Math.round(Math.sin(ticker * freqX + doodler + (Math.sin(ticker * change))) * ssX + ssX);
                var yy = Math.round(Math.cos(ticker * freqY) * ss + ss);
                curveMtrx[xx][yy] = [0]
                ticker += 1;

            }
        }
    }
    drawCurve()


    function generateLayer(text, sX, sY, sUnitW, sUnitH, letter) {
        var mtrx = []
        var factor = Math.round((Math.random() * 2) * 100) * .01 + .6;
        mtrx = letter;
    }




    function typeset(text, startX, startY) {
        var spacing = startX;
        var leading = startY;
        var textInt = 0;
        var textSplit = text.split('');
        for (var x = 0; x < gridUnit; x++) {
            for (var y = 0; y < gridUnit; y++) {

                var variable
                var tString = textSplit[textInt]


                if (curveMtrx[x][y][0] === 0) {
                    endString += tString
                } else {
                    endString += "&emsp;"

                }
               textInt += 1

            }
        }
    }
    console.log(endString)
    // typeset("...", 3, 3)
    // typeset("12:23:01 am", Math.floor(gridCountWidth/2), 3)
    // typeset("7.19.2023", Math.floor(gridCountWidth/2), 10)
    // typeset("...", gridCountWidth/2, 17)
    // typeset(String(tokenData.hash), 3, gridCountHeight - 1)


if (rDoodle == null){
    // your code here.
}
else{
var textX = "hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"
    typeset(textX, 4, 4)
    

    var outputDiv = document.getElementById("outputText");
    // Get the current date and time
    const currentDate = new Date();

    // Format the date as "day / month / year"
    const formattedDate = `${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()}`;

    // Format the time as "hour:minute:second"
    const formattedTime = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;


    outputDiv.innerHTML += "generated: <br>( " + `${formattedDate}` + " ) " + " [ " + `${formattedTime}` + " ] " + "<br><br>" + endString;
    //generateLayer(false, 0, 0, gridCountWidth, gridCountWidth)
}

}