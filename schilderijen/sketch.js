let painting;

var bg;

function preload() {
  let url =
    'https://www.metmuseum.org/api/collection/collectionlisting?%20%201800-1900&q=Vincent%20van%20gogh&perPage=20&offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&searchField=ArtistCulture&showOnly=openAccess';
  painting = loadJSON(url);
      bg = loadImage("https://raw.githubusercontent.com/JornMeessen/generative-art-jornmeessen/main/schilderijen/img/background_image.jpg")

  console.log(url);
}

function setup() {
   createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(bg)
  console.log(bg);

  let positionPaintingImg = 60;
  let positionPaintingTitle = 110;
  let totalResults = new Array();
  let paintingSpacing = windowWidth / 3;  
 
  for (var i = 0; i < 3; i++) {

    totalResults[i] = Math.floor(random(0, 19));

    let randomCijfer;
    randomCijfer = parseInt(totalResults[i]);

    console.log(randomCijfer);

    let paintingImage = createImg(painting.results[randomCijfer].image);
    paintingImage.position(positionPaintingImg, 50);
    paintingImage.id("image");
    paintingImage.style('width', '21%');
    paintingImage.style('top', '70px');

    
    console.log(paintingImage);    

    let paintingTitle = createDiv(painting.results[randomCijfer].title);
    paintingTitle.style('text-align', 'center');
    paintingTitle.style('width', '160px');
    paintingTitle.position(positionPaintingTitle, 50);
    paintingTitle.style('position', 'absolute');
    //paintingTitle.style('border', '1px solid aliceblue');
    paintingTitle.style('background-color', '#dfb698');
    paintingTitle.style('padding', '1em');
    paintingTitle.style('font-family', 'roboto');
    paintingTitle.style('color', 'black'); //aliceblue
    paintingTitle.style('font-size', 'small'); //aliceblue
    paintingTitle.style('top', '430px');


    //330px

    positionPaintingImg = positionPaintingImg + paintingSpacing;
    positionPaintingTitle = positionPaintingTitle + paintingSpacing;
    
    if(totalResults.length == 3){

      if(totalResults[0] == totalResults[1]){
        console.log('fout 0 en 1');
        removeElements();
        clear();
        draw();
      
      } else if(totalResults[0] == totalResults[2] ){
        console.log('fout 0 en 2');
        removeElements();
        clear();
        draw();

      } else if(totalResults[1] == totalResults[2] ){
        console.log('fout 1 en 2');
        removeElements();
        clear(); 
        draw();

      } else{

      }

      console.log(totalResults);
    }
    
    // let werk = windowWidth / 3;  

    // text("Display Width is " + werk, 20, 20);

  }   
    document.getElementsByTagName("img")[1].onclick = function() {
      window.location.href = "https://jornmeessen.github.io/generative-art-jornmeessen/";
      console.log(paintingImage.results[randomCijfer].image.onclick);
    };
 

}
  



