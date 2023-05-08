export const package1 = {
    package: {
        name: "Paquete de las tortugas",
        location: "pehuajo, Buenos Aires",
        price: 2000,
        duration: 4,
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pehuajo246.JPG",
        img2: "https://static.hendel.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/1/31341.jpg" ,
        img3:  "https://production.listennotes.com/podcasts/los-duendes-de-la/la-tortuga-manuelita-sbq3Wk4yB2v-6TFmV49Ue5-.1400x1400.jpg",
        img4: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/O73ATX4NTFGWTGWNCFNTHZ56JU.jpg",
        description: "Manuelita vivia en pehuajo, pero un dia se marcho...",
        quotas: 75,
        dateInit: "12/5/23",
        dateEnd: "12/9/23",
    },
    activities: [
            {
                "name": "Caminata glaciar",
                "duration": 5,
                "img": [
                    "https://www.lanacion.com.ar/resizer/a8An2yB0RD23JrhE04H8z8_puc0=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VVYGBVRYG5EBLEXXLMT2T4NPJI.jpg",
                    "https://www.argentina.gob.ar/sites/default/files/carpincho_ph_parquesnacionales.jpeg",
                    "https://www.greenpeace.org/static/planet4-argentina-stateless/2021/08/0aa13819-carpincho-3-%C2%A9-pablo-rodrigruez-merkel-greenpeace.jpeg"
                ],
                "description": "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
                "typeAct": "treking",
                "price": 250
            },
            {
                "name": "Bicicleteada en el canal",
                "duration": 4,
                "img": ["https://www.castelar-digital.com.ar/img/fotos/Carpincho_Merlo_animal_salvaje_silvestre_domesticado_El_Ceibo_1%20(2).jpeg",
                        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MRRSGASO3FAGBGC57XGDJPPPCM.jpg"
            ],
                "description": "Embárcate en una aventura única a través del Canal de Beagle, uno de los lugares más icónicos de la Patagonia. ",
                "typeAct": "bike",
                "price": 150
            },
            {
                "name": "Escalada en la montaña",
                "duration": 10,
                "img": ["https://www.hogarmania.com/archivos/202207/carpincho-1280x720x80xX.jpg"],
                "description": "Experimenta el desafío de una subida al Cerro Torre, la montaña más icónica de la Patagonia.",
                "typeAct": "show",
                "price": 370
            },
            {
                "name": "Caminata en el parque nacional",
                "duration": 6,
                "img": ["https://www.castelar-digital.com.ar/img/fotos/Carpincho_Merlo_animal_salvaje_silvestre_domesticado_El_Ceibo_1%20(3).jpeg",
                        "https://tn.com.ar/resizer/PfCF7llwixFJqeKDWEU7mGMQvqM=/arc-anglerfish-arc2-prod-artear/public/7KN3BQZPQNEBZGRAFJJ43NO6IE.jpg"    
            ],
                "description": "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
                "typeAct": "travel",
                "price": 230
            },
            {
                "name": "Caballos",
                "duration": 5,
                "img": ["https://media.ambito.com/p/0af13291ff93aec7423187c845507b6c/adjuntos/239/imagenes/039/278/0039278392/1200x675/smart/carpinchosjpeg.jpeg",
                        "https://static.misionesonline.news/wp-content/uploads/2022/06/carpincho-adulto-tumbado-1280x720x80xX.jpg",
            ],
                "description": "Descubre la Patagonia de una forma diferente, a caballo en la Estancia Cristina.",
                "typeAct": "relax",
                "price": 400
            }
        ],
    hotel: {
        "name": "Hotel River Pley",
        "location": "El Calafate, Santa Cruz, Argentina",
        "img": ["https://logodownload.org/wp-content/uploads/2015/05/river-plate-logo-6.png"],
        "description": "Disfruta de una estadía inolvidable con vistas al lago Argentino y los glaciares cercanos.",
        "stars": 4,
        "priceDay": 1500
    },
    resto: [{
        name: "El fogon bariloche",
        location: "Bariloche, Argentina",
        img: ["https://media.revistavanityfair.es/photos/60e84d70ec46354bf448266f/master/w_1600%2Cc_limit/28299.jpg",
            "https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/FGROL35OHJAHRABZQV5ILA2FPI.jpg",
            "https://cdn.semana.es/wp-content/uploads/2021/05/kanye-west-min.jpg"
    ],
        price: "2800",
        description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
    },
    {
        name: "Milanesas king bariloche",
        location: "Bariloche, Argentina",
        img: ["https://www.potq.net/wp-content/uploads/2021/01/MF-DOOM-2020.jpg",
            "https://indiehoy.com/wp-content/uploads/2021/03/mf-doom.jpg",
            "https://rosarioplus-assets.tadevel.xyz/5ff338859b52e8039a039e17/720.jpeg"
    ],
        price: "1000",
        description: "Las mejores milanesas de Bariloche."
    },
    {
        name: "No se me ocurre nombre, bariloche",
        location: "Bariloche, Argentina",
        img: ["https://i1.sndcdn.com/artworks-000006685250-kycq1o-t500x500.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Death_grips_2014.jpg",
    ],
        price: "700",
        description: "Yo que se, chabon."
    }],
    user: {
        userName: "lucas",
        email: "nada",
        password: "123456",
        lastName: "Guere",
        social: true,
        socialRed: "feisbuh"
    }
}

