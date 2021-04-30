-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2021 a las 02:02:03
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pwa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `montania`
--

CREATE TABLE `montania` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `id_provincia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `montania`
--

INSERT INTO `montania` (`id`, `nombre`, `descripcion`, `imagen`, `id_provincia`) VALUES
(1, 'Cerro Piltriquitron', 'El cerro Piltriquitrón (mapudungun: Piltriquitrón, \"cerro colgado de las nubes\"),1​2​ también conocido como \"el Piltri\" por la gente del lugar, es una montaña ubicada en la cordillera de los Andes, al este de la comarca de El Bolsón en la Provincia de Río Negro, Argentina (la parte sur del cerro se ubica sobre la provincia de Río Negro). Su cima se encuentra a 2.260 metros sobre el nivel del mar', './img/piltriquitron.jpg', 1),
(2, 'Cerro Catedral', 'Es el centro de esquí más grande del hemisferio sur ( 1200 hectáreas esquiables ) y ofrece una amplia infraestructura de servicios para la práctica de deportes invernales. Está abierto todo el año y cuenta con 34 medios de elevación (entre aerosillas, telecabinas y medios de arrastre), facilitando el ascenso de 29 mil personas por hora.', './img/cerro-catedral.jpg', 1),
(3, 'Cerro La Atravesada', 'El cerro Atravesada, conocido además como El Atravesado, se encuentra en la Sierra del Chachil precordillera Neuquina, provincia del Neuquén en la República Argentina,1​2​ tiene una altitud de 2.590 m, se encuentra al sur de la Ruta Provincial Nº 13, en inmediaciones del Portezuelo de la Atravesada, lugar donde se encuentra dicha ruta, que desde Zapala, (de este a oeste) tiene el objetivo de comunicar la zona del Lago Aluminé y lago Moquehue y Villa Pehuenia, pasando por Primeros Pinos,3​ además esta ruta comunica con la República de Chile por el paso Icalma. Está clasificado geológicamente como orográfico. En este inmediaciones de este cerro se encuentra una laguna, la Laguna del cerro Atravesada', './img/cerro-atravesada.jpg', 2),
(4, 'Volcan Lanin', 'El Lanín (en lengua mapuche Pillañzegüñ) es un estratovolcán considerado activo, ubicado en el sur de Chile y Argentina. Tiene una altitud de 3776 metros sobre el nivel del mar, este volcán se encuentra incluido en el Cinturón de Fuego del Pacífico. Por primera vez en tiempos históricos se detectó actividad en el volcán a partir del 15 de febrero de 2017 producto de movimientos sísmicos en su interior', './img/volcan-lanin.jpg', 2),
(5, 'Cerro Fitz Roy', 'El monte Fitz Roy, o cerro Chaltén, es una montaña de 3405 m s. n. m. ubicada al oriente del campo de hielo Patagónico Sur en el límite entre Argentina y Chile,1​2​3​4​5​6​7​8​9​10​ en la Patagonia, cerca de la villa de El Chaltén. El grupo montañoso al cual pertenece conforma uno de los grandes nunataks del campo de hielo patagónico sur.11​\r\n\r\nPocos kilómetros al sur de esta montaña se inicia la última área fronteriza no definida entre ambos países (fuera de la Antártida), que llega hasta el cerro Murallón, el cual se encuentra hacia el sur (véase: litigio del campo de hielo patagónico sur). Se encuentra ubicado dentro de dos parques nacionales: Bernardo O\'Higgins en su lado chileno y el parque Los Glaciares en su contra parte argentina. Esta cumbre ofrece un espectáculo imponente al asomar sus crestas y aristas entre glaciares y nubes; y en ciertos momentos del día toma sorprendentes coloridos según la iluminación del sol.', './img/cerro-fitz-roy.jpg', 3),
(6, 'Cerro Torre', 'El cerro Torre es una montaña de 3133 msnm ubicada en el borde oriental del campo de hielo Patagónico Sur en el sur de la Patagonia, parte austral de América del Sur. Se encuentra en el sector pendiente de delimitación en la frontera entre Argentina y Chile que data desde el Acuerdo de 1998,1​ este sector es desde el sur del Monte Fitz Roy hasta el Cerro Murallón, en el Tratado se pretendía delimitar desde el Fitz Roy hasta el Cerro Daudet, sin embargo, debido al desacuerdo en cuanto a delimitar el sector norte, sólo quedó definido desde el Cerro Murallón hasta el Daudet. Debido a esto, su estatus político y neutral es el de un cerro internacional, el cual pertenece a ambos países, los cuales ambos deben definir una frontera definitiva.', './img/cerro-torre.jpg', 3),
(7, 'Cerro Aconcagua', 'Desc Aconcagua', '', 4),
(8, 'Cordon del Plata', 'Desc Cordon del Plata', '', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id_provincia` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id_provincia`, `nombre`) VALUES
(1, 'Rio Negro'),
(2, 'Neuquen'),
(3, 'Santa Cruz'),
(4, 'Mendoza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nombre_usuario` varchar(100) NOT NULL,
  `empresa` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `comentario` text NOT NULL,
  `provincia` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`nombre_usuario`, `empresa`, `telefono`, `email`, `comentario`, `provincia`) VALUES
('maxi', 'Eventbrite', 29940476, 'maximiliano@gmail.com', 'Ninguno', ''),
('Maxi1', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi10', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi11', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi12', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi13', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi14', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi15', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi16', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi2', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi3', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi4', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi5', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi6', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi7', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi8', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('Maxi9', 'Empresa1', 2944004, 'maxi@maxi1', 'ninguno', ''),
('maxiiii05', 'Eventbrite2', 2147483647, 'maximiliano.villalba@est.fi.uncoma.edu.ar', 'ddd', 'Neuquen');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `montania`
--
ALTER TABLE `montania`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_provincia` (`id_provincia`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id_provincia`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`nombre_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `montania`
--
ALTER TABLE `montania`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id_provincia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `montania`
--
ALTER TABLE `montania`
  ADD CONSTRAINT `montania_ibfk_1` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
