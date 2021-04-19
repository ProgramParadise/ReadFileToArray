//Works on Edge, but not Chrome
$('body').ready(function () {
    //Date information:
    var d = new Date();
    var startingMonth = 4;      //The month that the first quote was used
    var currentYear = d.getFullYear() - 2021;      //The year since 2021
    var currentMonth = (currentYear * 12)  + d.getMonth() + 1;      //The months since April 2021

    var monthsSinceIndex = function(start, current)
    {
        var numMonths = current - start;
        return numMonths;
    }
    console.log("months since January 2021: " + monthsSince(startingMonth, currentMonth));

    //File information:
    var file = 'quotes.txt';     //imports quotes.txt
    console.log("imported file");
    var lineNumber = monthsSinceIndex(startingMonth, currentMonth);      //index of monthly quote (assigned for efficiency)

    /**
     * Precondition: the file requested exists and the month is past April 2021
    **/
    var readLine = function(file, line)
    {
        $.get(file, function(data) {
            var items = data.split('\n');
            $('#QOTM').text("Quote of the Month: " + items[line]);
        });
    }

    //Output:
    readLine(file, lineNumber);
});