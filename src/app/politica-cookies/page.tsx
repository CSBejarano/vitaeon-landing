import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Vitaeon Clinic, S.L. Información sobre el uso de cookies en nuestro sitio web.',
};

export default function PoliticaCookiesPage() {
  return (
    <LegalPageLayout title="Política de Cookies">
      {/* Sección 1: Qué son las cookies */}
      <section className="mb-10">
        <h2 className="!mt-0 pb-3 border-b border-vitaeon-beige/20">
          1. ¿Qué son las cookies?
        </h2>
        <p>
          Las cookies son pequeños archivos de texto que se descargan y almacenan en el dispositivo
          del usuario (ordenador, smartphone, tablet) al acceder a determinadas páginas web.
        </p>
        <p>
          Las cookies permiten, entre otras cosas, almacenar y recuperar información sobre los hábitos de
          navegación de un usuario o de su dispositivo y, en función de la información obtenida,
          mejorar la experiencia de navegación.
        </p>
      </section>

      {/* Sección 2: Tipos de cookies */}
      <section className="mb-10">
        <h2 className="pb-3 border-b border-vitaeon-beige/20">
          2. Tipos de cookies utilizadas en este sitio web
        </h2>
        <p className="mb-6">El presente sitio web utiliza los siguientes tipos de cookies:</p>

        <div className="space-y-6 pl-4 border-l-2 border-vitaeon-sage/30">
          <div>
            <h3 className="!mt-0 text-vitaeon-sage">
              a) Cookies técnicas o necesarias
            </h3>
            <p className="!mb-0">
              Son aquellas cookies imprescindibles para el correcto funcionamiento del sitio web y para
              permitir la navegación del usuario y el uso de las diferentes opciones o servicios
              existentes. <strong>Estas cookies no requieren el consentimiento del usuario.</strong>
            </p>
          </div>

          <div>
            <h3 className="!mt-0 text-vitaeon-sage">
              b) Cookies analíticas
            </h3>
            <p className="!mb-0">
              Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de
              la utilización que hacen los usuarios del sitio web, con el fin de mejorar los contenidos y
              servicios ofrecidos. <strong>Estas cookies requieren el consentimiento previo del usuario.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Cookies de terceros */}
      <section className="mb-10">
        <h2 className="pb-3 border-b border-vitaeon-beige/20">
          3. Cookies de terceros
        </h2>
        <p>
          Este sitio web puede utilizar cookies de terceros, como herramientas de análisis web, que
          permiten analizar el uso que hacen los usuarios del sitio web. En ningún caso se obtiene
          información que permita identificar personalmente al usuario.
        </p>
        <div className="p-4 bg-vitaeon-navy/30 rounded-lg border border-vitaeon-beige/10">
          <p className="!mb-0 text-sm">
            <strong>Nota:</strong> En caso de que se utilicen cookies de terceros, el usuario será debidamente informado y
            podrá aceptar o rechazar su uso a través del panel de configuración de cookies.
          </p>
        </div>
      </section>

      {/* Sección 4: Gestión y configuración */}
      <section className="mb-10">
        <h2 className="pb-3 border-b border-vitaeon-beige/20">
          4. Gestión y configuración de cookies
        </h2>
        <p>
          Al acceder por primera vez al sitio web, el usuario visualizará un banner de cookies en el
          que se le informará del uso de cookies y podrá:
        </p>
        <ul className="space-y-2 my-6 list-none pl-0">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-vitaeon-sage flex-shrink-0"></span>
            <span>Aceptar todas las cookies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-vitaeon-sage flex-shrink-0"></span>
            <span>Rechazar las cookies no necesarias</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-vitaeon-sage flex-shrink-0"></span>
            <span>Configurar sus preferencias de cookies</span>
          </li>
        </ul>
        <p>
          El usuario puede modificar o retirar su consentimiento en cualquier momento a través del
          panel de configuración de cookies disponible en el sitio web.
        </p>
      </section>

      {/* Sección 5: Desactivación desde navegador */}
      <section className="mb-10">
        <h2 className="pb-3 border-b border-vitaeon-beige/20">
          5. Desactivación de cookies desde el navegador
        </h2>
        <p>
          Además, el usuario puede permitir, bloquear o eliminar las cookies instaladas en su
          dispositivo mediante la configuración de las opciones del navegador que utilice.
        </p>
        <p className="mb-4">
          A continuación se indican enlaces a la información de los principales navegadores:
        </p>

        <div className="grid sm:grid-cols-2 gap-3 my-6">
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-vitaeon-navy/20 border border-vitaeon-beige/10 hover:border-vitaeon-sage/40 hover:bg-vitaeon-navy/30 transition-all group no-underline"
          >
            <span className="text-lg">Google Chrome</span>
            <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-vitaeon-navy/20 border border-vitaeon-beige/10 hover:border-vitaeon-sage/40 hover:bg-vitaeon-navy/30 transition-all group no-underline"
          >
            <span className="text-lg">Mozilla Firefox</span>
            <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-vitaeon-navy/20 border border-vitaeon-beige/10 hover:border-vitaeon-sage/40 hover:bg-vitaeon-navy/30 transition-all group no-underline"
          >
            <span className="text-lg">Safari</span>
            <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-vitaeon-navy/20 border border-vitaeon-beige/10 hover:border-vitaeon-sage/40 hover:bg-vitaeon-navy/30 transition-all group no-underline"
          >
            <span className="text-lg">Microsoft Edge</span>
            <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="p-4 bg-vitaeon-navy/30 rounded-lg border border-vitaeon-beige/10">
          <p className="!mb-0 text-sm">
            <strong>Importante:</strong> La desactivación de cookies puede afectar al correcto funcionamiento de algunas
            funcionalidades del sitio web.
          </p>
        </div>
      </section>

      {/* Sección 6: Tratamiento de datos */}
      <section className="mb-10">
        <h2 className="pb-3 border-b border-vitaeon-beige/20">
          6. Tratamiento de datos personales
        </h2>
        <p>
          La información obtenida a través de las cookies será tratada de conformidad con lo
          dispuesto en:
        </p>
        <ul className="space-y-2 my-4 list-none pl-0">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-vitaeon-sage flex-shrink-0"></span>
            <span><strong>Reglamento (UE) 2016/679</strong> (RGPD)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-vitaeon-sage flex-shrink-0"></span>
            <span><strong>Ley Orgánica 3/2018</strong> (LOPDGDD)</span>
          </li>
        </ul>
        <p>
          Para más información sobre el tratamiento de datos personales, el usuario puede consultar la{' '}
          <a href="/politica-privacidad" className="font-medium">Política de Privacidad</a> del sitio web.
        </p>
      </section>

      {/* Sección 7: Actualizaciones */}
      <section className="mb-10">
        <h2 className="pb-3 border-b border-vitaeon-beige/20">
          7. Actualizaciones de la política de cookies
        </h2>
        <p>
          La presente Política de Cookies podrá modificarse en función de cambios normativos o
          técnicos.
        </p>
        <p>
          Se recomienda al usuario revisar esta política de forma periódica para estar
          informado sobre el uso de cookies.
        </p>
      </section>

      {/* Sección 8: Contacto */}
      <section className="mb-0">
        <h2 className="pb-3 border-b border-vitaeon-beige/20">
          8. Contacto
        </h2>
        <p>
          Para cualquier duda relacionada con el uso de cookies en este sitio web, el usuario puede
          ponerse en contacto con <strong>Vitaeon Clinic, S.L.</strong> a través del correo electrónico:
        </p>
        <div className="mt-4 p-4 bg-vitaeon-navy/30 rounded-lg border border-vitaeon-beige/10 text-center">
          <a
            href="mailto:info@vitaeonclinic.com"
            className="text-lg font-medium text-vitaeon-sage hover:text-vitaeon-cream transition-colors"
          >
            info@vitaeonclinic.com
          </a>
        </div>
      </section>
    </LegalPageLayout>
  );
}
