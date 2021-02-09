    const searchResult = document.querySelector(".tour_search_result");   
    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    const callbackForSearcResults = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
            searchResults();
            setTimeout(removeColumn, 400);
                break;
            }
        }
    };
    const observerSearchResults = new MutationObserver(callbackForSearcResults);
    observerSearchResults.observe(searchResult, config);

    searchResult.addEventListener('click', editeDescription)
    function editeDescription(event) {
        if (event.target.matches('a') || event.target.matches('span.it_big_font_size') ) {
            setTimeout(edit, 500);
        }
}
function toggle_hotel_info1() {
    var state = document.getElementsByClassName("ittour_order_block_hotel_info1")[0];
    state.style.display = "block";
}
function openCurrencyPopup() {
    var state = document.getElementsByClassName("itt_small_price1")[0];
    if (state.style.display = "block") {
        state.style.display = "none";
    }
    else {
        state.style.display = "block";
    }
}


function edit() {
    var isolated = document.getElementById("isolated");
    isolated.id = "isolated1";
    if (window.matchMedia("(min-device-width: 300px) and (max-device-width: 812px)").matches) {

        isolated.style.removeProperty("left");
        isolated.style.removeProperty("top");
        isolated.style.removeProperty("position");
    }

    var tour_order = document.getElementById("tour_order");
    tour_order.style.removeProperty("width");
    
    var isolate = document.querySelectorAll(".boxy-inner");
    isolate.forEach(function (val) {
        val.id = "isolate1";
        val.className = "boxy-inner1";
    });
    var mainBlockBox = document.querySelectorAll(".itt_main_block");
    mainBlockBox.forEach(function (val) {
        val.className = "itt_main_block1";
    });
    var tourOrder = document.querySelectorAll("#tour_order");
    tourOrder.forEach(function (val) {
        val.id = "tour_order1";
        val.className = "itt_main_block1 tour_order boxy-content1";
    });
    var orderBlock = document.querySelectorAll(".ittour_order_block");
    orderBlock.forEach(function (val) {
        val.className = "ittour_order_block1";
    });
    var ittourOrderBlockTourInfo = document.querySelectorAll(".ittour_order_block_tour_info");
    ittourOrderBlockTourInfo.forEach(function (val) {
        val.className = "ittour_order_block_tour_info1";
    });
    var orderBlockTitleBox = document.querySelectorAll(".ittour_order_block_title_box");
    orderBlockTitleBox.forEach(function (val) {
        val.className = "ittour_order_block_title_box1 itt_order_block_title_box_bg1";
    });
    var orderBlockTitleBoxBg = document.querySelectorAll(".ittour_order_block_title_box_info");
    orderBlockTitleBoxBg.forEach(function (val) {
        val.className = "ittour_order_block_title_box_info1 itt_order_block_title_box_bg1";
        val.style.removeProperty("width");
    });
    var orderBlockTitleBoxLeftCorner = document.querySelectorAll(".itt_order_block_title_box_left_corner");
    orderBlockTitleBoxLeftCorner.forEach(function (val) {
        val.className = "itt_order_block_title_box_left_corner1";
    });
    var it_gradient_left = document.querySelectorAll(".it_gradient_left");
    it_gradient_left.forEach(function (val) {
        val.className = "it_gradient_left1";
    });
    var itt_order_block_title_box_center_corner_next = document.querySelectorAll(".itt_order_block_title_box_center_corner_next");
    itt_order_block_title_box_center_corner_next.forEach(function (val) {
        val.className = "itt_order_block_title_box_center_corner_next1";
    });
    var it_gradient_right_next = document.querySelectorAll(".it_gradient_right_next");
    it_gradient_right_next.forEach(function (val) {
        val.className = "it_gradient_right_next1";
        if (window.matchMedia("(min-device-width: 300px) and (max-device-width: 812px)").matches) {
            val.style.removeProperty("width");
        }
    });
    var itt_order_block_title_box_center_corner = document.querySelectorAll(".itt_order_block_title_box_center_corner");
    itt_order_block_title_box_center_corner.forEach(function (val) {
        val.className = "itt_order_block_title_box_center_corner1";
    });
    var it_gradient_right1 = document.querySelectorAll(".it_gradient_right");
    it_gradient_right1.forEach(function (val) {
        val.className = "it_gradient_right1";
    });
    var ittour_order_block_title_box_id_tour = document.querySelectorAll(".ittour_order_block_title_box_id_tour");
    ittour_order_block_title_box_id_tour.forEach(function (val) {
        val.className = "ittour_order_block_title_box_id_tour1";
    });

    var it_close = document.querySelectorAll(".it_close");
    it_close.forEach(function (val) {
        val.className = "it_close1";
        val.addEventListener("click", close);
    });
    var orderBlockContentBox = document.querySelectorAll(".ittour_order_block_content_box");
    orderBlockContentBox.forEach(function (val) {
        val.className = "ittour_order_block_content_box1";
        if (window.matchMedia("(min-device-width: 300px) and (max-device-width: 812px)").matches) {
        var heightVaulue = (window.innerHeight.toString() - 60) + "px";
        val.style.setProperty("height", heightVaulue);
        }
    });
    var itBoxPadding = document.querySelectorAll(".it_box_padding");
    itBoxPadding.forEach(function (val) {
        val.className = "it_box_padding1";
    });
    var orderBlockContentBoxLeftFrame = document.querySelectorAll(".ittour_order_block_content_box_left_frame");
    orderBlockContentBoxLeftFrame.forEach(function (val) {
        val.className = "ittour_order_block_content_box_left_frame1";
    });
    var orderHotelNameTourPrice = document.querySelectorAll(".ittour_order_hotel_name_tour_price");
    orderHotelNameTourPrice.forEach(function (val) {
        val.className = "ittour_order_hotel_name_tour_price1";
    });
    var orderTourPrice = document.querySelectorAll(".ittour_order_tour_price");
    orderTourPrice.forEach(function (val) {
        val.className = "ittour_order_tour_price1";
    });
    var ittourOrderStrong = document.querySelectorAll(".ittour_order_strong");
    ittourOrderStrong.forEach(function (val) {
        val.className = "ittour_order_strong1";
    });
    var srPrice = document.querySelectorAll(".ittour_sr_price");
    srPrice.forEach(function (val) {
        val.className = "ittour_sr_price1";
    });
    var itt_cur_popup = document.querySelectorAll(".itt_cur_popup");
    itt_cur_popup.forEach(function (val) {
        val.className = "itt_cur_popup1";
        val.style.display = "none";
        val.addEventListener('click', openCurrencyPopup)
    });
    var price_accomodation = document.querySelectorAll(".price_accomodation");
    price_accomodation.forEach(function (val) {
        val.className = "price_accomodation1";
    });



    var orderThin = document.querySelectorAll(".ittour_order_thin");
    orderThin.forEach(function (val) {
        val.className = "ittour_order_thin1";
    });
    var orderHotelName = document.querySelectorAll(".ittour_order_hotel_name");
    orderHotelName.forEach(function (val) {
        val.className = "ittour_order_hotel_name1";
    });
    var hotelName = document.querySelectorAll(".ittour_hotel_name");
    hotelName.forEach(function (val) {
        val.className = "ittour_hotel_name1";
    });
    var orderHotel = document.querySelectorAll(".ittour_order_hotel");
    orderHotel.forEach(function (val) {
        val.className = "ittour_order_hotel1";
    });
    var ellipsis = document.querySelectorAll(".ellipsis");
    ellipsis.forEach(function (val) {
        val.className = "ellipsis1 f11";
    });
    var numberStars = document.querySelectorAll(".number_stars");
    numberStars.forEach(function (val) {
        val.className = "f11 number_stars1";
    });
    var stars = document.querySelectorAll(".stars");
    stars.forEach(function (val) {
        val.className = "stars1 f11";
    });
    var goldrStar = document.querySelectorAll(".gold_star");
    goldrStar.forEach(function (val) {
        val.className = "f11 gold_star1";
    });
    var orderDown = document.querySelectorAll(".ittour_order_down");
    orderDown.forEach(function (val) {
        val.className = "ittour_order_down1";
    });
    var orderCityNameGreen = document.querySelectorAll(".ittour_order_city_name_green");
    orderCityNameGreen.forEach(function (val) {
        val.className = "ittour_order_city_name_green1";
    });
    var orderTourInfo = document.querySelectorAll(".ittour_order_tour_info");
    orderTourInfo.forEach(function (val) {
        val.className = "ittour_order_tour_info1";
    });
    var orderLeftList = document.querySelectorAll(".ittour_order_left_list");
    orderLeftList.forEach(function (val) {
        val.className = "ittour_order_left_list1";
    });
    var ittour_order_meteo_title = document.querySelectorAll(".ittour_order_meteo_title");
    ittour_order_meteo_title.forEach(function (val) {
        val.className = "ittour_order_meteo_title1";
        var child = val.firstElementChild;
        child.className = "ittour_order_title11";
    });
    var orderTitle = document.querySelectorAll(".ittour_order_title");
    orderTitle.forEach(function (val) {
        val.className = "ittour_order_title1";
    });
    var orderDescription = document.querySelectorAll(".ittour_order_description");
    orderDescription.forEach(function (val) {
        val.className = "ittour_order_description1";
    });
    var priceForTwoPeople = document.querySelectorAll(".ittour_price_for_two_people");
    priceForTwoPeople.forEach(function (val) {
        val.className = "ittour_price_for_two_people1";
    });
    var orderRightList = document.querySelectorAll(".ittour_order_right_list");
    orderRightList.forEach(function (val) {
        val.className = "ittour_order_right_list1";
    });
    var hiddenInfo = document.querySelectorAll(".it_hiden_info");
    hiddenInfo.forEach(function (val) {
        val.className = "it_hiden_info1";
        val.addEventListener('click', toggle_hotel_info1);
    });
    
    var orderBlockContentBoxRightFrame = document.querySelectorAll(".ittour_order_block_content_box_right_frame");
    orderBlockContentBoxRightFrame.forEach(function (val) {
        val.className = "ittour_order_block_content_box_right_frame1";
    });
    var orderBlockContentBoxRightFrameRounde = document.querySelectorAll(".ittour_order_block_content_box_right_frame_rounde");
    orderBlockContentBoxRightFrameRounde.forEach(function (val) {
        val.className = "ittour_order_block_content_box_right_frame_rounde1";
    });
    var ittour_order_rounded_image = document.querySelectorAll(".ittour_order_rounded_image");
    ittour_order_rounded_image.forEach(function (val) {
        val.className = "ittour_order_rounded_image1";
    });
    var ittour_order_block_content_box_filter = document.querySelectorAll(".ittour_order_block_content_box_filter");
    ittour_order_block_content_box_filter.forEach(function (val) {
        val.className = "ittour_order_block_content_box_filter1";
    });
    var ittour_order_block_hotel_info = document.querySelectorAll(".ittour_order_block_hotel_info");
    ittour_order_block_hotel_info.forEach(function (val) {
        val.className = "ittour_order_block_hotel_info1";
    });
    var ittour_order_left_frame = document.querySelectorAll(".ittour_order_left_frame");
    ittour_order_left_frame.forEach(function (val) {
        val.className = "ittour_order_left_frame1";
    });
    var ittour_order_grey_box_list = document.querySelectorAll(".ittour_order_grey_box_list");
    ittour_order_grey_box_list.forEach(function (val) {
        val.className = "ittour_order_grey_box_list1";
    });
    var ittour_order_grey_box_list_top = document.querySelectorAll(".ittour_order_grey_box_list_top");
    ittour_order_grey_box_list_top.forEach(function (val) {
        val.className = "ittour_order_grey_box_list_top1";
    });
    var ittour_order_grey_box_list_center = document.querySelectorAll(".ittour_order_grey_box_list_center");
    ittour_order_grey_box_list_center.forEach(function (val) {
        val.className = "ittour_order_grey_box_list_center1";
    });
    var ittour_order_grey_box_list_bottom = document.querySelectorAll(".ittour_order_grey_box_list_bottom");
    ittour_order_grey_box_list_bottom.forEach(function (val) {
        val.className = "ittour_order_grey_box_list_bottom1";
    });
    var ittour_order_hotel_description = document.querySelectorAll(".ittour_order_hotel_description");
    ittour_order_hotel_description.forEach(function (val) {
        val.className = "ittour_order_hotel_description1";
    });
    var ittour_order_hotel_description2 = document.querySelectorAll(".ittour_order_hotel_description2");
    ittour_order_hotel_description2.forEach(function (val) {
        val.className = "ittour_order_hotel_description22";
    });
    var textBlockTitle = document.querySelectorAll(".text-block-title");
    textBlockTitle.forEach(function (val) {
        val.className = "text-block-title1";
    });
    var ittour_order_block_transport_info = document.querySelectorAll(".ittour_order_block_transport_info");
    ittour_order_block_transport_info.forEach(function (val) {
        val.className = "ittour_order_block_transport_info1";
    });
    var first_cell = document.querySelectorAll(".first_cell");
    first_cell.forEach(function (val) {
        val.className = "first_cell1";
        val.childNodes.forEach(function (elem) {
            switch (elem.textContent) {
                case 'Напрямок':
                    elem.textContent = "Напр";
                    break;
                case 'Відправлення':
                    elem.textContent = "Відпр";
                    break;
                case 'Прибуття':
                    elem.textContent = "Приб-я";
                    break;
                case 'Номер рейсу':
                    elem.textContent = "Рейс";
                    break;
                case 'Авіакомпанія':
                    elem.textContent = "Комп";
                    break;
            }
        });
    });
    var left_corner = document.querySelectorAll(".left_corner");
    left_corner.forEach(function (val) {
        val.className = "left_corner1";
    });
    var right_corner = document.querySelectorAll(".right_corner");
    right_corner.forEach(function (val) {
        val.className = "right_corner1";
    });

    var flyTable = document.querySelectorAll(".ittour_order_block_transport_info1")[0];
    flyTable.querySelectorAll("th").forEach(function (val) {
        if (val.innerText == " " || val.innerText == "") {
            val.remove();
        }
    });
    flyTable.querySelectorAll("td").forEach(function (val) {
        if (val.innerText == " " || val.innerText == "") {
            val.remove();
        }
    });
   

    var tr_flight_to = document.querySelectorAll(".tr_flight_to");
    tr_flight_to.forEach(function (val) {
        val.className = "tr_flight_to1";
    });
    var tr_flight_back = document.querySelectorAll(".tr_flight_back");
    tr_flight_back.forEach(function (val) {
        val.className = "tr_flight_back1 border-top-red1 last_cell1";
    });
    var hotelTextBlock = document.querySelectorAll(".hotel-text-block");
    hotelTextBlock.forEach(function (val) {
        val.className = "hotel-text-block1";
    });
    var leftGreyCorner = document.querySelectorAll(".left-grey-corner");
    leftGreyCorner.forEach(function (val) {
        val.className = "left-grey-corner1";
    });
    var centerGreyCorner = document.querySelectorAll(".center-grey-corner");
    centerGreyCorner.forEach(function (val) {
        val.className = "center-grey-corner1";
    });
    var rightGreyCorner = document.querySelectorAll(".right-grey-corner");
    rightGreyCorner.forEach(function (val) {
        val.className = "right-grey-corner1";
    });
    var textBlockContent = document.querySelectorAll(".text-block-content");
    textBlockContent.forEach(function (val) {
        val.className = "text-block-content1";
    });
    var ittour_order_right_frame1 = document.querySelectorAll(".ittour_order_right_frame");
    ittour_order_right_frame1.forEach(function (val) {
        val.className = "ittour_order_right_frame1";
    });
    var ittour_order_image = document.querySelectorAll(".ittour_order_image");
    ittour_order_image.forEach(function (val) {
        val.className = "ittour_order_image1";
    });
    var it_main_bottom_itt = document.querySelectorAll(".it_main_bottom_itt");
    it_main_bottom_itt.forEach(function (val) {
        val.className = "it_main_bottom_itt1";
    });
    var ittour_order_rounded_image = document.querySelectorAll(".ittour_order_block_customer_info");
    ittour_order_rounded_image.forEach(function (val) {
        val.className = "ittour_order_block_customer_info1";
    });

    var boxyModalBlackout = document.querySelectorAll(".boxy-modal-blackout");
    boxyModalBlackout.forEach(function (val) {
        //val.className = "boxy-modal-blackout1";
        val.remove();
    });

}
function searchResults() {
    console.log("run");
    var advertisementBanner = document.getElementById("banner_container");
    advertisementBanner.style.display = "none";
    var resultTitle = document.querySelectorAll(".itt_result_title");
    resultTitle.forEach(function (val) {
        val.className = "itt_result_title1";
    });
    var priceNotification = document.querySelectorAll(".itt_price_nb_txt");
    priceNotification.forEach(function (val) {
        val.className = "itt_price_nb_txt1";
    });
    var searchTable = document.querySelectorAll(".package_search_result_table");
    searchTable.forEach(function (val) {
        val.className = "package_search_result_table1";
    });
    //if (window.matchMedia("(min-device-width: 300px) and (max-device-width: 812px)").matches) {
    //    document.getElementsByClassName("last_cell1").forEach(function (val) {
    //        val.className.remove();
    //    });
    //};
    var searchResults = document.querySelectorAll(".itt_results");
    searchResults.forEach(function (val) {
        val.style.removeProperty("width");
        val.className = "itt_results1";
    });
    var leftbg = document.querySelectorAll(".left_bg");
    leftbg.forEach(function (val) {
        val.className = "left_bg1";
    });
    var mainbg = document.querySelectorAll(".main_bg");
    mainbg.forEach(function (val) {
        val.className = "main_bg1"; 
        if (val.textContent == "Замовлення туру" && window.matchMedia("(min-device-width: 300px) and (max-device-width: 812px)"))
        {
            val.textContent = "Деталі";
        }
    });
    var withRightBorder = document.querySelectorAll(".with_right_border");
    withRightBorder.forEach(function (val) {
        val.className = "with_right_border1";
    });
    var ittOdd = document.querySelectorAll(".itt_odd");
    ittOdd.forEach(function (val) {
        val.className = "itt_odd1";
    });
    var ittEven = document.querySelectorAll(".itt_even");
    ittEven.forEach(function (val) {
        val.className = "itt_even1";
    });
    var details = document.querySelectorAll("a.it_small_price");
        details.forEach(function (val) {
        val.textContent = "Деталі";
    });
    var notesBlock = document.querySelectorAll(".itt_results_status");
    notesBlock.forEach(function (val) {
        val.style.removeProperty("width");
        val.className = "itt_results_status1";
    });
    var notes = document.querySelectorAll(".itt_tour_note");
    notes.forEach(function (val) {
        val.className = "itt_tour_note1";
    });
    //var pager = document.querySelectorAll(".pager-list");
    //pager.forEach(function (val) {
    //    val.className = "pager-list1";   
    //    val.addEventListener("click", navigation);
    //});

     var showCurencyPopup = document.querySelectorAll(".itt_show_currency_popap");
     showCurencyPopup.forEach(function (val) {
         val.className = "itt_show_currency_popap1";
     }); 
     var currencyPopupCurrency = document.querySelectorAll(".itt_currency_popap_currency");
     currencyPopupCurrency.forEach(function (val) {
         val.className = "itt_currency_popap_currency1";
     }); 
     var currencyPopup = document.querySelectorAll(".itt_currency_popap");
     currencyPopup.forEach(function (val) {
         val.className = "itt_currency_popap1";
     }); 
     var activeCurrency = document.querySelectorAll(".itt_active_currency");
     activeCurrency.forEach(function (val) {
         val.className = "itt_active_currency1";
     }); 
}


function activate() {
    var div = document.getElementsByClassName('itt_currency_popap1')[0];
    div.setAttribute("display", "block");
}

function removeColumn() {
    document.querySelectorAll('.main_bg1').forEach(function (val) {
        if (val.firstElementChild !== null && val.firstElementChild.getAttribute('title') == "Додати до кошика")
        { val.remove(); }
    });
    document.querySelectorAll('.list_stars').forEach(function (val) { val.parentNode.remove(); });
}


function close(event) {
    if (event.target.closest('div.ittour_order_block_hotel_info1')) {
        document.querySelectorAll("div.ittour_order_block_hotel_info1")[0].style.display = "none";
    }
    if (event.target.closest('div.ittour_order_block1') && !event.target.closest('div.ittour_order_block_hotel_info1')) {
        document.getElementById("isolated1").remove();
    }
} 

//function navigation(event) {
//    var pages = document.querySelectorAll(".pager-list1")[0].firstElementChild;
//    if (event.target.closest('div.pager-list1') && pages.childElementCount > 4) {
//        pages.childNodes.forEach(function (elem) {
//            if (elem.className == "preview" || elem.className == "next") {
//                elem.remove();
//            }
//        });
//    }
//}
//setTimeout(navigation, 200);