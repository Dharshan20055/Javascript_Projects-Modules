const coolCards=document.createElement('div');
coolCards.classList.add("coolCards");
document.body.appendChild(coolCards);

const sampleCards = [{
    title: "Food",
    description: "Pizza",
    image: "https://www.simplyrecipes.com/thmb/JuOctoMCE8-2P2_PHgVIs-BJz7s=/5616x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chicago-Deep-Dish-Pizza-LEAD-5-f8c04d3d77b24e479bbb1502758a5ed1.jpg",
  }, {
    title: "Car",
    description: "BWM X1",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.gaw.to%2Fcontent%2Fphotos%2F52%2F66%2F526603-bmw-x1-2023-une-refonte-complete-avec-un-moteur-plus-puissant.jpeg&f=1&nofb=1&ipt=24416e277bffbff8d54a9a89febf7913d7509433cf32cf891a46489d798c5705&ipo=images"
  }, {
    title: "PentHouse",
    description: "St. Regis Residence, Chicago",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.j5iKxvNROva7KGDNcMBp2QHaEK%26pid%3DApi&f=1&ipt=d59774af9eb5d0a753b34fe1d0a51f94279dda056e3e680dbafa76a0aab01c87&ipo=images"
  },{
    title: "Car",
    description: "BWM X1",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.gaw.to%2Fcontent%2Fphotos%2F52%2F66%2F526603-bmw-x1-2023-une-refonte-complete-avec-un-moteur-plus-puissant.jpeg&f=1&nofb=1&ipt=24416e277bffbff8d54a9a89febf7913d7509433cf32cf891a46489d798c5705&ipo=images"
  },{
    title: "PentHouse",
    description: "St. Regis Residence, Chicago",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.j5iKxvNROva7KGDNcMBp2QHaEK%26pid%3DApi&f=1&ipt=d59774af9eb5d0a753b34fe1d0a51f94279dda056e3e680dbafa76a0aab01c87&ipo=images"
  },{
    title: "Food",
    description: "Pizza",
    image: "https://www.simplyrecipes.com/thmb/JuOctoMCE8-2P2_PHgVIs-BJz7s=/5616x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chicago-Deep-Dish-Pizza-LEAD-5-f8c04d3d77b24e479bbb1502758a5ed1.jpg",
  }];

  function showskeleton(){
    for(let i=0;i<sampleCards.length;i++){
        const skeleton = document.createElement("div");
        skeleton.classList.add("skeleton");

        const img =document.createElement("img");
        img.classList.add("skeleton-img");

        const title = document.createElement("div");
        title.classList.add("skeleton-title");

        const text = document.createElement("div");
        text.classList.add("skeleton-text");

        skeleton.appendChild(img);
        skeleton.appendChild(title);
        skeleton.appendChild(text);

        coolCards.appendChild(skeleton);
    }
  }

  function loadCards(){
    coolCards.innerHTML="";
    sampleCards.forEach((result)=>{

        const card = document.createElement("div");
        card.classList.add("card-body");

        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";

        const skeletonImg = document.createElement("div");
        skeletonImg.classList.add("skeleton-img");
        skeletonImg.style.position = "absolute";
        skeletonImg.style.width = "100%";

        const image = document.createElement("img");
        image.classList.add("image");
        image.src=result.image;
        image.style.opacity="0";
        image.style.position="relative";

        image.onload = () => {
            skeletonImg.classList.add("shrink");
            image.style.opacity="1";
        };

        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent=result.title;

        const des=document.createElement("p");
        des.classList.add("des");
        des.textContent=result.description;

        wrapper.appendChild(skeletonImg);
        wrapper.appendChild(image);

        card.appendChild(wrapper);
        card.appendChild(title);
        card.appendChild(des);

        coolCards.appendChild(card);

    });
}


  showskeleton();
  setTimeout(loadCards,2500);