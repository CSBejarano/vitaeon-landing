import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Vitaeon Clinic, S.L. Información sobre la titularidad del sitio web, identificación sanitaria y condiciones de uso.',
};

export default function AvisoLegalPage() {
  return (
    <LegalPageLayout title="Aviso Legal">
      {/* Sección I: Información General */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          I. Información General
        </h2>
        <p className="mb-4">
          En cumplimiento del deber de información establecido en la Ley 34/2002, de Servicios de la
          Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de que el
          presente sitio web es titularidad de:
        </p>
        <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-6 mb-6">
          <dl className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[140px]">Razón Social:</dt>
              <dd>Vitaeon Clinic, S.L.</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[140px]">NIF:</dt>
              <dd>B24823643</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[140px]">Domicilio Social:</dt>
              <dd>Av. Catalunya 22D, 3º-3ª, 43002 Tarragona, Cataluña (España)</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[140px]">Contacto:</dt>
              <dd>
                <a
                  href="mailto:info@vitaeonclinic.com"
                  className="text-vitaeon-sage hover:underline"
                >
                  info@vitaeonclinic.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Sección II: Identificación Sanitaria */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          II. Identificación Sanitaria y Dirección Médica
        </h2>

        <h3 className="text-xl font-medium text-vitaeon-cream mb-4">
          Director Médico
        </h3>
        <p className="mb-4">
          La actividad sanitaria prestada a través del presente sitio web se realiza bajo la
          responsabilidad de:
        </p>
        <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-6 mb-6">
          <dl className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[160px]">Nombre:</dt>
              <dd>Dr. Eduard Cambra García</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[160px]">Nº Colegiado:</dt>
              <dd>43-07388</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[160px]">Colegio:</dt>
              <dd>Col·legi Oficial de Metges de Tarragona</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[160px]">Titulación:</dt>
              <dd>Licenciado/Grado en Medicina (España)</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-semibold text-vitaeon-cream min-w-[160px]">Cargo:</dt>
              <dd>Director Médico y Profesional Responsable de la Asistencia Sanitaria</dd>
            </div>
          </dl>
        </div>

        <h3 className="text-xl font-medium text-vitaeon-cream mb-4">
          Cuadro Médico
        </h3>
        <p>
          La relación actualizada de los profesionales sanitarios que integran el cuadro médico de
          Vitaeon Clinic se encuentra disponible en el apartado correspondiente del sitio web.
        </p>
      </section>

      {/* Sección III: Autorización Sanitaria */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          III. Autorización Sanitaria
        </h2>
        <p className="mb-4">
          Vitaeon Clinic, S.L. es una sociedad mercantil legalmente constituida que tiene por objeto
          la prestación de servicios médicos mediante telemedicina.
        </p>
        <div className="bg-vitaeon-sage/10 border-l-4 border-vitaeon-sage rounded-r-lg p-4 mb-4">
          <p className="text-vitaeon-cream/90 font-medium mb-2">Estado de la autorización:</p>
          <p className="text-vitaeon-cream/80">
            La autorización sanitaria como centro sanitario privado se encuentra actualmente
            <strong className="text-vitaeon-cream"> en trámite</strong> ante la autoridad sanitaria
            competente de la Comunidad Autónoma de Cataluña.
          </p>
        </div>
        <p className="text-vitaeon-cream/70 italic">
          El inicio de la actividad sanitaria quedará supeditado a la obtención de la correspondiente
          autorización administrativa.
        </p>
      </section>

      {/* Sección IV: Objeto del Sitio Web */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          IV. Objeto del Sitio Web
        </h2>

        <h3 className="text-xl font-medium text-vitaeon-cream mb-4">
          Finalidad
        </h3>
        <p className="mb-4">
          El presente sitio web tiene por objeto:
        </p>
        <ul className="list-none space-y-3 mb-6 pl-0">
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-sage mt-1">•</span>
            <span>Facilitar información sobre los servicios médicos que Vitaeon Clinic, S.L. tiene previsto ofrecer mediante telemedicina</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-sage mt-1">•</span>
            <span>Permitir el contacto y la solicitud de información</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-sage mt-1">•</span>
            <span>En su caso, la reserva de citas</span>
          </li>
        </ul>
        <p className="text-vitaeon-cream/70 italic mb-6">
          La prestación efectiva de servicios sanitarios quedará supeditada a la obtención de la
          correspondiente autorización sanitaria.
        </p>

        <h3 className="text-xl font-medium text-vitaeon-cream mb-4">
          Condición de Usuario
        </h3>
        <p>
          El acceso y la navegación por el sitio web atribuyen la condición de usuario e implican la
          aceptación de las presentes condiciones.
        </p>
      </section>

      {/* Sección V: Prestación de Servicios Médicos */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          V. Prestación de Servicios Médicos por Telemedicina
        </h2>

        <h3 className="text-xl font-medium text-vitaeon-cream mb-4">
          Naturaleza de los Servicios
        </h3>
        <p className="mb-6">
          Los servicios médicos que Vitaeon Clinic, S.L. tiene previsto prestar mediante tecnologías
          de la información y la comunicación constituirán actos médicos, que se desarrollarán
          conforme a la legislación sanitaria vigente y a las normas deontológicas de la profesión
          médica, una vez obtenida la correspondiente autorización sanitaria.
        </p>

        <h3 className="text-xl font-medium text-vitaeon-cream mb-4">
          Características de la Atención a Distancia
        </h3>
        <p className="mb-4">La atención médica a distancia:</p>
        <ul className="list-none space-y-3 mb-6 pl-0">
          <li className="flex items-start gap-3 bg-vitaeon-navy-dark/30 p-3 rounded-lg">
            <span className="text-vitaeon-sage font-bold">1.</span>
            <span>No sustituye de forma sistemática a la atención presencial</span>
          </li>
          <li className="flex items-start gap-3 bg-vitaeon-navy-dark/30 p-3 rounded-lg">
            <span className="text-vitaeon-sage font-bold">2.</span>
            <span>Se limitará a aquellos casos que el criterio clínico del profesional considere adecuados</span>
          </li>
          <li className="flex items-start gap-3 bg-vitaeon-navy-dark/30 p-3 rounded-lg">
            <span className="text-vitaeon-sage font-bold">3.</span>
            <span>Podrá transformarse en atención presencial cuando resulte clínicamente necesario</span>
          </li>
        </ul>

        <h3 className="text-xl font-medium text-vitaeon-cream mb-4">
          Autonomía Clínica
        </h3>
        <p>
          El profesional sanitario mantendrá en todo momento su autonomía clínica para determinar la
          modalidad asistencial más adecuada.
        </p>
      </section>

      {/* Sección VI: Condiciones de Uso */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          VI. Condiciones de Uso
        </h2>
        <p className="mb-4">
          El usuario se compromete a utilizar el presente sitio web de forma diligente y conforme a
          la ley, la buena fe y el orden público.
        </p>
        <p className="mb-4">El usuario debe abstenerse de:</p>
        <ul className="list-none space-y-2 pl-0">
          <li className="flex items-start gap-3">
            <span className="text-red-400 mt-1">✕</span>
            <span>Realizar cualquier uso ilícito</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 mt-1">✕</span>
            <span>Perjudicar el funcionamiento del sitio web</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 mt-1">✕</span>
            <span>Vulnerar los derechos de terceros</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 mt-1">✕</span>
            <span>Hacer un uso incorrecto de los contenidos y servicios ofrecidos</span>
          </li>
        </ul>
      </section>

      {/* Sección VII: Propiedad Intelectual */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          VII. Propiedad Intelectual e Industrial
        </h2>
        <p className="mb-4">
          Todos los contenidos del presente sitio web son titularidad de Vitaeon Clinic, S.L. o de
          terceros que han autorizado su uso, incluyendo:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-3 text-center">
            <span className="text-vitaeon-cream/80">Textos</span>
          </div>
          <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-3 text-center">
            <span className="text-vitaeon-cream/80">Imágenes</span>
          </div>
          <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-3 text-center">
            <span className="text-vitaeon-cream/80">Diseños</span>
          </div>
          <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-3 text-center">
            <span className="text-vitaeon-cream/80">Logotipos</span>
          </div>
          <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-3 text-center">
            <span className="text-vitaeon-cream/80">Elementos gráficos</span>
          </div>
          <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-3 text-center">
            <span className="text-vitaeon-cream/80">Código fuente</span>
          </div>
        </div>
        <p>
          Estos contenidos se encuentran protegidos por la normativa vigente en materia de propiedad
          intelectual e industrial, quedando prohibida su reproducción, distribución o utilización
          sin la correspondiente autorización.
        </p>
      </section>

      {/* Sección VIII: Exclusión de Responsabilidad */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          VIII. Exclusión de Responsabilidad Técnica
        </h2>
        <p className="mb-4">
          Vitaeon Clinic, S.L. no garantiza:
        </p>
        <ul className="list-none space-y-2 mb-6 pl-0">
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-beige/60 mt-1">•</span>
            <span>La disponibilidad permanente del sitio web</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-beige/60 mt-1">•</span>
            <span>La inexistencia de errores técnicos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-beige/60 mt-1">•</span>
            <span>La continuidad del servicio ante incidencias derivadas de causas ajenas a su control</span>
          </li>
        </ul>
        <div className="bg-vitaeon-sage/10 border-l-4 border-vitaeon-sage rounded-r-lg p-4">
          <p className="text-vitaeon-cream/90 font-medium mb-2">Importante:</p>
          <p className="text-vitaeon-cream/80">
            Esta exclusión de responsabilidad técnica no afecta en ningún caso a la responsabilidad
            derivada de la prestación del acto médico, la cual se regirá por la legislación sanitaria
            vigente y las normas deontológicas aplicables a la profesión médica.
          </p>
        </div>
      </section>

      {/* Sección IX: Protección de Datos */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          IX. Protección de Datos Personales
        </h2>
        <p className="mb-4">
          El tratamiento de los datos personales y, en su caso, de los datos de salud que se recaben
          a través del presente sitio web se realiza de conformidad con:
        </p>
        <ul className="list-none space-y-3 mb-6 pl-0">
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-sage mt-1">•</span>
            <span><strong className="text-vitaeon-cream">RGPD:</strong> Reglamento (UE) 2016/679 - Reglamento General de Protección de Datos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-vitaeon-sage mt-1">•</span>
            <span><strong className="text-vitaeon-cream">LOPDGDD:</strong> Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales</span>
          </li>
        </ul>
        <p>
          La información detallada sobre el tratamiento de datos personales, bases legales y derechos
          de los interesados se encuentra disponible en la{' '}
          <a
            href="/politica-privacidad"
            className="text-vitaeon-sage hover:underline font-medium"
          >
            Política de Privacidad
          </a>{' '}
          del sitio web.
        </p>
      </section>

      {/* Sección X: Legislación Aplicable */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-vitaeon-cream mb-6 pb-2 border-b border-vitaeon-beige/20">
          X. Legislación Aplicable y Jurisdicción
        </h2>
        <div className="bg-vitaeon-navy-dark/50 border border-vitaeon-beige/10 rounded-lg p-6">
          <h3 className="text-lg font-medium text-vitaeon-cream mb-3">
            Ley Aplicable
          </h3>
          <p className="mb-4">
            Las presentes condiciones se rigen por la <strong className="text-vitaeon-cream">legislación española</strong>.
          </p>

          <h3 className="text-lg font-medium text-vitaeon-cream mb-3">
            Jurisdicción Competente
          </h3>
          <p>
            Para cuantas cuestiones o controversias pudieran derivarse del acceso, navegación o uso
            del presente sitio web, las partes se someten a los Juzgados y Tribunales que resulten
            competentes conforme a la normativa vigente.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
