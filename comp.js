const prods = [
    {
        id:"zero",
        name:"AguilaOne",
        desc:"Auila del norte patrio",
        price:50000,
        img:"mult/agui.png"
    },
    {
        id:"one",
        name:"AguilaTwo",
        desc:"Auila del norte patrio in 3D",
        price:50000,
        img:"mult/aguila.png"
    },
    {
        id:"two",
        name:"AstroOne",
        desc:"Astronauta reposando en un resort tropical del espacio - 1",
        price:50000,
        img:"mult/atro1.png"
    },
    {
        id:"tre",
        name:"AstroTwo",
        desc:"Astronauta reposando en un resort tropical del espacio - 2",
        price:50000,
        img:"mult/astro2.png"
    },
    {
        id:"for",
        name:"AstroTre",
        desc:"Astronauta reposando en un resort tropical del espacio - 3",
        price:50000,
        img:"mult/astro3.png"
    },
    {
        id:"fai",
        name:"Coyote",
        desc:"Coyote de largo alcance",
        price:50000,
        img:"mult/coyote.png"
    },
    {
        id:"six",
        name:"Delfin",
        desc:"Delfin en una noche 3D",
        price:50000,
        img:"mult/delfin.png"
    },
    {
        id:"sev",
        name:"Marsopa",
        desc:"Marsopa en la noche",
        price:50000,
        img:"mult/marsopa.png"
    },
    {
        id:"eig",
        name:"Zuricata",
        desc:"Zuricata galactica voladora",
        price:50000,
        img:"mult/zuricata.png"
    }
]

const conte = document.getElementById("buy")

prods.forEach(nft => {
    const div = document.createElement("div")
    div.classList.add("card")

    div.innerHTML +=
        `<div class="${nft.id}">
            <div class="card_image">
                <img src="${nft.img}">
                <h2 class="card_name">${nft.name}</h2>
            </div>
            <div class="card_content">
                <p>${nft.desc}</p>
                <p>${nft.price}</p>
                <b href="#">SOLD</b>
            </div>
        </div>`;

    conte.appendChild(div)
})