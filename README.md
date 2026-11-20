# 🧭 BrújulaPro | Webapp de Orientación Vocacional y Coach de Carrera

Una aplicación web moderna, cálida y empática creada para acompañar y guiar a una joven estudiante en el descubrimiento de su verdadera vocación profesional y en su transición hacia la universidad.

Diseñada especialmente para desplegarse **100% GRATIS en Vercel** y con integración opcional de **Inteligencia Artificial gratuita (Google Gemini API)** o funcionamiento autónomo mediante su **Motor Experto de Coaching Integrado**.

---

## ✨ Características Principales

1. **Test Vocacional Holland RIASEC (Interactivo):**
   - 12 preguntas basadas en situaciones y dilemas cotidianos de la vida real.
   - Evalúa las 6 dimensiones psicológicas de John Holland: *Realista, Investigador, Artístico, Social, Emprendedor y Convencional*.
   - Calcula su código único (ej. `ASI: Artístico - Social - Investigador`), sus mayores fortalezas, superpoderes y ambientes de trabajo donde florecerá con mayor felicidad.
   - Celebración con confeti al finalizar y generación de un **Informe Vocacional Completo** listo para guardar o imprimir en PDF para revisar con sus padres.

2. **La Brújula del Ikigai:**
   - Visualizador de la filosofía japonesa del propósito de vida:
     - 💖 *Lo que amas* (Pasión)
     - 🌟 *En lo que eres buena* (Talentos)
     - 🌍 *Lo que el mundo necesita* (Misión)
     - 💼 *Por lo que te pueden pagar* (Vocación y sustentabilidad financiera)

3. **Sofía • Coach Vocacional Inteligente:**
   - Una mentora virtual empática que habla como una hermana mayor sabia y comprensiva.
   - Responde dudas críticas de las jóvenes:
     - *"¿Cómo hablo con mis papás si quieren que estudie otra cosa?"*
     - *"Estoy indecisa entre dos carreras, ¿cómo elijo?"*
     - *"Tengo miedo de equivocarme o fracasar"*
     - *"¿Cuáles son las carreras con mejores sueldos y trabajo remoto?"*
   - Conoce el perfil vocacional de la estudiante para responderle de forma personalizada.
   - **Garantía Gratuita:** Funciona de inmediato con su motor experto sin requerir tarjeta ni saldo; y si agregas una clave de Google AI Studio (Gemini), se conecta a la IA de Google sin costo.

4. **Explorador de Carreras Modernas con Futuro:**
   - Catálogo de carreras de alta demanda: UX/UI Design, Ciencia de Datos e IA, Biotecnología, Ciberseguridad, Psicología y Neurociencias, Arquitectura Sostenible, Finanzas ESG, etc.
   - Cada ficha incluye: ¿Cómo es un día típico?, habilidades clave, sueldos reales, pros vs retos, universidades y cursos gratuitos para empezar a probar hoy mismo en internet.

5. **Plan de Acción y Checklist:**
   - Hoja de ruta interactiva con 8 hitos ordenados (desde el autodescubrimiento hasta las fechas de exámenes y solicitudes de becas).

---

## 🚀 Cómo Desplegar en Vercel (100% GRATIS)

Vercel ofrece un plan *Hobby* completamente gratuito y perfecto para esta aplicación.

### Opción 1: Conectar mediante GitHub (La más recomendada y fácil)

1. **Sube este proyecto a tu GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - BrujulaPro Vocacional"
   # Crea un repositorio nuevo en github.com y vinculalo:
   git remote add origin https://github.com/TU_USUARIO/brujula-vocacional.git
   git branch -M main
   git push -u origin main
   ```

2. **Entra a [Vercel](https://vercel.com/):**
   - Inicia sesión gratis con tu cuenta de GitHub.
   - Haz clic en **"Add New..."** > **"Project"**.
   - Selecciona tu repositorio `brujula-vocacional`.

3. **Configura y Despliega:**
   - Framework Preset: `Next.js` (se detecta automáticamente).
   - *(Opcional)* En **Environment Variables**, añade:
     - Key: `GEMINI_API_KEY`
     - Value: *(Tu clave gratuita de Google AI Studio, ver abajo)*
     *(Si no agregas la clave, la app igual funcionará al 100% usando el motor experto integrado).*
   - Haz clic en **"Deploy"**.
   - ¡Listo! En 1 minuto tendrás una URL pública y gratuita (ejemplo: `https://brujula-vocacional.vercel.app`) para compartir con tu compañera y su hija.

---

## 🔑 Cómo Obtener tu Clave de Gemini API Gratis (Opcional)

1. Entra a [Google AI Studio](https://aistudio.google.com/).
2. Inicia sesión con cualquier cuenta de Google.
3. Haz clic en **"Get API Key"** y luego en **"Create API Key in new project"**.
4. Copia tu clave generada.
5. Pégala en tu archivo local `.env.local`:
   ```env
   GEMINI_API_KEY=tu_clave_aqui
   ```
   *(O en Vercel en la sección Settings > Environment Variables).*

> 💡 **Nota:** El nivel gratuito de Google Gemini (`gemini-1.5-flash`) ofrece hasta 15 consultas por minuto gratis sin necesidad de ingresar tarjeta de crédito.

---

## 💻 Ejecución Local

Para probar la aplicación en tu computadora:

```bash
# 1. Instalar dependencias (ya instaladas)
npm install

# 2. Correr el servidor de desarrollo
npm run dev

# 3. Abre en tu navegador
http://localhost:3000
```

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS con diseño Glassmorphism y Responsive Mobile-First
- **Iconografía:** Lucide React
- **Efectos:** Canvas Confetti
- **IA:** Google Generative AI SDK (`gemini-1.5-flash`) con Fallback de Motor Experto
- **Despliegue:** Optimizado para Vercel Serverless
