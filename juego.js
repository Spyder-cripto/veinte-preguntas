(function () {
'use strict';
const MAX = 20;
const COLORES = ['#e8590c', '#0e9f6e', '#d6336c', '#5b86c2', '#7048e8', '#f59f00', '#1098ad', '#c2255c'];
const CLAVE = 'veinte-preguntas-v2';   // v2: banco común de preguntas (las partidas de la v1 no valen)
const COSTE_FALLO = 2, COSTE_CASI = 1;
const $ = (id) => document.getElementById(id);

// ---------- estado guardado ----------
let datos = {};
try { datos = JSON.parse(localStorage.getItem(CLAVE)) || {}; } catch (e) { datos = {}; }
function guardar() { try { localStorage.setItem(CLAVE, JSON.stringify(datos)); } catch (e) {} }
function estadoDe(id) {
  if (!datos[id]) datos[id] = { hechas: [], fallos: 0, giro: 0, fin: null, estrellas: 0 };
  return datos[id];
}

// ---------- utilidades ----------
function normalizar(t) {
  return ' ' + String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
}
function contiene(norm, claves) { return claves.every((c) => norm.includes(c)); }
function comprobar(en, texto) {
  const n = normalizar(texto);
  if (n.trim() === '') return { tipo: 'vacio' };
  if (en.vale.some((c) => contiene(n, c))) return { tipo: 'bien' };
  if (en.casi.some((c) => contiene(n, c))) return { tipo: 'casi' };
  return { tipo: 'mal' };
}
// El banco es común: mismas preguntas y mismo desbloqueo en todos los enigmas; solo cambian las respuestas.
const LETRA = { s: 'si', n: 'no', c: 'casi' };
const CACHE = {};
function todas(en) {
  if (CACHE[en.id]) return CACHE[en.id];
  const k = ENIGMAS.indexOf(en);
  return (CACHE[en.id] = BANCO.map(([id, t, p, r]) => ({ id, t, p, a: LETRA[r[k]] })));
}
// st.fallos = preguntas gastadas en respuestas escritas que no eran (2 por fallo, 1 por «casi»)
function usadas(st) { return Math.min(MAX, st.hechas.length + st.fallos); }
function estrellasPor(n) { return n <= 10 ? 3 : n <= 15 ? 2 : 1; }
const TXT = { si: 'Sí', no: 'No', casi: 'Casi' };

// ---------- portada ----------
function pintarTitulo() {
  const t = $('tituloGrande'); const s = t.textContent; t.textContent = ''; let k = 0;
  for (const ch of s) {
    const sp = document.createElement('span'); sp.textContent = ch === ' ' ? ' ' : ch;
    if (ch !== ' ') { sp.style.color = COLORES[k % COLORES.length]; k++; }
    t.appendChild(sp);
  }
}
function pintarPortada() {
  const r = $('rejilla'); r.innerHTML = '';
  ENIGMAS.forEach((en, i) => {
    const st = estadoDe(en.id);
    const b = document.createElement('button');
    b.className = 'carta' + (st.fin ? ' hecha' : ''); b.style.background = COLORES[i % COLORES.length];
    b.dataset.id = en.id;
    let est = '', sub = 'Sin empezar';
    if (st.fin === 'bien') { est = '★'.repeat(st.estrellas) + '☆'.repeat(3 - st.estrellas); sub = 'Resuelto con ' + st.usadas; }
    else if (st.fin === 'rendido') { sub = 'Te rendiste'; est = '—'; }
    else if (st.hechas.length || st.fallos) sub = 'Llevas ' + usadas(st) + ' de 20';
    b.innerHTML = `<span class="n">${i + 1}</span><span class="e">${est}</span><span class="s">${sub}</span>`;
    b.onclick = () => abrir(i);
    r.appendChild(b);
  });
}

// ---------- juego ----------
let actual = -1, nuevas = new Set(), ultima = null;

function abrir(i) {
  actual = i; nuevas = new Set(); ultima = null;
  $('portada').classList.add('oculta'); $('juego').classList.remove('oculta');
  $('formRespuesta').classList.add('oculta'); $('inpRespuesta').value = ''; avisar('');
  window.scrollTo(0, 0);
  pintarJuego();
}
function volver() {
  $('juego').classList.add('oculta'); $('portada').classList.remove('oculta');
  pintarPortada(); window.scrollTo(0, 0);
}
function avisar(txt, cls) { const a = $('aviso'); a.textContent = txt; a.className = 'aviso' + (cls ? ' ' + cls : ''); }

function disponibles(en, st) {
  const hechas = new Set(st.hechas);
  const resp = {}; for (const q of todas(en)) resp[q.id] = q;
  return todas(en).filter((q) => !hechas.has(q.id) &&
    (q.p === null || (hechas.has(q.p) && resp[q.p].a !== 'no')));
}

function pintarJuego() {
  const en = ENIGMAS[actual], st = estadoDe(en.id), color = COLORES[actual % COLORES.length];
  $('numEnigma').textContent = 'Enigma ' + (actual + 1) + ' de ' + ENIGMAS.length;
  $('numEnigma').style.background = color;
  $('tituloEnigma').textContent = en.titulo;
  const d = $('dibujo');
  if (d.dataset.img !== en.img) { d.innerHTML = IMG[en.img]; d.dataset.img = en.img; }
  const fig = $('figura');
  const esc = st.giro % 2 ? Math.min(1, (fig.clientHeight - 20) / Math.max(1, fig.clientWidth - 20)) : 1;
  d.style.transform = 'rotate(' + (st.giro * 90) + 'deg)' + (esc < 1 ? ' scale(' + esc.toFixed(3) + ')' : '');

  const u = usadas(st);
  $('txtContador').textContent = 'Preguntas: ' + u + ' / ' + MAX;
  $('bolitas').innerHTML = Array.from({ length: MAX }, (_, k) => `<i class="${k < u ? 'u' : ''}"></i>`).join('');

  const fin = $('zonaFinal'), zj = $('zonaJuego');
  if (st.fin) { zj.classList.add('oculta'); fin.classList.remove('oculta'); pintarFinal(en, st); }
  else { zj.classList.remove('oculta'); fin.classList.add('oculta'); }

  // disponibles
  const lista = disponibles(en, st), agotadas = u >= MAX;
  // orden alfabético: así las preguntas recién desbloqueadas no se distinguen por su sitio
  const clave = (t) => normalizar(t).trim();
  lista.sort((a, b) => clave(a.t).localeCompare(clave(b.t), 'es'));
  const cont = $('disponibles'); cont.innerHTML = '';
  if (agotadas) cont.innerHTML = '<p class="vacio">Se acabaron las preguntas. Aún puedes intentar adivinarlo con «¡Ya lo sé!» o rendirte.</p>';
  else lista.forEach((q, k) => {
    const b = document.createElement('button'); b.className = 'preg'; b.dataset.q = q.id;
    b.style.borderLeftColor = COLORES[k % COLORES.length];
    b.innerHTML = `<span>${q.t}</span>`;
    b.onclick = () => preguntar(q.id);
    cont.appendChild(b);
  });
  if (!agotadas && lista.length === 0) cont.innerHTML = '<p class="vacio">Ya no quedan más preguntas: ¡atrévete con «¡Ya lo sé!»!</p>';

  // hechas (la última arriba)
  const porId = {}; for (const q of todas(en)) porId[q.id] = q;
  const h = $('hechas'); h.innerHTML = '';
  if (!st.hechas.length) h.innerHTML = '<p class="vacio">Todavía ninguna.</p>';
  [...st.hechas].reverse().forEach((id, k) => {
    const q = porId[id]; const div = document.createElement('div');
    div.className = 'preg' + (id === ultima ? ' ultima' : '');
    div.style.borderLeftColor = q.a === 'si' ? 'var(--si)' : q.a === 'no' ? 'var(--no)' : 'var(--casi)';
    div.innerHTML = `<span>${q.t}</span><span class="chip ${q.a}">${TXT[q.a]}</span>`;
    h.appendChild(div);
  });
}

function preguntar(id) {
  const en = ENIGMAS[actual], st = estadoDe(en.id);
  if (st.fin || usadas(st) >= MAX || st.hechas.includes(id)) return;
  const antes = new Set(disponibles(en, st).map((q) => q.id));
  st.hechas.push(id); guardar();
  nuevas = new Set(disponibles(en, st).map((q) => q.id).filter((x) => !antes.has(x)));
  ultima = id;
  const q = todas(en).find((x) => x.id === id);
  avisar(q.t + ' → ' + TXT[q.a]);
  pintarJuego();
}

function responder(texto) {
  const en = ENIGMAS[actual], st = estadoDe(en.id);
  if (st.fin) return;
  const r = comprobar(en, texto);
  if (r.tipo === 'vacio') { avisar('Escribe primero qué crees que es.'); return; }
  if (r.tipo === 'bien') {
    st.fin = 'bien'; st.usadas = usadas(st); st.estrellas = estrellasPor(st.usadas); guardar();
    nuevas = new Set(); pintarJuego(); window.scrollTo(0, 0); return;
  }
  const coste = Math.min(r.tipo === 'casi' ? COSTE_CASI : COSTE_FALLO, MAX - usadas(st));
  st.fallos += coste; guardar(); nuevas = new Set();
  const gasto = coste === 0 ? 'Ya no te quedan preguntas, pero puedes seguir intentándolo.'
    : coste === 1 ? 'Has gastado una pregunta.' : 'Has gastado ' + coste + ' preguntas.';
  if (r.tipo === 'casi') avisar('Vas cerca, pero no es exactamente eso. ' + gasto, 'casi');
  else avisar('No es eso. ' + gasto, 'mal');
  $('inpRespuesta').select();
  pintarJuego();
}

function rendirse() {
  const en = ENIGMAS[actual], st = estadoDe(en.id);
  if (st.fin) return;
  if (!confirm('¿Seguro que quieres ver la solución?')) return;
  st.fin = 'rendido'; st.usadas = usadas(st); st.estrellas = 0; guardar();
  pintarJuego(); window.scrollTo(0, 0);
}

function pintarFinal(en, st) {
  const z = $('zonaFinal');
  const sig = actual + 1 < ENIGMAS.length ? '<button class="boton naranja" id="btnSig">Siguiente enigma →</button>' : '<button class="boton naranja" id="btnSig">Ver todos los enigmas</button>';
  const cab = st.fin === 'bien'
    ? `<h3 style="color:var(--verde)">¡Lo has descubierto!</h3><div class="estrellas">${'★'.repeat(st.estrellas)}${'☆'.repeat(3 - st.estrellas)}</div><p>Con ${st.usadas} ${st.usadas === 1 ? 'pregunta' : 'preguntas'}.</p>`
    : `<h3 style="color:var(--rosa)">La solución era…</h3>`;
  z.innerHTML = cab + `<p class="sol">${en.solucion}</p><p>${en.explica}</p>
    <div class="acciones">${sig}<button class="boton suave" id="btnOtra">Jugar otra vez</button></div>`;
  $('btnSig').onclick = () => { if (actual + 1 < ENIGMAS.length) abrir(actual + 1); else volver(); };
  $('btnOtra').onclick = () => { datos[en.id] = undefined; delete datos[en.id]; guardar(); abrir(actual); };
}

// ---------- eventos ----------
$('btnVolver').onclick = volver;
$('btnGirar').onclick = () => { const st = estadoDe(ENIGMAS[actual].id); st.giro = (st.giro + 1) % 4; guardar(); pintarJuego(); };
$('btnSe').onclick = () => { const f = $('formRespuesta'); f.classList.toggle('oculta'); if (!f.classList.contains('oculta')) $('inpRespuesta').focus(); };
$('formRespuesta').onsubmit = (e) => { e.preventDefault(); responder($('inpRespuesta').value); };
$('btnRindo').onclick = rendirse;
$('btnReglas').onclick = () => $('modal').classList.remove('oculta');
$('btnCerrarModal').onclick = () => { $('modal').classList.add('oculta'); datos._reglas = 1; guardar(); };
$('modal').onclick = (e) => { if (e.target.id === 'modal') $('btnCerrarModal').onclick(); };

pintarTitulo(); pintarPortada();
if (!datos._reglas) $('modal').classList.remove('oculta');

window.VP = { normalizar, comprobar, todas, disponibles, estadoDe, abrir, MAX };
})();
