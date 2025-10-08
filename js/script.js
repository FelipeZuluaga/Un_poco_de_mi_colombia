const imagesData = [
    { id: 1, src: 'https://inaturalist-open-data.s3.amazonaws.com/photos/187383867/original.jpg', category: 'naturaleza', title: 'Oso de Anteojos', description: 'El oso de anteojos, también conocido como oso andino, es el único oso que habita en Sudamérica y se encuentra en Colombia. Es un animal emblemático de los Andes, y su presencia indica la salud de los ecosistemas andinos. En Colombia, se le puede encontrar en los tres ramales de la cordillera de los Andes, desde los bosques andinos hasta los páramos.', author: 'Astrid Arellano, Mongabay' },
    { id: 2, src: 'https://latinamericanpost.com/wp-content/uploads/2017/05/20170512Colombia-Condor-Andes.jpg', category: 'naturaleza', title: 'El Cóndor Andino', description: 'El cóndor andino, ave nacional de Colombia, es un símbolo de libertad y soberanía, y representa el patrimonio natural y cultural del país. Habita en la Cordillera de los Andes y juega un papel importante en el ecosistema como carroñero, ayudando a mantener la salud del medio ambiente. Sin embargo, la población de cóndores en Colombia es baja, con estimaciones de alrededor de 60 individuos, lo que ha generado preocupación por su conservación.', author: 'Carolina Morales, as Colombia' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06BamFmoCgZv7GuL6qhJhy4AOjweDCpmrGA&s', category: 'ciudades', title: 'Cartagena de Indias', description: 'Cartagena es una ciudad que está ubicada a orillas del Mar Caribe. Sus calles coloridas llenas de encanto la hacen la puerta de entrada a Suramérica. En Colombia, se encuentra al norte del país, y es la capital de la región de Bolívar. La Heroica, como la llaman, contempla a su alrededor varios archipiélagos e islas que son paraísos para un verdadero descanso.', author: 'COSALFA' },
    { id: 4, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Catedral-Bas%C3%ADlica-de-Nuestra-Se%C3%B1ora-de-la-Asunci%C3%B3n-de-Popay%C3%A1n-Colombia-1.jpg/500px-Catedral-Bas%C3%ADlica-de-Nuestra-Se%C3%B1ora-de-la-Asunci%C3%B3n-de-Popay%C3%A1n-Colombia-1.jpg', category: 'ciudades', title: 'Popayán', description: 'Popayán es uno de los destinos turísticos más relevantes del suroccidente colombiano. Es llamada comúnmente “la ciudad blanca” por el color de las casas que adornan su arquitectura colonial.', author: 'Carlos Jimenez' },
    { id: 5, src: 'https://hips.hearstapps.com/hmg-prod/images/colombian-painter-and-sculptor-fernando-botero-posing-in-news-photo-1695047979.jpg?crop=0.88889xw:1xh;center,top&resize=1200:*', category: 'Artistas', title: 'Fernando Botero', description: 'Botero ha sido uno de los artistas plásticos más reconocidos de Colombia en los últimos decenios. Su vastísima obra, en la actualidad plenamente consolidada, su deliberada aversión por el arte contemporáneo y su amplio conocimiento de la historia de la pintura clásica hacen de Botero un artista excepcional en el país y el resto de América Latina. Sus pinturas y dibujos son trabajos personalísimos que de ninguna manera se pueden confundir con las diversas posturas figurativas internacionales de los últimos años. Su arte es, hasta cierto punto, retrógrado y provinciano. Depende más del arte de los grandes maestros, del arte popular, de la tradición precolombina, de la imaginería del período colonial de América Latina.', author: 'Getty Images' },
    { id: 6, src: 'https://imagenes.eltiempo.com/files/og_thumbnail/uploads/2020/02/26/5e56be1240b38.jpeg', category: 'Artistas', title: 'Shakira', description: 'Shakira es ampliamente reconocida como un icono cultural y musical, trascendiendo fronteras geográficas y lingüísticas. Su impacto se extiende más allá de la música, abarcando también la cultura pop, el empoderamiento femenino, y el activismo social.', author: 'HIXGUITAR' },
    { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8uQFMROFzZ_P_jKstzVPXV_ek0mnTm6tQw&s', category: 'naturaleza', title: 'Delfin Rosado', description: 'El delfín rosado, también conocido como boto o delfín del Amazonas, es un cetáceo de agua dulce que habita en las cuencas de los ríos Amazonas y Orinoco, incluyendo Colombia. Es un animal icónico de la región debido a su coloración rosada y su gran tamaño. En Colombia, se encuentra en los ríos Amazonas y Orinoco, así como en sus afluentes y lagunas.', author: 'César Giraldo Zuluaga, El espectador' },
    { id: 8, src: 'https://www.passporttheworld.com/wp-content/uploads/2024/09/medellin-65-e1595584399186-1.jpg', category: 'ciudades', title: 'Medellin', description: 'Medellín se ha convertido en un referente en Colombia y el mundo. Su actividad comercial, industrial, cultural, religiosa, social y deportiva han traído desarrollo y un estilo de vida amable y prometedor. Su historia se remonta al siglo XVII, cuando comenzaría el proyecto que poco a poco se iría convirtiendo en el lugar que es hoy.', author: 'Carlos Ruiz' },
    { id: 9, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tW-HwAX8oL4rPvxCLPg5o7K7t2VwqF2T2g&s', category: 'Artistas', title: 'Mariana Pajon', description: 'Mariana Pajón Londoño es una deportista antioqueña de alto rendimiento, se desempeña desde hace más de 20 años en el BMX -disciplina del ciclismo y deporte extremo que se practica con bicicletas cross con ruedas de 20 pulgadas de diámetro- en modalidad carrera. Única colombiana y primera mujer latinoamericana con dos medallas olímpicas (Londres 2012 y Río de Janeiro 2016). Además de los Juegos Olímpicos, ha participado en los más destacados escenarios deportivos como Juegos Bolivarianos Suramericanos, Centroamericanos y del Caribe, Panamericanos, Campeonatos Mundiales de Ciclismo y Copa Mundo BMX Supercross. Constancia, mística y disciplina forjadas desde la niñez, caracterizan a esta campeona.', author: 'Banco de la republica' }
];

const galeriaImagenesSection = document.getElementById('galeria-imagenes');
const filterButtons = document.querySelectorAll('#filtros .btn');
const imagenAmpliada = document.getElementById('imagen-ampliada');
const tituloImagen = document.getElementById('titulo-imagen');
const descripcionImagen = document.getElementById('descripcion-imagen');
const autorImagen = document.getElementById('autor-imagen');

// Función para renderizar las imágenes en la galería

function renderImages(filter = 'all') {
    if (!galeriaImagenesSection) return;

    galeriaImagenesSection.innerHTML = '';
    const filteredImages = filter === 'all' ? imagesData : imagesData.filter(img => img.category === filter);

    filteredImages.forEach(image => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4', 'image-item');
        colDiv.innerHTML = `
                <div class="card h-100">
                    <img src="${image.src}" class="card-img-top" alt="${image.title}">
                    <div class="card-body">
                        <h5 class="card-title">${image.title}</h5>
                        <p class="card-text">${image.description.substring(0, 100)}...</p>
                        <a href="detalle-imagen.html?id=${image.id}" class="btn btn-primary btn-sm">Ver Detalles</a>
                    </div>
                </div>
            `;
        galeriaImagenesSection.appendChild(colDiv);
    });
}

// Función para cargar el detalle de una imagen

function loadImageDetail() {
    if (!imagenAmpliada) return;

    const urlParams = new URLSearchParams(window.location.search);
    const imageId = parseInt(urlParams.get('id'));
    const image = imagesData.find(img => img.id === imageId);

    if (image) {
        imagenAmpliada.src = image.src;
        imagenAmpliada.alt = image.title;
        tituloImagen.textContent = image.title;
        descripcionImagen.textContent = image.description;
        autorImagen.textContent = image.author;
    } else {
        // Manejar caso donde no se encuentra la imagen
        tituloImagen.textContent = 'Imagen no encontrada';
        descripcionImagen.textContent = 'imagen no encontrada.';
        imagenAmpliada.src = 'https://via.placeholder.com/600x400?text=Imagen+No+Encontrada';
        autorImagen.textContent = '';
    }
}

// Lógica para la página de la galería

if (galeriaImagenesSection) {

    // Cargar todas las imágenes al inicio

    renderImages('all');

    // Manejar los filtros

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            renderImages(filter);
        });
    });

    // Aplicar filtro 

    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('category');
    if (categoryFromUrl) {
        renderImages(categoryFromUrl);

        // Activar el filtro correspondiente

        const activeFilterButton = document.querySelector(`#filtros .btn[data-filter="${categoryFromUrl}"]`);
        if (activeFilterButton) {
            activeFilterButton.classList.add('active');
        }
    } else {

        // que sean todas

        const allButton = document.querySelector('#filtros .btn[data-filter="all"]');
        if (allButton) {
            allButton.classList.add('active');
        }
    }
}

// detalle de imagen

if (imagenAmpliada && tituloImagen && descripcionImagen && autorImagen) {
    loadImageDetail();
}

// formulario de contacto 

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        formMessage.innerHTML = '';

        let isValid = true;
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');

        // Validación de informacion

        if (nombre.value.trim() === '') {
            nombre.classList.add('is-invalid');
            isValid = false;
        } else {
            nombre.classList.remove('is-invalid');
        }

        if (email.value.trim() === '' || !email.value.includes('@')) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (mensaje.value.trim() === '') {
            mensaje.classList.add('is-invalid');
            isValid = false;
        } else {
            mensaje.classList.remove('is-invalid');
        }

        if (isValid) {

            // envío de formulario

            setTimeout(() => {
                formMessage.classList.remove('alert-danger');
                formMessage.classList.add('alert', 'alert-success');
                formMessage.textContent = '¡Mensaje enviado con éxito! Te responderemos pronto.';
                contactForm.reset();
            }, 500);
        } else {
            formMessage.classList.remove('alert-success');
            formMessage.classList.add('alert', 'alert-danger');
            formMessage.textContent = 'Por favor, corrige los errores en el formulario.';
        }
    });
}


