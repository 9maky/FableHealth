import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      "question": "How does AI improve diagnostic accuracy?",
      "answer": "Our AI algorithms analyze vast amounts of patient data to identify patterns and insights that may not be immediately obvious, leading to more accurate and timely diagnoses."
  },
  {
      "question": "Can FableHealth.ai integrate with my current healthcare systems?",
      "answer": "Absolutely, our platform is designed to seamlessly integrate with existing healthcare systems, minimizing disruption and enhancing efficiency."
  },
  {
      "question": "Is patient data secure with FableHealth.ai?",
      "answer": "Patient data security is our top priority. We employ advanced encryption and compliance measures to ensure all data is protected and accessed only by authorized personnel."
  },
  ],
  [
    {
      "question": "Does the platform support real-time health monitoring?",
      "answer": "Yes, our platform integrates with wearable devices to provide real-time updates on patient health, enabling proactive management and interventions."
  },
  {
      "question": "How can FableHealth.ai help in reducing healthcare costs?",
      "answer": "By improving diagnostic accuracy, optimizing treatment plans, and enhancing operational efficiency, our platform helps reduce unnecessary procedures and errors, thereby lowering healthcare costs."
  },
  {
      "question": "What kind of support does FableHealth.ai offer?",
      "answer": "We offer comprehensive support ranging from email and phone support to dedicated account managers for our enterprise clients, ensuring your questions are answered promptly."
  },
  ],
  [
    {
      "question": "Can FableHealth.ai be used for all types of medical specialties?",
      "answer": "Yes, our platform is versatile and can be adapted to various medical specialties by customizing the AI algorithms and features according to specific needs."
  },
  {
      "question": "How does the automated treatment planning feature work?",
      "answer": "Our platform uses AI to analyze patient data and medical history to suggest personalized treatment options, helping healthcare providers create effective and tailored treatment plans."
  },
  {
      "question": "What makes FableHealth.ai different from other healthcare technology solutions?",
      "answer": "Our focus on leveraging AI for predictive analytics, personalized patient care, and seamless integration with existing systems sets us apart, making healthcare more efficient and effective."
  }
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          For any additional questions, reach out to our support team for detailed information and assistance.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
