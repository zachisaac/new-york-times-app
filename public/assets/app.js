$('#scrape').on('click', function(){
    $.get('/api/scrape', function(response){
        console.log(response)
    })
})



function getArticles() {
    $.get("/api/articles", function(data){
        populate(data)
    })
}

function populate(data){
    $('#feed').empty();
    data.forEach(article => {
        $('#feed').append(`<div class="article"><div>${article.title}</div><div>${article.summary}</div></div>`)
    })
}

getArticles();