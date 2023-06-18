import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.73150518.mjs';
import 'html-escaper';
import { $ as $$Layout } from './carrito.astro.3fbb0e63.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                             *//* empty css                             */
const $$Astro = createAstro();
const $$Prueba = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prueba;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina de pruebas" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div id="app"></div>
` })}
`;
}, "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/prueba.astro");

const $$file = "C:/Users/Migue/Documents/Code/University/paginaweb-pi/src/pages/prueba.astro";
const $$url = "/prueba";

export { $$Prueba as default, $$file as file, $$url as url };
