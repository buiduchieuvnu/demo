var BenhNhanView = function () {

    var that = this;
    this.oBenhNhan = new BenhNhan();
    this.arrBenhNhan = [];
    this.slideBenhNhan = document.getElementById('SlideBenhNhan');
    this.oListBenhNhan = document.getElementById('ListBenhNhan');
    this.oFormBenhNhan = document.getElementById('FormBenhNhan');

    this.init = function () {
        console.log('BenhNhanView init...');
    }

    this.bindSlideBenhNhan = function (data) {
        var ds = '';
        data.forEach(bn => {
            ds += `<div>
              <div class="user-status-slide"><a href="#"><img src="${bn.avatar}" alt="">
                  <div class="active-status"></div>
                  <p class="mb-0 mt-2 text-truncate">${bn.hoten}</p></a></div>
            </div>`;
        });
        that.slideBenhNhan.innerHTML = ds;
        that.activeSlide();
    }

    this.bindListBenhNhan = function (data) {
        var ds = '';
        data.forEach(bn => {
            ds += `<!-- Single Chat User -->
                    <li class="p-3 chat-unread"><a class="d-flex" href="page-chat.html">
                        <!-- Thumbnail -->
                        <div class="chat-user-thumbnail me-3 shadow"><img class="img-circle" src="${bn.avatar}" alt=""><span class="active-status"></span></div>
                        <!-- Info -->
                        <div class="chat-user-info">
                            <h6 class="text-truncate mb-0">${bn.hoten}</h6>
                            <div class="last-chat">
                            <p class="mb-0 text-truncate">${bn.phone}<span class="badge rounded-pill bg-primary ms-2">2</span></p>
                            </div>
                        </div></a>
                        <!-- Options -->
                        <div class="dropstart chat-options-btn">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></button>
                        <ul class="dropdown-menu">
                            <li><a href="#"><i class="bi bi-mic-mute"></i>Sửa</a></li>
                            <li><a href="#"><i class="bi bi-slash-circle"></i>Khóa</a></li>
                            <li><a href="#"><i class="bi bi-trash"></i>Xóa</a></li>
                        </ul>
                        </div>
                    </li>`;
        });
        that.oListBenhNhan.innerHTML = ds;
    }

    this.search = async function () {
        return await that.oBenhNhan.getSampleData();
    }

    // Start slide
    this.activeSlide = function () {
        // 2.2.11 => Chat Users Slides (This code is dependent on [tiny-slider.js] plugin).

        if (document.querySelectorAll(".chat-user-status-slides-wrapper").length > 0) {
            var slideBenhNhan = tns({
                container: ".chat-user-status-slides",
                items: 5,
                gutter: 8,
                slideBy: "page",
                autoplay: true,
                autoplayButtonOutput: false,
                autoplayTimeout: 5000,
                speed: 750,
                mouseDrag: true,
                controls: false,
                nav: false,
                responsive: {
                    480: {
                        items: 7
                    },
                    576: {
                        items: 7
                    },
                    768: {
                        items: 8
                    },
                    992: {
                        items: 10
                    },
                    1200: {
                        items: 10
                    }
                }
            });
        }

    }


    document.addEventListener("DOMContentLoaded", function (event) {
        that.init();
        that.search().then(rs => {
            that.bindSlideBenhNhan(rs);
            that.bindListBenhNhan(rs);
        });
    });
}