export const package2 = {
    package: {
        name: "paquete de paisAjes",
        location: "pehuajo, Buenos Aires",
        price: 2100,
        duration: 5,
        img: "https://www.rionegro.com.ar/wp-content/uploads/2022/01/Tekking-Rio-Azul-foto-puente-la-tronconada.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/6/60/El_Bolson_vista_desde_Cerro_Piltriquitron.JPG",
        img3: "",
        img4: "",
        description: "nadie supo bien por que, a paris ella se fue...",
        quotas: 75,
        dateInit: "5/12/23",
        dateEnd: "5/17/23",
    },
    activities: [
            {
                "name": "Caminata en el bosque",
                "duration": 5,
                "img": ["https://upload.wikimedia.org/wikipedia/commons/4/4b/Silz_cerf20-2.jpg",
                        "https://imagenes.elpais.com/resizer/7YrlFf12-JzX-jP39Og442yOiOk=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IU424UWBGBG6JDKFAEGQRBFD7A.jpg",
                        "https://www.argentina.gob.ar/sites/default/files/ciervo_de_los_pantanos_2.jpg",
                        "https://www.uco.es/servicios/actualidad/media/k2/items/cache/9cff0ac8c02da8881159b54b1bde2bf8_XL.jpg"
            ],
                "description": "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
                "typeAct": "treking",
                "price": 250
            },
            {
                "name": "barqueada por el canal",
                "duration": 4,
                "img": ["https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/12/23/16402686656783.jpg"],
                "description": "Embárcate en una aventura única a través del Canal de Beagle, uno de los lugares más icónicos de la Patagonia. ",
                "typeAct": "bike",
                "price": 150
            },
            {
                "name": "escalada en la meseta",
                "duration": 10,
                "img": ["https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2022/11/15/6373625191f9e.r_d.593-325-10042.jpeg"],
                "description": "Experimenta el desafío de una subida al Cerro Torre, la montaña más icónica de la Patagonia.",
                "typeAct": "show",
                "price": 370
            },
            {
                "name": "Caminata en la playa",
                "duration": 6,
                "img": ["https://media.infocielo.com/p/4cc54dd3b971c8a20b0b895219f80082/adjuntos/299/imagenes/001/559/0001559214/887x0/smart/pexels-pixabay-34485jpg.jpg"],
                "description": "Explora la belleza natural del Parque Nacional Tierra del Fuego, ubicado en la región más austral de la Patagonia. ",
                "typeAct": "travel",
                "price": 230
            },
            {
                "name": "andada a caballo",
                "duration": 5,
                "img": ["https://www.lavozdegalicia.es/default/2023/04/11/00121681240739932383735/Foto/bambi.jpg",
                        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bambi-1565685319.jpg"
            ],
                "description": "Descubre la Patagonia de una forma diferente, a caballo en la Estancia Cristina.",
                "typeAct": "relax",
                "price": "400"
            }
        ],
    hotel: {
        "name": "Hostel boca hijo",
        "location": "Bariloche, Río Negro, Argentina",
        "img": ["https://logodownload.org/wp-content/uploads/2016/10/boca-juniors-logo-escudo-0.png",
                "https://images6.alphacoders.com/989/thumb-1920-989983.jpg",
                "https://deportesonce.com.ar/wp-content/uploads/N5-Boca-Juniors-Sorma-2.jpg"
        ],
        "description": "Descubre la tranquilidad de la Patagonia en medio del bosque andino.",
        "stars": 3,
        "priceDay": 2500
    },
    resto: [{
        name: "ensaladas",
        location: "Bariloche, Argentina",
        img: ["https://cloudfront-us-east-1.images.arcpublishing.com/infobae/J5IOMHDUV5GQ3CF4MHY7SF5DSU.jpg",
            "https://media.diariouno.com.ar/p/f5cf94bcfc18424ed8885501df30e807/adjuntos/298/imagenes/009/093/0009093616/1200x0/smart/capturajpg.jpg"
    ],
        price: "2800",
        description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
    },
    {
        name: "Ensaladas pero con fiambre",
        location: "Bariloche, Argentina",
        img: ["https://distintaslatitudes.net/storage/2017/09/GUSTAVO-CERATI.jpg",
                "https://media.ambito.com/p/a7f9e6a481421f4c44930990e76cf28e/adjuntos/239/imagenes/040/122/0040122816/gustavo-ceratijpg.jpg",
                "https://indiehoy.com/wp-content/uploads/2018/08/gustavo-cerati-1280x720.jpg",
    ],
        price: "2800",
        description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
    },
    {
        name: "Milanesas con salsa",
        location: "Bariloche, Argentina",
        img: ["https://indiehoy.com/wp-content/uploads/2022/10/charly-garcia.jpg"],
        price: "2800",
        description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
    }],
    user: {
        userName: "elias",
        email: "anda",
        password: "654321",
        lastName: "gomez",
        social: true,
        socialRed: "feisbuh"
    }
}

