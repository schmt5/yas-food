
$(document).ready(function(){

    // $.getJSON('data.json', function(json) {
    //     // random meal
    //     const meal = json[Math.floor(Math.random() * json.length)];
    //     console.log(meal);
    // });

    const meal = mealList[Math.floor(Math.random() * mealList.length)]


    $("h2.card-title").text(meal.name)

    $("button.random-btn").click(function() {
        const meal = mealList[Math.floor(Math.random() * mealList.length)]
        $("h2.card-title").text(meal.name)
    });
    

  }); 

  const mealList = [
    {
      "name": "Bolognaise",
      "veggie": false,
      "ingredients": ["pasta", "tomate", "hackfleisch"]
    },
    {
      "name": "Ratatouille",
      "veggie": true,
      "ingredients": ["pasta", "tomate", "gemuese"]
    },
  
    {
      "name": "Spinat Pasta",
      "veggie": true,
      "ingredients": ["pasta", "spinat", "cherry tomaten"]
    },
    {
      "name": "Thon Pasta",
      "veggie": false,
      "ingredients": ["pasta", "thon", "kapern", "zwiebeln"]
    },
    {
      "name": "Broccoli Pasta",
      "veggie": true,
      "ingredients": ["pasta", "rahm", "broccoli"]
    },
    {
      "name": "Cinque Pi",
      "veggie": true,
      "ingredients": ["pasta", "rahm", "tomatenpueree", "parmesan", "petersilie"]
    },
    {
      "name": "Alpenmakkaronie",
      "veggie": false,
      "ingredients": [
        "pasta",
        "kartoffel",
        "rahm",
        "speck",
        "zwiebel",
        "muskatnuss"
      ]
    },
    {
      "name": "Pasta Lauch Speck",
      "veggie": false,
      "ingredients": ["pasta", "rahm", "lauch", "speck"]
    },
    {
      "name": "Champignon Pasta",
      "veggie": true,
      "ingredients": ["pasta", "rahm", "champignon"]
    },
    {
      "name": "Chorizo Pasta",
      "veggie": false,
      "ingredients": ["pasta", "rahm", "chorizo"]
    },
    {
      "name": "Carbonara",
      "veggie": false,
      "ingredients": ["pasta", "rahm", "ei", "speck"]
    },
    {
      "name": "Carbonara Vegi",
      "veggie": true,
      "ingredients": ["pasta", "rahm", "ei", "champignon"]
    },
    {
      "name": "Zuccetti Pasta",
      "veggie": true,
      "ingredients": ["pasta", "rahm", "zuccetti", "feta", "zitrone"]
    },
    {
      "name": "Lachs Pasta",
      "veggie": false,
      "ingredients": ["pasta", "rahm", "lachs"]
    },
    {
      "name": "Limone Pasta",
      "veggie": true,
      "ingredients": [
        "pasta",
        "rahm",
        "zitrone",
        "butter",
        "petersilie",
        "knoblauch"
      ]
    },
    {
      "name": "Spinat Shrimps Pasta",
      "veggie": false,
      "ingredients": ["pasta", "rahm", "spinat", "shrimps"]
    },
    {
      "name": "Pesto verde",
      "veggie": true,
      "ingredients": ["pasta", "basilikum", "parmesan", "olivenöl", "knoblauch", "pinienkerne"]
    },
   { "name": "Pesto rosso",
    "veggie": true,
    "ingredients":["pasta", "..."]
    },
   { "name": "Gemüselasagne",
      "veggie": true,
      "ingredients":["Gemuese", "Pelati", "Lasagneblätter", "Parmesan", "Mehl", "butter", "milch"]
    },
  { 
    "name": "Spinatlasagne",
      "veggie": true,
      "ingredients":["Spinat","Ricotta", "Lasagneblätter", "parmesan", "Mehl", "milch", "butter"]
  },
  {
    "name": "Lasagne",
    "veggie": false,
    "ingredients": ["tomate", "hackfleisch", "Lasagneblätter", "parmesan", "Mehl", "milch", "butter"]
  },
  {
    "name": "Ali Olio Pasta",
    "veggie": true,
    "ingredients": ["olivenöl","knoblauch", "chili"]
  },
  {
    "name": "Venusmuschel Pasta",
    "veggie":false,
    "ingredients":[]
  },
  {
    "name": "Teigwarenauflauf",
    "veggie": true,
    "ingredients":["pasta", "gemuese", "rahm", "ei"]
  },
  {
    "name": "Safranrisotto",
    "veggie": true,
    "ingredients":["risotto","parmesan", "bouillon", "zwiebeln", "safran"]
  },
  {
    "name":"Pilzrisotto",
    "veggie":true,
    "ingredients":["risotto","parmesan", "bouillon", "zwiebeln", "pilze"]
  },
  {
    "name":"Gemueserisotto",
    "veggie":true,
    "ingredients":["risotto","parmesan", "bouillon", "zwiebeln", "gemuese"]
  },
  {
    "name":"Tomatenrisotto",
    "veggie":true,
    "ingredients":["risotto","parmesan", "bouillon", "zwiebeln", "tomatenpueree", "cherry tomaten"]
  },
  {
    "name":"Thai-Curry Reis",
    "veggie":true,
    "ingredients":["reis", "kokosmilch", "thaipaste", "gemuese"]
  },
  {
    "name": "Chicken Curry Reis",
    "veggie":false,
    "ingredients":["reis", "..."]
  },
  {
    "name": "Alo Gobi",
    "veggie": true,
    "ingredients": ["Pelati","kokosmilch","blumenkohl", "kartoffel", "garam masala"]
  },
  {
    "name":"Indisches Gemüse Curry",
    "veggie":true,
    "ingredients":["Pelati","kokosmilch","joghurt", "gemuese", "garam masala"]
  },
  {
    "name":"Linsendal",
    "veggie": true,
    "ingredients":["Pelati", "garam masala","zwiebeln", "linsen", "kokosmilch"]
  },
  {
    "name": "Reis mit Pilzsauce",
    "veggie": true,
    "ingredients":["reis","rahm","pilze"]
  },
  {
    "name": "Gebratener Reis",
    "veggie":true,
    "ingredients": ["reis","gemuese", "ei", "sojasauce"]
  },
  {
    "name": "Naan",
    "veggie":true,
    "ingredients":["milch", "Mehl","joghurt","hefe", "butter"]
  },
  {
    "name":"Suesskartoffelfries",
    "veggie": true,
    "ingredients":["Suesskartoffeln"]
  },
  {
    "name": "kartoffelsalat",
    "veggie": true,
    "ingredients":["kartoffel","bouillon", "senf", "mayonnaise", "schnittlauch", "zwiebeln"]
  },
  {
    "name":"Kartoffelgratin",
    "veggie":true,
    "ingredients":["kartoffel","milch","parmesan","..."]
  },
  {
    "name": "Kartoffelstock mit Pilzsauce",
    "veggie":true,
    "ingredients":["Stocki","rahm", "pilze","muskatnuss", "zwiebeln"]
  },
    {
      "name": "Kartoffelstock mit Bratkuegeli",
      "veggie": false,
      "ingredients":["Stocki","rahm", "bratkuegeli"]
    },
    {
      "name": "Kartoffelstock mit Bratensauce",
      "veggie": false,
      "ingredients":["Stocki","..."]
    },
    {
      "name": "Roesti und Bratwurst an Zwiebelsauce",
      "veggie": false,
      "ingredients":["Roesti", "zwiebeln","bratwurst", "mehl"]
    },
    {
      "name":"Pommes und Schnitzel",
      "veggie":false,
      "ingredients":["pommes", "schnitzel","zitrone"]
    },
    {
      "name":"Roesti mit Speck",
      "veggie":false,
      "ingredients":["Roesti","speck"]
    },
    {
      "name":"Roesti mit Spiegelei",
      "veggie":true,
      "ingredients":["Roesti","ei"]
    }
  ];
  