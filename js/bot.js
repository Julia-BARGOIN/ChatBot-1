function botAnswers(message) {
  var text = '{"bot" : ['+
            '{"answers": [{"weather":"I\'m not hot but I\'m red ","firstName":"Donald","lastName":"Trump", "Mexique": "WE NEED TO BUILD A WALL"}],"class":"bot1","count":"0","picture":"https://www.mediablitzpublicity.com/home/wp-content/uploads/2016/12/trump-square-on-blue.png"},'+ 
            '{"answers":[{"firstName":"Dwayne","lastName":"Johnson", "Coder":"C\'est du bon travail !"}],"class":"bot2","count":"0","picture":"https://pyxis.nymag.com/v1/imgs/eac/f54/f827413853feff75a15a6efa3fbe41edd5-11-Dwayne-Johnson-Young-Rock.rsquare.w330.jpg"},'+
            '{"answers":[{"firstName":"Marin","lastName":"Marin","weather":"SOUS L\'OCEAN!", "Nemo":"Vous avez pas vu mon FILS ?!"}],"class":"bot3","count":"0","picture":"https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2F2019.2F09.2F20.2F4b94725f-a50f-47fa-b0b6-5fb68556e790.2Ejpeg/600x600/quality/65/on-retrouvera-marin-et-son-fils-nemo-ils-aideront-leur-amie-a-retrouver-sa-famille.jpg"},' +
            '{"answers":[{"firstName":"Fall","lastName":"Guy","weather":"Il pleut des gens!","Tryhard":"La couronne est à moi!"}],"class":"bot4","count":"0","picture":"https://i1.wp.com/i.imgur.com/sjyrnmc.png?resize=273%2C273&ssl=1"},' +
            '{"answers":[{"firstName":"Ada","lastName":"Lovelace","weather":"Hello World!", "Coder":"Je suis une des plus grandes codeuses de l\'histoire!"}],"class":"bot5","count":"0","picture":"https://cdn.radiofrance.fr/s3/cruiser-production/2019/09/8b179862-84ab-492c-a86a-191d66f556c3/838_ada.jpg"},' +
            '{"answers":[{"firstName":"Marine","lastName":"Le Pen","weather":"Ils sont partout! Ils sont dans nos campagnes!", "Noir":"Je ne suis pas raciste, j\'ai bien aimé Black Panther"}],"class":"bot6","count":"0","picture":"https://file1.closermag.fr/var/closermag/storage/images/bio-people/biographie-marine-le-pen-522036/4585452-1-fre-FR/Marine-Le-Pen.jpg?alias=square500x500&size=x100&format=jpeg"},'+
            '{"answers":[{"firstName":"Arnaud","lastName":"Gauthier-Fawas", "Genre":"Je ne sais pas ce qui vous fait dire que je suis un homme mais je ne suisn pas un homme"}],"class":"bot7","count":"0","picture":"https://pbs.twimg.com/profile_images/1018901674461728769/nS-VU9D7_400x400.jpg"}]}';
  var bot = JSON.parse(text);
  console.log(bot);
  for (var i = 0; i < bot["bot"].length; i++) {
    if (bot["bot"][i]["answers"][0][message] != undefined) {
      console.log(bot["bot"][i]["answers"][0][message]);
      var div = document.createElement("div");
      document.querySelector(".conversation").insertAdjacentHTML('beforeend','<div class="d-flex justify-content-start mb-4 new-message">' +
            '<div class="img_cont_msg">' +
              '<img src=" '+ bot['bot'][i]['picture'] +' " class="rounded-circle user_img_msg" />'+
            '</div>' +
            '<div class="msg_container">' +
              '<span class="msg_name">' +
              bot["bot"][i]["answers"][0]['firstName'] + 
              ' ' + bot["bot"][i]["answers"][0]['lastName'] + 
              '</span>' +
              '<span>' +
              bot["bot"][i]["answers"][0][message] +
              '</span>' +
              '<span class="msg_time">9:12 AM, Today</span>' +
            '</div>' +
          '</div>');
    }
  }
}
