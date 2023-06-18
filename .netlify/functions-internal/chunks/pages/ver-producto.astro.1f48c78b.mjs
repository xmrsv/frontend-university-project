import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.73150518.mjs';
import 'html-escaper';
import { $ as $$Layout } from './carrito.astro.3fbb0e63.mjs';
/* empty css                                  */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                             *//* empty css                             */
const sachaJergonImg = "/_astro/jergon-sacha-en-polvo-amazon-fruit-web.eb7c81e0.jpg";

const $$Astro = createAstro();
const $$VerProducto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VerProducto;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ver producto", "class": "astro-HPQGVPMH" }, { "default": ($$result2) => renderTemplate`
    

    ${maybeRenderHead($$result2)}<div class="container astro-HPQGVPMH">
        <img${addAttribute(sachaJergonImg, "src")} alt="Galletas de Sacha Jergon" class="astro-HPQGVPMH">

        <div class="text astro-HPQGVPMH">
            <h1 class="product-title astro-HPQGVPMH">Galletas Sacha Jergón</h1>

            <span class="product-price-title astro-HPQGVPMH">s/. 9.99</span>

            <h2 class="product-about-title astro-HPQGVPMH">Sobre este artículo</h2>

            <section class="product-about-description astro-HPQGVPMH">
                <p class="astro-HPQGVPMH">
                    ¿Qué hace a nuestras galletas tan especiales? El Sacha
                    Jergón, una planta amazónica llena de propiedades
                    saludables, es el ingrediente estrella. Estas galletas son
                    una fuente natural de energía, proporcionándote el impulso
                    necesario para afrontar tu día.
                </p>
                <p class="astro-HPQGVPMH">
                    Además, el Sacha Jergón contiene antioxidantes poderosos que
                    ayudan a fortalecer tu sistema inmunológico y proteger tu
                    cuerpo contra los radicales libres. ¡Una manera deliciosa de
                    cuidar de ti mismo!
                </p>
            </section>

            <div class="buttons astro-HPQGVPMH">
                <span class="add-button astro-HPQGVPMH" id="open-modal">
                    Agregar al carrito
                </span>
            </div>
        </div>

        <aside class="astro-HPQGVPMH">
            <h3 class="aside-status-title astro-HPQGVPMH">Estado: En stock</h3>

            <section class="aside-description astro-HPQGVPMH">
                <p class="astro-HPQGVPMH">
                    Enviós a todas las partes del Perú. Los envíos locales son
                    gratuitos.
                </p>
            </section>
        </aside>
    </div>

    
    <div class="modal astro-HPQGVPMH" id="modal">
        <div class="content astro-HPQGVPMH">
            <div class="header astro-HPQGVPMH">
                <h3 class="astro-HPQGVPMH">Antes de proceder...</h3>

                <span role="button" id="close-modal" class="modal-close material-symbols-outlined astro-HPQGVPMH">
                    close</span>
            </div>
            <form class="astro-HPQGVPMH">
                <label for="amount" class="astro-HPQGVPMH">¿Cuantas galletas deseas comprar? (Máximo de 10)</label>
                <input type="number" name="amount" id="amount" max="10" value="1" class="astro-HPQGVPMH">
                <p class="astro-HPQGVPMH">Total: s/. <span id="amount-selected" class="astro-HPQGVPMH">0</span></p>
                <button id="add-to-cart" class="astro-HPQGVPMH">Agregar</button>
            </form>
        </div>
    </div>
` })}`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/ver-producto.astro");

const $$file = "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/ver-producto.astro";
const $$url = "/ver-producto";

export { $$VerProducto as default, $$file as file, $$url as url };
