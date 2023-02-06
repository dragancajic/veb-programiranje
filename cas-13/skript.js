$(document).ready(function() {
    $('#provera').click(function() {
        let jmbg = $('#jmbg').val().trim();

        if (jmbg.length != 13) {
            window.alert("jmbg nije dobro unesen");
            return;
        }

        for (let i = 0; i < 13; i++) {

            if (jmbg.charAt(i) < '0' || jmbg.charAt(i) > '9') {
                window.alert("jmbg se sastoji od cifara");
                return;
            }
        }

        $.ajax({
            url: 'osobe.php',
            method: 'GET',
            data: {
                'jmbg': jmbg
            },
            success: function(data, statusText, jqhxr) {
                if ($('#pol').val() == 'M') {
                    $('#ime').html(data).css('color', 'blue');
                } else {

                    $('#ime').html(data).css('color', 'red');
                }

                let dan = jmbg.substring(0, 2); // [)
                let mesec = jmbg.substring(2, 4);
                let godina = '1' + jmbg.substring(4, 7);

                $('#godina').html(dan + "." + mesec + '.' + godina + '.');

            }

        });

    });

});