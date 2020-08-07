-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-08-2020 a las 04:08:31
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `yarbis`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `lote` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `nombre_producto` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `id_producto` int(11) NOT NULL,
  `precio` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `categoria` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `categoria`, `ts_create`) VALUES
(1, 'amber', '2020-06-19 22:09:37'),
(2, 'stout', '2020-06-19 22:10:29'),
(3, 'scottish', '2020-06-19 22:10:29'),
(4, 'old', '2020-06-19 22:14:37'),
(5, 'doppelbock', '2020-06-19 22:14:37'),
(6, 'hellesbock', '2020-06-19 22:15:00'),
(7, 'blonde', '2020-06-19 22:15:00'),
(8, 'apa', '2020-06-19 22:15:18'),
(9, 'porter', '2020-06-19 22:15:18'),
(10, 'irish', '2020-06-19 22:15:50'),
(11, 'hefeweizen', '2020-06-19 22:15:50'),
(12, 'honey', '2020-06-19 22:18:21'),
(13, 'lager', '2020-06-19 22:18:21'),
(14, 'pils', '2020-06-19 22:18:21'),
(15, 'ipa', '2020-06-19 22:18:21'),
(16, 'neipa', '2020-06-19 22:18:21'),
(17, 'quadrupel', '2020-06-19 22:18:21'),
(18, 'dubbel', '2020-06-19 22:18:21'),
(19, 'tripel', '2020-06-19 22:18:21'),
(22, 'ahumada', '2020-08-06 22:20:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cerveceria`
--

CREATE TABLE `cerveceria` (
  `id_cerveceria` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf16_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `cerveceria`
--

INSERT INTO `cerveceria` (`id_cerveceria`, `nombre`) VALUES
(1, 'Darwin'),
(3, 'Deleuze'),
(4, 'Okcidenta'),
(5, 'Prinston'),
(6, 'Juguetes Perdidos'),
(7, 'Buko'),
(8, 'Mur'),
(9, 'Tropel'),
(10, 'Yorka');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id_compra` int(11) NOT NULL,
  `id_carrito` int(11) NOT NULL,
  `lote` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `precio_final` int(255) NOT NULL,
  `domicilio` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `codigo postal` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envio`
--

CREATE TABLE `envio` (
  `id_envio` int(11) NOT NULL,
  `id_compra` int(11) NOT NULL,
  `inicio_envio` datetime NOT NULL DEFAULT current_timestamp(),
  `fin_envio` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf16_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf16_spanish2_ci NOT NULL,
  `id_cerveceria` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `volumen` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `imagen` varchar(60) COLLATE utf16_spanish2_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `estado` varchar(60) COLLATE utf16_spanish2_ci NOT NULL DEFAULT '1',
  `ts_create` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `descripcion`, `id_cerveceria`, `id_categoria`, `volumen`, `precio`, `imagen`, `stock`, `descuento`, `estado`, `ts_create`) VALUES
(35, 'Buko \"Bear Way\" Honey 2', 'AV 5,5% IBU 9\r\n\r\nCon un color amarillo brillante esta birra logra combinar el dulzor de la más pura miel de Entre Ríos, agregada por medio de un Dry Honey en madurado, con un suave amargor y delicado sabor a lúpulos nobles alemanes. Dale una oportunidad y terminá con el mito de que las Honey no sorprenden.', 7, 12, 473, 130, 'afca573e-fa9f-453d-a8d1-6a3a11249c28.png', 0, 0, '1', '2020-07-31 21:41:20'),
(36, 'Buko \"Cordero Atado\" Golden ', 'AV 5,1% IBU 10\r\nElla siempre está bien, siempre te sonríe. No tiene aristas agresivas ni pretende tenerlas. Es generosa en su sencillez y refresca en cada trago. Permitite acariciar a este cordero atado.', 7, 7, 473, 130, '0bf8965d-8cb3-4800-b0e2-2679ee990a5c.png', 10, 0, '1', '2020-07-31 21:49:12'),
(37, 'Buko \"Small Batch\" English IPA', 'Edición especial de pocos litros de English IPA, pocas unidades.', 7, 15, 354, 130, '2e1e4859-8b87-402d-8b8a-339caa417ddd.jpeg', 10, 0, '1', '2020-07-31 21:50:48'),
(38, 'Buko \"Lobo Suelto\"', 'AV 6,8% IBU 18\r\n\r\n“Querido corderito... A partir de ahora perderás tu inocencia, pero no temas, la pérdida de la inocencia traerá belleza a tus ojos. Te dejaré las sobras, y aunque es verdad que hay un mundo en ellas, ascenderé con la esperanza de que no te pruebes la piel que yo gasté”.\r\nLager de color cobrizo oscuro, maltosa por definición deja también lugar a sutiles notas florales de lúpulo.\r\nEste lobo está suelto y al acecho de corderos como vos.', 7, 5, 473, 130, 'b48fe5b4-3ffa-45e2-9e80-f2de65cf5dbb.png', 10, 0, '1', '2020-07-31 21:53:21'),
(39, 'Buko \"Once Olas\" American IPA', 'AV 6% IBU 53\r\n\r\nEste barco no salió de Inglaterra. Ni tenía como destino ir a India.\r\nSalió de puertos que no existen en el valle de Yakima y amarro en tu mano. Ahora ahogate, en este océano de frutas cítricas, tropicales y resinas que enarbolan la bandera de la movida CRAFT en el estilo mas interpretado que tiene esta bebida.', 7, 15, 473, 130, '88cc6467-4e5d-408a-bf90-9ffaaee32c9b.png', 10, 0, '1', '2020-07-31 21:54:56'),
(40, 'Buko \"Kilt\" Scotch', 'AV 6,9% IBU 18\r\n\r\nEl unicornio es el animal nacional de Escocia y nosotros logramos meterlo en una lata.\r\nUn exquisito cuerpo rubí, tallado a mano por cadenas no fermentables de azúcares que la levadura no procesa dando músculo a esta birra. La dulzura que guarda lo mítico que hace magia con un cuerno de casi 7% de alcohol.', 7, 3, 473, 130, '62fd0d06-a0f0-4254-98da-f95fd426500b.png', 10, 0, '1', '2020-07-31 22:16:34'),
(41, 'Juguetes Perdidos \"Siegfried\" Maerzen Rauchbier 2', 'AV 6% IBU 23\r\nRubia lager con maltas ahumadas.', 6, 7, 354, 200, '781a865a-4caa-4429-9f60-3a8c6eb24877.jpeg', 0, 0, '0', '2020-07-31 22:18:43'),
(42, 'Darwin \"Galapahops\" APA', 'IBU: 30 / ABV: 5,3%\r\n\r\nCerveza de color dorado transparente, de amargor moderado y final seco. Liviana, fácil de tomar, una cerveza ideal para los que recién se aventuran en el mundo de las cervezas lupuladas.', 1, 8, 473, 140, '0c69e9eb-7de4-47f5-8f9f-0d7f2e5647b4.jpeg', 10, 0, '1', '2020-07-31 22:20:30'),
(43, 'Darwin \"Atlas\" English IPA', 'IBU: 50 / ABV: 5,5%\r\n\r\nCerveza de color rojizo claro, originaria de Inglaterra y considerada históricamente como la primer variedad de IPA en existir. En ésta se encuentran aromas frutales, cítricos y herbales, por las variedades de lúpulos utilizados en su elaboración. Posee un delicado balance de amargor y maltosidad con notas a caramelo, y un final seco en boca.', 1, 15, 473, 140, 'a240f39e-579d-4242-8afb-f90ef6db1840.jpeg', 10, 0, '1', '2020-07-31 22:23:16'),
(44, 'Darwin \"Folk\" Session IPL', 'IBU: 30 / ABV: 4,0%\r\n\r\nUna cerveza de color dorada levemente turbia, especial por su bajo contenido alcóholico. Presenta un amargor moderado, pero claro sabor a lúpulo y fuerte aroma lupulado con notas cítricas. Al ser una cerveza lager presenta un perfil de sabor limpio, liviano y seco.', 1, 13, 473, 165, 'fe04b995-d03c-44ae-9b14-eb28003ea749.jpeg', 10, 0, '1', '2020-07-31 22:30:54'),
(45, 'Darwin \"Monarca\" Honey Aromática', 'Estilo: Honey con especias (Coriandro y Manzanilla principalmente)\r\n\r\nIBU: 18 / ABV: 7%\r\n', 1, 12, 473, 140, '117d9505-b65d-4158-8e03-b74e2f2814ff.jpeg', 10, 0, '1', '2020-08-01 19:02:07'),
(46, 'Darwin \"Continental\" NEIPA', 'stilo: New England IPA (NEIPA)\r\n\r\nIBU: 30 / ABV: 5,6%', 1, 16, 473, 230, 'e9fb3eb2-48e3-45f3-989f-12a39dca5ba8.jpeg', 5, 0, '1', '2020-08-01 19:04:18'),
(47, 'Darwin \"Pacífica\" American Pils', 'IBU: 30 / ABV: 5,2%\r\n\r\nCerveza lager que surgió de la adaptación de los estadounidenses de las clásicas recetas de pilsner alemanas. Una cerveza rubia liviana, de sabor limpio y de amargor moderado/bajo, con aroma lupulado, destacándose notas frutales/cítricas.', 1, 14, 473, 160, '65ed0aa8-6518-493e-b1dc-299c85253263.jpeg', 10, 0, '1', '2020-08-03 22:54:22'),
(48, 'Juguetes Perdidos \"Cruz Diablo\" Imperial Red IPA', 'AVB 8.5% IBU 92', 6, 15, 354, 230, 'faefd520-81f6-4a27-956d-ee0b92bcd12e.jpeg', 10, 0, '1', '2020-08-06 20:54:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `correo` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `estado` int(11) NOT NULL DEFAULT 1,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci COMMENT='tabla de usuarios';

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `usuario`, `nombre`, `apellido`, `correo`, `password`, `admin`, `estado`, `ts_create`) VALUES
(1, 'elnestor', 'nestor', 'acerbo', 'nestoracerbo@outlook.com', '1234', 0, 0, '2020-07-18 18:56:59'),
(2, 'elnestor1', 'nestor', 'acerbo', 'nestoracerbo@outlook.com', '252525', 0, 1, '2020-07-18 18:57:33'),
(3, 'nestorla', 'nestor', 'acerbo', 'nestoracerbo@outlook.com', '1234', 1, 1, '2020-07-21 17:20:41'),
(4, 'ELNESTORLOCO', 'Nestorsinho', 'Acerbinho', 'nestoracerbo@outlook.com', '1234', 0, 0, '2020-07-24 23:39:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `cerveceria`
--
ALTER TABLE `cerveceria`
  ADD PRIMARY KEY (`id_cerveceria`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`),
  ADD UNIQUE KEY `lote` (`lote`),
  ADD UNIQUE KEY `id_carrito` (`id_carrito`);

--
-- Indices de la tabla `envio`
--
ALTER TABLE `envio`
  ADD UNIQUE KEY `id_compra` (`id_compra`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_cerveceria` (`id_cerveceria`) USING BTREE,
  ADD KEY `id_categoria` (`id_categoria`) USING BTREE;

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `cerveceria`
--
ALTER TABLE `cerveceria`
  MODIFY `id_cerveceria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id`),
  ADD CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`lote`) REFERENCES `carrito` (`lote`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`id_cerveceria`) REFERENCES `cerveceria` (`id_cerveceria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
