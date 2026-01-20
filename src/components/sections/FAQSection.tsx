'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui';
import { AnimatedGradientText } from '@/components/magicui';

const faqs = [
  {
    id: 'faq-1',
    question: 'Que es el TRT (Terapia de Reemplazo de Testosterona)?',
    answer:
      'El TRT es un tratamiento medico disenado para restaurar los niveles optimos de testosterona en hombres que presentan deficiencia hormonal. Esta indicado para hombres con hipogonadismo diagnosticado, que experimentan sintomas como fatiga cronica, perdida de masa muscular, disminucion de la libido o cambios de animo. El tratamiento se realiza bajo estricta supervision medica y se personaliza segun las necesidades de cada paciente.',
  },
  {
    id: 'faq-2',
    question: 'Como se si tengo un desequilibrio hormonal?',
    answer:
      'Los sintomas mas comunes de un desequilibrio hormonal incluyen: fatiga persistente y falta de energia, perdida de masa muscular y aumento de grasa corporal, disminucion del deseo sexual, dificultad para concentrarse y niebla mental, cambios de humor e irritabilidad, problemas de sueno, y recuperacion lenta despues del ejercicio. Si experimentas varios de estos sintomas, te recomendamos agendar una valoracion gratuita con nuestros especialistas.',
  },
  {
    id: 'faq-3',
    question: 'La primera consulta es realmente gratuita?',
    answer:
      'Si, la primera valoracion telefonica es completamente gratuita y sin compromiso. Durante esta llamada, uno de nuestros especialistas evaluara tu situacion, respondera tus dudas y te orientara sobre los siguientes pasos si decides continuar. No hay presion ni obligacion de contratar ningun servicio.',
  },
  {
    id: 'faq-4',
    question: 'Cuanto tiempo tarda en verse resultados?',
    answer:
      'Los primeros cambios suelen notarse entre las 2 y 4 semanas de iniciado el tratamiento. Muchos pacientes reportan mejoras en energia y estado de animo durante este periodo inicial. Los resultados mas significativos en composicion corporal, fuerza y libido generalmente se observan entre los 2 y 3 meses. Los resultados completos se consolidan entre los 6 y 12 meses de tratamiento continuo.',
  },
  {
    id: 'faq-5',
    question: 'Los tratamientos tienen efectos secundarios?',
    answer:
      'Bajo supervision medica adecuada, los efectos secundarios son minimos y generalmente manejables. Nuestro equipo realiza seguimiento continuo con analiticas periodicas para ajustar las dosis y prevenir cualquier efecto no deseado. La seguridad del paciente es nuestra prioridad, por eso cada tratamiento es personalizado y monitoreado de cerca.',
  },
  {
    id: 'faq-6',
    question: 'Puedo hacer consulta online?',
    answer:
      'Si, ofrecemos consultas de telemedicina para tu comodidad. Puedes realizar tu valoracion inicial, seguimientos y consultas con nuestros especialistas desde cualquier lugar a traves de videollamada. Solo necesitas una conexion a internet estable. Las analiticas de laboratorio pueden realizarse en centros cercanos a tu ubicacion.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-vitaeon-navy-dark">
      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vitaeon-cream mb-4">
            Preguntas{' '}
            <AnimatedGradientText colorFrom="#D4C4A8" colorTo="#7d9a78" className="font-bold">
              Frecuentes
            </AnimatedGradientText>
          </h2>
          <p className="text-lg text-vitaeon-cream/60 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros tratamientos y servicios
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-vitaeon-beige/30"
              >
                <AccordionTrigger className="text-left text-vitaeon-cream hover:text-vitaeon-beige hover:no-underline py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-vitaeon-cream/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
