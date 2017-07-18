(function () {
    function sendFile (file) {
        var reader = new FileReader();
        reader.onload = function readerCallback (e) {
            var file = new Blob([e.target.result]);
            $.ajax({
                type: 'POST',
                url: 'http://invalid.url',
                data: {
                    file: file
                }
            })
            .success(function(data) {document.getElementById('status').innerHTML = 'Success Callback hit. Why?';})
            .error(function(){document.getElementById('status').innerHTML = 'Will fail obviously. No server.';});

        };
        reader.readAsDataURL(file);
    }
    if ('File' in window && window.File && 'FileReader' in window && window.FileReader && 'Blob' in window) {
        $(document).ready(function () {
            document.getElementById('file_inp').addEventListener('change', function(event){
                if(event.target.files && event.target.files.length)
                    sendFile(event.target.files[0]);
            })
        });
    } else {
        document.getElementById('status').innerHTML = "Blob based upload is not supported.";
    }

})();