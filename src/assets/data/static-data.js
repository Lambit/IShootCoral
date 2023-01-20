import Sps from '../models/sps';
import Lps from '../models/lps';
import Zoas from '../models/zoas';
import Types from '../models/types';
import Gallery from '../models/gallery';

export const TYPES = [
    new Types('800-sps', 'SPS', require('../images/common/Dip-snail.jpeg'), ),
    new Types('801-lps', 'LPS', require('../images/common/Full-tilt.jpeg'), ),
    new Types('802-Zoas', 'ZOA', require('../images/common/CBZ.jpeg'), ),
    ];

export const SPS = [
    new Sps('500-sps', 'CB Maleficent', require('../images/sps/CB-maleficent.jpeg'), 'SPS' ),
    new Sps('501-sps', 'UC Dipping Dots', require('../images/sps/DDMother.jpg'), 'SPS'  ),
    new Sps('502-sps', 'BC Frankenberry', require('../images/sps/frank.jpg'), 'SPS'  ),
    new Sps('503-sps', 'Garf Bonsi',  require('../images/sps/garf.jpg'), 'SPS' ),
    new Sps('504-sps', 'RR Lady In Pink', require('../images/sps/Pink-lady.jpeg'), 'SPS'   ),
    new Sps('505-sps', 'Vivid Confetti',  require('../images/sps/vivid-confetti.jpeg'), 'SPS'  ),
];

export const LPS = [
    new Lps('600-lps', 'Angel Eyes Favia', require('../images/lps/Angel-eyes.jpeg'), 'LPS' ),
    new Lps('601-lps', 'Full Tilt Favia', require('../images/gallery/Full-tilt.jpeg'), 'LPS' ),
    new Lps('602-lps', 'Orange Acan', require('../images/lps/Orange-acan.jpeg'), 'LPS' ),
    new Lps('603-lps', 'Pussycat Blasto', require('../images/lps/Pussycat-blasto.jpeg'), 'LPS' ),
    new Lps('603-lps', 'Blasto', require('../images/lps/common-blasto.jpeg'), 'LPS' ),
    new Lps('603-lps', 'OG Bounce', require('../images/lps/OG-bounce.jpeg'), 'LPS' ),
    new Lps('603-lps', 'OG Godzilla', require('../images/lps/OG-godzilla.jpeg'), 'LPS' ),
    new Lps('603-lps', 'Frankenstein', require('../images/lps/Frank-bounce.jpeg'), 'LPS' ),
    new Lps('603-lps', 'Sunkist Bounce', require('../images/lps/Sunkiss.jpeg'), 'LPS' ),
    new Lps('603-lps', 'Rainbow Anenome', require('../images/common/nem-header.jpg'), 'LPS' ),
];

export const ZOA = [
    new Zoas('1100-zoas', 'Rainbow Trolls', require('../images/zoas/Rainbow-trolls.jpeg'), 'ZOA'),
    new Zoas('1101-zoas', 'Snitches', require('../images/zoas/Snitches.jpeg'), 'ZOA'),
    new Zoas('1102-zoas', 'Twizzlers', require('../images/zoas/Twizzlers.jpeg'),'ZOA'),
    new Zoas('1103-zoas', 'Yoda', require('../images/zoas/Yodas.jpeg'),'ZOA'),
    new Zoas('1104-zoas', 'Orange Mandarin', require('../images/zoas/Orange-mandarin.jpeg'),'ZOA'),
    new Zoas('1105-zoas', 'Gobstoppers', require('../images/zoas/gobstoppers.jpg'),'ZOA'),
    new Zoas('1106-zoas', 'GB Buttkissers', require('../images/zoas/GB-buttkissers.jpeg'),'ZOA'),
    new Zoas('1107-zoas', 'Fruit-Loops', require('../images/zoas/Fruit-loops.jpeg'),'ZOA',),
    new Zoas('1108-zoas', 'CBZ', require('../images/zoas/CBZ-base.jpeg'),'ZOA'),
    new Zoas('1109-zoas', 'Captain America', require('../images/zoas/Capt-am.jpeg'), 'ZOA'),
];

export const GALLERY = [
    new Gallery('900-g', require('../images/gallery/cc-1.jpeg'),  ),
    new Gallery('901-g', require('../images/gallery/cc-2.jpeg'),  ),
    new Gallery('902-g', require('../images/gallery/Cpt-Am-3p.jpeg'),),
    new Gallery('903-g', require('../images/gallery/Cpt-Am-4p.jpeg'), ),
    new Gallery('904-g', require('../images/gallery/FL-mini-colony.jpeg'), ),
    new Gallery('905-g', require('../images/gallery/Frank-1.jpeg'), ),
    new Gallery('906-g', require('../images/gallery/Fruit-loop-3p.jpeg'), ),
    new Gallery('907-g', require('../images/gallery/Fruit-loop-4p.jpeg'), ),
    new Gallery('908-g', require('../images/gallery/Full-tilt.jpeg'), ),
    new Gallery('909-g', require('../images/gallery/YETI-3.jpeg'), ),
    new Gallery('910-g', require('../images/gallery/YETI-2.jpeg'), ),
    new Gallery('911-g', require('../images/gallery/YETI-1p.jpeg'), ),
    new Gallery('912-g', require('../images/gallery/White-zombie.jpeg'), ),
    new Gallery('913-g', require('../images/gallery/Walt.jpeg'), ),
    new Gallery('914-g', require('../images/gallery/Snitiches-3p.jpeg'), ),
    new Gallery('915-g', require('../images/gallery/Rasta-4p.jpeg'), ),
    new Gallery('916-g', require('../images/gallery/OM-4p.jpeg'), ),
    new Gallery('917-g', require('../images/gallery/OM-2p.jpeg'), ),
    new Gallery('918-g', require('../images/gallery/Mal.jpeg'), ),
    new Gallery('919-g', require('../images/gallery/JJ-10p.jpeg'), ),
    new Gallery('920-g', require('../images/gallery/JJ-6p.jpeg'), ),
    new Gallery('921-g', require('../images/gallery/Apack.jpeg'), ),
    new Gallery('922-g', require('../images/gallery/Angel-eyes-6.jpeg'), ),
    new Gallery('923-g', require('../images/gallery/Angel-eyes-7.jpeg'), ),
    new Gallery('924-g', require('../images/gallery/AOI-2p.jpeg'), ),
    new Gallery('925-g', require('../images/gallery/BB-6p.jpeg'), ),
    new Gallery('926-g', require('../images/gallery/Twizzlers.jpeg'), ),
];


