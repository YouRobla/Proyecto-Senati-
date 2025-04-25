
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
          imagen: "https://www.gourmet.cl/wp-content/uploads/2022/08/papas-a-la-huancaina-ajustada-web-570x458.jpg",
          comentarios: ["El sabor de la salsa es inigualable.", "Ideal para compartir."]
        },
        {
          nombre: "Causa Limeña",
          categoria: "entrada",
          descripcion: "Pastel de papa amarilla relleno de pollo o atún con ají.",
          origen: "Perú",
          ingredientes: "Papa amarilla, pollo/atún, ají, limón, mayonesa",
          precio: 20,
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRq6SGMOz__NYYnyfLBOh238ZoLyz87ebI8Q&s",
          comentarios: ["Presentación colorida.", "Textura suave y sabrosa."]
        },
        {
          nombre: "Anticuchos",
          categoria: "entrada",
          descripcion: "Brochetas de corazón de res marinadas en ají panca.",
          origen: "Perú",
          ingredientes: "Corazón de res, ají panca, vinagre, comino, ajo",
          precio: 22,
          imagen: "https://imag.bonviveur.com/servimos-los-anticuchos-con-las-patatas.jpg",
          comentarios: ["Sabor ahumado único.", "Perfecto para picar."]
        },
        {
          nombre: "Tequeños",
          categoria: "entrada",
          descripcion: "Tiras de queso envueltas en masa de harina y fritas.",
          origen: "Venezuela",
          ingredientes: "Queso blanco, harina de trigo, huevo, aceite",
          precio: 16,
          imagen: "https://jameaperu.com/assets/images/tequenos_800x534.webp",
          comentarios: ["Crujientes por fuera.", "Queso derretido perfecto."]
        },
        {
          nombre: "Empanadas de Carne",
          categoria: "entrada",
          descripcion: "Masa rellena de carne sazonada con especias.",
          origen: "Argentina",
          ingredientes: "Carne picada, cebolla, huevo, aceitunas, masa",
          precio: 14,
          imagen: "https://comidasparaguayas.com/assets/images/empanada-de-carne_800x534.webp",
          comentarios: ["Relleno jugoso.", "Masa dorada perfecta."]
        },
        {
          nombre: "Tamales",
          categoria: "entrada",
          descripcion: "Masa de maíz rellena de carne envuelta en hoja de plátano.",
          origen: "México",
          ingredientes: "Masa de maíz, carne de cerdo, hoja de plátano, salsa",
          precio: 17,
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24BVNoo-tXvQwMxW7lsibGYLVMtd3AJJ6zYxkFDCgWOyhlrcur1UVhlNQT6A7tcH7S7GXYpSlfnvS0Azh6mv7FL1DtgR8zstDs1mAY9k",
          comentarios: ["Aroma increíble.", "Textura suave tradicional."]
        },
        {
          nombre: "Croquetas de Jamón",
          categoria: "entrada",
          descripcion: "Bolitas crujientes de bechamel con jamón ibérico.",
          origen: "España",
          ingredientes: "Jamón ibérico, leche, harina, pan rallado, huevo",
          precio: 19,
          imagen: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2023/12/14114831/croquetas-de-jamonmon-1024x683.jpg",
          comentarios: ["Cremosas por dentro.", "Sabor intenso a jamón."]
        },
        {
          nombre: "Bruschetta",
          categoria: "entrada",
          descripcion: "Rebanadas de pan tostado con tomate fresco y albahaca.",
          origen: "Italia",
          ingredientes: "Pan rústico, tomate, ajo, albahaca, aceite de oliva",
          precio: 15,
          imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdmcEBT_rbRV95XAslhEAkxIiiX4sQQ5KyGyKm4xbYlCSTdXuEWlJBpbmSN8rJRrqjdNo_T2UtxDo1V5UPw9VbhvTOKHZGxrKKhnjTIw",
          comentarios: ["Frescura mediterránea.", "Perfecto para empezar."]
        },
        {
          nombre: "Hummus con Pan Pita",
          categoria: "entrada",
          descripcion: "Puré de garbanzos con tahini y especias.",
          origen: "Medio Oriente",
          ingredientes: "Garbanzos, tahini, limón, ajo, comino",
          precio: 16,
          imagen: "data:image/jpeg;base64,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",
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
          imagen: "https://i.ytimg.com/vi/r2oGrH__hT0/maxresdefault.jpg",
          comentarios: ["Buen sabor, muy jugoso.", "Porción generosa."]
        },
        {
          nombre: "Ají de Gallina",
          categoria: "fondo",
          descripcion: "Plato tradicional peruano de pollo deshilachado en salsa cremosa de ají amarillo.",
          origen: "Perú",
          ingredientes: "Pollo, ají amarillo, leche evaporada, pan, nuez moscada, papa",
          precio: 28,
          imagen: "https://campograndeperu.com/wp-content/uploads/2024/07/aji-de-gallina-de-quinua.jpg",
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
          imagen: "https://th.bing.com/th/id/OIP.TlyEw4xFlGN5wUkA5TRGkgHaE8?w=282&h=188&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Delicados y dulces.", "Relleno cremoso."]
        },
        {
          nombre: "Pie de Limón",
          categoria: "postre",
          descripcion: "Base crujiente con crema ácida de limón y merengue.",
          origen: "EE.UU.",
          ingredientes: "Galletas, limón, leche condensada, merengue",
          precio: 14,
          imagen: "https://th.bing.com/th/id/OIP.IjIoZBa37XByrP8rYFxJoAHaEL?w=289&h=180&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Acidez equilibrada.", "Merengue tostado perfecto."]
        },
        {
          nombre: "Churros con Chocolate",
          categoria: "postre",
          descripcion: "Masa frita espolvoreada con azúcar y salsa de chocolate.",
          origen: "España",
          ingredientes: "Harina, agua, sal, azúcar, chocolate",
          precio: 11,
          imagen: "https://th.bing.com/th/id/OIP.7l8pHlMy2S58KAZPKzsh9AHaFj?w=247&h=185&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Crujientes por fuera.", "Chocolate espeso ideal."]
        },
        {
          nombre: "Mazamorra Morada",
          categoria: "postre",
          descripcion: "Postre espeso de maíz morado con frutas secas.",
          origen: "Perú",
          ingredientes: "Maíz morado, membrillo, frutas secas, canela",
          precio: 9,
          imagen: "https://th.bing.com/th/id/OIP.3anK9-t_UTdnBg3NH1kaswHaEF?w=310&h=180&c=7&r=0&o=5&pid=1.7",
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
          imagen: "https://th.bing.com/th/id/OIP.eUFFwkXa8cv0YWEViKFo6gHaE8?w=272&h=182&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Refrescante y natural.", "Un clásico peruano."]
        },
        {
          nombre: "Inca Kola",
          categoria: "bebida",
          descripcion: "Bebida gaseosa de sabor único, con un toque dulce y afrutado.",
          origen: "Perú",
          ingredientes: "Agua carbonatada, azúcar, colorante amarillo",
          precio: 6,
          imagen: "https://th.bing.com/th/id/OIP.icTUXnx4yw1PkCc00Trf-AHaFX?w=234&h=180&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Sabor único y refrescante.", "Mejor acompañante para platos peruanos."]
        },
        {
          nombre: "Pisco Sour",
          categoria: "bebida",
          descripcion: "Cóctel emblemático peruano con pisco, limón y clara de huevo.",
          origen: "Perú",
          ingredientes: "Pisco, limón, clara de huevo, jarabe de goma, amargo de angostura",
          precio: 18,
          imagen: "https://th.bing.com/th/id/OIP.ofpbYwHI1x_u2wm8kl_zUQHaE8?w=222&h=180&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Equilibrio perfecto.", "Espuma consistente."]
        },
        {
          nombre: "Jugo de Maracuyá",
          categoria: "bebida",
          descripcion: "Jugo natural de fruta de la pasión.",
          origen: "Perú",
          ingredientes: "Maracuyá, agua, azúcar",
          precio: 7,
          imagen: "https://th.bing.com/th/id/OIP.ex0JEroO7VhEIRr651SlKwHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Acidez refrescante.", "Natural sin conservantes."]
        },
        {
          nombre: "Cerveza Artesanal",
          categoria: "bebida",
          descripcion: "Cerveza rubia tipo IPA con lúpulo aromático.",
          origen: "Perú",
          ingredientes: "Agua, malta, lúpulo, levadura",
          precio: 12,
          imagen: "https://th.bing.com/th/id/OIP.JKLGJSi5I52XfTkm3oDY2wHaEo?w=303&h=189&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Amargor equilibrado.", "Aroma a cítricos."]
        },
        {
          nombre: "Mate de Coca",
          categoria: "bebida",
          descripcion: "Infusión de hojas de coca para el mal de altura.",
          origen: "Perú",
          ingredientes: "Hojas de coca, agua",
          precio: 5,
          imagen: "https://th.bing.com/th/id/OIP.JNolEiknqk5hHFTdOagaRwHaE8?w=288&h=192&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Alivia el soroche.", "Sabor herbal suave."]
        },
        {
          nombre: "Mojito",
          categoria: "bebida",
          descripcion: "Cóctel cubano con ron, menta y lima.",
          origen: "Cuba",
          ingredientes: "Ron blanco, lima, menta, azúcar, soda",
          precio: 16,
          imagen: "https://th.bing.com/th/id/OIP.YJsZs6LauICeg9pNyYZBsQHaE6?w=279&h=185&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Refrescante y herbáceo.", "Perfecto para el verano."]
        },
        {
          nombre: "Café Peruano",
          categoria: "bebida",
          descripcion: "Café de grano cultivado en Chanchamayo.",
          origen: "Perú",
          ingredientes: "Granos de café, agua",
          precio: 8,
          imagen: "https://th.bing.com/th/id/OIP.sjo4eCcADCMBnokTWYtGDQHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Aroma intenso.", "Acidez balanceada."]
        },
        {
          nombre: "Chilcano",
          categoria: "bebida",
          descripcion: "Cóctel de pisco con ginger ale y limón.",
          origen: "Perú",
          ingredientes: "Pisco, ginger ale, limón, amargo de angostura",
          precio: 15,
          imagen: "https://th.bing.com/th/id/OIP.d1Ik9texSnNjfyWR820bnwHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7",
          comentarios: ["Burbujas refrescantes.", "Sabor cítrico destacado."]
        },
        {
          nombre: "Emoliente",
          categoria: "bebida",
          descripcion: "Infusión caliente de hierbas con linaza.",
          origen: "Perú",
          ingredientes: "Hierbas, linaza, cebada, limón",
          precio: 6,
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUUlR3QfffrghAZqqiPB2JpAUBN9pJVo-9w&s",
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
