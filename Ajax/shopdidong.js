$(document).ready(function () {
    getData();
});

function getData() {
    $.ajax({
        method: 'GET',
        url: 'https://www.jasonbase.com/things/z0w1.json',
        success: function (res) {
            /*List hot*/
            var hot = "";
            for (var i = 0; i < res.listhot.length; i++){
                //temp ++;
                if(i == 4){
                hot += 
                '<div class="lh animation lh-hidden">'+
                    "<a href='./chitietsanpham.html?id=" + res.listhot[i].code + "'>" +
                        '<div class="animation-wrap">' +
                            '<img class="image-background" src="'+ res.listhot[i].image +'">' +
                            '<div class="effect">' +
                                '<ul>' +
                                    '<li>' +
                                        '<span>Màn hình:</span>' + res.listhot[i].manhinh +'</li>' +
                                    '<li>' +
                                        '<span>Hệ điều hành:</span>'+ res.listhot[i].hdd +'</li>' +
                                    '<li>' +
                                        '<span>Camera sau:</span>'+ res.listhot[i].camerasau +'</li>' +
                                    '<li>' +
                                        '<span>Camera trước:</span>'+ res.listhot[i].cameratruoc + '</li>'+
                                    '<li>' +
                                        '<strong style="color: red">HOT:</strong>'+ res.listhot[i].hot +
                                    '</li>' +
                                    '<li>' +
                                        '<span>Dung lượng pin:</span>' + res.listhot[i].pin +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +
                        '<div class="lh-text" style="text-align: center">' +
                            '<p>'+ res.listhot[i].sp +'</p>'+
                            '<span style="color: #ff0000">'+
                                '<strong>'+ res.listhot[i].price +'</strong>' +
                                '<sup>đ</sup>' +
                            '</span>' +
                        '</div>' +
                    "</a>" +
                    '<p>'+ res.listhot[i].title +'</p>'+
                '</div>';
                }
                else{
                    hot += 
                    '<div class="lh animation">'+
                        "<a href='./chitietsanpham.html?id=" + res.listhot[i].code + "'>" +
                            '<div class="animation-wrap">' +
                                '<img class="image-background" src="'+ res.listhot[i].image +'">' +
                                '<div class="effect">' +
                                    '<ul>' +
                                        '<li>' +
                                            '<span>Màn hình:</span>' + res.listhot[i].manhinh +'</li>' +
                                        '<li>' +
                                            '<span>Hệ điều hành:</span>'+ res.listhot[i].hdd +'</li>' +
                                        '<li>' +
                                            '<span>Camera sau:</span>'+ res.listhot[i].camerasau +'</li>' +
                                        '<li>' +
                                            '<span>Camera trước:</span>'+ res.listhot[i].cameratruoc + '</li>'+
                                        '<li>' +
                                            '<strong style="color: red">HOT:</strong>'+ res.listhot[i].hot +
                                        '</li>' +
                                        '<li>' +
                                            '<span>Dung lượng pin:</span>' + res.listhot[i].pin +
                                        '</li>' +
                                    '</ul>' +
                                '</div>' +
                            '</div>' +
                            '<div class="lh-text" style="text-align: center">' +
                                '<p>'+ res.listhot[i].sp +'</p>'+
                                '<span style="color: #ff0000">'+
                                    '<strong>'+ res.listhot[i].price +'</strong>' +
                                    '<sup>đ</sup>' +
                                '</span>' +
                            '</div>' +
                        "</a>" +
                        '<p>'+ res.listhot[i].title +'</p>'+
                    '</div>';
                }
            }
            $('.loading').remove();
            $('.list-hot').prepend(hot);

            /*list mobile*/
            var listmob = "";
            for(var j=0; j < res.listmobile.length; j++){
                if(j == 0 || j == 4){
                    listmob += '<div class="mobile-parent animation">'+
                '<div class="animation-wrap">'+
                    '<img class="image-backgroud" src="'+ res.listmobile[j].image +'">'+
                    '<div class="effect">' +
                        '<span>' + res.listmobile[j].text + '</span>'+
                    '</div>'+
                '</div>'+
                '<div class="info-price" style="text-align: center">'+
                    '<p>' + res.listmobile[j].sp + '</p>'+
                    '<span style="color: #ff0000">'+
                        '<strong>'+ res.listmobile[j].price +'</strong>'+
                            '<sup>đ</sup>'+
                    '</span>'+
                '</div>'+
                '<p>' + 'Giảm 1 triệu thanh toán online bằng Mastercard và' +
                    '<b>'+ res.listmobile[j].title +'</b>'+'khác.' + '</p>'+
                '</div>';
                }
                else{
                listmob +=
                '<div class="mobile-child animation">'+
                    '<div class="animation-wrap">'+
                        '<img class="image-backgroud" src="'+ res.listmobile[j].image +'">'+
                        '<div class="effect">' +
                            '<span>' + res.listmobile[j].text + '</span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="info-price" style="text-align: center">'+
                        '<p>' + res.listmobile[j].sp + '</p>'+
                        '<span style="color: #ff0000">'+
                            '<strong>'+ res.listmobile[j].price +'</strong>'+
                                '<sup>đ</sup>'+
                        '</span>'+
                    '</div>'+
                '<p>' + 'Giảm 1 triệu thanh toán online bằng Mastercard và' +
                    '<b>'+ res.listmobile[j].title +'</b>'+'khác.' + '</p>'+
                '</div>';
                } 
            }
            $('.loading').remove();
            $('.list-mobile').prepend(listmob);
            
            /*list laptop*/
            var listlap="";
            for(var k=0; k < res.listlaptop.length; k++){
                if(k == 0){
                    listlap +=
                    '<div class="laptop-parent animation">'+
                        '<div class="animation-wrap">'+
                            '<img class="image-backgroud" src="' + res.listlaptop[k].image + '">'+
                            '<div class="effect">'+
                                '<span>'+ res.listlaptop[k].text +'</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="info-price" style="text-align: center">'+
                            '<h3>'+ res.listlaptop[k].sp +'</h3>'+
                            '<span style="color: #ff0000">'+
                                '<strong>' + res.listlaptop[k].price + '</strong>'+
                                '<sup>đ</sup>'+
                            '</span>'+
                        '</div>'+
                    '</div>';
                }
                else if(k == 3){
                    listlap +=
                    '<div class="laptop animation lh-hidden">'+
                        '<div class="animation-wrap">'+
                            '<img class="image-backgroud" src="' + res.listlaptop[k].image + '">'+
                            '<div class="effect">'+
                                '<span>'+ res.listlaptop[k].text +'</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="info-price" style="text-align: center">'+
                            '<h3>'+ res.listlaptop[k].sp +'</h3>'+
                            '<span style="color: #ff0000">'+
                                '<strong>' + res.listlaptop[k].price + '</strong>'+
                                '<sup>đ</sup>'+
                            '</span>'+
                        '</div>'+
                        '<p>' +'Tặng Phiếu mua hàng 3 triệu và 1'+
                            '<strong>khuyến mãi</strong> khác.</p>'+
                    '</div>';
                }
                else{
                    listlap +=
                    '<div class="laptop animation">'+
                        '<div class="animation-wrap">'+
                            '<img class="image-backgroud" src="' + res.listlaptop[k].image + '">'+
                            '<div class="effect">'+
                                '<span>'+ res.listlaptop[k].text +'</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="info-price" style="text-align: center">'+
                            '<h3>'+ res.listlaptop[k].sp +'</h3>'+
                            '<span style="color: #ff0000">'+
                                '<strong>' + res.listlaptop[k].price + '</strong>'+
                                '<sup>đ</sup>'+
                            '</span>'+
                        '</div>'+
                        '<p>' +'Tặng Phiếu mua hàng 3 triệu và '+
                            '<strong>' + res.listlaptop[k].title + '</strong> khác.</p>'+
                    '</div>';
                }
            }
            $('.loading').remove();
            $('.list-laptop').prepend(listlap);

            var phukien="";
            for(var p=0; p < res.phukien.length; p++){
                if(p == 6){
                phukien +=
                '<div class="accessoireshidden accessoires animation">'+
                    '<div class="animation-wrap">'+
                        '<img class="image-backgroud" src="'+ res.phukien[p].image +'">'+
                        '<div class="effect">'+
                            '<span>'+ res.phukien[p].text +'</span>'+
                        '</div>'+
                    '</div>'+
                    '<div style="text-align: center">'+
                        '<span style="color: #ff0000">'+
                            '<strong>'+ res.phukien[p].price +'<sup>đ</sup></strong>'+
                            '<strong class="edit">'+ res.phukien[p].sale +
                                '<sup>đ</sup>'+
                            '</strong>'+
                        '</span>'+
                    '</div>'+
                '</div>';
                }
                else{
                phukien +=
                '<div class="accessoires animation">'+
                    '<div class="animation-wrap">'+
                        '<img class="image-backgroud" src="'+ res.phukien[p].image +'">'+
                        '<div class="effect">'+
                            '<span>'+ res.phukien[p].text +'</span>'+
                        '</div>'+
                    '</div>'+
                    '<div style="text-align: center">'+
                        '<span style="color: #ff0000">'+
                            '<strong>'+ res.phukien[p].price +'<sup>đ</sup></strong>'+
                            '<strong class="edit">'+ res.phukien[p].sale +
                                '<sup>đ</sup>'+
                            '</strong>'+
                        '</span>'+
                    '</div>'+
                '</div>';
                }
            }
            $('.loading').remove();
            $('.list-accessoires').prepend(phukien);

        },
        error: function (err) {
            console.log(err);
        }
    });
};

