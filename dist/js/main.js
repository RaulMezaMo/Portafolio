/*! portafolio-rmm v1.0.0 | (c) 2020 Raul Meza Montoya | MIT License | http://link-to-your-git-repo.com */
/*========================== =habilitar js =========================*/
//===============================================================

// const { default: MicroModal } = require("micromodal");


/* Habilitar JS si es soportado */
function habilitarJs() {
  var element = document.getElementsByTagName("html");
  element[0].classList.remove("no-js");
}

habilitarJs();

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () { };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

//===============================================================
/*========================== =DOCUMENT READY =========================*/
//===============================================================

$(document).ready((function () {
  console.log("--jQuery activo--");

/*-------------- Navegación --------------*/
  $toggle_nav = $("#toggle-nav");
  $nav = $("#navegacion");

  $toggle_nav.on("click", (function () {
    $nav.toggleClass("active");
    $(this).toggleClass('show-menu');
  }));

  $("#navegacion .link").on("click", (function () {
    if ($nav.hasClass("active")) {
      $nav.removeClass("active");
      $toggle_nav.removeClass("show-menu");
      $("#checkbox-nav").prop("checked", false);
    }
  })); 

  /*--------------------------- =ZOOM -----------------------------*/
  // $zooms = $('.contenedor-zoom .zoom');
  // $zooms.zoom({
  //   on: "grab",
  //   onZoomIn: function () {
  //     // $(this).parents("contenedor-zoom").find(".aviso-zoom").mouseover();
  //   },
  //   onZoomOut: function () {
  //     // $(this).parents("contenedor-zoom").find(".aviso-zoom").hover(out);
  //   }
  // });

  /*-- Con thumbnails --*/

  $.fancybox.defaults.idleTime = "false";
  $.fancybox.defaults.arrows = "false";
  $.fancybox.defaults.buttons = [
    // "zoom",
    //"share",
    // "slideShow",
    //"fullScreen",
    //"download",
    // "thumbs",
    "close"
  ],
    $.fancybox.defaults.btnTpl = {
      zoom:
        '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>icono-cerrar</title><rect x="19" width="1" height="1" "/><rect x="18" y="1" width="1" height="1" "/><rect x="17" y="2" width="1" height="1" "/><rect x="16" y="3" width="1" height="1" "/><rect x="15" y="4" width="1" height="1" "/><rect x="14" y="5" width="1" height="1" "/><rect x="13" y="6" width="1" height="1" "/><rect x="12" y="7" width="1" height="1" "/><rect x="11" y="8" width="1" height="1" "/><rect x="10" y="9" width="1" height="1" "/><rect x="9" y="10" width="1" height="1" "/><rect x="8" y="11" width="1" height="1" "/><rect x="7" y="12" width="1" height="1" "/><rect x="6" y="13" width="1" height="1" "/><rect x="5" y="14" width="1" height="1" "/><rect x="4" y="15" width="1" height="1" "/><rect x="3" y="16" width="1" height="1" "/><rect x="2" y="17" width="1" height="1" "/><rect x="1" y="18" width="1" height="1" "/><rect y="19" width="1" height="1" "/><rect width="1" height="1" "/><rect x="1" y="1" width="1" height="1" "/><rect x="2" y="2" width="1" height="1" "/><rect x="3" y="3" width="1" height="1" "/><rect x="4" y="4" width="1" height="1" "/><rect x="5" y="5" width="1" height="1" "/><rect x="6" y="6" width="1" height="1" "/><rect x="7" y="7" width="1" height="1" "/><rect x="8" y="8" width="1" height="1" "/><rect x="9" y="9" width="1" height="1" "/><rect x="10" y="10" width="1" height="1" "/><rect x="11" y="11" width="1" height="1" "/><rect x="12" y="12" width="1" height="1" "/><rect x="13" y="13" width="1" height="1" "/><rect x="14" y="14" width="1" height="1" "/><rect x="15" y="15" width="1" height="1" "/><rect x="16" y="16" width="1" height="1" "/><rect x="17" y="17" width="1" height="1" "/><rect x="18" y="18" width="1" height="1" "/><rect x="19" y="19" width="1" height="1" "/></svg>' +
        "</button>",
      // Arrows
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>"
    };

  $('.lista-thumbnails').on('click', 'a', (function (e) {
    var $this = $(this);
    var $href = $this.attr("href");
    var $contzoom = $(".modal.is-open").find(".contenedor-zoom");
    e.preventDefault();
    $contzoom.attr("href", $href);
    $contzoom.find(".zoom img").attr("src", $href);
  }));

  // Swipe left y right
  $carets = $(".modal .caret");
  $carets.on("click", (function (e) {
    var $this = $(this);
    var $contzoom = $(".modal.is-open").find(".contenedor-zoom");
    $this_href = $this.parent().find(".contenedor-zoom").attr("href");
    if ($this.hasClass("right")) {
      $change_href = $this.parents(".modal__content").find(".lista-thumbnails a[href='" + $this_href + "']").parent().next().find("a").attr("href");
    } else if ($this.hasClass("left")) {
      $change_href = $this.parents(".modal__content").find(".lista-thumbnails a[href='" + $this_href + "']").parent().prev().find("a").attr("href");
    } else {
      return;
    }
    $contzoom.attr("href", $change_href);
    $contzoom.find(".zoom img").attr("src", $change_href);
  }));

  /*--------------------- =JQUERY VALIDATION -----------------------*/

  var validator = $("form").validate({
    // debug: true,
    errorPlacement: function (error, element) {
      error.appendTo(element.siblings(".error_cont"));
    },
    onfocusout: false,
    onclick: false,
    onkeyup: false,
    // focusCleanup: true,
    // errorLabelContainer: ".error_cont",
  });

  $("#formulario_contactar")
    .prop("novalidate", true);

  var inputs = $('#formulario_contactar input:not(:hidden), select, textarea');

  inputs.keydown((function () {
    if ($(this).hasClass("error")) {
      $(this)
        .removeClass("valid error")
        .siblings(".error_cont").empty();
    }
  }));


  /*-------------------- =OVERLAY ----------------------*/
  /* Variables */
  $anclas_thumbnail = $(".proyecto .ancla-thumbnail");
  $html = $("html");
  $cerrar_overlay = $(".overlay .cerrar-overlay");
  $overlays_proyecto = $(".proyecto .overlay");
  $modals = $(".modal");
  var viewportWidth = $(window).width();
  var modalOverlayHeight;
  var modalContainerHeight;
  var numThumbnails = 0; //Número de elementos en thumbnails

  /* FUNCIÓN TAMAÑO */
  function resizeModalCaret() {
    viewportWidth = $(window).width();
    modalOverlayHeight = $(".modal__overlay").height();
    modalContainerHeight = $(".modal__container").height();
    var $imagen_grande = $(".modal.is-open .imagen-grande");
    if (modalContainerHeight < modalOverlayHeight) {
      // $imagen_grande.width(viewportWidth);
    } else {
      // $imagen_grande.removeAttr("style");
    }
  }

  // Tamaño
  resizeModalCaret();
  $(window).resize((function () {
    resizeModalCaret();
  }));


  /* FUNCIÓN TOGGLE OVERLAY */
  function toggleOverlay(overlay, accion) {
    // Overlay = objeto overlay a cerrar
    // Accion = booleano "abrir" o "cerrar"

    // Mostrar overlay
    if (accion == "abrir") {
      $("html").addClass("no-scroll");
      resizeModalCaret();
    } else {
      // Ocultar overlay
      $("html").removeClass("no-scroll");
    }
  }


  // Detectar click afuera de contenedor para cerrar overlay
  $(document).on("click", (function (event) {
    if ($overlays_proyecto.hasClass("is-visible")) {
      var obj = $overlays_proyecto.children(".contenido");
      if (!$(event.target).closest(obj).length) {
        // Cerrar overlay
        toggleOverlay(event.target, "cerrar");
      }
    }
  }));
  // .-overlay

  /*-----------MicroModal.now.sh--------------*/
  MicroModal.init({
    onShow: function (object, trigger) {
      resizeModalCaret();
      numThumbnails = $(object).find("ul.lista-thumbnails li").length;
    },
    // onShow: modal => resizeModalCaret(), // [1]
    // onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    onclose: function (object, trigger) {
      console.info("${modal.id} is hidden");
    },
    disableScroll: true,
    disableFocus: true,
  });
  // .-micromodal
}));
// .-document-ready