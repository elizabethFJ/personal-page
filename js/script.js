document.addEventListener("DOMContentLoaded", function () {

  console.log("JavaScript cargado correctamente");


  /* =====================================================
     ANIMACIONES AL HACER SCROLL
  ===================================================== */

  const elementos = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );


  const observer = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

        }

      });

    },
    {
      threshold: 0.15
    }
  );


  elementos.forEach(function (elemento) {

    observer.observe(elemento);

  });



  /* =====================================================
     TEXTO TIPO MÁQUINA DE ESCRIBIR
  ===================================================== */

  const cipherText = document.getElementById("cipherText");


  if (cipherText) {

    const texto =
      cipherText.getAttribute("data-plain") || "Yo.";


    let i = 0;


    function escribirTexto() {

      if (i < texto.length) {

        cipherText.textContent += texto.charAt(i);

        i++;

        setTimeout(escribirTexto, 100);

      }

    }


    escribirTexto();

  }



  /* =====================================================
     NAVBAR ACTIVA SEGÚN LA SECCIÓN
  ===================================================== */

  const secciones = document.querySelectorAll("section[id]");
  const enlaces = document.querySelectorAll("#mainNav .nav-link");


  const navObserver = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          enlaces.forEach(function (enlace) {

            enlace.classList.remove("active");

          });


          const enlaceActivo = document.querySelector(
            '#mainNav .nav-link[href="#' +
            entry.target.id +
            '"]'
          );


          if (enlaceActivo) {

            enlaceActivo.classList.add("active");

          }

        }

      });

    },
    {
      threshold: 0.35
    }
  );


  secciones.forEach(function (seccion) {

    navObserver.observe(seccion);

  });



  /* =====================================================
     CERRAR NAVBAR EN MÓVIL AL SELECCIONAR UNA OPCIÓN
  ===================================================== */

  const navLinks = document.querySelectorAll(
    "#navMenu .nav-link"
  );


  const navMenu = document.getElementById("navMenu");


  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (
        navMenu &&
        navMenu.classList.contains("show")
      ) {

        const bsCollapse =
          bootstrap.Collapse.getInstance(navMenu);

        if (bsCollapse) {

          bsCollapse.hide();

        }

      }

    });

  });

});