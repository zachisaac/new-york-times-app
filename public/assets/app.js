$('#scrape').on('click', function(){
    $.get('/api/scrape', function(response){
        console.log(response)
    })
})