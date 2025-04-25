
    // Datos del menú
    const menu = [
        // Entradas (10)
        {
          nombre: "Ceviche Clásico",
          categoria: "entrada",
          descripcion: "Delicioso ceviche de pescado fresco con limón, cebolla y ají.",
          origen: "Perú",
          ingredientes: "Pescado, limón, cebolla, ají, sal",
          precio: 25,
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOaZRNV8O8lhqUs8drdxUEvgA07qA9KM-w_utajlfY7tr9GWX8WPBhXvPzV7Ity_iXuERuPXVfLEI8FOgDNKAtuGtsLg-JsSi4wGkYQ",
          comentarios: ["Fresco y delicioso!", "El mejor ceviche que he probado."]
        },
        {
          nombre: "Papa a la Huancaína",
          categoria: "entrada",
          descripcion: "Papa sancochada con salsa cremosa de ají amarillo y queso fresco.",
          origen: "Perú",
          ingredientes: "Papa, ají amarillo, queso fresco, leche, galletas saladas",
          precio: 18,
          imagen: "https://cdn.pixabay.com/photo/2020/11/04/20/14/peruvian-food-5714710_1280.jpg",
          comentarios: ["El sabor de la salsa es inigualable.", "Ideal para compartir."]
        },
        {
          nombre: "Causa Limeña",
          categoria: "entrada",
          descripcion: "Pastel de papa amarilla relleno de pollo o atún con ají.",
          origen: "Perú",
          ingredientes: "Papa amarilla, pollo/atún, ají, limón, mayonesa",
          precio: 20,
          imagen: "https://cdn.pixabay.com/photo/2018/07/18/19/44/causa-3547085_1280.jpg",
          comentarios: ["Presentación colorida.", "Textura suave y sabrosa."]
        },
        {
          nombre: "Anticuchos",
          categoria: "entrada",
          descripcion: "Brochetas de corazón de res marinadas en ají panca.",
          origen: "Perú",
          ingredientes: "Corazón de res, ají panca, vinagre, comino, ajo",
          precio: 22,
          imagen: "https://cdn.pixabay.com/photo/2017/09/25/18/58/anticuchos-2786414_1280.jpg",
          comentarios: ["Sabor ahumado único.", "Perfecto para picar."]
        },
        {
          nombre: "Tequeños",
          categoria: "entrada",
          descripcion: "Tiras de queso envueltas en masa de harina y fritas.",
          origen: "Venezuela",
          ingredientes: "Queso blanco, harina de trigo, huevo, aceite",
          precio: 16,
          imagen: "https://cdn.pixabay.com/photo/2016/11/23/18/31/tequeos-1854241_1280.jpg",
          comentarios: ["Crujientes por fuera.", "Queso derretido perfecto."]
        },
        {
          nombre: "Empanadas de Carne",
          categoria: "entrada",
          descripcion: "Masa rellena de carne sazonada con especias.",
          origen: "Argentina",
          ingredientes: "Carne picada, cebolla, huevo, aceitunas, masa",
          precio: 14,
          imagen: "https://cdn.pixabay.com/photo/2017/03/01/19/14/empanadas-2109862_1280.jpg",
          comentarios: ["Relleno jugoso.", "Masa dorada perfecta."]
        },
        {
          nombre: "Tamales",
          categoria: "entrada",
          descripcion: "Masa de maíz rellena de carne envuelta en hoja de plátano.",
          origen: "México",
          ingredientes: "Masa de maíz, carne de cerdo, hoja de plátano, salsa",
          precio: 17,
          imagen: "https://cdn.pixabay.com/photo/2017/06/29/20/50/mexican-food-2456038_1280.jpg",
          comentarios: ["Aroma increíble.", "Textura suave tradicional."]
        },
        {
          nombre: "Croquetas de Jamón",
          categoria: "entrada",
          descripcion: "Bolitas crujientes de bechamel con jamón ibérico.",
          origen: "España",
          ingredientes: "Jamón ibérico, leche, harina, pan rallado, huevo",
          precio: 19,
          imagen: "https://cdn.pixabay.com/photo/2017/09/25/18/58/croquettes-2786415_1280.jpg",
          comentarios: ["Cremosas por dentro.", "Sabor intenso a jamón."]
        },
        {
          nombre: "Bruschetta",
          categoria: "entrada",
          descripcion: "Rebanadas de pan tostado con tomate fresco y albahaca.",
          origen: "Italia",
          ingredientes: "Pan rústico, tomate, ajo, albahaca, aceite de oliva",
          precio: 15,
          imagen: "https://cdn.pixabay.com/photo/2016/08/01/16/30/bruschetta-1561705_1280.jpg",
          comentarios: ["Frescura mediterránea.", "Perfecto para empezar."]
        },
        {
          nombre: "Hummus con Pan Pita",
          categoria: "entrada",
          descripcion: "Puré de garbanzos con tahini y especias.",
          origen: "Medio Oriente",
          ingredientes: "Garbanzos, tahini, limón, ajo, comino",
          precio: 16,
          imagen: "https://cdn.pixabay.com/photo/2017/06/21/17/35/hummus-2428928_1280.jpg",
          comentarios: ["Crema suave y sabrosa.", "Acompañamiento perfecto."]
        },
      
        // Platos de fondo (10)
        {
          nombre: "Lomo Saltado",
          categoria: "fondo",
          descripcion: "Salteado de carne con cebolla, tomate y papas fritas.",
          origen: "Perú",
          ingredientes: "Carne, cebolla, tomate, papas, sillao",
          precio: 32,
          imagen: "https://cdn.pixabay.com/photo/2020/01/22/22/05/peruvian-4786360_1280.jpg",
          comentarios: ["Buen sabor, muy jugoso.", "Porción generosa."]
        },
        {
          nombre: "Ají de Gallina",
          categoria: "fondo",
          descripcion: "Plato tradicional peruano de pollo deshilachado en salsa cremosa de ají amarillo.",
          origen: "Perú",
          ingredientes: "Pollo, ají amarillo, leche evaporada, pan, nuez moscada, papa",
          precio: 28,
          imagen: "https://cdn.pixabay.com/photo/2020/10/01/19/21/chicken-5613034_1280.jpg",
          comentarios: ["Salsa increíble, muy sabroso.", "Ideal para el almuerzo."]
        },
        {
          nombre: "Arroz con Mariscos",
          categoria: "fondo",
          descripcion: "Arroz cocido con mix de mariscos y especias.",
          origen: "Perú",
          ingredientes: "Arroz, calamar, camarones, mejillones, ají panca",
          precio: 35,
          imagen: "https://cdn.pixabay.com/photo/2018/07/18/19/44/seafood-3547084_1280.jpg",
          comentarios: ["Sabor a mar intenso.", "Mariscos frescos."]
        },
        {
          nombre: "Pollo a la Brasa",
          categoria: "fondo",
          descripcion: "Pollo asado al carbón con especias secretas.",
          origen: "Perú",
          ingredientes: "Pollo, romero, ají panca, cerveza negra, sal",
          precio: 30,
          imagen: "https://cdn.pixabay.com/photo/2017/09/03/18/38/grilled-chicken-2711689_1280.jpg",
          comentarios: ["Piel crujiente.", "Jugoso por dentro."]
        },
        {
          nombre: "Seco de Cordero",
          categoria: "fondo",
          descripcion: "Guiso de cordero con culantro y frejoles.",
          origen: "Perú",
          ingredientes: "Cordero, culantro, frejoles, chicha de jora, ají mirasol",
          precio: 38,
          imagen: "https://cdn.pixabay.com/photo/2020/11/04/20/14/lamb-5714711_1280.jpg",
          comentarios: ["Carne tierna.", "Salsa espectacular."]
        },
        {
          nombre: "Pasta Carbonara",
          categoria: "fondo",
          descripcion: "Pasta con salsa cremosa de huevo, queso y panceta.",
          origen: "Italia",
          ingredientes: "Pasta, huevo, panceta, queso parmesano, pimienta",
          precio: 28,
          imagen: "https://cdn.pixabay.com/photo/2018/07/18/19/43/pasta-3547078_1280.jpg",
          comentarios: ["Cremosidad perfecta.", "Auténtico sabor italiano."]
        },
        {
          nombre: "Paella Valenciana",
          categoria: "fondo",
          descripcion: "Arroz con azafrán, mariscos, pollo y conejo.",
          origen: "España",
          ingredientes: "Arroz, azafrán, mariscos, pollo, conejo, judías",
          precio: 42,
          imagen: "https://cdn.pixabay.com/photo/2017/02/21/11/12/paella-2085831_1280.jpg",
          comentarios: ["Socarrat perfecto.", "Sabores bien integrados."]
        },
        {
          nombre: "Feijoada",
          categoria: "fondo",
          descripcion: "Guiso brasileño de frijoles negros con carnes.",
          origen: "Brasil",
          ingredientes: "Frijoles negros, carne de cerdo, chorizo, costilla",
          precio: 36,
          imagen: "https://cdn.pixabay.com/photo/2018/01/22/18/03/feijoada-3099750_1280.jpg",
          comentarios: ["Plato contundente.", "Sabor ahumado único."]
        },
        {
          nombre: "Tacos al Pastor",
          categoria: "fondo",
          descripcion: "Tortillas de maíz con carne marinada y piña.",
          origen: "México",
          ingredientes: "Carne de cerdo, piña, tortillas, cebolla, cilantro",
          precio: 24,
          imagen: "https://cdn.pixabay.com/photo/2017/06/29/20/50/tacos-2456037_1280.jpg",
          comentarios: ["Marinado perfecto.", "Equilibrio dulce-salado."]
        },
        {
          nombre: "Moussaka",
          categoria: "fondo",
          descripcion: "Pastel de berenjenas con carne molida y bechamel.",
          origen: "Grecia",
          ingredientes: "Berenjena, carne molida, tomate, bechamel, queso",
          precio: 32,
          imagen: "https://cdn.pixabay.com/photo/2017/06/30/04/58/moussaka-2457316_1280.jpg",
          comentarios: ["Capas de sabor.", "Bechamel dorada perfecta."]
        },
      
        // Postres (10)
        {
          nombre: "Torta de Chocolate",
          categoria: "postre",
          descripcion: "Torta húmeda con cobertura de chocolate negro.",
          origen: "Internacional",
          ingredientes: "Harina, cacao, azúcar, huevos, mantequilla",
          precio: 15,
          imagen: "https://cdn.pixabay.com/photo/2017/05/07/08/56/cake-2292717_1280.jpg",
          comentarios: ["Muy dulce, me encantó!", "Perfecta para el postre."]
        },
        {
          nombre: "Suspiro Limeño",
          categoria: "postre",
          descripcion: "Dulce tradicional peruano con base de leche condensada y merengue.",
          origen: "Perú",
          ingredientes: "Leche condensada, azúcar, huevo, vainilla",
          precio: 12,
          imagen: "https://cdn.pixabay.com/photo/2018/12/19/10/42/dessert-3883783_1280.jpg",
          comentarios: ["Delicioso, cremoso y suave.", "Perfecto para los amantes de lo dulce."]
        },
        {
          nombre: "Cheesecake de Frutos Rojos",
          categoria: "postre",
          descripcion: "Tarta de queso con salsa de frambuesas y arándanos.",
          origen: "EE.UU.",
          ingredientes: "Queso crema, galletas, frutos rojos, azúcar",
          precio: 18,
          imagen: "https://cdn.pixabay.com/photo/2018/05/02/12/20/cheesecake-3368750_1280.jpg",
          comentarios: ["Equilibrio perfecto.", "Base crujiente ideal."]
        },
        {
          nombre: "Picarones",
          categoria: "postre",
          descripcion: "Rosquillas fritas de camote y zapallo con miel de chancaca.",
          origen: "Perú",
          ingredientes: "Camote, zapallo, harina, anís, miel de chancaca",
          precio: 10,
          imagen: "https://cdn.pixabay.com/photo/2020/11/04/20/14/donuts-5714712_1280.jpg",
          comentarios: ["Esponjosos por dentro.", "Miel tradicional deliciosa."]
        },
        {
          nombre: "Tiramisú",
          categoria: "postre",
          descripcion: "Postre italiano con capas de café y mascarpone.",
          origen: "Italia",
          ingredientes: "Café, mascarpone, huevos, cacao, bizcochos",
          precio: 16,
          imagen: "https://cdn.pixabay.com/photo/2017/10/28/19/07/tiramisu-2897900_1280.jpg",
          comentarios: ["Textura sedosa.", "Balance perfecto de café."]
        },
        {
          nombre: "Crema Volteada",
          categoria: "postre",
          descripcion: "Flan de vainilla con caramelo líquido.",
          origen: "Francia",
          ingredientes: "Huevos, leche condensada, vainilla, azúcar",
          precio: 12,
          imagen: "https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg",
          comentarios: ["Tradicional y delicioso.", "Caramelo perfecto."]
        },
        {
          nombre: "Alfajores",
          categoria: "postre",
          descripcion: "Galletas rellenas de manjar blanco y espolvoreadas con azúcar.",
          origen: "Perú/Argentina",
          ingredientes: "Harina, maicena, mantequilla, manjar blanco",
          precio: 8,
          imagen: "https://cdn.pixabay.com/photo/2018/05/02/12/20/alfajores-3368749_1280.jpg",
          comentarios: ["Delicados y dulces.", "Relleno cremoso."]
        },
        {
          nombre: "Pie de Limón",
          categoria: "postre",
          descripcion: "Base crujiente con crema ácida de limón y merengue.",
          origen: "EE.UU.",
          ingredientes: "Galletas, limón, leche condensada, merengue",
          precio: 14,
          imagen: "https://cdn.pixabay.com/photo/2017/03/20/15/13/lemon-pie-2158771_1280.jpg",
          comentarios: ["Acidez equilibrada.", "Merengue tostado perfecto."]
        },
        {
          nombre: "Churros con Chocolate",
          categoria: "postre",
          descripcion: "Masa frita espolvoreada con azúcar y salsa de chocolate.",
          origen: "España",
          ingredientes: "Harina, agua, sal, azúcar, chocolate",
          precio: 11,
          imagen: "https://cdn.pixabay.com/photo/2017/09/25/18/58/churros-2786416_1280.jpg",
          comentarios: ["Crujientes por fuera.", "Chocolate espeso ideal."]
        },
        {
          nombre: "Mazamorra Morada",
          categoria: "postre",
          descripcion: "Postre espeso de maíz morado con frutas secas.",
          origen: "Perú",
          ingredientes: "Maíz morado, membrillo, frutas secas, canela",
          precio: 9,
          imagen: "https://cdn.pixabay.com/photo/2020/11/04/20/14/purple-corn-5714713_1280.jpg",
          comentarios: ["Dulce tradicional.", "Textura reconfortante."]
        },
      
        // Bebidas (10)
        {
          nombre: "Chicha Morada",
          categoria: "bebida",
          descripcion: "Bebida refrescante de maíz morado con especias.",
          origen: "Perú",
          ingredientes: "Maíz morado, piña, canela, clavo",
          precio: 8,
          imagen: "https://cdn.pixabay.com/photo/2021/08/06/15/28/drink-6525518_1280.jpg",
          comentarios: ["Refrescante y natural.", "Un clásico peruano."]
        },
        {
          nombre: "Inca Kola",
          categoria: "bebida",
          descripcion: "Bebida gaseosa de sabor único, con un toque dulce y afrutado.",
          origen: "Perú",
          ingredientes: "Agua carbonatada, azúcar, colorante amarillo",
          precio: 6,
          imagen: "https://cdn.pixabay.com/photo/2018/11/06/14/55/inca-kola-3807251_1280.jpg",
          comentarios: ["Sabor único y refrescante.", "Mejor acompañante para platos peruanos."]
        },
        {
          nombre: "Pisco Sour",
          categoria: "bebida",
          descripcion: "Cóctel emblemático peruano con pisco, limón y clara de huevo.",
          origen: "Perú",
          ingredientes: "Pisco, limón, clara de huevo, jarabe de goma, amargo de angostura",
          precio: 18,
          imagen: "https://cdn.pixabay.com/photo/2017/06/21/17/35/pisco-sour-2428929_1280.jpg",
          comentarios: ["Equilibrio perfecto.", "Espuma consistente."]
        },
        {
          nombre: "Jugo de Maracuyá",
          categoria: "bebida",
          descripcion: "Jugo natural de fruta de la pasión.",
          origen: "Perú",
          ingredientes: "Maracuyá, agua, azúcar",
          precio: 7,
          imagen: "https://cdn.pixabay.com/photo/2017/03/31/18/02/passion-fruit-2192028_1280.jpg",
          comentarios: ["Acidez refrescante.", "Natural sin conservantes."]
        },
        {
          nombre: "Cerveza Artesanal",
          categoria: "bebida",
          descripcion: "Cerveza rubia tipo IPA con lúpulo aromático.",
          origen: "Perú",
          ingredientes: "Agua, malta, lúpulo, levadura",
          precio: 12,
          imagen: "https://cdn.pixabay.com/photo/2017/09/25/18/58/beer-2786417_1280.jpg",
          comentarios: ["Amargor equilibrado.", "Aroma a cítricos."]
        },
        {
          nombre: "Mate de Coca",
          categoria: "bebida",
          descripcion: "Infusión de hojas de coca para el mal de altura.",
          origen: "Perú",
          ingredientes: "Hojas de coca, agua",
          precio: 5,
          imagen: "https://cdn.pixabay.com/photo/2018/01/22/18/03/mate-3099751_1280.jpg",
          comentarios: ["Alivia el soroche.", "Sabor herbal suave."]
        },
        {
          nombre: "Mojito",
          categoria: "bebida",
          descripcion: "Cóctel cubano con ron, menta y lima.",
          origen: "Cuba",
          ingredientes: "Ron blanco, lima, menta, azúcar, soda",
          precio: 16,
          imagen: "https://cdn.pixabay.com/photo/2017/09/25/18/58/mojito-2786418_1280.jpg",
          comentarios: ["Refrescante y herbáceo.", "Perfecto para el verano."]
        },
        {
          nombre: "Café Peruano",
          categoria: "bebida",
          descripcion: "Café de grano cultivado en Chanchamayo.",
          origen: "Perú",
          ingredientes: "Granos de café, agua",
          precio: 8,
          imagen: "https://cdn.pixabay.com/photo/2018/01/22/18/03/coffee-3099752_1280.jpg",
          comentarios: ["Aroma intenso.", "Acidez balanceada."]
        },
        {
          nombre: "Chilcano",
          categoria: "bebida",
          descripcion: "Cóctel de pisco con ginger ale y limón.",
          origen: "Perú",
          ingredientes: "Pisco, ginger ale, limón, amargo de angostura",
          precio: 15,
          imagen: "https://cdn.pixabay.com/photo/2021/08/06/15/28/cocktail-6525519_1280.jpg",
          comentarios: ["Burbujas refrescantes.", "Sabor cítrico destacado."]
        },
        {
          nombre: "Emoliente",
          categoria: "bebida",
          descripcion: "Infusión caliente de hierbas con linaza.",
          origen: "Perú",
          ingredientes: "Hierbas, linaza, cebada, limón",
          precio: 6,
          imagen: "https://cdn.pixabay.com/photo/2018/01/22/18/03/herbal-tea-3099753_1280.jpg",
          comentarios: ["Reconfortante.", "Propiedades digestivas."]
        }
      ];

    const carrito = [];
    let detalleActualIndex = null;

    // Renderizar menú
    function renderMenu(filtro = "all", busqueda = "") {
      const contenedor = document.getElementById("menuContainer");
      contenedor.innerHTML = "";

      menu.forEach((item, index) => {
        const coincideFiltro = filtro === "all" || item.categoria === filtro;
        const coincideBusqueda = item.nombre.toLowerCase().includes(busqueda.toLowerCase());

        if (coincideFiltro && coincideBusqueda) {
          contenedor.innerHTML += `
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${item.nombre}</h5>
                  <p class="card-text">${item.descripcion}</p>
                  <p class="fw-bold mb-3">S/ ${item.precio}</p>
                  <div class="mt-auto">
                    <button class="btn btn-primary btn-sm me-2" onclick="verDetalle(${index})">Ver más</button>
                    <button class="btn btn-success btn-sm" onclick="agregarAlCarrito(${index})">Agregar</button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
    }

    // Ver detalles de platillo
    function verDetalle(index) {
      detalleActualIndex = index;
      const item = menu[index];

      document.getElementById("detalleNombre").textContent = item.nombre;
      document.getElementById("detalleDescripcion").textContent = item.descripcion;
      document.getElementById("detalleOrigen").textContent = item.origen;
      document.getElementById("detalleIngredientes").textContent = item.ingredientes;
      document.getElementById("detalleImagen").src = item.imagen;

      const comentariosList = document.getElementById("detalleComentarios");
      comentariosList.innerHTML = "";
      item.comentarios.forEach(comentario => {
        comentariosList.innerHTML += `<li class="list-group-item">${comentario}</li>`;
      });

      const modal = new bootstrap.Modal(document.getElementById("detalleModal"));
      modal.show();
    }

    // Agregar platillo al carrito
    function agregarAlCarrito(index) {
      carrito.push(menu[index]);
      actualizarCarrito();
      mostrarToast();
    }

    // Actualizar contenido del carrito
    function actualizarCarrito() {
      const carritoBody = document.getElementById("carritoBody");
      carritoBody.innerHTML = "";

      if (carrito.length === 0) {
        carritoBody.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
        return;
      }

      let total = 0;
      carritoBody.innerHTML = '<ul class="list-group mb-3">';
      carrito.forEach(item => {
        carritoBody.innerHTML += `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.nombre}
            <span>S/ ${item.precio}</span>
          </li>
        `;
        total += item.precio;
      });
      carritoBody.innerHTML += '</ul>';
      carritoBody.innerHTML += `<p class="text-end fw-bold">Total: S/ ${total}</p>`;
    }

    // Agregar comentario
    function agregarComentario() {
      const comentarioInput = document.getElementById("nuevoComentario");
      const comentario = comentarioInput.value.trim();

      if (comentario && detalleActualIndex !== null) {
        menu[detalleActualIndex].comentarios.push(comentario);
        comentarioInput.value = "";
        verDetalle(detalleActualIndex);
      }
    }

    // Mostrar toast de éxito
    function mostrarToast() {
      const toastEl = document.getElementById("successToast");
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }

    // Filtros y búsqueda
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        renderMenu(this.dataset.filter, document.getElementById("searchInput").value);
      });
    });

    document.getElementById("searchInput").addEventListener("input", function () {
      const filtroActual = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
      renderMenu(filtroActual, this.value);
    });

    // Inicializar menú
    renderMenu();
