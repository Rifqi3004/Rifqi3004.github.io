$(document).ready(function(){
    // $.ajax({
    //     'async': true,
    //     'global': false,
    //     'url': "/data/home.json",
    //     'dataType': "json",
    //     'success': function(data) {
    //         json = data;
    //     }
    // })
    $.getJSON('data/home.json', function(data) {
        var json = data.dataCarousel
        var item = '';
        const techno = $('#techno');
        techno.html('<div id="techno-slider" class="owl-carousel owl-theme"></div>')
        for(var i =0; i < json.length; i++){
            $("#techno-slider").append('<a href="'+json[i].link+'" target="_blank"><div class="item" style="display:flex;align-items:center;justify-content:center;height:auto"><img src="'+json[i].img+'" style="max-height : 50px;max-width:70px" alt="'+json[i].title+'"/></div></a>');
        }
        var owl = $("#techno-slider");
        owl.owlCarousel({
            loop : true,
            margin:10,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 3
                },
                1000: {
                items: 5
                }
            }
        });
        $('#techno').append(item)

        //home

        var mainPortofolio = $('#portofolio');
        mainPortofolio.html('<div class="row portfolio-grid" id="portofolio-grid">')
        var portofolio = $("#portofolio-grid")
        portofolio.append('<div class="grid-sizer col-md-3 col-lg-3"></div>')
        var {dataPortofolio} = data
        for(var n =0; n<dataPortofolio.length; n++){
            var link = dataPortofolio[n].link || `#`
            var text = '<div class="'+dataPortofolio[n].col+' all '+dataPortofolio[n].tags+'">'
            text += '<div class="single_portfolio">'
            text += '<img class="img-fluid w-10" style="max-height:300px" src="'+dataPortofolio[n].img+'" alt="">'
            text += '<div class="overlay"></div>'
            text += '<div class="short_info">'
            text += '<h4><a href="'+link+'" target="_blank">'+dataPortofolio[n].name+'</a></h4>'
            text += '<p>'+dataPortofolio[n].desc+'</p>'
            text += '</div></div></div>'

            $("#portofolio-grid").append(text)
        }
    })
});