 $(document).ready(function() {

            let kurs = 0;
            $('#valuta').on('change', function() {

                if ($('#valuta').val() == '0') {
                    $('#ispis_valute').html("");
                    kurs = 0;
                } else {
                    $.ajax({
                        url: 'kurs.php',
                        method: 'GET',
                        data: {
                            'valuta': $('#valuta').val()
                        },
                        success: function(data, statusText, jqhxr) {
                            kurs = data;
                            $('#ispis_valute').html(data + " RSD");
                        }
                    });

                }

            });

            $('#izracunaj').on('click', function() {

                let iznos = $('#iznos').val().trim();

                if (iznos == '') {
                    window.alert("niste uneli iznos");
                    return;
                }

                let iznos_broj = Number.parseFloat(iznos);

                if (isNaN(iznos_broj)) {
                    window.alert("niste uneli broj");
                    return;
                }

                let ukupno = iznos_broj * kurs;
                $('#izracunato').html("<h6>Vrednost je: </h6> " + ukupno + " RSD");


                if (document.getElementById('sacuvaj').checked) {

                    document.getElementById('ispis_rez').innerHTML = document.getElementById('ispis_rez').innerHTML + iznos_broj + " = " + ukupno + " RSD<br>";
                }

            });

        });
