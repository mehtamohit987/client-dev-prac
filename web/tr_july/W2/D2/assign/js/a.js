(function () {
    var index = 1;
    render(index);
    function next() {
      render(index += 1);
    }
    function prev() {
      render(index -= 1);
    }
    function render(n) {
      var x = document.getElementsByClassName("images");
      if(n<0 || n>=x.length) return;
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[n-1].style.display = "block";  
    }
    var initalXPos, curDown=false;
    function move(e){
      if(curDown){
        if(!initalXPos) {initalXPos= e.clientX;}
        console.log( String(e.clientX - initalXPos) + ' / ' + (e.target.width/2) );
        if((e.clientX - initalXPos)>=(e.target.width/2)){debugger;prev();}
        else if ((initalXPos - e.clientX)>=(e.target.width/2)){debugger;next();}
      }
    } 
    function down(e){
      $(e.target).on('mousemove', move);
      curYPos = e.pageY; 
      curXPos = e.pageX; 
      curDown = true; 
    }

    function up(e){ 
      $(e.target).off('mousemove', move);
      curDown = false; 
    }
    $(document).ready(function () {
      $('.button.display-left').click(prev);
      $('.button.display-right').click(next);
      var images = $('.images');
      images.mousedown(down);
      images.mouseup(up);
      // for (var e=0; e<images.length; e++) {
      //   images[e].addEventListener('mousemove', move);
      //   images[e].addEventListener('mousedown', down);
      //   images[e].addEventListener('mouseup', up);
      // }
    });
})();