import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.73150518.mjs';
import 'html-escaper';
/* empty css                             *//* empty css                             */
const cartIcon$1 = "/_astro/cart-icon.c3778b69.svg";

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`

${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
    <div class="navigation astro-3EF6KSR2">
        <a class="logo astro-3EF6KSR2" href="/">Sachamama</a>

        <nav class="astro-3EF6KSR2">
            <ul class="astro-3EF6KSR2">
                <li class="astro-3EF6KSR2">
                    <a href="/" class="astro-3EF6KSR2">Inicio</a>
                </li>
                <li class="astro-3EF6KSR2">
                    <a href="/ver-producto" class="astro-3EF6KSR2">Producto</a>
                </li>
                <li class="astro-3EF6KSR2">
                    <a href="#" class="astro-3EF6KSR2">Conocenos</a>
                </li>
            </ul>
        </nav>

        <div class="hamburguer-menu astro-3EF6KSR2">
            <a href="#" class="astro-3EF6KSR2">Menu hamburguesa</a>
        </div>

        <div class="icons astro-3EF6KSR2">
            <span class="icon-cart astro-3EF6KSR2">
                <img${addAttribute(cartIcon$1, "src")} alt="" class="astro-3EF6KSR2">
                <a href="/carrito" class="astro-3EF6KSR2">Carrito</a>
            </span>
        </div>
    </div>
</header>`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/components/Header.astro");

const facebookIcon = "/_astro/facebook-circle-mono.8a33cfb8.svg";

const pinterestIcon = "/_astro/pinterest-circle-mono.dbcf18d7.svg";

const telegramIcon = "/_astro/telegram-circle-mono.9f3a0ac8.svg";

const twitterIcon = "/_astro/twitter-circle-mono.0265e914.svg";

const instagramIcon = "/_astro/instagram-circle-mono.d843e5e4.svg";

const messageIcon = "/_astro/Message.16f7f23b.svg";

const locationIcon = "/_astro/Location.43c670c1.svg";

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`

${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
    <div class="container astro-SZ7XMLTE">
        <div class="social astro-SZ7XMLTE">
            <img${addAttribute(facebookIcon, "src")} alt="" class="astro-SZ7XMLTE"><img${addAttribute(pinterestIcon, "src")} alt="" class="astro-SZ7XMLTE"><img${addAttribute(twitterIcon, "src")} alt="" class="astro-SZ7XMLTE"><img${addAttribute(instagramIcon, "src")} alt="" class="astro-SZ7XMLTE"><img${addAttribute(telegramIcon, "src")} alt="" class="astro-SZ7XMLTE">
        </div>
        <div class="main astro-SZ7XMLTE">
            <div class="astro-SZ7XMLTE">
                <h3 class="astro-SZ7XMLTE">Sachamama</h3>
                <p class="astro-SZ7XMLTE">Galletas 100% naturales hechas de Sacha Jergón</p>
                <ul class="astro-SZ7XMLTE">
                    <li class="astro-SZ7XMLTE">
                        <img${addAttribute(messageIcon, "src")} alt="phone" class="astro-SZ7XMLTE">
                        <p class="astro-SZ7XMLTE">+00 000 000 000</p>
                    </li>
                    <li class="astro-SZ7XMLTE">
                        <img${addAttribute(messageIcon, "src")} alt="email" class="astro-SZ7XMLTE">
                        <p class="astro-SZ7XMLTE">sachamama@email.com</p>
                    </li>
                    <li class="astro-SZ7XMLTE">
                        <img${addAttribute(locationIcon, "src")} alt="pointmap" class="astro-SZ7XMLTE">
                        <p class="astro-SZ7XMLTE">Tarapoto, Perú</p>
                    </li>
                </ul>
            </div>
            <div class="astro-SZ7XMLTE"></div>
            <div class="astro-SZ7XMLTE"></div>
        </div>

        <hr class="astro-SZ7XMLTE">

        <div class="copyright astro-SZ7XMLTE">
            <p class="copy astro-SZ7XMLTE">&copy; 2023 Sachamama</p>
            <div class="terms-privacy astro-SZ7XMLTE">
                <p class="astro-SZ7XMLTE">Politica de privacidad</p>
                <p class="astro-SZ7XMLTE">Terminos y condiciones</p>
            </div>
        </div>
    </div>
</footer>`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/components/Footer.astro");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Sachamama" } = Astro2.props;
  return renderTemplate`<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <!-- Icons -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
        
        <title>${title}</title>
    ${renderHead($$result)}</head>
    <body>
        ${renderComponent($$result, "Header", $$Header, {})}
        ${renderSlot($$result, $$slots["default"])}
        ${renderComponent($$result, "Footer", $$Footer, {})}
    </body></html>`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/layouts/Layout.astro");

const cartIcon = "/_astro/cart-big.e12ea49d.svg";

const $$Astro = createAstro();
const $$Carrito = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carrito;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "carrito", "class": "astro-VRBPSBWJ" }, { "default": ($$result2) => renderTemplate`
    

    ${maybeRenderHead($$result2)}<div class="container astro-VRBPSBWJ">
        <div class="titulo astro-VRBPSBWJ">
            <img${addAttribute(cartIcon, "src")} alt="" class="astro-VRBPSBWJ">
            <h1 class="astro-VRBPSBWJ">Carrito</h1>
        </div>

        <!-- Tabla -->
        <div class="tabla astro-VRBPSBWJ">
            <table class="astro-VRBPSBWJ">
                <thead class="astro-VRBPSBWJ">
                    <tr class="astro-VRBPSBWJ">
                        <th class="astro-VRBPSBWJ">Producto</th>
                        <th class="astro-VRBPSBWJ">Precio</th>
                    </tr>
                </thead>

                <tbody id="table" class="astro-VRBPSBWJ">
                    <!-- Rows and columns -->
                </tbody>

                <tfoot class="astro-VRBPSBWJ">
                    <tr class="astro-VRBPSBWJ">
                        <td class="astro-VRBPSBWJ">Total</td>
                        <td id="total" class="astro-VRBPSBWJ">$ 0</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="buttons astro-VRBPSBWJ">
            <span class="delete-products astro-VRBPSBWJ" id="delete-productos">Eliminar productos</span>
            <span class="pagar astro-VRBPSBWJ" id="pagar">Pagar</span>
        </div>
    </div>

    
` })}`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/carrito.astro");

const $$file = "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/carrito.astro";
const $$url = "/carrito";

const carrito = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Carrito,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, carrito as c };
