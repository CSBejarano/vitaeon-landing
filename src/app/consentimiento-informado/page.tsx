import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Consentimiento Informado',
  description: 'Información sobre el consentimiento informado para servicios de telemedicina de Vitaeon Clinic, S.L.',
};

export default function ConsentimientoInformadoPage() {
  return (
    <LegalPageLayout title="Consentimiento Informado - Telemedicina">
      <p>
        La atención médica ofrecida por Vitaeon Clinic, S.L. puede prestarse, total o parcialmente,
        mediante telemedicina, entendida como la realización de actos médicos a distancia a través
        de tecnologías de la información y la comunicación.
      </p>

      <h2>Información importante</h2>
      <p>Antes de iniciar cualquier servicio sanitario, el usuario debe conocer y aceptar que:</p>
      <ul>
        <li>
          <strong>La atención médica a distancia no sustituye de forma sistemática a la atención
          presencial.</strong>
        </li>
        <li>
          La telemedicina presenta <strong>limitaciones inherentes</strong>, derivadas principalmente
          de la ausencia de exploración física directa.
        </li>
        <li>
          El profesional sanitario mantiene en todo momento su <strong>autonomía clínica</strong> y
          podrá recomendar o requerir una atención presencial cuando lo considere clínicamente
          necesario.
        </li>
        <li>
          <strong>La atención mediante telemedicina no constituye un servicio de urgencias ni
          emergencias médicas.</strong> En caso de urgencia, el usuario deberá acudir a los
          servicios sanitarios presenciales correspondientes.
        </li>
      </ul>

      <h2>Uso de tecnología</h2>
      <p>
        La prestación de servicios médicos mediante telemedicina implica el uso de herramientas
        tecnológicas para la comunicación y el intercambio de información sanitaria.
      </p>

      <h2>Consentimiento específico</h2>
      <p>
        Con carácter previo a la prestación efectiva de cualquier servicio sanitario, el paciente
        deberá otorgar un <strong>consentimiento informado específico, personalizado y conforme a
        la legislación sanitaria vigente</strong>, que formará parte de su historia clínica.
      </p>

      <h2>Protección de datos</h2>
      <p>
        El tratamiento de los datos personales y, en su caso, de los datos de salud se realizará
        conforme a lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
        (LOPDGDD). La información detallada se encuentra disponible en la{' '}
        <a href="/politica-privacidad">Política de Privacidad</a> del sitio web.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier duda o consulta relacionada con el consentimiento informado o los servicios
        de telemedicina, el usuario puede ponerse en contacto con Vitaeon Clinic, S.L. a través del
        correo electrónico <a href="mailto:info@vitaeonclinic.com">info@vitaeonclinic.com</a>.
      </p>
    </LegalPageLayout>
  );
}
