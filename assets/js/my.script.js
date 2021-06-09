document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".nav");

    document.querySelector(".sidebar__toggler").addEventListener("click", () => {
        nav.classList.add("nav__open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav__open");
    });


    // dropdown hover

    // document.querySelectorAll(".expanded-menu .menu-item").forEach(element => {

    //     element.addEventListener('mouseover', function(e) {
    //         let expandableLink = this.querySelector('a[data-toggle]');
    //         if (expandableLink != null) {
    //             let nextEl = expandableLink.nextElementSibling;
    //             expandableLink.classList.add("show");
    //             nextEl.classList.add('show');
    //             console.log("over");
    //         }

    //     });

    //     element.addEventListener('mouseenter', function(e) {
    //         let expandableLink = this.querySelector('a[data-toggle]');
    //         if (expandableLink != null) {
    //             console.log("enter");

    //         }

    //     });

    //     element.addEventListener('mouseleave', function(e) {
    //         let expandableLink = this.querySelector('a[data-toggle]');
    //         if (expandableLink != null) {
    //             let nextEl = expandableLink.nextElementSibling;
    //             expandableLink.classList.remove("show");
    //             nextEl.classList.remove('show');
    //             console.log("leave");

    //         }

    //     });


    // })




})