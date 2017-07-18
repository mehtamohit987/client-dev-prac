(function () {
    var draggable = document.getElementsByClassName("box");
    var currD ;
    for (var e=0; e<draggable.length; e++) {
        draggable.addEventListener('dragstart', dragStart, false);
        draggable.addEventListener('dragover', dragOver, false);
        draggable.addEventListener('dragend'  , dragEnd, false);
    }
    function dragStart(event) {
        event.dataTransfer.setData('text/html', this.innerHTML);
        currD = this;
    }
    function dragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }
    function dragEnd(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (currD != this) {
            currD.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }
    $(document).ready(function () {

    });
})();