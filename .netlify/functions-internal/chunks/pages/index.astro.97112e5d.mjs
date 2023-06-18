import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../astro.73150518.mjs';
import 'html-escaper';
import { $ as $$Layout } from './carrito.astro.3fbb0e63.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                             *//* empty css                             */
const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`

${maybeRenderHead($$result)}<section class="astro-BBE6DXRZ">
    <div class="astro-BBE6DXRZ">
        <h1 class="astro-BBE6DXRZ">Galletas naturales de la amazonia</h1>
        <p class="astro-BBE6DXRZ">
            Descubre nuestras deliciosas galletas de Sacha Jergón <br class="astro-BBE6DXRZ">
            Un dulce bocado de la amazonia.
        </p>
        <a href="/ver-producto" class="astro-BBE6DXRZ">Comprar</a>
    </div>
</section>`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/components/Hero.astro");

const plantaSachaJergon = "/_astro/IMAGE.eea3e28a.png";

const $$Astro$1 = createAstro();
const $$Description = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Description;
  return renderTemplate`
${maybeRenderHead($$result)}<section class="astro-C3ABGHTA">
    <div class="info astro-C3ABGHTA">
        <h2 class="astro-C3ABGHTA">Galletas de Sacha Jergón</h2>
        <p class="astro-C3ABGHTA">
            Descubre las Galletas Sacha Jergón, son saludables, delicosas y
            tienen beneficios a la salud. Elaborado con ingredientes
            seleccionados y sin aditivos artificiales, estas galletas contienen
            el poderoso extracto de Sacha Jergón, conocido por estimular el
            sistema inmunológico, actuar como antiviral y anticancerigeno.
        </p>
        <a class="buy-button astro-C3ABGHTA" href="/ver-producto">
            <p class="astro-C3ABGHTA">Comprar</p>
            <span class="material-symbols-outlined astro-C3ABGHTA"> arrow_forward</span>
        </a>
    </div>
    <div class="image astro-C3ABGHTA">
        <img${addAttribute(plantaSachaJergon, "src")} alt="sacha jergón" class="astro-C3ABGHTA">
    </div>
</section>`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/components/Description.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Hero", $$Hero, {})}
	${renderComponent($$result2, "Description", $$Description, {})}
` })}`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/index.astro");

const $$file = "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
