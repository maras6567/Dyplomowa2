$(function() {
    $('.delete').click(function() {



        Swal.fire({
            title: 'Czy napewno usunąć rekord?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tak, usuń!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                        method: "DELETE",
                        url: deleteUrl + $(this).data("id"),
                        //data: { id: $(this).data("id"  }
                    })
                    .done(function(data) {
                        window.location.reload();
                    })
                    .fail(function(data) {
                        Swal.fire({
                            icon: data.responseJSON.status,
                            title: 'Oops...',
                            text: data.responseJSON.message,
                        })

                    });
            }
        })
    });
});


//$.ajax({
//    method: "DELETE",
//    url: "/users/" + $(this).data("id"),
//    //data: { id: $(this).data("id" }
//})
//.done(function( response ) {
//    window.location.reload();
//})
//.fail(function (response) {
//    alert('ERROR');
//});

//console.log($(this).data("id"));