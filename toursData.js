const scriptTag = document.querySelector('script[src*="turismo-script.js"]') || document.querySelector('script[src*="ofertas.js"]');
let basePath = '';
if (scriptTag) {
    const src = scriptTag.getAttribute('src');
    if (src.includes('turismo-script.js')) {
        basePath = src.substring(0, src.indexOf('turismo-script.js'));
    } else if (src.includes('ofertas.js')) {
        basePath = src.substring(0, src.indexOf('ofertas.js'));
    }
}


export const toursData = {
    'uyuni-1-dia-privado': {
        //info
        title: 'Salar de Uyuni',
        titleEn: 'Uyuni Salt Flats Tour 1 Day - Private',
        duration: '1 Day',
        durationEn: '1 Day',
        type: 'Privado',
        typeEn: 'Private',
        groupSize: 'Máximo 4 personas',
        groupSizeEn: 'Maximum 4 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/salar1.jpeg',
        overview: 'Salar de Uyuni, a menudo aclamado como la "Joya" de Bolivia, es un destino único y cautivador en América del Sur. Con una extensión de más de 10,000 kilómetros cuadrados, este vasto desierto de sal es una de las atracciones más espectaculares del planeta. En esta excursión clásica, verás las locomotoras del Cementerio de Trenes, aprenderás sobre la producción tradicional de sal en Colchani, posarás para fotos divertidas con efectos ópticos y explorarás la Isla Incahuasi, un oasis de cactus gigantes en medio de la inmensidad blanca.',
        overviewEn: 'Explore the impressive Uyuni Salt Flats, visiting the Train Cemetery, the salt eyes, the salt hotel, and the magical Incahuasi Island at sunset.',
        recommendations: [
            'Lentes de sol (imprescindible debido al reflejo)',
            'Protector solar de factor alto',
            'Ropa abrigada (cortavientos) para el final de la tarde',
            'Cámara fotográfica o celular con suficiente batería',
        ],
        recommendationsEn: [
            'Sunglasses (essential due to reflection)',
            'High factor sunscreen',
            'Warm clothing (windbreaker) for the late afternoon',
            'Camera or cell phone with enough battery',
        ],
        included: [
            'Almuerzo con opción vegetariana (avisar con anticipación)',
            'Transporte en vehículo Toyota Land Cruiser o Lexus 4x4',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios básico',
        ],
        includedEn: [
            'Lunch with vegetarian option (notify in advance)',
            'Transport in Toyota Land Cruiser or Lexus 4x4 vehicle',
            'Driver / local guide in Spanish, English guide at additional cost',
            'Basic first aid kit',
        ],
        excluded: [
            'Entrada a la Isla Incahuasi (30 Bs extranjeros / 15 Bs nacionales)',
        ],
        excludedEn: [
            'Entrance to Incahuasi Island (30 Bs foreigners / 15 Bs nationals)',
        ],
        itinerary: [
            {
                day: '10:00 AM',
                title: 'Preparacion para el tour',
                desc: 'Nos preparamos para el tour, nos reunimos en la oficina para brindarle informacion de lo que se ara durante el tour.'
            },
            {
                day: '11:00 AM',
                title: 'Cementerio de Trenes',
                desc: 'Comenzamos con la visita al Cementerio de Trenes, donde descansan las antiguas locomotoras Inglesas y Francesas de finales del siglo XIX.'
            },
            {
                day: '12:00 PM',
                title: 'Comunidad de Colchani',
                desc: 'El pueblo de Colchani,  principal centro de procesamiento artesanal de sal, donde conocerás los métodos de extracción y podrás adquirir souvenirs hechos de sal pura.'
            },
            {
                day: '13:30 PM',
                title: 'Gran Salar de Uyuni',
                desc: 'Nos adentramos en la inmensa planicie salina. Observaremos los curiosos “Ojos de Sal” (puntos de escape de agua subterránea fría) y visitaremos el antiguo Hotel de Sal Playa Blanca, que hoy funciona como museo. Cerca del hotel se encuentra el monumento de sal del Dakar y la icónica plaza de banderas de todo el mundo.'
            },
            {
                day: '15:30 PM',
                title: 'Isla Incahuasi',
                desc: 'Llegamos a la Isla Incahuasi, un cerro rocoso rodeado enteramente por la sal. Caminamos por el sendero rodeado de cactus gigantes centenarios  de hasta 10 metros hasta la cima para contemplar la vista panorámica del salar (Sujeto a condiciones del Salar en época de lluvia.).'
            },
            {
                day: '18:00 PM',
                title: 'Atardecer en el Salar y Brindis',
                desc: 'Nos detenemos en una zona aislada para disfrutar de una copa de cortesía y un snack mientras contemplamos el mágico atardecer sobre el salar. El horizonte se tiñe de colores rojizos y violetas. Finalmente, regresamos a Uyuni'
            }
        ],
        itineraryEn: [
            {
                day: '10:00 AM',
                title: 'Tour Preparation',
                desc: 'We get ready for the tour, meeting at the office to provide information about the itinerary.'
            },
            {
                day: '11:00 AM',
                title: 'Train Cemetery',
                desc: 'We start with a visit to the Train Cemetery, where the old English and French locomotives from the late 19th century rest.'
            },
            {
                day: '12:00 PM',
                title: 'Colchani',
                desc: 'The town of Colchani, main center for artisanal salt processing, where you will learn about extraction methods and can purchase souvenirs made from pure salt.'
            },
            {
                day: '13:30 PM',
                title: 'Great Salt Flats',
                desc: 'We enter the immense salt plain. We will observe the curious "Salt Eyes" (points of escape for cold underground water) and visit the old Playa Blanca Salt Hotel, which now functions as a museum. Near the hotel is the Dakar salt monument and the iconic flag square of the world.'
            },
            {
                day: '15:30 PM',
                title: 'Incahuasi Island',
                desc: 'We arrive at Incahuasi Island, a rocky hill completely surrounded by salt. We walk along the path surrounded by giant ancient cacti (some over 10 meters) to the top to contemplate the panoramic view of the salt flats.(Subject to conditions of the Salt Flats during the rainy season.)'
            },
            {
                day: '18:00 PM',
                title: 'Sunset on the Salt and Toast',
                desc: 'We stop in an isolated area to enjoy a complimentary drink while contemplating the magical sunset over the salt flats. The horizon is tinged with reddish and violet colors. Finally, we return to Uyuni.'
            }
        ],
        faqs: [
            {
                q: '¿Se puede hacer el tour en época de lluvias?',
                a: 'Sí, pero el itinerario se modifica. Durante la época de lluvias (enero a abril), el salar se inunda y se genera el maravilloso efecto espejo, pero el agua impide llegar a la Isla Incahuasi por seguridad.'
            },
            {
                q: '¿Se requiere reserva anticipada?',
                a: 'Se recomienda reservar con al menos 48 horas de anticipación para asegurar disponibilidad de vehículos y guías.'
            }
        ],
        faqsEn: [
            {
                q: 'Can the tour be done during the rainy season?',
                a: 'Yes, but the itinerary is modified. During the rainy season (January to April), the salt flats flood and the marvelous mirror effect is generated, but the water prevents reaching Incahuasi Island for safety.'
            },
            {
                q: 'Is advance booking required?',
                a: 'It is recommended to book at least 48 hours in advance to ensure vehicle and guide availability.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },
    'uyuni-1-dia': {
        //info
        title: 'Salar de Uyuni 1 dia',
        titleEn: 'Uyuni Salt Flats Tour 1 Day',
        duration: '1 Día',
        durationEn: '1 Day',
        type: 'Compartido',
        typeEn: 'Shared',
        groupSize: 'Maximo 6 personas',
        groupSizeEn: 'Maximum 6 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/incahuasi.jpeg',
        overview: 'Salar de Uyuni, a menudo aclamado como la "Joya" de Bolivia, es un destino único y cautivador en América del Sur. Con una extensión de más de 10,000 kilómetros cuadrados, este vasto desierto de sal es una de las atracciones más espectaculares del planeta. En esta excursión clásica, verás las locomotoras del Cementerio de Trenes, aprenderás sobre la producción tradicional de sal en Colchani, posarás para fotos divertidas con efectos ópticos y explorarás la Isla Incahuasi, un oasis de cactus gigantes en medio de la inmensidad blanca.',
        overviewEn: 'Salar de Uyuni, often hailed as the "Jewel" of Bolivia, is a unique and captivating destination in South America. Covering over 10,000 square kilometers, this vast salt desert is one of the most spectacular attractions on the planet. In this classic excursion, you will see the locomotives of the Train Cemetery, learn about traditional salt production in Colchani, take fun perspective photos, and explore Incahuasi Island, an oasis of giant cacti in the middle of the white immensity.',
        recommendations: [
            'Lentes de sol (imprescindible debido al reflejo)',
            'Protector solar de factor alto',
            'Ropa abrigada (cortavientos) para el final de la tarde',
            'Cámara fotográfica o celular con suficiente batería',
        ],
        recommendationsEn: [
            'Sunglasses (essential due to reflection)',
            'High factor sunscreen',
            'Warm clothing (windbreaker) for the late afternoon',
            'Camera or cell phone with enough battery',
        ],
        included: [
            'Almuerzo con opción vegetariana (avisar con anticipación)',
            'Transporte en vehículo Toyota Land Cruiser o Lexus 4x4',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios básico',
        ],
        includedEn: [
            'Lunch with vegetarian option (notify in advance)',
            'Transport in Toyota Land Cruiser or Lexus 4x4 vehicle',
            'Driver / local guide in Spanish, English guide at additional cost',
            'Basic first aid kit',
        ],
        excluded: [
            'Entrada a la Isla Incahuasi (30 Bs extranjeros / 15 Bs nacionales)',
        ],
        excludedEn: [
            'Entrance to Incahuasi Island (30 Bs foreigners / 15 Bs nationals)',
        ],
        itinerary: [
            {
                day: '10:00 AM',
                title: 'Preparacion para el tour',
                desc: 'Nos preparamos para el tour, nos reunimos en la oficina para brindarle informacion de lo que se ara durante el tour.'
            },
            {
                day: '11:00 AM',
                title: 'Cementerio de Trenes',
                desc: 'Comenzamos con la visita al Cementerio de Trenes, donde descansan las antiguas locomotoras Inglesas y Francesas de finales del siglo XIX.'
            },
            {
                day: '12:00 PM',
                title: 'Comunidad de Colchani',
                desc: 'El pueblo de Colchani,  principal centro de procesamiento artesanal de sal, donde conocerás los métodos de extracción y podrás adquirir souvenirs hechos de sal pura.'
            },
            {
                day: '13:30 PM',
                title: 'Gran Salar de Uyuni',
                desc: 'Nos adentramos en la inmensa planicie salina. Observaremos los curiosos “Ojos de Sal” (puntos de escape de agua subterránea fría) y visitaremos el antiguo Hotel de Sal Playa Blanca, que hoy funciona como museo. Cerca del hotel se encuentra el monumento de sal del Dakar y la icónica plaza de banderas de todo el mundo.'
            },
            {
                day: '15:30 PM',
                title: 'Isla Incahuasi',
                desc: 'Llegamos a la Isla Incahuasi, un cerro rocoso rodeado enteramente por la sal. Caminamos por el sendero rodeado de cactus gigantes centenarios  de hasta 10 metros hasta la cima para contemplar la vista panorámica del salar (Sujeto a condiciones del Salar en época de lluvia.).'
            },
            {
                day: '18:00 PM',
                title: 'Atardecer en el Salar',
                desc: 'Nos detenemos en punto estrategico del salar para contemplar el mágico atardecer sobre el salar. Luego emprendemos el viaje de retourno a Uyuni'
            }
        ],
        itineraryEn: [
            {
                day: '10:00 AM',
                title: 'Tour Preparation',
                desc: 'We get ready for the tour, meeting at the office to provide information about the itinerary.'
            },
            {
                day: '11:00 AM',
                title: 'Train Cemetery',
                desc: 'We start with a visit to the Train Cemetery, where the old English and French locomotives from the late 19th century rest.'
            },
            {
                day: '12:00 PM',
                title: 'Colchani',
                desc: 'The town of Colchani, main center for artisanal salt processing, where you will learn about extraction methods and can purchase souvenirs made from pure salt.'
            },
            {
                day: '13:30 PM',
                title: 'Great Salt Flats',
                desc: 'We enter the immense salt plain. We will observe the curious "Salt Eyes" (points of escape for cold underground water) and visit the old Playa Blanca Salt Hotel, which now functions as a museum. Near the hotel is the Dakar salt monument and the iconic flag square of the world.'
            },
            {
                day: '15:30 PM',
                title: 'Incahuasi Island',
                desc: 'We arrive at Incahuasi Island, a rocky hill completely surrounded by salt. We walk along the path surrounded by giant ancient cacti (some over 10 meters) to the top to contemplate the panoramic view of the salt flats.(Subject to conditions of the Salt Flats during the rainy season.)'
            },
            {
                day: '18:00 PM',
                title: 'Sunset on the Salt',
                desc: 'We stop in strategic point of the salt flats to contemplate the magical sunset over the salt flats. Then we begin the return trip to Uyuni.'
            }
        ],
        faqs: [
            {
                q: '¿Se puede hacer el tour en época de lluvias?',
                a: 'Sí, pero el itinerario se modifica. Durante la época de lluvias (enero a abril), el salar se inunda y se genera el maravilloso efecto espejo, pero el agua impide llegar a la Isla Incahuasi por seguridad.'
            },
            {
                q: '¿Se requiere reserva anticipada?',
                a: 'Se recomienda reservar con al menos 48 horas de anticipación para asegurar disponibilidad de vehículos y guías.'
            }
        ],
        faqsEn: [
            {
                q: 'Can the tour be done during the rainy season?',
                a: 'Yes, but the itinerary is modified. During the rainy season (January to April), the salt flats flood and the marvelous mirror effect is generated, but the water prevents reaching Incahuasi Island for safety.'
            },
            {
                q: 'Is advance booking required?',
                a: 'It is recommended to book at least 48 hours in advance to ensure vehicle and guide availability.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },
    'uyuni-2-dias-privado': {
        title: 'Salar de Uyuni y Lagunas',
        titleEn: 'Uyuni Salt Flats and Lagoons',
        duration: '2 Días / 1 Noche',
        durationEn: '2 Days / 1 Night',
        type: 'Privado',
        typeEn: 'Private',
        groupSize: 'Máximo 4 personas',
        groupSizeEn: 'Maximum 4 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/salar.jpeg',
        overview: 'Nuestra excursión de 2 días y 1 noche te lleva más allá de la ruta clásica. Además de recorrer el desierto blanco en su totalidad, nos adentramos en el altiplano boliviano para descubrir misteriosas formaciones rocosas esculpidas por el viento, lagunas escondidas rodeadas de abundante fauna silvestre y pernoctar en un hospedaje hecho íntegramente de bloques de sal en las orillas del salar.',
        overviewEn: 'Our 2-day, 1-night tour takes you beyond the classic route. In addition to exploring the white desert in its entirety, we venture into the Bolivian highlands to discover mysterious wind-sculpted rock formations, hidden lagoons surrounded by abundant wildlife, and spend the night in accommodation made entirely of salt blocks on the shores of the salt flats.',
        recommendations: [
            'Ropa muy abrigada para la noche (capas térmicas de abrigo)',
            'Lentes de sol con protección UV y protector solar',
            'Batería portátil (cargador de celular para la ruta)',
            'Efectivo en Bolivianos para entradas y servicios higiénicos',
            'Bálsamo labial y crema hidratante (clima muy seco y ventoso)'
        ],
        recommendationsEn: [
            'Very warm clothing for the night (thermal thermal layers)',
            'UV protection sunglasses and sunscreen',
            'Portable battery (cell phone charger for the route)',
            'Cash in Bolivianos for tickets and restrooms',
            'Lip balm and moisturizing cream (very dry and windy climate)'
        ],
        included: [
            'Almuerzo, cena del día 1, desayuno y almuerzo del día 2 (opción vegetariana)',
            'Transporte en Toyota Land Cruiser o Lexus 4x4 equipado',
            'Hospedaje básico de sal (habitaciones dobles/triples con baño compartido)',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios'
        ],
        includedEn: [
            'Lunch, dinner on day 1, breakfast and lunch on day 2 (vegetarian option)',
            'Transportation in equipped Toyota Land Cruiser or Lexus 4x4',
            'Basic salt accommodation (double/triple rooms with shared bathroom)',
            'Local driver/guide in Spanish, English guide available at additional cost',
            'First aid kit'
        ],
        excluded: [
            'Entrada a la Isla Incahuasi (30 Bs por persona)',
        ],
        excludedEn: [
            'Entrance to Incahuasi Island (30 Bs per person)',
        ],
        itinerary: [
            {
                day: 'Día 1',
                title: '',
                desc: ''
            },
            {
                day: '10:00 AM',
                title: 'Preparacion para el tour',
                desc: 'Nos preparamos para el tour, nos reunimos en la oficina para brindarle informacion de lo que se ara durante el tour.'
            },
            {
                day: '11:00 AM',
                title: 'Cementerio de Trenes',
                desc: 'Comenzamos con la visita al Cementerio de Trenes, donde descansan las antiguas locomotoras Inglesas y Francesas de finales del siglo XIX.'
            },
            {
                day: '12:00 PM',
                title: 'Comunidad de Colchani',
                desc: 'El pueblo de Colchani,  principal centro de procesamiento artesanal de sal, donde conocerás los métodos de extracción y podrás adquirir souvenirs hechos de sal pura.'
            },
            {
                day: '13:30 PM',
                title: 'Gran Salar de Uyuni',
                desc: 'Nos adentramos en la inmensa planicie salina. Observaremos los curiosos “Ojos de Sal” (puntos de escape de agua subterránea fría) y visitaremos el antiguo Hotel de Sal Playa Blanca, que hoy funciona como museo. Cerca del hotel se encuentra el monumento de sal del Dakar y la icónica plaza de banderas de todo el mundo.'
            },
            {
                day: '15:30 PM',
                title: 'Isla Incahuasi',
                desc: 'Llegamos a la Isla Incahuasi, un cerro rocoso rodeado enteramente por la sal. Caminamos por el sendero rodeado de cactus gigantes centenarios  de hasta 10 metros hasta la cima para contemplar la vista panorámica del salar (Sujeto a condiciones del Salar en época de lluvia.).'
            },
            {
                day: '18:00 PM',
                title: 'Atardecer en el Salar y Brindis',
                desc: 'Nos detenemos en una zona aislada para disfrutar de una copa de cortesía y un snack mientras contemplamos el mágico atardecer sobre el salar. El horizonte se tiñe de colores rojizos y violetas. Finalmente, regresamos a Uyuni'
            },
            {
                day: '20:00 PM',
                title: 'Llegada al Hotel',
                desc: 'Llegada al hotel, registro y tiempo libre para descansar.'
            },
            {
                day: 'Día 2',
                title: '',
                desc: ''
            },
            {
                day: '08:00 AM',
                title: 'Desayuno y Preparacion para el tour',
                desc: 'Después de un delicioso desayuno, salimos del alojamiento entre las 6:00 y las 7:00 AM para continuar con las paradas'
            },
            {
                day: '09:00 AM',
                title: 'Pueblo minero de Pulacayo',
                desc: 'Visitamos el pueblo minero de Pulacayo, un lugar histórico donde se encuentra uno de los yacimientos de plata más importantes de Bolivia.'
            },
            {
                day: '11:00 AM',
                title: 'Pueblo de Tomave',
                desc: 'Tomave es un punto clave la region andina, donde podremos ver su magnifica iglesia y la ciudad de piedra'
            },
            {
                day: '12:00 PM',
                title: 'Almuerzo',
                desc: 'Disfrutaremos de un almuerzo caliente.'
            }, {
                day: '14:00 PM',
                title: 'Lagunas Celeste y Verde',
                desc: 'Conoceremos las lagunas Celeste y Verde, dos lagunas de colores, una experiencia unica para los ojos.'
            },
            {
                day: '16:00 PM',
                title: 'Aguas Termales y sauna',
                desc: 'Disfrutaremos de un baño relajante en las aguas termales y un merecido descanso en el sauna.'
            },
            {
                day: '18:00 PM',
                title: 'Retorno a Uyuni',
                desc: 'Retornaremos a la ciudad de Uyuni.'
            }
        ],
        itineraryEn: [
            {
                day: 'Day 1',
                title: '',
                desc: ''
            },
            {
                day: '10:00 AM',
                title: 'Tour Preparation',
                desc: 'We get ready for the tour, meeting at the office to provide information about the itinerary.'
            },
            {
                day: '11:00 AM',
                title: 'Train Cemetery',
                desc: 'We start with a visit to the Train Cemetery, where the old English and French locomotives from the late 19th century rest.'
            },
            {
                day: '12:00 PM',
                title: 'Colchani',
                desc: 'The town of Colchani, main center for artisanal salt processing, where you will learn about extraction methods and can purchase souvenirs made from pure salt.'
            },
            {
                day: '13:30 PM',
                title: 'Great Salt Flats',
                desc: 'We enter the immense salt plain. We will observe the curious "Salt Eyes" (points of escape for cold underground water) and visit the old Playa Blanca Salt Hotel, which now functions as a museum. Near the hotel is the Dakar salt monument and the iconic flag square of the world.'
            },
            {
                day: '15:30 PM',
                title: 'Incahuasi Island',
                desc: 'We arrive at Incahuasi Island, a rocky hill completely surrounded by salt. We walk along the path surrounded by giant ancient cacti (some over 10 meters) to the top to contemplate the panoramic view of the salt flats.(Subject to conditions of the Salt Flats during the rainy season.)'
            },
            {
                day: '18:00 PM',
                title: 'Sunset on the Salt and Toast',
                desc: 'We stop in an isolated area to enjoy a complimentary drink while contemplating the magical sunset over the salt flats. The horizon is tinged with reddish and violet colors. Finally, we return to Uyuni.'
            },
            {
                day: '20:00 PM',
                title: 'Accommodation in Hotel',
                desc: 'We arrive at the hotel. Check-in and free time to rest. Optional: walk around the hotel and enjoy the views.'
            },
            {
                day: 'Day 2',
                title: '',
                desc: ''
            },
            {
                day: '07:00 AM',
                title: 'Breakfast and Tour Preparation',
                desc: 'After a delicious breakfast, we leave the accommodation between 6:00 and 7:00 AM to continue with the stops.'
            },
            {
                day: '09:00 AM',
                title: 'Pulacayo Mining Town',
                desc: 'Visit the historic mining town of Pulacayo, one of the most important silver deposits in Bolivia.'
            },
            {
                day: '11:00 AM',
                title: 'Tomave',
                desc: 'Tomave is a key point in the Andean region, where we can see its magnificent church and the stone city.'
            },
            {
                day: '12:00 PM',
                title: 'Lunch',
                desc: 'We will enjoy a hot lunch.'
            },
            {
                day: '14:00 PM',
                title: 'Celeste and Verde Lagoons',
                desc: 'We will visit the Celeste and Verde lagoons, two lagoons of different colors, a unique experience for the eyes.'
            },
            {
                day: '16:00 PM',
                title: 'Hot Springs and Sauna',
                desc: 'Enjoy a relaxing dip in the hot springs and a well-deserved rest in the sauna.'
            },
            {
                day: '18:00 PM',
                title: 'Return to Uyuni',
                desc: 'We will return to the city of Uyuni.'
            }
        ],
        faqs: [
            {
                q: '¿Cómo es el hotel de sal en el que dormimos?',
                a: 'El hospedaje es una estructura única hecha con bloques de sal (las paredes, mesas y camas están esculpidas en sal). Cuenta con electricidad en horas específicas, baños compartidos y duchas de agua caliente de pago. Brinda una experiencia muy rústica y acogedora.'
            },
            {
                q: '¿Hay señal telefónica en el camino?',
                a: 'No, durante la mayor parte del segundo día no habrá señal celular ni datos móviles. Es una oportunidad perfecta para desconectarse y disfrutar de la naturaleza.'
            }
        ],
        faqsEn: [
            {
                q: 'What is the salt hotel where we sleep like?',
                a: 'The accommodation is a unique structure made with salt blocks (the walls, tables, and beds are carved from salt). It has electricity at specific hours, shared bathrooms, and paid hot showers. It offers a very rustic and cozy experience.'
            },
            {
                q: 'Is there cell phone signal on the way?',
                a: 'No, during most of the second day there will be no cell phone signal or mobile data. It is a perfect opportunity to disconnect and enjoy nature.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },
    'uyuni-3-dia-privado': {
        title: 'Salar de Uyuni — Desiertos Blancos y Lagunas de Colores',
        titleEn: 'Uyuni Salt Flats - White Deserts and Colored Lagoons',
        duration: '3 Días / 2 Noches',
        durationEn: '3 Days / 2 Nights',
        type: 'Privado',
        typeEn: 'Private',
        groupSize: 'Máximo 4 personas',
        groupSizeEn: 'Maximum 4 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/desiertos-priv.jpeg',
        overview: 'Nuestra expedición de 3 días es la aventura definitiva en el altiplano de Bolivia. Recorrerás no solo el majestuoso Salar de Uyuni, sino también la Reserva Nacional de Fauna Andina Eduardo Avaroa, hogar de la impresionante Laguna Colorada (poblada por miles de flamencos), la Laguna Verde a los pies del imponente Volcán Licancabur, aguas termales naturales y singulares esculturas de piedra naturales.',
        overviewEn: 'Our 3-day expedition is the ultimate adventure in the Bolivian highlands. You will explore not only the majestic Salar de Uyuni but also the Eduardo Avaroa National Andean Fauna Reserve, home to the stunning Laguna Colorada (populated by thousands of flamingos), Laguna Verde at the foot of the imposing Volcán Licancabur, natural hot springs, and unique natural stone sculptures.',
        recommendations: [
            'Ropa térmica muy abrigada (temperaturas de hasta -10°C en las noches)',
            'Traje de baño y toalla para las aguas termales de Polques',
            'Lentes de sol polarizados y protector solar FPS 50+',
        ],
        recommendationsEn: [
            'Very warm thermal clothing (temperatures up to -10°C at night)',
            'Swimsuit and towel for the Polques thermal springs',
            'Polarized sunglasses and SPF 50+ sunscreen',
        ],
        included: [
            'Todas las comidas (desayunos, almuerzos y cenas) con opción vegetariana',
            'Transporte en vehículo 4x4 adaptado para desierto y caminos de tierra',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios y tubo de oxígeno',
            'Noche 1: San Juan, con opción a habitaciones privadas, cada una equipada con baño privado.',
            'Noche 2: Huayllajara, con opción a habitaciones privadas, cada una equipada con baño privado.'
        ],
        includedEn: [
            'All meals (breakfast, lunch, and dinner) with vegetarian option',
            'Transportation in 4x4 vehicle adapted for desert and dirt roads',
            'Driver / local guide in Spanish, English guide for an additional cost',
            'First aid kit and oxygen tank',
            'Night 1: San Juan, with option to private rooms, each equipped with private bathroom.',
            'Night 2: Huayllajara, with option to private rooms, each equipped with private bathroom.'
        ],
        excluded: [
            'Entrada a la Reserva Eduardo Avaroa (150 Bs)',
            'Entrada a la Isla Incahuasi (30 Bs)',
            'Ingreso a las Aguas Termales de Polques (10 Bs)',
            'Duchas calientes en los refugios (aprox. 30 Bs)',
        ],
        excludedEn: [
            'Entrance to Eduardo Avaroa Reserve (150 Bs)',
            'Entrance to Incahuasi Island (30 Bs)',
            'Entrance to Polques Thermal Springs (10 Bs)',
            'Hot showers in the shelters (approx. 30 Bs)',
        ],
        itinerary: [
            {
                day: 'Día 1',
                title: '',
                desc: ''
            },
            {
                day: '10:00 AM',
                title: 'Preparacion para el tour',
                desc: 'Nos preparamos para el tour, nos reunimos en la oficina para brindarle informacion de lo que se ara durante el tour.'
            },
            {
                day: '11:00 AM',
                title: 'Cementerio de Trenes',
                desc: 'Comenzamos con la visita al Cementerio de Trenes, donde descansan las antiguas locomotoras Inglesas y Francesas de finales del siglo XIX.'
            },
            {
                day: '12:00 PM',
                title: 'Comunidad de Colchani',
                desc: 'El pueblo de Colchani,  principal centro de procesamiento artesanal de sal, donde conocerás los métodos de extracción y podrás adquirir souvenirs hechos de sal pura.'
            },
            {
                day: '13:30 PM',
                title: 'Gran Salar de Uyuni',
                desc: 'Nos adentramos en la inmensa planicie salina. Observaremos los curiosos “Ojos de Sal” (puntos de escape de agua subterránea fría) y visitaremos el antiguo Hotel de Sal Playa Blanca, que hoy funciona como museo. Cerca del hotel se encuentra el monumento de sal del Dakar y la icónica plaza de banderas de todo el mundo.'
            },
            {
                day: '15:30 PM',
                title: 'Isla Incahuasi',
                desc: 'Llegamos a la Isla Incahuasi, un cerro rocoso rodeado enteramente por la sal. Caminamos por el sendero rodeado de cactus gigantes centenarios  de hasta 10 metros hasta la cima para contemplar la vista panorámica del salar (Sujeto a condiciones del Salar en época de lluvia.).'
            },
            {
                day: '18:00 PM',
                title: 'Atardecer en el Salar y Brindis',
                desc: 'Nos detenemos en una zona aislada para disfrutar de una copa de cortesía y un snack mientras contemplamos el mágico atardecer sobre el salar. El horizonte se tiñe de colores rojizos y violetas. Finalmente, regresamos a Uyuni'
            },
            {
                day: '20:00 PM',
                title: 'Llegada al Hotel de sal en San Juan',
                desc: 'Llegada al hotel, registro y tiempo libre para descansar.'
            },
            {
                day: 'Día 2',
                title: '',
                desc: ''
            },
            {
                day: '08:00 AM',
                title: 'Desayuno y Preparacion para el tour',
                desc: 'Después de un delicioso desayuno, salimos del alojamiento entre las 6:00 y las 7:00 AM para continuar con las paradas'
            },
            {
                day: '09:00 AM',
                title: 'Salar de Chiguana',
                desc: 'Un salar mas pequeño que el de Uyuni pero igual de hermoso, con colores rojizos y una flora diferente ademas de un vistaso por el imponente mirador del Volcán Ollague'
            },
            {
                day: '11:00 AM',
                title: 'Lagunas Cañapa y Hedionda',
                desc: 'Disfrutaremos de las lagunas Cañapa y Hedionda, donde podremos ver flamencos y otras aves de la region.'
            },
            {
                day: '12:00 PM',
                title: 'Almuerzo',
                desc: 'Disfrutaremos de un almuerzo caliente.'
            }, {
                day: '14:00 PM',
                title: 'Desierto de Siloli y Arbol de Piedra',
                desc: 'Recorreremos el Desierto de Siloli, una region desierta con colores rojizos y formas surrealistas, una experiencia unica para los ojos.'
            },
            {
                day: '16:00 PM',
                title: 'Laguna Colorada',
                desc: 'La Laguna Colorada es una de las lagunas mas bellas de Bolivia, con colores rojizos y formas surrealistas, una experiencia unica para los ojos.'
            },
            {
                day: '18:00 PM',
                title: 'Llegada al alojamiento en Huayllajara',
                desc: 'Llegada al albergue en Huayllajara, cena y tiempo libre para descansar.'
            },
            {
                day: 'Día 3',
                title: '',
                desc: ''
            },
            {
                day: '05:00 AM',
                title: 'Despertar y Salida a Geiseres',
                desc: 'Despertar temprano para visitar los géiseres.'
            },
            {
                day: '07:30 AM',
                title: 'Aguas termales de Polques y Desayuno',
                desc: 'Disfrutar de las aguas termales y un desayuno caliente.'
            },
            {
                day: '09:30 AM',
                title: 'Desierto de Dalí y Laguna Verde',
                desc: 'Visita al Desierto de Dalí y la Laguna Verde, donde podrás disfrutar de paisajes impresionantes y la belleza natural de la región.'
            },
            {
                day: '12:00 PM',
                title: 'Almuerzo en Villa Mar y Valle de Rocas',
                desc: 'Almuerzo en Villa Mar y visita al Valle de Rocas.'
            },
            {
                day: '17:00 PM',
                title: 'Regreso a Uyuni',
                desc: 'Regreso a Uyuni.'
            }
        ],
        itineraryEn: [
            {
                day: 'Day 1',
                title: '',
                desc: ''
            },
            {
                day: '10:00 AM',
                title: 'Tour Preparation',
                desc: 'We get ready for the tour, meeting at the office to provide information about the itinerary.'
            },
            {
                day: '11:00 AM',
                title: 'Train Cemetery',
                desc: 'We start with a visit to the Train Cemetery, where the old English and French locomotives from the late 19th century rest.'
            },
            {
                day: '12:00 PM',
                title: 'Colchani',
                desc: 'The town of Colchani, main center for artisanal salt processing, where you will learn about extraction methods and can purchase souvenirs made from pure salt.'
            },
            {
                day: '13:30 PM',
                title: 'Great Salt Flats',
                desc: 'We enter the immense salt plain. We will observe the curious "Salt Eyes" (points of escape for cold underground water) and visit the old Playa Blanca Salt Hotel, which now functions as a museum. Near the hotel is the Dakar salt monument and the iconic flag square of the world.'
            },
            {
                day: '15:30 PM',
                title: 'Incahuasi Island',
                desc: 'We arrive at Incahuasi Island, a rocky hill completely surrounded by salt. We walk along the path surrounded by giant ancient cacti (some over 10 meters) to the top to contemplate the panoramic view of the salt flats.(Subject to conditions of the Salt Flats during the rainy season.)'
            },
            {
                day: '18:00 PM',
                title: 'Sunset on the Salt and Toast',
                desc: 'We stop in an isolated area to enjoy a complimentary drink while contemplating the magical sunset over the salt flats. The horizon is tinged with reddish and violet colors. Finally, we return to Uyuni.'
            },
            {
                day: '20:00 PM',
                title: 'Accommodation in Salt Hotel of San Juan',
                desc: 'We arrive at the hotel. Check-in and free time to rest. Optional: walk around the hotel and enjoy the views.'
            },
            {
                day: 'Day 2',
                title: '',
                desc: ''
            },
            {
                day: '08:00 AM',
                title: 'Breakfast and Tour Preparation',
                desc: 'After a delicious breakfast, we leave the accommodation between 6:00 and 7:00 AM to continue with the stops.'
            },
            {
                day: '10:30 AM',
                title: 'Salar de Chiguana',
                desc: 'A smaller salt flat than Uyuni but just as beautiful, with reddish colors and different flora, as well as a view of the imposing Ollague Volcano viewpoint.'
            },
            {
                day: '11:00 AM',
                title: 'Cañapa and Hedionda Lagoons',
                desc: 'We will enjoy the Cañapa and Hedionda lagoons, where we can see flamingos and other birds of the region.'
            },
            {
                day: '12:00 PM',
                title: 'Lunch',
                desc: 'We will enjoy a hot lunch.'
            },
            {
                day: '14:00 PM',
                title: 'Siloli Desert and Stone Tree',
                desc: 'We will visit the Siloli Desert, a desert region with reddish colors and surreal shapes, a unique experience for the eyes.'
            },
            {
                day: '16:00 PM',
                title: 'Laguna Colorada',
                desc: 'The Red Lagoon is one of the most beautiful lagoons in Bolivia, with reddish colors and surreal shapes, a unique experience for the eyes.'
            },
            {
                day: '18:00 PM',
                title: 'Arrival in Huayllajara',
                desc: 'We will arrive at the hostel in Huayllajara, dinner and free time to rest.'
            },
            {
                day: 'Day 3',
                title: '',
                desc: ''
            },
            {
                day: '05:00 AM',
                title: 'Geysers',
                desc: 'Departure before dawn to witness the geothermal activity of the Sol de Mañana geysers at sunrise, with boiling mud pools and fumaroles.'
            },
            {
                day: '07:00 AM',
                title: 'Polques Hot Springs and Breakfast',
                desc: 'Relax in the natural hot springs, a perfect place to unwind before continuing the journey.'
            },
            {
                day: '09:30 AM',
                title: 'Dalí Desert and Laguna Verde',
                desc: 'We will visit the Dalí Desert, a desert region with reddish colors and surreal shapes, a unique experience for the eyes.'
            },
            {
                day: '12:00 PM',
                title: 'Lunch in Villa Mar and Sea of Rocks',
                desc: 'We will enjoy a hot lunch in Villa Mar and visit the Sea of Rocks.'
            },
            {
                day: '17:00 PM',
                title: 'Return to Uyuni',
                desc: 'We will return to the city of Uyuni.'
            },

        ],
        faqs: [
            {
                q: 'A qué altitud se llega durante el viaje?',
                a: 'Comenzamos en Uyuni a 3,650 msnm, pero en el segundo y tercer día se transita a altitudes superiores a 4,500 msnm, llegando a 4,850 msnm en los géiseres. Se aconseja aclimatarse previamente y beber mucha agua o mate de coca.'
            },
            {
                q: 'Cómo son las temperaturas en la ruta?',
                a: 'Durante el día el sol es muy fuerte pero hay viento frío. Por la noche, especialmente en el refugio del segundo día cerca de Laguna Colorada, las temperaturas descienden bajo cero (-5°C a -15°C en invierno). Es fundamental llevar buen abrigo térmico.'
            }
        ],
        faqsEn: [
            {
                q: 'What altitude is reached during the trip?',
                a: 'We start in Uyuni at 3,650 masl, but on the second and third day we travel at altitudes above 4,500 masl, reaching 4,850 masl at the geysers. It is advisable to acclimatize beforehand and drink plenty of water or coca tea.'
            },
            {
                q: 'What are the temperatures like on the route?',
                a: 'During the day the sun is very strong but there is cold wind. At night, especially in the second day\u2019s refuge near Laguna Colorada, temperatures drop below zero (-5°C to -15°C in winter). It is essential to bring good thermal clothing.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },
    'uyuni-3-dias': {
        title: 'Salar de Uyuni — Desiertos Blancos y Lagunas de Colores',
        titleEn: 'Uyuni Salt Flats - White Deserts and Colored Lagoons',
        duration: '3 Días / 2 Noches',
        durationEn: '3 Days / 2 Nights',
        type: 'Compartido',
        typeEn: 'Shared',
        groupSize: 'Máximo 6 personas',
        groupSizeEn: 'Maximum 6 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/desiertos-comp.jpeg',
        overview: 'Nuestra expedición de 3 días es la aventura definitiva en el altiplano de Bolivia. Recorrerás no solo el majestuoso Salar de Uyuni, sino también la Reserva Nacional de Fauna Andina Eduardo Avaroa, hogar de la impresionante Laguna Colorada (poblada por miles de flamencos), la Laguna Verde a los pies del imponente Volcán Licancabur, aguas termales naturales y singulares esculturas de piedra naturales.',
        overviewEn: 'Our 3-day expedition is the ultimate adventure in the Bolivian highlands. You will explore not only the majestic Salar de Uyuni but also the Eduardo Avaroa National Andean Fauna Reserve, home to the stunning Laguna Colorada (populated by thousands of flamingos), Laguna Verde at the foot of the imposing Volcán Licancabur, natural hot springs, and unique natural stone sculptures.',
        recommendations: [
            'Ropa térmica muy abrigada (temperaturas de hasta -10°C en las noches)',
            'Traje de baño y toalla para las aguas termales de Polques',
            'Lentes de sol polarizados y protector solar FPS 50+',
        ],
        recommendationsEn: [
            'Very warm thermal clothing (temperatures up to -10°C at night)',
            'Swimsuit and towel for the Polques thermal springs',
            'Polarized sunglasses and SPF 50+ sunscreen',
        ],
        included: [
            'Todas las comidas (desayunos, almuerzos y cenas) con opción vegetariana',
            'Transporte en vehículo 4x4 adaptado para desierto y caminos de tierra',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios y tubo de oxígeno',
            'Noche 1: San Juan, con opciones de habitaciones compartidas de 2/3/4/5/6 camas, con baño compartido.',
            'Noche 2: Huayllajara con opciones de habitaciones compartidas de 2/3/4/5/6 camas, con baño compartido.'
        ],
        includedEn: [
            'All meals (breakfast, lunch, and dinner) with vegetarian option',
            'Transportation in 4x4 vehicle adapted for desert and dirt roads',
            'Driver / local guide in Spanish, English guide for an additional cost',
            'First aid kit and oxygen tank',
            'Night 1: San Juan, with options for 2/3/4/5/6 bed rooms, each equipped with private bathroom.',
            'Night 2: Huayllajara, with options for 2/3/4/5/6 bed rooms, each equipped with private bathroom.'
        ],
        excluded: [
            'Entrada a la Reserva Eduardo Avaroa (150 Bs)',
            'Entrada a la Isla Incahuasi (30 Bs)',
            'Ingreso a las Aguas Termales de Polques (10 Bs)',
            'Duchas calientes en los refugios (aprox. 30 Bs)',
        ],
        excludedEn: [
            'Entrance to Eduardo Avaroa Reserve (150 Bs)',
            'Entrance to Incahuasi Island (30 Bs)',
            'Entrance to Polques Thermal Springs (10 Bs)',
            'Hot showers in the shelters (approx. 30 Bs)',
        ],
        itinerary: [
            {
                day: 'Día 1',
                title: '',
                desc: ''
            },
            {
                day: '10:00 AM',
                title: 'Preparacion para el tour',
                desc: 'Nos preparamos para el tour, nos reunimos en la oficina para brindarle informacion de lo que se ara durante el tour.'
            },
            {
                day: '11:00 AM',
                title: 'Cementerio de Trenes',
                desc: 'Comenzamos con la visita al Cementerio de Trenes, donde descansan las antiguas locomotoras Inglesas y Francesas de finales del siglo XIX.'
            },
            {
                day: '12:00 PM',
                title: 'Comunidad de Colchani',
                desc: 'El pueblo de Colchani,  principal centro de procesamiento artesanal de sal, donde conocerás los métodos de extracción y podrás adquirir souvenirs hechos de sal pura.'
            },
            {
                day: '13:30 PM',
                title: 'Gran Salar de Uyuni',
                desc: 'Nos adentramos en la inmensa planicie salina. Observaremos los curiosos “Ojos de Sal” (puntos de escape de agua subterránea fría) y visitaremos el antiguo Hotel de Sal Playa Blanca, que hoy funciona como museo. Cerca del hotel se encuentra el monumento de sal del Dakar y la icónica plaza de banderas de todo el mundo.'
            },
            {
                day: '15:30 PM',
                title: 'Isla Incahuasi',
                desc: 'Llegamos a la Isla Incahuasi, un cerro rocoso rodeado enteramente por la sal. Caminamos por el sendero rodeado de cactus gigantes centenarios  de hasta 10 metros hasta la cima para contemplar la vista panorámica del salar (Sujeto a condiciones del Salar en época de lluvia.).'
            },
            {
                day: '18:00 PM',
                title: 'Atardecer en el Salar y Brindis',
                desc: 'Nos detenemos en una zona aislada para disfrutar de una copa de cortesía y un snack mientras contemplamos el mágico atardecer sobre el salar. El horizonte se tiñe de colores rojizos y violetas. Finalmente, regresamos a Uyuni'
            },
            {
                day: '20:00 PM',
                title: 'Llegada al Hotel de sal en San Juan',
                desc: 'Llegada al hotel, registro y tiempo libre para descansar.'
            },
            {
                day: 'Día 2',
                title: '',
                desc: ''
            },
            {
                day: '08:00 AM',
                title: 'Desayuno y Preparacion para el tour',
                desc: 'Después de un delicioso desayuno, salimos del alojamiento entre las 6:00 y las 7:00 AM para continuar con las paradas'
            },
            {
                day: '09:00 AM',
                title: 'Salar de Chiguana',
                desc: 'Un salar mas pequeño que el de Uyuni pero igual de hermoso, con colores rojizos y una flora diferente ademas de un vistaso por el imponente mirador del Volcán Ollague'
            },
            {
                day: '11:00 AM',
                title: 'Lagunas Cañapa y Hedionda',
                desc: 'Disfrutaremos de las lagunas Cañapa y Hedionda, donde podremos ver flamencos y otras aves de la region.'
            },
            {
                day: '12:00 PM',
                title: 'Almuerzo',
                desc: 'Disfrutaremos de un almuerzo caliente.'
            }, {
                day: '14:00 PM',
                title: 'Desierto de Siloli y Arbol de Piedra',
                desc: 'Recorreremos el Desierto de Siloli, una region desierta con colores rojizos y formas surrealistas, una experiencia unica para los ojos.'
            },
            {
                day: '16:00 PM',
                title: 'Laguna Colorada',
                desc: 'La Laguna Colorada es una de las lagunas mas bellas de Bolivia, con colores rojizos y formas surrealistas, una experiencia unica para los ojos.'
            },
            {
                day: '18:00 PM',
                title: 'Llegada al alojamiento en Huayllajara',
                desc: 'Llegada al albergue en Huayllajara, cena y tiempo libre para descansar.'
            },
            {
                day: 'Día 3',
                title: '',
                desc: ''
            },
            {
                day: '05:00 AM',
                title: 'Despertar y Salida a Geiseres',
                desc: 'Despertar temprano para visitar los géiseres.'
            },
            {
                day: '07:30 AM',
                title: 'Aguas termales de Polques y Desayuno',
                desc: 'Disfrutar de las aguas termales y un desayuno caliente.'
            },
            {
                day: '09:30 AM',
                title: 'Desierto de Dalí y Laguna Verde',
                desc: 'Visita al Desierto de Dalí y la Laguna Verde, donde podrás disfrutar de paisajes impresionantes y la belleza natural de la región.'
            },
            {
                day: '12:00 PM',
                title: 'Almuerzo en Villa Mar y Valle de Rocas',
                desc: 'Almuerzo en Villa Mar y visita al Valle de Rocas.'
            },
            {
                day: '17:00 PM',
                title: 'Regreso a Uyuni',
                desc: 'Regreso a Uyuni.'
            }
        ],
        itineraryEn: [
            {
                day: 'Day 1',
                title: '',
                desc: ''
            },
            {
                day: '10:00 AM',
                title: 'Tour Preparation',
                desc: 'We get ready for the tour, meeting at the office to provide information about the itinerary.'
            },
            {
                day: '11:00 AM',
                title: 'Train Cemetery',
                desc: 'We start with a visit to the Train Cemetery, where the old English and French locomotives from the late 19th century rest.'
            },
            {
                day: '12:00 PM',
                title: 'Colchani',
                desc: 'The town of Colchani, main center for artisanal salt processing, where you will learn about extraction methods and can purchase souvenirs made from pure salt.'
            },
            {
                day: '13:30 PM',
                title: 'Great Salt Flats',
                desc: 'We enter the immense salt plain. We will observe the curious "Salt Eyes" (points of escape for cold underground water) and visit the old Playa Blanca Salt Hotel, which now functions as a museum. Near the hotel is the Dakar salt monument and the iconic flag square of the world.'
            },
            {
                day: '15:30 PM',
                title: 'Incahuasi Island',
                desc: 'We arrive at Incahuasi Island, a rocky hill completely surrounded by salt. We walk along the path surrounded by giant ancient cacti (some over 10 meters) to the top to contemplate the panoramic view of the salt flats.(Subject to conditions of the Salt Flats during the rainy season.)'
            },
            {
                day: '18:00 PM',
                title: 'Sunset on the Salt and Toast',
                desc: 'We stop in an isolated area to enjoy a complimentary drink while contemplating the magical sunset over the salt flats. The horizon is tinged with reddish and violet colors. Finally, we return to Uyuni.'
            },
            {
                day: '20:00 PM',
                title: 'Accommodation in Salt Hotel of San Juan',
                desc: 'We arrive at the hotel. Check-in and free time to rest. Optional: walk around the hotel and enjoy the views.'
            },
            {
                day: 'Day 2',
                title: '',
                desc: ''
            },
            {
                day: '08:00 AM',
                title: 'Breakfast and Tour Preparation',
                desc: 'After a delicious breakfast, we leave the accommodation between 6:00 and 7:00 AM to continue with the stops.'
            },
            {
                day: '10:30 AM',
                title: 'Salar de Chiguana',
                desc: 'A smaller salt flat than Uyuni but just as beautiful, with reddish colors and different flora, as well as a view of the imposing Ollague Volcano viewpoint.'
            },
            {
                day: '11:00 AM',
                title: 'Cañapa and Hedionda Lagoons',
                desc: 'We will enjoy the Cañapa and Hedionda lagoons, where we can see flamingos and other birds of the region.'
            },
            {
                day: '12:00 PM',
                title: 'Lunch',
                desc: 'We will enjoy a hot lunch.'
            },
            {
                day: '14:00 PM',
                title: 'Siloli Desert and Stone Tree',
                desc: 'We will visit the Siloli Desert, a desert region with reddish colors and surreal shapes, a unique experience for the eyes.'
            },
            {
                day: '16:00 PM',
                title: 'Laguna Colorada',
                desc: 'The Red Lagoon is one of the most beautiful lagoons in Bolivia, with reddish colors and surreal shapes, a unique experience for the eyes.'
            },
            {
                day: '18:00 PM',
                title: 'Arrival in Huayllajara',
                desc: 'We will arrive at the hostel in Huayllajara, dinner and free time to rest.'
            },
            {
                day: 'Day 3',
                title: '',
                desc: ''
            },
            {
                day: '05:00 AM',
                title: 'Geysers',
                desc: 'Departure before dawn to witness the geothermal activity of the Sol de Mañana geysers at sunrise, with boiling mud pools and fumaroles.'
            },
            {
                day: '07:00 AM',
                title: 'Polques Hot Springs and Breakfast',
                desc: 'Relax in the natural hot springs, a perfect place to unwind before continuing the journey.'
            },
            {
                day: '09:30 AM',
                title: 'Dalí Desert and Laguna Verde',
                desc: 'We will visit the Dalí Desert, a desert region with reddish colors and surreal shapes, a unique experience for the eyes.'
            },
            {
                day: '12:00 PM',
                title: 'Lunch in Villa Mar and Sea of Rocks',
                desc: 'We will enjoy a hot lunch in Villa Mar and visit the Sea of Rocks.'
            },
            {
                day: '17:00 PM',
                title: 'Return to Uyuni',
                desc: 'We will return to the city of Uyuni.'
            },

        ],
        faqs: [
            {
                q: 'A qué altitud se llega durante el viaje?',
                a: 'Comenzamos en Uyuni a 3,650 msnm, pero en el segundo y tercer día se transita a altitudes superiores a 4,500 msnm, llegando a 4,850 msnm en los géiseres. Se aconseja aclimatarse previamente y beber mucha agua o mate de coca.'
            },
            {
                q: 'Cómo son las temperaturas en la ruta?',
                a: 'Durante el día el sol es muy fuerte pero hay viento frío. Por la noche, especialmente en el refugio del segundo día cerca de Laguna Colorada, las temperaturas descienden bajo cero (-5°C a -15°C en invierno). Es fundamental llevar buen abrigo térmico.'
            }
        ],
        faqsEn: [
            {
                q: 'What altitude is reached during the trip?',
                a: 'We start in Uyuni at 3,650 masl, but on the second and third day we travel at altitudes above 4,500 masl, reaching 4,850 masl at the geysers. It is advisable to acclimatize beforehand and drink plenty of water or coca tea.'
            },
            {
                q: 'What are the temperatures like on the route?',
                a: 'During the day the sun is very strong but there is cold wind. At night, especially in the second day\u2019s refuge near Laguna Colorada, temperatures drop below zero (-5°C to -15°C in winter). It is essential to bring good thermal clothing.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },
    'uyuni-san-pedro-3-dias': {
        title: 'Salar de Uyuni desde San Pedro de Atacama',
        titleEn: 'Uyuni Salt Flat Tour from San Pedro de Atacama',
        duration: '3 Días / 2 Noches',
        durationEn: '3 Days / 2 Nights',
        type: 'Privado',
        typeEn: 'Private',
        groupSize: 'Máximo 4 personas',
        groupSizeEn: 'Maximum 4 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/sanpedro.jpeg',
        overview: 'El mismo Salar de Uyuni, recorrido en sentido inverso: comenzás en San Pedro de Atacama y cruzás la frontera hacia Bolivia para descubrir lagunas de colores, desiertos y el mar de sal más grande del mundo.',
        overviewEn: 'The same Uyuni Salt Flat, traveled in the opposite direction: you start in San Pedro de Atacama and cross the border into Bolivia to discover colorful lagoons, deserts, and the largest salt flat in the world.',
        recommendations: [
            'Ropa térmica muy abrigada (temperaturas de hasta -10°C en las noches)',
            'Traje de baño y toalla para las aguas termales de Polques',
            'Lentes de sol polarizados y protector solar FPS 50+',
        ],
        recommendationsEn: [
            'Very warm thermal clothing (temperatures up to -10°C at night)',
            'Swimsuit and towel for the Polques thermal springs',
            'Polarized sunglasses and SPF 50+ sunscreen',
        ],
        included: [
            'Todas las comidas (desayunos, almuerzos y cenas) con opción vegetariana',
            'Transporte en vehículo 4x4 adaptado para desierto y caminos de tierra',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios y tubo de oxígeno',
            'Noche 1: Villa Mar, con opción a habitaciones privadas, cada una equipada con baño privado.',
            'Noche 2: Hotel de sal, con opción a habitaciones privadas, cada una equipada con baño privado.'
        ],
        includedEn: [
            'All meals (breakfast, lunch, and dinner) with vegetarian option',
            'Transportation in 4x4 vehicle adapted for desert and dirt roads',
            'Driver / local guide in Spanish, English guide for an additional cost',
            'First aid kit and oxygen tank',
            'Night 1: Villa Mar, with options for 2/3/4/5/6 bed rooms, each equipped with private bathroom.',
            'Night 2: Salt hotel, with options for 2/3/4/5/6 bed rooms, each equipped with private bathroom.'
        ],
        excluded: [
            'Entrada a la Reserva Eduardo Avaroa (150 Bs)',
            'Entrada a la Isla Incahuasi (30 Bs)',
            'Ingreso a las Aguas Termales de Polques (10 Bs)',
            'Duchas calientes en los refugios (aprox. 30 Bs)',
        ],
        excludedEn: [
            'Entrance to Eduardo Avaroa Reserve (150 Bs)',
            'Entrance to Incahuasi Island (30 Bs)',
            'Entrance to Polques Thermal Springs (10 Bs)',
            'Hot showers in the shelters (approx. 30 Bs)',
        ],
        itinerary: [
            {
                day: 'Día 1',
                title: '',
                desc: ''
            },
            {
                day: '06:00 AM',
                title: 'Recogida del hotel',
                desc: 'Recogida de los pasajeros en sus respectivos hoteles en San Pedro de Atacama.'
            },
            {
                day: '08:00 AM',
                title: 'Laguna Blanca y Laguna Verde',
                desc: 'Visitamos la Laguna Blanca y la Laguna Verde, lagunas de colores ubicadas a los pies del imponente Volcán Licancabur. Observaremos los diferentes tipos de algas y aves que habitan en la zona.'
            },
            {
                day: '10:00 AM',
                title: 'Desierto de Dalí',
                desc: 'El Desierto de Dalí es un paisaje surrealista yermo, modelado por el viento, con formaciones rocosas que evocan la estética del famoso pintor español.'
            },
            {
                day: '12:00 PM',
                title: 'Aguas Termales de Polques y Laguna Chalviri',
                desc: 'Nos relajamos en las aguas termales de Polques, rodeadas de un paisaje impresionante. Luego, visitamos la Laguna Chalviri, una laguna de colores ubicada a los pies del imponente Volcán Licancabur. Observaremos los diferentes tipos de algas y aves que habitan en la zona.'
            },
            {
                day: '14:00 PM',
                title: 'Geysers Sol de Mañana',
                desc: 'Los Géiseres Sol de Mañana son un campo geotérmico activo, con pozas de lodo hirviendo y fumarolas que desprenden vapor de azufre.  '
            },
            {
                day: '15:30 PM',
                title: 'Laguna Colorada',
                desc: 'La Laguna Colorada es una laguna de aguas rojizas, hogar de flamencos andinos.  '
            },
            {
                day: '17:00 PM',
                title: 'Mirador Salar de Capina, Cañadón de Ojo del Gallo',
                desc: 'Desde el Mirador del Salar de Capina se puede tener una vista panorámica del salar, rodeado de montañas y volcanes. El Cañadón de Ojo del Gallo es una formación rocosa única, con colores rojizos y formas surrealistas, una experiencia unica para los ojos. '
            },
            {
                day: '18:30 PM',
                title: 'Noche en Hostal Villa Mar',
                desc: 'Llegada al hostal, cena, registro y tiempo libre para descansar.'
            },
            {
                day: 'Día 2',
                title: '',
                desc: ''
            },
            {
                day: '08:00 AM',
                title: 'Desayuno y Preparacion para el tour',
                desc: 'Después de un delicioso desayuno, salimos del alojamiento para continuar con las paradas'
            },
            {
                day: '09:00 AM',
                title: 'Ciudad de rocas volcánicas ',
                desc: 'La Copa del Mundo, El Camello, Arbol de Piedra y otras formaciones rocosas únicas, con colores rojizos y formas surrealistas, una experiencia unica para los ojos.'
            },
            {
                day: '11:00 AM',
                title: 'Laguna Vinto',
                desc: 'Unas de las bellas lagunas que puedes encontrar en la reserva de fauna andina Eduardo Avaroa, hogar de flamencos andinos y otras aves de la region.  '
            },
            {
                day: '12:00 PM',
                title: 'Almuerzo',
                desc: 'Disfrutaremos de un almuerzo caliente.'
            },
            {
                day: '14:00 AM',
                title: 'Cañón del Inca, mirador Quebrada de Sora',
                desc: 'El Cañón del Inca es una formación rocosa única, con colores rojizos y formas surrealistas, una experiencia unica para los ojos. El mirador Quebrada de Sora es un mirador natural que permite tener una vista panorámica del cañón. '
            },
            {
                day: '16:00 PM',
                title: 'Pueblo de Julaca (antigua estación de trenes)',
                desc: 'El pueblo de Julaca es un pequeño pueblo ubicado en el desierto de Siloli, con una antigua estación de trenes que data de la época de la colonización española. Es un lugar histórico y cultural que vale la pena visitar. '
            },
            {
                day: '18:00 PM',
                title: 'Tour astronómico en el hotel',
                desc: 'Una experiencia unica para los ojos, un tour astronómico en el hotel con guias especializados.'
            },
            {
                day: '19:30 PM',
                title: 'Descanso en el Hotel de Sal',
                desc: 'Llegada al hotel de sal, registro y tiempo libre para descansar.'
            },
            {
                day: 'Día 3',
                title: '',
                desc: ''
            },
            {
                day: '06:00 AM',
                title: 'Amanecer en el Salar de Uyuni',
                desc: 'Nos despertamos muy temprano para presenciar el amanecer en el Salar de Uyuni, una experiencia única para los ojos.'
            },
            {
                day: '07:30 AM',
                title: 'Isla Incahuasi y desayuno',
                desc: 'Desayuno y recorrido a pie por la isla, disfrutando de los paisajes únicos del salar y los cactus gigantes. '
            },
            {
                day: '09:00 AM',
                title: 'Salar de Uyuni, minas de sal, museo de sal',
                desc: 'Explora el Salar de Uyuni, uno de los paisajes más impresionantes de Bolivia, donde podrás admirar la inmensidad del desierto de sal y conocer las minas de sal donde se extrae la sal que se consume en todo el país.'
            },
            {
                day: '10:00 AM',
                title: 'Las Banderas, Monumento Dakar, Ojos de Sal',
                desc: 'Visita al Monumento Dakar, un monumento histórico y cultural que vale la pena visitar. '
            },
            {
                day: '12:00 AM',
                title: 'Pueblo de Colchani (artesanías de sal)',
                desc: 'El pueblo de Colchani es un pequeño pueblo ubicado en el desierto de Siloli, con una antigua estación de trenes que data de la época de la colonización española. Es un lugar histórico y cultural que vale la pena visitar. '
            },
            {
                day: '13:00 PM',
                title: 'Cementerio de Trenes',
                desc: 'El cementerio de trenes es un lugar histórico y cultural que vale la pena visitar. '
            },
            {
                day: '14:00 PM',
                title: 'Ingreso a Uyuni',
                desc: 'Fin del tour y regreso a Uyuni.'
            }
        ],
        itineraryEn: [
            {
                day: 'Day 1',
                title: '',
                desc: ''
            },
            {
                day: '06:00 AM',
                title: 'Pick-up from Hotel',
                desc: 'Pick-up from your hotel to start the tour.'
            },
            {
                day: '08:00 AM',
                title: 'White and Green lagoons',
                desc: 'We visit Laguna Blanca and Laguna Verde, two beautiful lagoons located in the Eduardo Avaroa Andean Fauna Reserve.'
            },
            {
                day: '10:00 AM',
                title: 'Geysers Sol de Mañana',
                desc: 'We visit the Sol de Mañana Geysers, a geothermal field with hot springs and fumaroles.'
            },
            {
                day: '12:00 PM',
                title: 'Polques Hot Springs and Chalviri Lagoon',
                desc: 'We visit the Hot Springs of Polques, a natural hot spring where you can relax and enjoy the views, and Laguna Chalviri, a beautiful lagoon with salt flats.'
            },
            {
                day: '14:00 PM',
                title: 'Geysers Sol de Mañana',
                desc: 'We visit the Sol de Mañana Geysers, a geothermal field with hot springs and fumaroles.'
            },
            {
                day: '15:30 PM',
                title: 'Colored Lagoon',
                desc: 'We visit Laguna Colorada, a beautiful lagoon with salt flats.'
            },
            {
                day: '17:00 PM',
                title: 'SCapina Salt Flat Viewpoint, Ojo del Gallo Canyon',
                desc: 'We pass through the viewpoint of the Capina Salt Flats and the Ojo del Gallo Canyon, where we can observe the geological formations of the region.'
            },
            {
                day: '18:30 PM',
                title: 'Night at Hostal Villa Mar',
                desc: 'Arrival at the hostal, dinner and rest to continue with the adventure the next day.'
            },
            {
                day: 'Day 2',
                title: '',
                desc: ''
            },
            {
                day: '08:00 AM',
                title: 'Breakfast and Tour Preparation',
                desc: 'After a delicious breakfast, we leave the accommodation between 6:00 and 7:00 AM to continue with the stops.'
            },
            {
                day: '09:00 AM',
                title: 'City of Volcanic Rocks',
                desc: 'A rocky area with geological formations that resemble a city, where you can observe the imposing Ollague Volcano viewpoint.'
            },
            {
                day: '11:00 AM',
                title: 'Vinto Lagoon',
                desc: 'We will enjoy the Vinto Lagoon, where we can see flamingos and other birds of the region.'
            },
            {
                day: '12:00 PM',
                title: 'Lunch',
                desc: 'We will enjoy a hot lunch.'
            },
            {
                day: '14:00 PM',
                title: 'Inca Canyon, Quebrada de Sora viewpoint',
                desc: 'We will appreciate the viewpoints of the Quebrada de Sora and the Inca Canyon, where we can observe the geological formations of the region.'
            },
            {
                day: '16:00 PM',
                title: 'Julaca Village (former train station)',
                desc: 'We will pass through the viewpoint of the Capina Salt Flats and the Ojo del Gallo Canyon, where we can observe the geological formations of the region.'
            },
            {
                day: '18:00 PM',
                title: 'Tour astronómico en el hotel',
                desc: 'After a delicious dinner, we will enjoy an astronomical tour, where we can observe the stars and planets. '
            },
            {
                day: '19:30 PM',
                title: 'Rest at the Salt Hotel',
                desc: 'Arrival at the salt hotel, registration and free time to rest.'
            },
            {
                day: 'Day 3',
                title: '',
                desc: ''
            },
            {
                day: '6:00 AM',
                title: 'Sunrise at the Salar de Uyuni',
                desc: 'We woke up very early to witness the sunrise at the Salar de Uyuni, a unique experience for the eyes.'
            },
            {
                day: '7:30 AM',
                title: 'Incahuasi Island and Breakfast',
                desc: 'Breakfast and a walking tour of the island, enjoying the unique landscapes of the salt flats and the giant cacti.'
            },
            {
                day: '9:00 AM',
                title: 'Salar de Uyuni, Salt Mines, Salt Museum',
                desc: 'Explore the Salar de Uyuni, one of the most impressive landscapes in Bolivia, where you can admire the immensity of the salt desert and visit the salt mines where the salt consumed throughout the country is extracted.'
            },
            {
                day: '10:00 AM',
                title: 'Las Banderas, Dakar Monument, Ojos de Sal',
                desc: 'Visit to the Dakar Monument, a historical and cultural landmark worth visiting.'
            },
            {
                day: '12:00 AM',
                title: 'Colchani Village (Salt Crafts)',
                desc: 'The village of Colchani is a small village located in the Siloli Desert, with an old train station dating back to the time of Spanish colonization. It is a historical and cultural site worth visiting.'
            },
            {
                day: '13:00 PM',
                title: 'Train Cemetery',
                desc: 'The train cemetery is a historical and cultural site worth visiting.'
            },
            {
                day: '14:00 PM',
                title: 'Entrance to Uyuni',
                desc: 'End of tour and return to Uyuni.'
            }

        ],
        faqs: [
            {
                q: 'A qué altitud se llega durante el viaje?',
                a: 'Comenzamos en Uyuni a 3,650 msnm, pero en el segundo y tercer día se transita a altitudes superiores a 4,500 msnm, llegando a 4,850 msnm en los géiseres. Se aconseja aclimatarse previamente y beber mucha agua o mate de coca.'
            },
            {
                q: 'Cómo son las temperaturas en la ruta?',
                a: 'Durante el día el sol es muy fuerte pero hay viento frío. Por la noche, especialmente en el refugio del segundo día cerca de Laguna Colorada, las temperaturas descienden bajo cero (-5°C a -15°C en invierno). Es fundamental llevar buen abrigo térmico.'
            }
        ],
        faqsEn: [
            {
                q: 'What altitude is reached during the trip?',
                a: 'We start in Uyuni at 3,650 masl, but on the second and third day we travel at altitudes above 4,500 masl, reaching 4,850 masl at the geysers. It is advisable to acclimatize beforehand and drink plenty of water or coca tea.'
            },
            {
                q: 'What are the temperatures like on the route?',
                a: 'During the day the sun is very strong but there is cold wind. At night, especially in the second day\u2019s refuge near Laguna Colorada, temperatures drop below zero (-5°C to -15°C in winter). It is essential to bring good thermal clothing.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },
    'uyuni-estrellas': {
        //info
        title: 'Tour Noche Estrellada',
        titleEn: 'Starry Night Tour',
        duration: '1 Noche',
        durationEn: '1 Night',
        type: 'Privado',
        typeEn: 'Private',
        groupSize: 'Máximo 4 personas',
        groupSizeEn: 'Maximum 4 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/estrellas.jpeg',
        overview: 'Si deseas vivir una experiencia única bajo uno de los cielos más limpios del mundo, este tour nocturno es ideal para ti. Disfruta del impresionante cielo estrellado del salar de Uyuni, realiza fotografías nocturnas y comparte un brindis en un ambiente mágico e inolvidable.',
        overviewEn: 'If you want to experience the stars under one of the cleanest skies in the world, this night tour is perfect for you. Enjoy the impressive starry sky of the Uyuni Salt Flats, take night photos, and share a toast in a magical and unforgettable atmosphere.',
        recommendations: [
            'Ropa abrigada (cortavientos) para el final de la tarde',
            'Cámara fotográfica o celular con suficiente batería',
        ],
        recommendationsEn: [
            'Warm clothing (windbreaker) for the late afternoon',
            'Camera or cell phone with enough battery',
        ],
        included: [
            'Transporte en vehículo Toyota Land Cruiser o Lexus 4x4',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios básico',
        ],
        includedEn: [
            'Transport in Toyota Land Cruiser or Lexus 4x4 vehicle',
            'Driver / local guide in Spanish, English guide at additional cost',
            'Basic first aid kit',
        ],
        excluded: [
        ],
        excludedEn: [
        ],
        itinerary: [
            {
                day: '18:30 PM',
                title: 'Salida desde Uyuni',
                desc: 'Recojo del hotel e inicio del recorrido hacia el salar de Uyuni al anochecer.'
            },
            {
                day: '19:30 PM',
                title: 'Ingreso al gran salar de Uyuni ',
                desc: 'Explicación sobre el salar y búsqueda del mejor lugar para la observación de las estrellas'
            },
            {
                day: '20:00 PM',
                title: 'Observación del cielo nocturno ',
                desc: 'Contemplación de la vía láctea constelaciones y miles de estrellas en uno de los cielos más claros del planeta.'
            },
            {
                day: '21:00 PM',
                title: 'Sesión de fotografías ',
                desc: 'Tiempo para capturar fotografías con el cielo estrellado y los reflejos del salar (según la temporada).'
            },
            {
                day: '21:30 PM',
                title: 'Brindis',
                desc: 'Brindis con vino para celebrar el momento magico'
            },
            {
                day: '22:30 PM',
                title: 'Regreso a Uyuni',
                desc: 'Regreso al hotel con muchas memorias magicas'
            },
        ],
        itineraryEn: [
            {
                day: '18:30 PM',
                title: 'Departure from Uyuni',
                desc: 'Hotel pick-up and start of the tour to the Uyuni Salt Flats at dusk.'
            },
            {
                day: '19:30 PM',
                title: 'Entrance to the Uyuni Salt Flats',
                desc: 'Explanation about the salt flats and finding the best spot for stargazing'
            },
            {
                day: '20:00 PM',
                title: 'Night Sky Observation',
                desc: 'Contemplation of the Milky Way, constellations, and thousands of stars in one of the clearest skies on the planet.'
            },
            {
                day: '21:00 PM',
                title: 'Photo Session',
                desc: 'Time to capture photographs with the starry sky and the reflections on the salt flats (depending on the season).'
            },
            {
                day: '21:30 PM',
                title: 'Toast',
                desc: 'A wine toast to celebrate this magical moment'
            },
            {
                day: '22:30 PM',
                title: 'Return to Uyuni',
                desc: 'Returning to the hotel with many magical memories'
            },
        ],
        faqs: [
            {
                q: '¿Se puede hacer el tour en época de lluvias?',
                a: 'Sí, pero el itinerario se modifica. Durante la época de lluvias (enero a abril), el salar se inunda y se genera el maravilloso efecto espejo, pero el agua impide llegar a la Isla Incahuasi por seguridad.'
            },
            {
                q: '¿Se requiere reserva anticipada?',
                a: 'Se recomienda reservar con al menos 48 horas de anticipación para asegurar disponibilidad de vehículos y guías.'
            }
        ],
        faqsEn: [
            {
                q: 'Can the tour be done during the rainy season?',
                a: 'Yes, but the itinerary is modified. During the rainy season (January to April), the salt flats flood and the marvelous mirror effect is generated, but the water prevents reaching Incahuasi Island for safety.'
            },
            {
                q: 'Is advance booking required?',
                a: 'It is recommended to book at least 48 hours in advance to ensure vehicle and guide availability.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },
    'uyuni-amanecer': {
        //info
        title: 'Salar de Uyuni Amanecer',
        titleEn: 'Salt Flats Sunrise Tour',
        duration: 'Amanecer',
        durationEn: 'Sunrise',
        type: 'Privado',
        typeEn: 'Private',
        groupSize: 'Maximo 4 personas',
        groupSizeEn: 'Maximum 4 people',
        languages: 'Español (Inglés disponible)',
        languagesEn: 'Spanish (English available)',
        bannerImage: basePath + 'assets/images/tours/amanecer.jpeg',
        overview: 'Experimenta un amanecer inolvidable sobre el Salar de Uyuni, el desierto de sal más grande del mundo. Observa cómo los colores del cielo se reflejan en el salar creando un espectáculo visual único. Un momento mágico para capturar fotografías y disfrutar de la tranquilidad del lugar.',
        overviewEn: 'Experience an unforgettable sunrise over the Uyuni Salt Flats, the largest salt desert in the world. Watch the colors of the sky reflect on the salt flats creating a unique visual spectacle. A magical moment to capture photographs and enjoy the tranquility of the place.',
        recommendations: [
            'Lentes de sol (imprescindible debido al reflejo)',
            'Protector solar de factor alto',
            'Ropa abrigada (cortavientos) para el final de la tarde',
            'Cámara fotográfica o celular con suficiente batería',
        ],
        recommendationsEn: [
            'Sunglasses (essential due to reflection)',
            'High factor sunscreen',
            'Warm clothing (windbreaker) for the late afternoon',
            'Camera or cell phone with enough battery',
        ],
        included: [
            'Almuerzo con opción vegetariana (avisar con anticipación)',
            'Transporte en vehículo Toyota Land Cruiser o Lexus 4x4',
            'Conductor / guía local en español, Guia en ingles con costo adicional',
            'Botiquín de primeros auxilios básico',
        ],
        includedEn: [
            'Lunch with vegetarian option (notify in advance)',
            'Transport in Toyota Land Cruiser or Lexus 4x4 vehicle',
            'Driver / local guide in Spanish, English guide at additional cost',
            'Basic first aid kit',
        ],
        excluded: [
            'Entrada a la Isla Incahuasi (30 Bs extranjeros / 15 Bs nacionales)',
        ],
        excludedEn: [
            'Entrance to Incahuasi Island (30 Bs foreigners / 15 Bs nationals)',
        ],
        itinerary: [
            {
                day: '05:00 AM',
                title: 'Recojo del hotel',
                desc: 'Recojo del hotel en Uyuni y traslado hacia el salar de Uyuni.'
            },
            {
                day: '06:00 AM',
                title: 'Ingreso al Gran Salar de Uyuni',
                desc: 'Entrada al gran salar de uyuni y busqueda del mejor lugar para el amanecer'
            },
            {
                day: '06:30 AM',
                title: 'Amanecer en el Salar',
                desc: 'Contemplación de los primeros rayos del sol, reflejos sobre el salar (en época de lluvias) y tiempo para disfrutar del paisaje.'
            },
            {
                day: '07:00 AM',
                title: 'Sesión de fotografías',
                desc: 'Tiempo para capturar fotografías del amanecer y realizar fotografías con perspectiva en el Salar.'
            },
            {
                day: '08:00 AM',
                title: 'Desayuno y retorno',
                desc: 'Desayuno tipo picnic acompañado de bebidas calientes. Retorno a Uyuni aproximadamente entre las 08:00 y 09:00.'
            },
        ],
        itineraryEn: [
            {
                day: '5:00 AM',
                title: 'Hotel Pickup',
                desc: 'Hotel pick-up in Uyuni and transfer to the Uyuni Salt Flats.'
            },
            {
                day: '6:00 AM',
                title: 'Entrance to the Uyuni Salt Flats',
                desc: 'Entrance to the Uyuni Salt Flats and search for the best spot for sunrise'
            },
            {
                day: '6:30 AM',
                title: 'Sunrise on the Salt Flats',
                desc: 'Contemplation of the first rays of the sun, reflections on the salt flats (during the rainy season), and time to enjoy the scenery.'
            },
            {
                day: '7:00 AM',
                title: 'Photo Session',
                desc: 'Time to capture sunrise photos and take perspective shots on the salt flats.'
            },
            {
                day: '08:00 AM',
                title: 'Breakfast and Return',
                desc: 'Picnic-style breakfast with hot drinks. Return to Uyuni approximately between 08:00 and 09:00.'
            },
        ],
        faqs: [
            {
                q: '¿Se puede hacer el tour en época de lluvias?',
                a: 'Sí, pero el itinerario se modifica. Durante la época de lluvias (enero a abril), el salar se inunda y se genera el maravilloso efecto espejo, pero el agua impide llegar a la Isla Incahuasi por seguridad.'
            },
            {
                q: '¿Se requiere reserva anticipada?',
                a: 'Se recomienda reservar con al menos 48 horas de anticipación para asegurar disponibilidad de vehículos y guías.'
            }
        ],
        faqsEn: [
            {
                q: 'Can the tour be done during the rainy season?',
                a: 'Yes, but the itinerary is modified. During the rainy season (January to April), the salt flats flood and the marvelous mirror effect is generated, but the water prevents reaching Incahuasi Island for safety.'
            },
            {
                q: 'Is advance booking required?',
                a: 'It is recommended to book at least 48 hours in advance to ensure vehicle and guide availability.'
            }
        ],
        gallery: [
            { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Salar de Uyuni' },
            { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'Árbol de Piedra' },
            { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Isla Incahuasi' }
        ]
    },

    //     title: 'Laguna Colorada',
    //     titleEn: 'Laguna Colorada',
    //     duration: '3 Días / 2 Noches',
    //     durationEn: '3 Days / 2 Nights',
    //     type: 'Expedición Completa Altiplánica',
    //     typeEn: 'Complete Altiplanic Expedition',
    //     groupSize: 'Máximo 6 personas',
    //     groupSizeEn: 'Maximum 6 people',
    //     languages: 'Español (Inglés disponible)',
    //     languagesEn: 'Spanish (English available)',
    //     bannerImage: basePath + 'assets/images/tours/salar1.jpeg',
    //     overview: 'Nuestra expedición de 3 días es la aventura definitiva en el altiplano de Bolivia. Recorrerás no solo el majestuoso Salar de Uyuni, sino también la Reserva Nacional de Fauna Andina Eduardo Avaroa, hogar de la impresionante Laguna Colorada (poblada por miles de flamencos), la Laguna Verde a los pies del imponente Volcán Licancabur, géiseres activos, aguas termales naturales y singulares esculturas de piedra naturales.',
    //     overviewEn: 'Our 3‑day expedition covers Salar de Uyuni, Incahuasi Island, Laguna Colorada and Verde, geysers, hot springs, and Andean fauna.',
    //     recommendations: [
    //         'Ropa térmica muy abrigada (temperaturas de hasta -10°C en las noches)',
    //         'Traje de baño y toalla para las aguas termales de Polques',
    //         'Lentes de sol polarizados y protector solar FPS 50+',
    //         'Dinero en efectivo en Bolivianos para entradas y servicios (mínimo 250 Bs por persona)',
    //         'Botella de agua recargable y snacks energéticos',
    //         'Linterna y adaptadores de enchufe'
    //     ],
    //     included: [
    //         'Todas las comidas (desayunos, almuerzos y cenas) con opción vegetariana',
    //         'Transporte en vehículo 4x4 adaptado para desierto y caminos de tierra',
    //         '1 noche en Hotel de Sal básico (San Juan o Colchani) y 1 noche en refugio altiplánico (Laguna Colorada)',
    //         'Conductor / guía local en español',
    //         'Botiquín de primeros auxilios y tubo de oxígeno'
    //     ],
    //     excluded: [
    //         'Entrada a la Reserva Eduardo Avaroa (150 Bs extranjeros / 30 Bs nacionales)',
    //         'Entrada a la Isla Incahuasi (30 Bs)',
    //         'Ingreso a las Aguas Termales de Polques (6 Bs)',
    //         'Duchas calientes en los refugios (aprox. 10-15 Bs)',
    //         'Gastos personales y propinas'
    //     ],
    //     itinerary: [
    //         {
    //             day: 'Día 1',
    //             title: 'Cementerio de Trenes, Salar e Isla Incahuasi',
    //             desc: 'Salamos a las 10:30 AM rumbo al Cementerio de Trenes y Colchani. Entramos al gran Salar de Uyuni, almorzamos en medio de la sal blanca, realizamos fotos de ilusión óptica y recorremos la Isla Incahuasi. Observamos un atardecer indefinido y pernoctamos en un hotel rústico de sal.'
    //         },
    //         {
    //             day: 'Día 2',
    //             title: 'Lagunas Altiplánicas, Desierto de Siloli y Laguna Colorada',
    //             desc: 'Viajamos hacia el sur. Pasamos por el mirador del Volcán Ollagüe y visitamos las lagunas Cañapa, Hedionda y Chiarcota para ver flamencos andinos. Cruzamos el Desierto de Siloli para fotografiar el famoso "Árbol de Piedra". Finalizamos el día ingresando a la Reserva Avaroa para contemplar la inmensa Laguna Colorada con su coloración rojiza y miles de flamencos nidificando. Dormimos en un refugio local.'
    //         },
    //         {
    //             day: 'Día 3',
    //             title: 'Géiseres Sol de Mañana, Aguas Termales y Laguna Verde',
    //             desc: 'Comenzamos a las 5:00 AM para visitar los géiseres y fumarolas "Sol de Mañana" a 4,800 msnm. Luego nos relajamos en las aguas termales de Polques (38°C) rodeados de frío altiplánico. Atravesamos el Desierto de Dalí y llegamos a la Laguna Verde en la base del Volcán Licancabur. Retornamos a Uyuni pasando por el Valle de Rocas, concluyendo a las 6:00 PM.'
    //         }
    //     ],
    //     faqs: [
    //         {
    //             q: 'A qué altitud se llega durante el viaje?',
    //             a: 'Comenzamos en Uyuni a 3,650 msnm, pero en el segundo y tercer día se transita a altitudes superiores a 4,500 msnm, llegando a 4,850 msnm en los géiseres. Se aconseja aclimatarse previamente y beber mucha agua o mate de coca.'
    //         },
    //         {
    //             q: 'Cómo son las temperaturas en la ruta?',
    //             a: 'Durante el día el sol es muy fuerte pero hay viento frío. Por la noche, especialmente en el refugio del segundo día cerca de Laguna Colorada, las temperaturas descienden bajo cero (-5°C a -15°C en invierno). Es fundamental llevar buen abrigo térmico.'
    //         }
    //     ],
    //     gallery: [
    //         { img: basePath + 'assets/images/tours/salar1.jpeg', caption: 'Miles de flamencos rosados en la Laguna Colorada' },
    //         { img: basePath + 'assets/images/tours/salar.jpeg', caption: 'El imponente Árbol de Piedra en el desierto de Siloli' },
    //         { img: basePath + 'assets/images/tours/incahuasi.jpeg', caption: 'Baño relajante en las aguas termales de Polques' }
    //     ]
    // },

};
