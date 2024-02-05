<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GiftGenie</title>
    <script src="./loser.js"></script>
    <link rel="icon" type="image/x-icon" href="./MicrosoftTeams.png">
    <link rel="stylesheet" href="./style.css">
</head>
<body onload="init()" >

    <div class="nav">
        <div class="logo"></div>
    </div>

    <video id="video"  controls>
        <source src="./tutorial.mp4" type="video/mp4">
        video not ondersteund.
    </video>

    <div class="explain"></div>

    <div id="chat"></div> 

    <div class="chatter">
        <input type="text" name="stupid" id="leven" data-disabled="false" placeholder="typ met de genie....">
        <button id="button">Stuur verzoek</button>
    </div>
</body>
</html>
