$(document).ready(function () {
    getData();
});

function getData() {
    var url = new URL(window.location.href);
    var code = url.searchParams.get('id');
    if (code != null) {
        $.ajax({
            method: 'GET',
            url: 'https://www.jasonbase.com/things/' + code + '.json',
            success: function (res) {
                var giohang ="";
                giohang +=
                '<div class="box-cart">'+
                    '<div class="imageGh">'+
                        '<img src="' + res.image + '" alt="samsunggalaxy s9">'+
                    '</div>'+
                    '<div class="textGh">'+
                        '<p>' + res.name + '</p>'+
                        '<p class="edit">'+ '<button>-</button>' + res.name + ': ' + res.price +' x ' + ' 1 '+ '= '+ res.price + ' <button>+</button> <button>X</button> </p>'+
                    '</div>'+
                '</div>';
                $('.modal-body').prepend(giohang);

                var list ="";
                //for(var i=0; i < res.listpicture[i].length; i++){
                    list +=
                    '<img src="' + res.image + '" alt="samsung">'+
                    '<div class="coloranpic">'+
                        '<ul>'+
                            '<li><a href="#">'+
                                    '<div><img src="' + res.image + '" alt=""></div>'+
                                '</a>Tím nhạt</li>'+
                            '<li><a href="#">'+
                                    '<div><i class="fas fa-camera"></i></div>'+
                                '</a>Camera</li>'+
                            '<li><a href="#">'+
                                    '<div><i class="fas fa-tv"></i></div>'+
                                '</a>Video</li>'+
                        '</ul>'+
                    '</div>';
                //}
                $('#listpicture').prepend(list);

                var pricesale ="";
                pricesale +=
                '<h3>' + ' Điện thoại '+ res.name + '</h3>'+
                        '<div class="price-first">'+
                            '<p>'+ res.price +'<sup>₫ </sup>' + '</p>'+
                            '<ul>'+
                                '<li><i class="fas fa-star"></i></li>'+
                                '<li><i class="fas fa-star"></i></li>'+
                                '<li><i class="fas fa-star"></i></li>'+
                                '<li><i class="fas fa-star"></i></li>'+
                                '<li><i class="fas fa-star-half-alt"></i></li>'+
                            '</ul>'+
                            '<div class="clearfix"></div>'+
                        '</div>'+
                        '<div class="info-km">'+
                            '<h3>KHUYẾN MÃI</h3>'+
                            '<span><i class="fas fa-check"></i>' + res.km1 + '</span><br>'+
                            '<span><i class="fas fa-check"></i>'+ res.km2 +
                                '<a href="#"> xem chi tiết</a></span> <br>'+
                            '<span><i class="fas fa-check"></i>' + res.km3 +
                                '<a href="#"> xem chi tiết</a></span> <br>'+
                            '<span><i class="fas fa-check"></i>' + res.km4 + '<a href="#"> xem chi tiết</a></span> <br>'+
                        '</div>'+
                        '<div class="policy">'+
                            '<ul class="list-group list-group-flush">'+
                                '<li class="list-group-item">Trong hộp có: <a href="#">' + res.text1 +'</a></li>'+
                                '<li class="list-group-item">' + res.text2 + '<a href="#"> xem chi tiết</a></li>'+
                                '<li style="color:#ff0000" class="list-group-item">' + res.text3 + '</li>'+
                            '</ul>'+
                            '<div class="clearfix"></div>'+
                        '</div>'+
                        '<div class="version">'+
                            '<div class="ver1">'+
                                '<input type="radio" value="meta" name="gender">' + res.version1 + '<br>'+
                                '<p>'+ res.price +'<sup>₫ </sup></p>'+
                            '</div>'+
                            '<div class="ver2">'+
                                '<input type="radio" value="meta" name="gender">' + res.version2+ '<br>'+
                                '<p>'+ res.price1 +'<sup>₫ </sup></p>'+
                            '</div>'+
                            '<div class="clearfix"></div>'+
                        '</div>'+
                        '<div class="order">'+
                            '<a href="#" class="buy-now">Mua Ngay</a>'+
                            '<div class="buy-add" onclick="demsl()">Thêm vào giỏ hàng</div>'+
                            '<a href="#" class="buy-rep">Mua trả góp 0%</a>'+
                            '<div class="clearfix"></div>'+
                        '</div>'+
                        '<div style="text-align:center"><span>Gọi đặt mua: 1800.1060 (miễn phí - 7:30-22:00)</span></div>'+
                        '<div class="clearfix"></div>';
                $('.price-sale').prepend(pricesale);

                var listinfo ="";
                listinfo +=
                '<div class="info-sp">'+
                '<h3>Thông số kỹ thuật</h3>'+
                '<div style="margin:5px">'+
                    '<ul class="list-group list-group-flush">'+
                        '<li class="list-group-item"><span>Màn hình:</span>' + '<div class="mylist">'+ res.manhinh +'</div></li>'+
                        '<li class="list-group-item"><span>Hệ điều hành:</span>' + '<div class="mylist">'+ res.hdd +'</div></li>'+
                        '<li class="list-group-item"><span>Camera trước/sau:</span>'+ '<div class="mylist">'+ res.camera +'</div></li>'+
                        '<li class="list-group-item"><span>CPU:</span>'+ '<div class="mylist">'+ res.cpu +'</div></li>'+
                        '<li class="list-group-item"><span>RAM:</span>'+ '<div class="mylist">'+ res.ram +'</div></li>'+
                        '<li class="list-group-item"><span>Bộ nhớ trong:</span>'+ '<div class="mylist">'+ res.rom +'</div></li>'+
                        '<li class="list-group-item"><span>Thẻ SIM:</span>'+ '<div class="mylist">'+ res.sim +'</div> </li>'+
                        '<li class="list-group-item"><span>Dung lượng pin:</span>'+ '<div class="mylist">'+ res.pin +'</div></li>'+
                    '</ul>'+
                '</div>'+
                '<div style="margin:5px">'+
                    '<!-- Button trigger modal -->'+
                    '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">'+
                        'Xem chi tiết'+
                    '</button>'+

                    '<!-- Modal -->'+
                    '<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"'+
                        'aria-labelledby="exampleModalLongTitle" aria-hidden="true">'+
                        '<div class="modal-dialog" role="document">'+
                            '<div class="modal-content">'+
                                '<div class="modal-header">'+
                                    '<h5 class="modal-title" id="exampleModalLongTitle">Thông số kỹ thuật</h5>'+
                                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                                        '<span aria-hidden="true">&times;</span>'+
                                    '</button>'+
                                '</div>'+
                                '<div class="modal-body">'+
                                    '<ul class="list-group list-group-flush">'+
                                        '<li class="list-group-item"><span>Màn hình:</span>' + '<div class="mylist">'+ res.manhinh +'</div></li>'+
                                        '<li class="list-group-item"><span>Hệ điều hành:</span>' + '<div class="mylist">'+ res.hdd +'</div></li>'+
                                        '<li class="list-group-item"><span>Camera trước/sau:</span>'+ '<div class="mylist">'+ res.camera +'</div></li>'+
                                        '<li class="list-group-item"><span>CPU:</span>'+ '<div class="mylist">'+ res.cpu +'</div></li>'+
                                        '<li class="list-group-item"><span>RAM:</span>'+ '<div class="mylist">'+ res.ram +'</div></li>'+
                                        '<li class="list-group-item"><span>Bộ nhớ trong:</span>'+ '<div class="mylist">'+ res.rom +'</div></li>'+
                                        '<li class="list-group-item"><span>Thẻ SIM:</span>'+ '<div class="mylist">'+ res.sim +'</div> </li>'+
                                        '<li class="list-group-item"><span>Dung lượng pin:</span>'+ '<div class="mylist">'+ res.pin +'</div></li>'+
                                    '</ul>'+
                                '</div>'+
                                '<div class="modal-footer">'+
                                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="shop">'+
                    '<h3>CỬA HÀNG CÓ SẴN SẢN PHẨM</h3>'+
                    '<p><i class="fas fa-location-arrow"></i> 5 Nguyễn Kiệm, P. 3, Q. Gò Vấp</p>'+
                    '<p><i class="fas fa-location-arrow"></i> 288 Đường 3/2, P. 12, Q. 10</p>'+
                    '<p><i class="fas fa-location-arrow"></i> 59 Quang Trung, P. 10, Q. Gò Vấp</p>'+
                    '<p><i class="fas fa-location-arrow"></i> 125 Lê Văn Việt, P. Hiệp Phú, Q. 9</p>'+
                '</div>'+
                '<div class="clearfix"></div>'+
            '</div>';
            $('.loading').remove();
            $('.info').prepend(listinfo);

            var content2 = "";
            content2 +=
            '<h3 class="first">'+'Đặc điểm nổi bật của ' + res.name + '</h3>'+
                    '<div class="ct2 parent-ct2">'+
                        '<div>'+
                            '<div id="carouselExampleIndicators-content" class="carousel slide" data-ride="carousel">'+
                                '<ol class="carousel-indicators">'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="0" class="active"></li>'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="1"></li>'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="2"></li>'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="3"></li>'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="4"></li>'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="5"></li>'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="6"></li>'+
                                    '<li data-target="#carouselExampleIndicators-content" data-slide-to="7"></li>'+
                                '</ol>'+
                                '<div class="carousel-inner">'+
                                    '<div class="carousel-item active">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image1+ '">'+
                                    '</div>'+
                                    '<div class="carousel-item">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image2 + '" alt="Second slide">'+
                                    '</div>'+
                                    '<div class="carousel-item">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image3 + '" alt="Third slide">'+
                                    '</div>'+
                                    '<div class="carousel-item">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image4 + '" alt="Third slide">'+
                                    '</div>'+
                                    '<div class="carousel-item">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image5 + '" alt="Third slide">'+
                                    '</div>'+
                                    '<div class="carousel-item">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image6 + '" alt="Third slide">'+
                                    '</div>'+
                                    '<div class="carousel-item">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image7 + '" alt="Third slide">'+
                                    '</div>'+
                                    '<div class="carousel-item">'+
                                        '<img class="d-block w-100" src="' + res.slider[0].image8 + '" alt="Third slide">'+
                                    '</div>'+
                                '</div>'+
                                '<a class="carousel-control-prev" href="#carouselExampleIndicators-content" role="button"'+
                                    'data-slide="prev">'+
                                    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                                    '<span class="sr-only">Previous</span>'+
                                '</a>'+
                                '<a class="carousel-control-next" href="#carouselExampleIndicators-content" role="button"'+
                                    'data-slide="next">'+
                                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                                    '<span class="sr-only">Next</span>'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                        '<h3>' + res.h3 + '</h3>'+
                        '<div class="showbutton"><button class="btn btn-primary" type="button" data-toggle="collapse"'+
                                'data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">'+
                                'Đọc Thêm'+
                            '</button></div>'+
                        '<div class="collapse" id="collapseExample">'+
                            '<div class="card card-body">'+
                                '<h3>'+ res.card[0].h31 +'</h3>'+
                                '<p>'+ res.card[0].p1 +'</p>'+
                                '<p>'+ res.card[0].p2 +'</p>'+
                                '<img src="' + res.card[0].img1 + '" alt="samsung">'+
                                '<p>' + res.card[0].p3 +'</p>'+
                                '<img src="' + res.card[0].img2 + '" alt="samsung">'+
                                '<h3>'+ res.card[0].h32 +'</h3>'+
                                '<p>'+ res.card[0].p4 +'</p>'+
                                '<p>'+ res.card[0].p5 +'</p>'+
                                '<img src="' + res.card[0].img3 + '" alt="">'+
                                '<h3>'+ res.card[0].h33 +'</h3>'+
                                '<p>' + res.card[0].p6 + '</p>'+
                                '<img src="' + res.card[0].img4 + '" alt="samsung">'+
                                '<p>' + res.card[0].p7 + '</p>'+
                                '<img src="' + res.card[0].img5 + '" alt="samsung">'+
                                '<h3>'+ res.card[0].h34 +'</h3>'+
                                '<p>'+ res.card[0].p8 +'</p>'+
                                '<img src="' + res.card[0].img6 + '" alt="samsung">'+
                                '<h3>'+ res.card[0].h35 +'</h3>'+
                                '<p>'+ res.card[0].p9 +'</p>'+
                                '<img src="' + res.card[0].img7 + '" alt="samsung">'+
                                '<h3>'+ res.card[0].h36 +'</h3>'+
                                '<p>'+ res.card[0].p10 +'</p>'+
                                '<img src="' + res.card[0].img8 + '" alt="samsung">'+
                            '</div>'+
                        '</div>'+
                       '<div class="end">'+
                            '<div style="margin: 10px; border-bottom: 1px solid #c9c9c9">'+
                                '<iframe width="100%" height="350" src="https://www.youtube.com/embed/KngTl-qNi2s"'+
                                    'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'+
                            '</div>'+
                            '<form action="/action_page.php">'+
                                '<div style="margin-bottom:5px" class="form-group">'+
                                    '<label for="comment">Comment:</label>'+
                                    '<textarea class="form-control" rows="5" id="comment" name="text"></textarea>'+
                                '</div>'+
                                '<button style="float:right" type="submit" class="btn btn-primary">Bình luận</button>'+
                            '</form>'+
                        '</div>'+
                        '<div class="clearfix"></div>'+
                    '</div>'+
                    '<div class="ct2 child-ct2">'+
                        '<div class="wrap-ct2">'+
                            '<h3>Sản phẩm cùng hãng</h3>'+
                            '<div class="cunghang">'+
                                '<ul>'+
                                    '<li>'+
                                        '<a href="#">'+
                                            '<img src="' + res.cunghang[0].img1 + '"'+
                                                'alt="samsung">'+
                                            '<h3>'+'Điện thoại'+ res.cunghang[0].sp1 +'</h3>'+
                                            '<strong>'+ res.cunghang[0].price1 +'<sup>đ</sup></strong> <br>'+
                                            '<div class="text">'+
                                                '<p>'+ res.cunghang[0].manhinh +'</p>'+
                                                '<p>'+ res.cunghang[0].camera +'</p>'+
                                                '<p>'+ res.cunghang[0].pin +'</p>'+
                                            '</div>'+
                                        '</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#">'+
                                            '<img src="' + res.cunghang[0].img2 + '"'+
                                                'alt="samsung">'+
                                            '<h3>'+'Điện thoại'+ res.cunghang[0].sp2 +'</h3>'+
                                            '<strong>'+ res.cunghang[0].price2 +'<sup>đ</sup></strong> <br>'+
                                            '<div class="text">'+
                                                '<p>'+ res.cunghang[0].manhinh +'</p>'+
                                                '<p>'+ res.cunghang[0].camera +'</p>'+
                                                '<p>'+ res.cunghang[0].pin +'</p>'+
                                            '</div>'+
                                        '</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#">'+
                                            '<img src="' + res.cunghang[0].img3 + '"'+
                                                'alt="samsung">'+
                                            '<h3>'+'Điện thoại'+ res.cunghang[0].sp3 +'</h3>'+
                                            '<strong>'+ res.cunghang[0].price3 +'<sup>đ</sup></strong> <br>'+
                                            '<div class="text">'+
                                                '<p>'+ res.cunghang[0].manhinh +'</p>'+
                                                '<p>'+ res.cunghang[0].camera +'</p>'+
                                                '<p>'+ res.cunghang[0].pin +'</p>'+
                                            '</div>'+
                                        '</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#">'+
                                            '<img src="' + res.cunghang[0].img4 + '"'+
                                                'alt="samsung">'+
                                            '<h3>'+'Điện thoại'+ res.cunghang[0].sp4 +'</h3>'+
                                            '<strong>'+ res.cunghang[0].price4 +'<sup>đ</sup></strong> <br>'+
                                            '<div class="text">'+
                                                '<p>'+ res.cunghang[0].manhinh +'</p>'+
                                                '<p>'+ res.cunghang[0].camera +'</p>'+
                                                '<p>'+ res.cunghang[0].pin +'</p>'+
                                            '</div>'+
                                        '</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#">'+
                                            '<img src="' + res.cunghang[0].img5 + '"'+
                                                'alt="samsung">'+
                                            '<h3>'+'Điện thoại'+ res.cunghang[0].sp5 +'</h3>'+
                                            '<strong>'+ res.cunghang[0].price5 +'<sup>đ</sup></strong> <br>'+
                                            '<div class="text">'+
                                                '<p>'+ res.cunghang[0].manhinh +'</p>'+
                                                '<p>'+ res.cunghang[0].camera +'</p>'+
                                                '<p>'+ res.cunghang[0].pin +'</p>'+
                                            '</div>'+
                                        '</a>'+
                                    '</li>'+
                                '</ul>'+
                                '<div style="text-align: center"><a href="#">Xem tất cả điện thoại Samsung</a></div>'+
                            '</div>'+
                            '<div class="news-sp">'+
                                '<h3>'+'Tin tức về ' + res.name + '</h3>'+
                                '<a href="#">'+
                                    '<i class="fas fa-hand-point-right"></i>'+ res.news[0].tintuc+
                                '</a>'+
                                '<a href="#">'+
                                    '<i class="fas fa-hand-point-right"></i>'+ res.news[0].tintuc+
                                '</a>'+
                                '<a href="#">'+
                                    '<i class="fas fa-hand-point-right"></i>'+ res.news[0].tintuc+
                                '</a>'+
                                '<a href="#">'+
                                    '<i class="fas fa-hand-point-right"></i>'+ res.news[0].tintuc+
                                '</a>'+
                                '<a href="#">'+
                                    '<i class="fas fa-hand-point-right"></i>'+ res.news[0].tintuc+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="clearfix"></div>';
                $('.content2').prepend(content2);

            },
            error: function (err) {
                console.log(err);
                window.alert('Lỗi');
            }
        });
    }

    
}
