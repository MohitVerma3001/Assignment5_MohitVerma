/*
    Assignment 5
    {Your name here}
*/

$(document).ready(function () {
  var movies = [
    {
      id: 1,
      title: "Gadar ek prem katha",
      desc: "Ye dhai kilo ka hath",
      cat: "Patriotic",
    },
    {
      id: 2,
      title: "Border",
      desc: "Mathuradas ki chutti cancel",
      cat: "Patriotic",
    },
    {
      id: 3,
      title: "Phir hera pheri",
      desc: "25 din me paisa double",
      cat: "Comedy",
    },
    {
      id: 4,
      title: "Jatt and juliet",
      desc: "Punjab police kill style also",
      cat: "Funny",
    },
    {
      id: 5,
      title: "Dhamaal",
      desc: "St sebastian garden",
      cat: "Comedy",
    },
  ];

  class ContentCard {
    constructor(data) {
      this.id = Number(data.id);
      this.title = data.title;
      this.desc = data.desc;
      this.cat = data.cat;
      this.htmlid = `content-${this.id}`;
      console.log(
        `Id: ${data.id}\nTitle: ${data.title}\nDescription: ${data.desc}\nCategory: ${data.cat}`
      );
    }

    UpdateContent(title, desc, cat) {
      this.title = title || data.title;
      this.desc = desc || data.desc;
      this.cat = cat || data.cat;
    }

    toString() {
      var st = `<div id=${this.htmlid}><h4>${this.title}</h4><p>${this.desc}</p><div>${this.cat}</div></div>`;
      var papa = document.getElementById("content-list");
      papa.innerHTML += st;
    }
  }

  movies.forEach((element) => {
    var x = new ContentCard(element);
    x.toString();
  });
});
