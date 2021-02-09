function centerBlock() {
    let element = document.getElementById('tour_search_module');
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";

}
$(document).ready(function () {
    var logo = document.querySelectorAll("div.logo_ittour");
    var basket = document.querySelectorAll("a.cart_link");
    var button = document.querySelectorAll('div.btn-search')[0].firstElementChild;
    var table = document.querySelector(".tour_search_result");
    logo.forEach(function (val) {
        val.remove();
    });
    basket.forEach(function (val) {
        val.remove();
    });

    button.addEventListener("click", handler);
    table.addEventListener("click", handler1);
});

function handler() {
    setTimeout(removeBasketImage, 400);
}

function handler1() {
    if (event.target.tagName === "A") {
        setTimeout(removeInfoBlock, 200);
    }
}
function removeInfoBlock() {
    var infoBlock = document.querySelector(".ittour_order_block_customer_info");
    if (infoBlock !== null) {
        infoBlock.remove();
        clearTimeout(removeInfoBlock);
    }
    else {
        setTimeout(removeInfoBlock, 200);
    }
}

function replaceClasses() {
    var hideBasket = document.querySelectorAll(".cart_link");
    hideBasket.forEach(function (val) {
        val.setAttribute("hidden",true);
    });


    var searchModule = document.getElementById("tour_search_module");
    searchModule.style.removeProperty("justify-content");
    searchModule.id = "tour_search_module1"; 
    var blockId = document.getElementById("isolate");
    blockId.id = "isolate1";
    var inMiddelBlock = document.querySelectorAll(".itt_in_middel");
    inMiddelBlock.forEach(function (val) {
        val.className = "itt_in_middel1";
    });
    var mainBlock = document.querySelectorAll(".itt_main_block");
    mainBlock.forEach(function (val) {
        val.className = "itt_main_block1";
    });
    var tour_load = document.querySelectorAll(".tour_load");
    tour_load.forEach(function (val) {
        val.style.width = "100vw";
    });
    var extendedPackageSearchForm = document.querySelectorAll(".extended_package_search_form");
    extendedPackageSearchForm.forEach(function (val) {
        val.className = "extended_package_search_form1";
    });
    var frameBlock = document.querySelectorAll(".frame_block");
    frameBlock.forEach(function (val) {
        val.className = "frame_block1";
    });
    var titleOfModule = document.querySelectorAll(".title");
    titleOfModule.forEach(function (val) {
        val.className = "title1";
    });
    var ittMainBackground = document.querySelectorAll(".itt_main_background");
    ittMainBackground.forEach(function (val) {
        val.className = "itt_main_background1";
    });
    var ittLinks = document.querySelectorAll(".itt_links");
    ittLinks.forEach(function (val) {
        val.className = "itt_links1";
    });
    var packageTour = document.querySelectorAll(".package_tour");
    packageTour.forEach(function (val) {
        val.className = "package_tour1";
    });
    var hikeTour = document.querySelectorAll(".hike_tour");
    hikeTour.forEach(function (val) {
        val.className = "hike_tour1";
        val.setAttribute("hidden", true);
    });
    var checkOptionTour = document.querySelectorAll(".check_option_tour");
    checkOptionTour.forEach(function (val) {
        val.className = "check_option_tour1";
    });
    var firstBox = document.querySelectorAll(".first_box");
    firstBox.forEach(function (val) {
        val.className = "first_box1";
    });
    var colDirection = document.querySelectorAll(".col-direction");
    colDirection.forEach(function (val) {
        val.className = "col-direction1";
    });
    var country = document.querySelectorAll(".country");
    country.forEach(function (val) {
        val.className = "country1";
    });
    var countryUl = document.querySelectorAll(".country ul");
    countryUl.forEach(function (val) {
        val.className = "country1 ul";
    });
    var hotel = document.querySelectorAll(".hotel");
    hotel.forEach(function (val) {
        val.className = "hotel1";
    });

    var star = document.querySelectorAll(".star");
    star.forEach(function (val) {
        val.className = "star1";
    });

    var starLi = document.querySelectorAll(".star li");
    starLi.forEach(function (val) {
        val.className = "star1 li";
    });

    var hotelRating = document.querySelectorAll(".hotel_rating ");
    hotelRating.forEach(function (val) {
        val.className = "hotel_rating1";
    });
    var nbreHotelRating = document.querySelectorAll(".nbre_hotel_rating");
    nbreHotelRating.forEach(function (val) {
        val.className = "nbre_hotel_rating1";
    });
    var regions = document.querySelectorAll(".regions");
    regions.forEach(function (val) {
        val.className = "regions1";
    });


    var hotelList = document.querySelectorAll(".hotel-list");
    hotelList.forEach(function (val) {
        val.className = "hotel-list1";
    });

    var foodFood = document.querySelectorAll(".fly-food");
    foodFood.forEach(function (val) {
        val.className = "fly-food1";
    });
    var foodFrame = document.querySelectorAll(".food_frame");
    foodFrame.forEach(function (val) {
        val.className = "food_frame1";
    });
    var foodTitle = document.querySelectorAll(".food-title");
    foodTitle.forEach(function (val) {
        val.className = "food-title1";
    });
    var ittNutritionSelect = document.querySelectorAll(".itt_nutrition_select");
    ittNutritionSelect.forEach(function (val) {
        val.className = "itt_nutrition_select1";
    });
    var titleParentChild = document.querySelectorAll(".title_parent_child");
    titleParentChild.forEach(function (val) {
        val.className = "title_parent_child1";
    });
    var parentChild = document.querySelectorAll(".parent-child");
    parentChild.forEach(function (val) {
        val.className = "parent-child1";
    });
    var parent = document.querySelectorAll(".parent");
    parent.forEach(function (val) {
        val.className = "parent1";
    });
    var small = document.querySelectorAll(".small");
    small.forEach(function (val) {
        val.className = "small1";
    });
    var child = document.querySelectorAll(".child");
    child.forEach(function (val) {
        val.className = "child1";
    });
    var secondBox = document.querySelectorAll(".second_box");
    secondBox.forEach(function (val) {
        val.className = "second_box1";
    });
    var colВetailЕype = document.querySelectorAll(".col-detail-type");
    colВetailЕype.forEach(function (val) {
        val.className = "col-detail-type1";
    });
    var flyDate = document.querySelectorAll(".fly-date");
    flyDate.forEach(function (val) {
        val.className = "fly-date1";
    });
    var dateSelect = document.querySelectorAll(".date-select");
    dateSelect.forEach(function (val) {
        val.className = "date-select1";
    });
    var dateSelect = document.querySelectorAll(".date-select");
    dateSelect.forEach(function (val) {
        val.className = "date-select1";
    });
    var txt = document.querySelectorAll(".txt");
    txt.forEach(function (val) {
        val.className = "txt1";
    });
    var dateFromWidth = document.getElementById("itt_date_from");
    dateFromWidth.className = "small1 date-field-width";
    var dateTillWidth = document.getElementById("date_till");
    dateTillWidth.className = "small1 date-field-width";

    var nightRangeBlock = document.querySelectorAll(".night-age");
    nightRangeBlock.forEach(function (val) {
        val.className = "night-age1";
    });
    var priceTillWidth = document.getElementById("price_till");
    priceTillWidth.setAttribute("value", "90000");

    var priceBlock = document.querySelectorAll(".itt_price");
    priceBlock.forEach(function (val) {
        val.className = "itt_price1";
    });
    var unit = document.querySelectorAll(".unit");
    unit.forEach(function (val) {
        val.className = "unit1";
    });
    var flyFromBox = document.querySelectorAll(".fly_from_box");
    flyFromBox.forEach(function (val) {
        val.className = "fly_from_box1";
    });
    var flyFirstPart = document.querySelectorAll(".first_part");
    flyFirstPart.forEach(function (val) {
        val.className = "first_part1";
    });
    var departure = document.querySelectorAll(".fly");
    departure.forEach(function (val) {
        val.className = "fly1";
    });
    var flyFrom = document.querySelectorAll(".fly-from");
    flyFrom.forEach(function (val) {
        val.className = "fly-from1";
    });

    var pageSub = document.querySelectorAll(".pager-sub");
    pageSub.forEach(function (val) {
        val.className = "pager-sub1";
    });
    var btnSearch = document.querySelectorAll(".btn-search");
    btnSearch.forEach(function (val) {
        val.className = "btn-search1";
    });
}
document.addEventListener("DOMContentLoaded", centerBlock);
document.addEventListener("DOMContentLoaded", replaceClasses);
