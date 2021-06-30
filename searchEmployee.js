$("#search-user").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("tbody tr").each(function(index) {
        
        if (index !== 0) {
    
            $row = $(this);
    
            var id = $row.text().toLowerCase();
    
            if (id.indexOf(value) !== -1) {
                $(this).show();    
            }
            else {
                $(this).hide();    
            }
        }
    });
    
    });