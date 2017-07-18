(function () {
    function preFillLocation (retrivedPosition) {
        var latEls=$('#form1 input[name=latitude]'), longEls=$('#form1 input[name=longitude]');
        if (latEls.length) latEls.get(0).value = retrivedPosition.coords.latitude;
        if (longEls.length) longEls.get(0).value = retrivedPosition.coords.longitude;
    }
    function preLoadSavedData () {
        var inputs = $('#form1 input[type!=checkbox][type!=submit]');
        for (var i = 0;i<inputs.length; i++) {
            var interm = localStorage.getItem(inputs[i].name);
            if(interm) inputs[i].value = interm;
        }
    }
    function saveData () {
        var inputs = $('#form1 input[type!=checkbox][type!=submit]');
        for (var i = 0;i<inputs.length; i++) {
            if(inputs[i].value)
                localStorage.setItem(inputs[i].name, inputs[i].value);
        }
    }

    $(document).ready(function () {
        if ('geolocation' in navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(preFillLocation);
        } else {
            document.getElementById('geolocation_retrieval_errors').innerHTML = "Geolocation is not supported.";
        }

        if (typeof(Storage) !== "undefined") {
            preLoadSavedData();
        } else {
            console.log('Sorry! No Web Storage support..');
        }

        $('#form1').submit(function(e){
            e.preventDefault();
            var checks = $('#form1 input[type=checkbox]');
            if(checks.length && checks.get(0).value=="on") saveData();
        });
    });
})();