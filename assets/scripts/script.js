function parseAddress(address) {
    // Make sure the address is a string.
    if (typeof address !== "string") throw "Address is not a string.";

    // Trim the address.
    address = address.trim();

    // Make an object to contain the data.
    var returned = {};

    // Find the comma.
    var comma = address.indexOf(',');

    // Pull out the city.
    returned.city = address.slice(0, comma);

    // Get everything after the city.
    var after = address.substring(comma + 2); // The string after the comma, +2 so that we skip the comma and the space.

    // Find the space.
    var space = after.lastIndexOf(' ');

    // Pull out the state.
    returned.state = after.slice(0, space);

    // Pull out the zip code.
    returned.zip = after.substring(space + 1);

    // Return the data.
    return returned;
}

$(document).ready(function(){
    $("#weather").text("aight");

    $.get( "https://dl.dropboxusercontent.com/u/22286711/whereis/loc.txt", function( data ) {
        $("#loc" ).html( data );
        var loc = $("#loc").text();
        loc = loc.substr(0, loc.indexOf("\n"));
        loc = parseAddress(loc).state
        loc = loc.substr(0, loc.length-7);
        $("#location").text(loc);
    });

    /*
    $("#loc").load("https://dl.dropboxusercontent.com/u/22286711/whereis/loc.txt");
    setTimeout(2000);
    var loc = $("#loc").text();
    console.log(loc);
    loc = loc.substr(0, loc.indexOf("\n"));
    console.log(loc);
    loc = loc.replace(/(^,)|(,$)/g, "");
    console.log(loc);
    $("#location").load("https://dl.dropboxusercontent.com/u/22286711/whereis/loc.txt");
    $("#location").text('hi');
    console.log(loc);
    */
});
