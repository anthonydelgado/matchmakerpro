/**
 * Created by user on 11/3/16.
 */


// a.collection-item

$.ajax({
    url: '/api/userlist',
    dataType: 'json',
    success: function(data) {

        // console.log( data );
        $.each(data.results, function( index, value ) {
            console.log( value );
            var userChip = '<div class="chip"><img src="' + value.picture.thumbnail + '" alt="Contact Person">' + value.name.first + ' ' + value.name.last + '</div>';
            $('#userlist').append(userChip);
        });
    }
});