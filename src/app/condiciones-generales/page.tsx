import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Condiciones Generales de Contratación',
  description: 'Condiciones generales de contratación de los servicios médicos de Vitaeon Clinic, S.L.',
};

export default function CondicionesGeneralesPage() {
  return (
    <LegalPageLayout title="Condiciones Generales de Contratación">
      {/* Introducción */}
      <p className="text-lg text-vitaeon-cream/90 mb-8 leading-relaxed">
        Las presentes Condiciones Generales establecen el marco legal para la contratación de los
        servicios médicos ofrecidos por Vitaeon Clinic, S.L., regulando los derechos y obligaciones
        de todas las partes involucradas.
      </p>

      {/* Sección: Fundamentos del Servicio */}
      <div className="border-l-4 border-vitaeon-sage/50 pl-6 mb-12">
        <h2 className="text-vitaeon-sage mb-2">Fundamentos del Servicio</h2>
        <p className="text-vitaeon-cream/60 text-sm mb-6">Secciones 1-2: Definición y alcance de nuestros servicios</p>

        <section className="mb-8">
          <h3>1. Objeto</h3>
          <p>
            Las presentes Condiciones Generales regulan la contratación de los servicios médicos que
            Vitaeon Clinic, S.L. tiene previsto ofrecer, principalmente mediante telemedicina, así como
            los derechos y obligaciones de los usuarios y pacientes.
          </p>
          <p>
            La contratación de los servicios se formaliza mediante la aceptación expresa de estas
            condiciones junto con las condiciones particulares del servicio seleccionado:
          </p>
          <ul>
            <li>Precio del servicio</li>
            <li>Duración estimada</li>
            <li>Modalidad de atención</li>
            <li>Alcance del servicio</li>
          </ul>
          <div className="bg-vitaeon-navy-light/30 border border-vitaeon-beige/10 rounded-lg p-4 mt-4">
            <p className="text-vitaeon-cream/70 text-sm mb-0">
              <strong className="text-vitaeon-cream">Nota importante:</strong> La prestación efectiva de servicios
              sanitarios quedará supeditada a la obtención de la correspondiente autorización sanitaria.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3>2. Naturaleza de los servicios</h3>
          <p>
            Los servicios contratados tienen carácter sanitario y personalizado, y se prestarán
            conforme a la legislación sanitaria vigente y a las normas deontológicas de la profesión
            médica.
          </p>

          <h4 className="text-vitaeon-cream/90 font-medium mt-4 mb-2">Características de la atención médica a distancia:</h4>
          <ul>
            <li>No sustituye de forma sistemática a la atención presencial</li>
            <li>Se limita a los casos clínicamente adecuados</li>
            <li>Podrá transformarse en atención presencial cuando el criterio clínico lo determine</li>
          </ul>
        </section>
      </div>

      {/* Sección: Proceso de Contratación */}
      <div className="border-l-4 border-vitaeon-beige/50 pl-6 mb-12">
        <h2 className="text-vitaeon-beige mb-2">Proceso de Contratación</h2>
        <p className="text-vitaeon-cream/60 text-sm mb-6">Secciones 3-5: Cómo contratar y aspectos económicos</p>

        <section className="mb-8">
          <h3>3. Proceso de contratación</h3>
          <p>La contratación se realiza a través del sitio web mediante los siguientes pasos:</p>
          <ol className="list-decimal list-inside space-y-2 text-vitaeon-cream/80">
            <li>Solicitud de información o cita</li>
            <li>Aceptación de las presentes condiciones</li>
            <li>Aceptación del consentimiento informado</li>
            <li>Pago del servicio contratado (cuando corresponda)</li>
          </ol>
        </section>

        <section className="mb-8">
          <h3>4. Honorarios y forma de pago</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-vitaeon-sage font-bold">i.</span>
              <p className="mb-0">Los precios de los servicios se indicarán de forma clara antes de la contratación.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-vitaeon-sage font-bold">ii.</span>
              <p className="mb-0">El pago deberá realizarse en la forma y plazos indicados durante el proceso de contratación.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-vitaeon-sage font-bold">iii.</span>
              <p className="mb-0">En caso de impago, Vitaeon Clinic, S.L. podrá suspender la prestación del servicio hasta su regularización.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3>5. Gastos no incluidos</h3>
          <p>
            Salvo que se indique expresamente lo contrario, <strong>no están incluidos</strong> en el precio del servicio:
          </p>
          <ul>
            <li>Pruebas diagnósticas externas</li>
            <li>Estudios analíticos realizados en laboratorios externos</li>
            <li>Medicamentos o suplementos prescritos</li>
            <li>Materiales o servicios prestados por terceros</li>
          </ul>
        </section>
      </div>

      {/* Sección: Derechos y Obligaciones */}
      <div className="border-l-4 border-vitaeon-cream/50 pl-6 mb-12">
        <h2 className="text-vitaeon-cream mb-2">Derechos y Obligaciones</h2>
        <p className="text-vitaeon-cream/60 text-sm mb-6">Secciones 6-9: Compromisos mutuos y garantías</p>

        <section className="mb-8">
          <h3>6. Obligaciones del usuario/paciente</h3>
          <p>El usuario se compromete a:</p>
          <ul>
            <li>Facilitar información veraz, completa y actualizada sobre su estado de salud</li>
            <li>Seguir las indicaciones médicas proporcionadas</li>
            <li>Utilizar los servicios de forma responsable y conforme a la ley</li>
          </ul>
          <div className="bg-vitaeon-navy-light/30 border border-vitaeon-beige/10 rounded-lg p-4 mt-4">
            <p className="text-vitaeon-cream/70 text-sm mb-0">
              <strong className="text-vitaeon-cream">Advertencia:</strong> La ocultación o falsedad de datos
              relevantes podrá afectar a la correcta prestación del servicio.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3>7. Consentimiento informado</h3>
          <p>
            Con carácter previo a la prestación de cualquier servicio sanitario, el paciente deberá
            aceptar el <strong>consentimiento informado</strong>, documento en el que se detallan:
          </p>
          <ul>
            <li>La naturaleza del servicio</li>
            <li>Sus límites y alcance</li>
            <li>Riesgos potenciales</li>
            <li>Alternativas disponibles</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3>8. Cancelaciones y modificaciones</h3>
          <p>
            Las condiciones de cancelación o modificación de citas se indicarán durante el proceso de
            contratación o en las condiciones particulares del servicio.
          </p>
          <p>
            En servicios ya iniciados o personalizados, podrán aplicarse limitaciones conforme a la
            normativa vigente.
          </p>
        </section>

        <section className="mb-8">
          <h3>9. Responsabilidad profesional</h3>
          <p>
            Vitaeon Clinic, S.L. y los profesionales sanitarios que colaboran con la clínica disponen
            de la correspondiente <strong>póliza de responsabilidad civil profesional</strong>, conforme a la
            legislación aplicable.
          </p>
        </section>
      </div>

      {/* Sección: Marco Legal */}
      <div className="border-l-4 border-vitaeon-sage/30 pl-6 mb-8">
        <h2 className="text-vitaeon-sage/80 mb-2">Marco Legal</h2>
        <p className="text-vitaeon-cream/60 text-sm mb-6">Secciones 10-12: Protección legal y normativa aplicable</p>

        <section className="mb-8">
          <h3>10. Protección de datos personales</h3>
          <p>
            El tratamiento de los datos personales y de salud se realizará conforme al <strong>RGPD</strong> (Reglamento
            General de Protección de Datos) y la <strong>LOPDGDD</strong> (Ley Orgánica de Protección de Datos
            Personales y garantía de los derechos digitales).
          </p>
          <p>
            Para más información, consulte nuestra{' '}
            <a href="/politica-privacidad">Política de Privacidad</a>.
          </p>
        </section>

        <section className="mb-8">
          <h3>11. Derecho de desistimiento</h3>
          <p>
            De conformidad con la normativa de consumidores, el derecho de desistimiento podrá <strong>no ser
            aplicable</strong> a los servicios sanitarios personalizados o que hayan comenzado a prestarse con
            el consentimiento del usuario, en los términos legalmente previstos.
          </p>
        </section>

        <section className="mb-8">
          <h3>12. Legislación aplicable y jurisdicción</h3>
          <p>Las presentes condiciones se rigen por la <strong>legislación española</strong>.</p>
          <p>
            En caso de controversia, las partes se someten a los Juzgados y Tribunales competentes
            conforme a la normativa de protección de consumidores, cuando resulte aplicable.
          </p>
        </section>
      </div>

      {/* Footer de documento */}
      <div className="border-t border-vitaeon-beige/20 pt-6 mt-12">
        <p className="text-vitaeon-cream/50 text-sm text-center">
          Documento actualizado conforme a la normativa vigente.
          <br />
          Vitaeon Clinic, S.L. se reserva el derecho de modificar estas condiciones,
          notificando debidamente a los usuarios.
        </p>
      </div>
    </LegalPageLayout>
  );
}