export const package3 = {
    package: {
        name: "test package 3",
        location: "pehuajo, Buenos Aires",
        price: 1900,
        duration: 3,
        img: "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg",
        img2: "https://media.admagazine.com/photos/63643d86181bc087f601b9e0/16:9/w_2560%2Cc_limit/tempo_ad_mueble.jpg",
        img3: "https://salcedomueble.com//wp-content/uploads/2021/12/muebles-salcedo.jpg",
        img4: "",
        description: "un poquito caminando y otro poquitito a pie...",
        quotas: 75,
        dateInit: "5/15/23",
        dateEnd: "5/18/23",
    },
    activities: [
            {
                "name": "Recorrido glaciar",
                "duration": 5,
                "img": ["https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg"],
                "description": "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
                "typeAct": "treking",
                "price": "120"
            },
            {
                "name": "pesca en el riachuelo",
                "duration": 4,
                "img": ["https://cdn0.ecologiaverde.com/es/posts/7/7/4/animales_que_viven_en_el_campo_3477_orig.jpg"],
                "description": "Embárcate en una aventura única a través del Canal de Beagle, uno de los lugares más icónicos de la Patagonia. ",
                "typeAct": "bike",
                "price": "750"
            },
            {
                "name": "caminata por el bosque",
                "duration": 10,
                "img": ["https://cdn0.ecologiaverde.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg"],
                "description": "Experimenta el desafío de una subida al Cerro Torre, la montaña más icónica de la Patagonia.",
                "typeAct": "show",
                "price": "80"
            },
            {
                "name": "caballos pero para verlos nomas",
                "duration": 5,
                "img": ["https://upload.wikimedia.org/wikipedia/commons/7/72/Igel.JPG"],
                "description": "Descubre la Patagonia de una forma diferente, a caballo en la Estancia Cristina.",
                "typeAct": "relax",
                "price": "100"
            }
        ],
        hotel: {
            "name": "Hotel rojo vivo",
            "location": "Puerto Madryn, Chubut, Argentina",
            "img": ["https://es.logodownload.org/wp-content/uploads/2018/10/independiente-logo-0.png",
                    "https://locoxelrojo.com/independiente/wp-content/uploads/2021/09/Nuevo-Escudo-Independiente-Avellaneda-18-Estrellas-Titulos-Internacionales.jpg"    
        ],
            "description": "Disfruta de una experiencia única en la costa patagónica, cerca de la reserva natural de ballenas.",
            "stars": 1,
            "priceDay": 500
        },
        resto: [{
            name: "Parrila al rojo vivo",
            location: "Bariloche, Argentina",
            img: ["https://www.clarin.com/img/2021/04/22/oDp3cSLIV_720x0__1.jpg",
                "https://es.rollingstone.com/wp-content/uploads/2022/08/WEB-My-Life-As-A-Rolling-Stone_Band_02_Credit@-Mark-Seliger.jpg"
        ],
            price: "2800",
            description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
        },
        {
            name: "Sanguches de miga",
            location: "Bariloche, Argentina",
            img: ["https://media.npr.org/assets/img/2020/11/13/outkastb-wflag_wide-265a1c04bb72a827735695a8503f585f246ffe14.jpg",
                "https://lacarteleramx.com/wp-content/uploads/2021/07/331f5256-outkast_vinilo-remasterizado_album-atliens_25-aniversario_lacarteleramx_mx_.jpg",
                "https://cdn.themedizine.com/2021/12/big-boi-outkast-the-medizine.jpg"
        ],
            price: "150",
            description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
        },
        {
            name: "Cocina de la nona",
            location: "Bariloche, Argentina",
            img: ["https://images2.alphacoders.com/445/445817.jpg",
                "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OLZOQMQVQNGERNP2FLELHW362E.jpg"
        ],
            price: "700",
            description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
        }],
        user: {
            userName: "marcos",
            email: "dnaa",
            password: "123654",
            lastName: "mugica",
            social: true,
            socialRed: "feisbuh"
        }
}

