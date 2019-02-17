//    document.write("document.write('This ' + (1+2) ): " + " ==> " + "This "+ (1+2))
//    document.write(1=1);
   var Links = {
    setColor:function(color){
      links = document.querySelectorAll('a');
      var i = 0
      while ( i < links.length ){
        links[i].style.color = color;
        i=i+1;
      }
    }
  }

  var Body = {
    setColor:function (color){
      document.querySelector('body').style.color = color;
    }
    ,

    setBackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }

    function nightDayHandler(self){
      var target = document.querySelector('body');
      if(self.value==='night')
      {
        self.value='day';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        //Links.setColor('powderblue');
        Links.setColor('yellow');
      } else {
        self.value='night';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
      }
    }
