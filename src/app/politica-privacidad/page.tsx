import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Vitaeon Clinic, S.L. Información sobre el tratamiento de datos personales conforme al RGPD.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout title="Política de Privacidad">
      {/* Introducción */}
      <p className="text-lg text-vitaeon-cream/90 leading-relaxed">
        Última actualización: Enero 2025
      </p>

      {/* Sección 1: Compromiso */}
      <section className="mt-10">
        <h2>1. Compromiso con la Protección de Datos</h2>
        <p>
          En <strong>Vitaeon Clinic, S.L.</strong> estamos comprometidos con la protección de los
          datos personales y, en especial, de los datos de salud, garantizando el derecho
          fundamental a la privacidad de los usuarios.
        </p>
        <p>
          La presente Política de Privacidad explica cómo se recogen, utilizan y protegen los
          datos personales de conformidad con:
        </p>
        <ul>
          <li>
            <strong>Reglamento (UE) 2016/679</strong> — Reglamento General de Protección de Datos (RGPD)
          </li>
          <li>
            <strong>Ley Orgánica 3/2018</strong> — Ley de Protección de Datos y Garantía de los
            Derechos Digitales (LOPDGDD)
          </li>
        </ul>
      </section>

      {/* Sección 2: Definición de dato personal */}
      <section className="mt-10">
        <h2>2. Qué se Entiende por Dato Personal</h2>
        <p>
          Se entiende por <strong>dato personal</strong> cualquier información sobre una persona
          física identificada o identificable, como:
        </p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Dirección postal o electrónica</li>
          <li>Número de teléfono</li>
          <li>Cualquier otra información que permita identificar directa o indirectamente a una persona</li>
        </ul>

        <h3>Datos de especial protección</h3>
        <p>
          En el ámbito sanitario, se consideran <strong>datos personales de especial protección</strong> aquellos
          relativos a la salud. Estos datos reciben un tratamiento reforzado conforme a la normativa vigente.
        </p>
      </section>

      {/* Sección 3: Responsable del tratamiento */}
      <section className="mt-10">
        <h2>3. Responsable del Tratamiento</h2>
        <p>El responsable del tratamiento de los datos personales es:</p>

        <div className="my-6 p-6 bg-vitaeon-beige/5 border border-vitaeon-beige/20 rounded-lg">
          <p className="font-semibold text-vitaeon-cream text-lg mb-3">Vitaeon Clinic, S.L.</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start gap-2">
              <span className="text-vitaeon-sage font-medium min-w-[80px]">NIF:</span>
              <span>B24823643</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-vitaeon-sage font-medium min-w-[80px]">Domicilio:</span>
              <span>Av. Catalunya 22D, 3º-3ª, 43002 Tarragona, Cataluña (España)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-vitaeon-sage font-medium min-w-[80px]">Email:</span>
              <a href="mailto:info@vitaeonclinic.com" className="text-vitaeon-sage hover:underline">
                info@vitaeonclinic.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 4: Datos que se recogen */}
      <section className="mt-10">
        <h2>4. Datos Personales que se Recogen</h2>
        <p>A través del presente sitio web se podrán recabar los siguientes datos personales:</p>

        <h3>Datos identificativos y de contacto</h3>
        <ul>
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono</li>
        </ul>

        <h3>Datos facilitados mediante formularios</h3>
        <p>
          Información proporcionada a través de formularios de contacto o solicitud de información
          disponibles en el sitio web.
        </p>

        <h3>Datos sanitarios</h3>
        <p>
          En su caso, datos necesarios para la futura prestación de servicios sanitarios, incluidos
          datos de salud, una vez obtenida la correspondiente autorización sanitaria.
        </p>
      </section>

      {/* Sección 5: Finalidades */}
      <section className="mt-10">
        <h2>5. Finalidades del Tratamiento</h2>
        <p>Los datos personales serán tratados con las siguientes finalidades:</p>

        <ul className="space-y-3">
          <li>
            <strong>Gestión de solicitudes:</strong> Gestionar y responder a las solicitudes de
            información realizadas a través del sitio web.
          </li>
          <li>
            <strong>Atención de consultas:</strong> Atender consultas enviadas por correo
            electrónico u otros medios de contacto.
          </li>
          <li>
            <strong>Gestión de citas:</strong> Gestionar solicitudes de cita o reserva de
            servicios, cuando proceda.
          </li>
          <li>
            <strong>Comunicaciones informativas:</strong> Enviar comunicaciones relacionadas con
            los servicios de la clínica, únicamente cuando el usuario haya otorgado su consentimiento.
          </li>
        </ul>

        <p className="mt-4 p-4 bg-vitaeon-sage/10 border-l-4 border-vitaeon-sage rounded-r-lg">
          <strong>Importante:</strong> En ningún caso los datos serán tratados para finalidades
          incompatibles con las descritas.
        </p>
      </section>

      {/* Sección 6: Base legal */}
      <section className="mt-10">
        <h2>6. Base Legal del Tratamiento</h2>
        <p>La base jurídica para el tratamiento de los datos personales es:</p>

        <ul className="space-y-3">
          <li>
            <strong>Consentimiento</strong> — El consentimiento del interesado
            <span className="text-vitaeon-beige/70 text-sm ml-1">(art. 6.1.a RGPD)</span>
          </li>
          <li>
            <strong>Medidas precontractuales</strong> — La aplicación de medidas precontractuales
            solicitadas por el usuario
            <span className="text-vitaeon-beige/70 text-sm ml-1">(art. 6.1.b RGPD)</span>
          </li>
          <li>
            <strong>Asistencia sanitaria</strong> — En el ámbito sanitario, una vez iniciada la
            actividad asistencial, el tratamiento de datos de salud se realizará con fines de
            asistencia sanitaria
            <span className="text-vitaeon-beige/70 text-sm ml-1">(art. 9.2.h RGPD)</span>
          </li>
        </ul>
      </section>

      {/* Sección 7: Conservación */}
      <section className="mt-10">
        <h2>7. Plazo de Conservación de los Datos</h2>
        <p>Los datos personales se conservarán durante los siguientes períodos:</p>

        <ul className="space-y-3">
          <li>
            <strong>Solicitudes y consultas:</strong> Durante el tiempo necesario para atender
            la solicitud o consulta realizada.
          </li>
          <li>
            <strong>Relación asistencial:</strong> En el caso de que se inicie una relación
            asistencial, conforme a los plazos de conservación de la documentación clínica
            establecidos por la normativa sanitaria aplicable.
          </li>
          <li>
            <strong>Derecho de supresión:</strong> Hasta que el interesado solicite su supresión,
            cuando legalmente sea posible.
          </li>
        </ul>
      </section>

      {/* Sección 8: Comunicación a terceros */}
      <section className="mt-10">
        <h2>8. Comunicación de Datos a Terceros</h2>
        <p>
          Los datos personales <strong>no serán cedidos a terceros</strong>, salvo obligación legal.
        </p>

        <h3>Encargados del tratamiento</h3>
        <p>
          Para el correcto funcionamiento del sitio web y, en su caso, de los servicios de
          telemedicina, determinados proveedores podrán acceder a los datos en calidad de
          <strong> encargados del tratamiento</strong>:
        </p>
        <ul>
          <li>Proveedores de alojamiento web</li>
          <li>Servicios de correo electrónico</li>
          <li>Plataformas tecnológicas</li>
        </ul>
        <p>
          Con todos ellos se han suscrito los correspondientes contratos de encargo del
          tratamiento conforme al RGPD.
        </p>
      </section>

      {/* Sección 9: Seguridad */}
      <section className="mt-10">
        <h2>9. Seguridad de los Datos</h2>
        <p>
          Vitaeon Clinic, S.L. ha adoptado las medidas técnicas y organizativas necesarias para
          garantizar:
        </p>
        <ul>
          <li><strong>Seguridad</strong> de los datos personales</li>
          <li><strong>Confidencialidad</strong> de la información</li>
          <li><strong>Integridad</strong> de los registros</li>
        </ul>
        <p>
          Estas medidas están diseñadas para evitar la pérdida, alteración, acceso no autorizado
          o tratamiento indebido de los datos, de acuerdo con el estado de la tecnología y la
          naturaleza de los datos tratados.
        </p>
      </section>

      {/* Sección 10: Derechos */}
      <section className="mt-10">
        <h2>10. Derechos de los Usuarios</h2>
        <p>El usuario puede ejercer los siguientes derechos reconocidos por el RGPD:</p>

        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <div className="p-4 bg-vitaeon-beige/5 rounded-lg border border-vitaeon-beige/10">
            <h3 className="text-vitaeon-sage font-semibold mb-2 text-base">Derecho de Acceso</h3>
            <p className="text-sm text-vitaeon-cream/70">
              Conocer si se están tratando sus datos y obtener una copia de los mismos.
            </p>
          </div>
          <div className="p-4 bg-vitaeon-beige/5 rounded-lg border border-vitaeon-beige/10">
            <h3 className="text-vitaeon-sage font-semibold mb-2 text-base">Derecho de Rectificación</h3>
            <p className="text-sm text-vitaeon-cream/70">
              Solicitar la corrección de datos inexactos o incompletos.
            </p>
          </div>
          <div className="p-4 bg-vitaeon-beige/5 rounded-lg border border-vitaeon-beige/10">
            <h3 className="text-vitaeon-sage font-semibold mb-2 text-base">Derecho de Supresión</h3>
            <p className="text-sm text-vitaeon-cream/70">
              Solicitar la eliminación de sus datos cuando ya no sean necesarios.
            </p>
          </div>
          <div className="p-4 bg-vitaeon-beige/5 rounded-lg border border-vitaeon-beige/10">
            <h3 className="text-vitaeon-sage font-semibold mb-2 text-base">Derecho de Limitación</h3>
            <p className="text-sm text-vitaeon-cream/70">
              Solicitar la limitación del tratamiento en determinadas circunstancias.
            </p>
          </div>
          <div className="p-4 bg-vitaeon-beige/5 rounded-lg border border-vitaeon-beige/10">
            <h3 className="text-vitaeon-sage font-semibold mb-2 text-base">Derecho de Portabilidad</h3>
            <p className="text-sm text-vitaeon-cream/70">
              Recibir sus datos en un formato estructurado y de uso común.
            </p>
          </div>
          <div className="p-4 bg-vitaeon-beige/5 rounded-lg border border-vitaeon-beige/10">
            <h3 className="text-vitaeon-sage font-semibold mb-2 text-base">Derecho de Oposición</h3>
            <p className="text-sm text-vitaeon-cream/70">
              Oponerse al tratamiento de sus datos en determinados supuestos.
            </p>
          </div>
        </div>

        <h3>Cómo ejercer sus derechos</h3>
        <p>
          Para ejercer estos derechos, el interesado deberá enviar una solicitud escrita,
          acreditando su identidad, a Vitaeon Clinic, S.L., o mediante correo electrónico a{' '}
          <a href="mailto:info@vitaeonclinic.com">info@vitaeonclinic.com</a>.
        </p>

        <h3>Reclamación ante la autoridad de control</h3>
        <p>
          Asimismo, el usuario tiene derecho a presentar una reclamación ante la{' '}
          <strong>Agencia Española de Protección de Datos (AEPD)</strong> si considera que sus
          derechos no han sido debidamente atendidos.
        </p>
      </section>

      {/* Sección 11: Modificaciones */}
      <section className="mt-10">
        <h2>11. Modificaciones de la Política de Privacidad</h2>
        <p>
          La presente Política de Privacidad podrá ser modificada para adaptarse a:
        </p>
        <ul>
          <li>Cambios normativos o legislativos</li>
          <li>Modificaciones en los servicios ofrecidos</li>
          <li>Criterios de la Agencia Española de Protección de Datos</li>
        </ul>
        <p>
          En caso de que dichos cambios afecten a los derechos del usuario o al consentimiento
          prestado, se informará debidamente y, en su caso, se recabará nuevamente el consentimiento.
        </p>
      </section>

      {/* Sección 12: Contacto */}
      <section className="mt-10 mb-8">
        <h2>12. Contacto</h2>
        <p>
          Para cualquier duda o consulta relacionada con la presente Política de Privacidad o
          con el tratamiento de sus datos personales, puede ponerse en contacto con nosotros:
        </p>

        <div className="mt-6 p-6 bg-vitaeon-sage/10 border border-vitaeon-sage/30 rounded-lg text-center">
          <p className="text-vitaeon-cream font-medium mb-2">Vitaeon Clinic, S.L.</p>
          <a
            href="mailto:info@vitaeonclinic.com"
            className="inline-block text-vitaeon-sage hover:text-vitaeon-cream transition-colors text-lg font-semibold"
          >
            info@vitaeonclinic.com
          </a>
        </div>
      </section>
    </LegalPageLayout>
  );
}
