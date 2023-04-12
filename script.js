let cat = "cat"
let cats = []
let stars = document.getElementsByClassName("stars")[0]
let rotate = 0
let bunny = "bunny"
let slideshow = document.getElementsByClassName("slideshow")[0]
let array = document.getElementsByClassName("images")
let active = 1
let images = document.getElementsByClassName("breed")
let breeds = ["Abyssinian cat", "British shorthair", "Burmese cat", "Russian blue", "Scottish fold"]
let breedtitle = document.getElementById("breedtitle")
let foodpics = ["proteincat.jpg", "lyingcat.jpg", "cheesecat.webp", "multifoodcat.jpg"]
let foodpic = document.getElementById("foodpic")
let foodp = document.getElementById("foodp")
let buttons = document.getElementsByClassName("buttons")
let right = document.getElementsByClassName("feedingright")[0]
let texts = [
    "The first step is finding the right food for your cat. Kittens need kitten food, whereas cats over age seven may benefit from a senior cat food. Cats in between can thrive on an adult maintenance formula. In addition to choosing a food based on her age and other needs, like hairball control, you also have a variety of flavors and textures to choose from. You can feed dry or wet cat food or a combination of the two. Flavors and textures can range from chicken or fish to crunchy or creamy. You may need to try several before finding something your cat loves.",
    "Regardless of the type of food you choose, it's important to ensure you feed the correct amount each day. Overfeeding could lead to weight gain, which can cause other health problems. Refer to the feeding instructions on the cat food label to determine how much to feed your cat each day. If your veterinarian says your cat has become overweight, you’ll need to decrease the recommended amounts to avoid overfeeding. Keep in mind that spaying or neutering decreases a cat’s energy needs by almost 30 percent, which can lead to weight gain. Talk to your veterinarian about how to adjust your cat’s diet after her surgery to avoid weight gain.",
    "A feeding routine will help your cat know what to expect at mealtimes and can make the process more enjoyable for you both. You can put out an entire day’s serving of dry food each morning and cats can graze on it throughout the day. If you or your cat prefer, you can divide the total amount of food each day into two or three meals. Wet cat food should be consumed within 20 to 30 minutes of serving and any remaining food should be refrigerated and eaten within 24 hours of opening. You can also try a refrigerated, automatic feeding bowl to feed your cat her wet food when you aren’t home.",
    "Ensuring that your cat is eating a healthy diet is crucial for their overall health and well-being. Here are some tips to help you make sure your cat is eating healthy: Choose high-quality cat food: Look for cat food that is made from high-quality ingredients and meets the nutritional requirements of your cat. Check the ingredients: Make sure that the cat food you choose contains high-quality protein sources, such as chicken or fish, and does not contain fillers or artificial preservatives. Monitor portion sizes: Overfeeding your cat can lead to obesity and health problems. Make sure you are feeding your cat the appropriate portion sizes for their age, weight, and activity level. Offer a variety of foods: Rotate your cat's diet with different types of wet and dry food and treats. This can help ensure they are getting a variety of nutrients and reduce the risk of developing food allergies. Provide fresh water: Ensure that your cat has access to clean, fresh water at all times. This is especially important if you are feeding your cat a dry food diet.Consult with a veterinarian: If you are unsure about your cat's dietary needs, consult with your veterinarian. They can provide you with advice on the best cat food brands and portion sizes for your cat's specific needs."
  ]


// console.log(breeds[1][10])



for (let i = 0; i < 30; i++) {

    console.log(buttons);
    // console.log(cat);
    let img = document.createElement("img")
    img.src = "star.svg"
    let starwidth = Math.random() * 200 + 20
    let starhue = Math.random() * 360
    let staropacity = Math.random() * 0.7
    let starblur = Math.random() * 5
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    img.setAttribute("data-hue", starhue)
    img.setAttribute("data-blur", starblur)
    img.style.width = starwidth + "px"
    img.style.filter = "hue-rotate(" + starhue + "deg) blur(" + starblur + "px)"
    img.style.opacity = staropacity
    img.style.left = x + "px"
    img.style.top = y + "px"
    img.classList.add("staricon")
    stars.appendChild(img)
}


// for (let i = 23; i < 93; i = i*2 ) {
//     console.log(i);
// // }

// for (let i = 2; i < 257; i = i*2){
//     console.log(i);
// }

// for (let i = 600; i > -201; i = i-400){
//     console.log(i);
// }

for (let i = 0; i < 5; i = i + 1) {
    console.log(i + 1 + " letter" + " - " + bunny[i]);
}

for (let i = 0; i < 10; i = i + 1) {
    cats.push("cat" + i + ".gif")
}
console.log(cats);


// for (let i = imagenames.length - 1; i > 0; i--) {
function repeatOften() {
    // console.log(7)
    let staricons = document.getElementsByClassName("staricon")
    for (let i = 0; i < staricons.length; i = i + 1) {

        if (i < 15) {
            staricons[i].style.transform = "rotate(" + rotate + "deg)"
        }

        else {
            staricons[i].style.transform = "rotate(-" + rotate + "deg)"
        }
        staricons[i].style.filter = "hue-rotate(" + (parseInt(staricons[i].dataset.hue) + rotate) + "deg) blur(" + staricons[i].dataset.blur + "px)"
    }
    rotate = rotate + 0.4
    requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften)
function createCard() {
    let img = document.createElement("img")
    img.classList.add("cat")
    let rotate = Math.random() * 40 - 20
    img.style.transform = "translate(0, -50%) rotate(" + rotate + "deg) scale(0.9)"
    img.src = cats[Math.floor(Math.random() * 10)]
    slideshow.appendChild(img)
    img.style.opacity = 0
    setTimeout(function () {
        let randomleft = Math.random() * (slideshow.offsetWidth - img.offsetWidth) + "px"
        img.style.left = randomleft
        img.style.opacity = 1
        setTimeout(function () {
        img.style.opacity = 0
        setTimeout(function(){
        img.remove() 
        }, 1000)
        }, 10000)
    }, 300)
}

setInterval(function () {
    createCard()
}, 2000)

document.body.onkeydown = function(event){
    console.log(event.keyCode);
    if  (event.keyCode == 39) {
        active = active + 1
        if (active == 5) {
            active = 0;
        }
    }
    if  (event.keyCode == 37) {
        active = active - 1
        if (active == -1) {
            active = 4;
        }
    }
   
    for(let cat of images){
        cat.classList.remove("active")
    }
    images[active].classList.add("active")
    breedtitle.innerHTML = breeds[active]
}


   foodpic.src = foodpics[0]
   foodp.innerHTML = texts[0]

for (let i = 0; i < 4; i = i + 1) {
    buttons[i].onclick = function(){
        console.log(right);
        right.style.opacity = 0
        setTimeout(() => {
            foodpic.src = foodpics[i]
            foodp.innerHTML = texts[i]
            right.style.opacity = 1
        }, 600);
        for(let j  = 0; j < 4; j = j + 1){
            buttons[j].classList.remove("activebutton")
        }
        buttons[i].classList.add("activebutton")
    };

}