export const package4 = {
    package: {
        name: "Test package 4",
        location: "pehuajo, Buenos Aires",
        price: 3200,
        duration: 10,
        img: "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:1280/p:4x3/gato.jpg",
        img2: "https://images.ecestaticos.com/DiJ6Fx5gUleSR6P1IBGPELVncIQ=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4d0%2F68f%2Fb04%2F4d068fb04ec4ef3950da1cb9ed696747.jpg",
        img3: "https://media.ambito.com/p/e31ec80599101794839617073dc319e7/adjuntos/239/imagenes/040/456/0040456806/gatos-portadajpg.jpg",
        img4: "",
        description: "Manuelita *clap* *clap* *clap*, Mauenlita *clap* *clap* *clap*, Manuelita donde vas...",
        quotas: 75,
        dateInit: "5/12/23",
        dateEnd: "5/22/23",
    },
    activities: [
            {
                "name": "Glaciar pero camina",
                "duration": 1,
                "img": ["https://upload.wikimedia.org/wikipedia/commons/0/02/Eichh%C3%B6rnchen_D%C3%BCsseldorf_Hofgarten_edit.jpg",
                        "https://misanimales.com/wp-content/uploads/2020/10/ardilla-gris-cara.jpg"
            ],
                "description": "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
                "typeAct": "treking",
                "price": "50"
            },
            {
                "name": "Andada en barco por nosedonde",
                "duration": 3,
                "img": ["https://t1.ea.ltmcdn.com/es/posts/3/6/7/donde_viven_las_ardillas_25763_orig.jpg",
                    "https://okdiario.com/img/2019/08/12/ardilla.jpg",
                    "https://misanimales.com/wp-content/uploads/2020/10/ardilla-gris-cara.jpg",
                    "https://misanimales.com/wp-content/uploads/2021/10/ardilla-come-bellota-1024x683.jpg"
            ],
                "description": "Embárcate en una aventura única a través del Canal de Beagle, uno de los lugares más icónicos de la Patagonia. ",
                "typeAct": "bike",
                "price": "1750"
            }
        ],
    hotel: {
        "name": "Un hostel mas chico no existe",
        "location": "El Chaltén, Santa Cruz, Argentina",
        "img": ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Escudo_de_Racing_Club.svg/1200px-Escudo_de_Racing_Club.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG/1200px-Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG",
            "https://images.hola.com/imagenes/viajes/20221031220099/como-visitar-glaciar-perito-moreno-argentina/1-158-757/00portada-perito-moreno-adobestock362248812-t.jpg",
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ff/de/0f.jpg"
    ],
        "description": "Sumérgete en la naturaleza virgen de los glaciares, en el corazón de la Patagonia argentina.",
        "stars": 5,
        "priceDay": 2700
    },
    resto: [{
        name: "Mostaza hamburguesas",
        location: "Bariloche, Argentina",
        img: ["https://resizer.glanacion.com/resizer/_AVImqH2UIRig-2Dx9xutWp9v7k=/1200x800/filters:format(webp):quality(80):focal(1062x581:1072x571)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/6THWTRNHQVAOPLQ5Z73GQJHIHE.jpg"],
        price: "1100",
        description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
    },
    {
        name: "Subway bariloche",
        location: "Bariloche, Argentina",
        img: ["https://akamai.sscdn.co/uploadfile/letras/fotos/a/8/d/d/a8dd5a4a9b1c5b229a182661faffb36d.jpg"],
        price: "1400",
        description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
    },
    {
        name: "La verdadera pasta italiana",
        location: "Bariloche, Argentina",
        img: ["https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/09112202/Los-Redondos-vieja-1920.jpg"],
        price: "2000",
        description: "El Fogón de María es un restaurante acogedor y elegante en el corazón de Bariloche."
    }
    ],
    user: {
        userName: "damian",
        email: "adna",
        password: "321456",
        lastName: "broglia",
        social: true,
        socialRed: "feisbuh"
    }
}