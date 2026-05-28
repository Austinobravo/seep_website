import React from "react"

export const metadata = {
  title: 'Privacy Policy | SEEP',
  description: 'Explore the impactful projects and initiatives led by SEEP Support Centre across Africa.',
}

const sections = [
  {
    title: "Information We Collect",
    content: [
      `We collect personal information, such as names, contact details and educational backgrounds, primarily through registrations for the SEEP programmes, etc. This data is used exclusively to manage our training sessions, facilitate mentorship and measure our progress toward our goals.`,

      `In line with our internal governance and staff Non-Disclosure Agreements (NDAs), we implement rigorous security measures to prevent unauthorised access to your data. We do not sell or rent personal information. Sharing only occurs with trusted educational or government partners when necessary for scholarships or programme delivery and always under strict confidentiality protocols.`,

      `You maintain the right to access, update or request the deletion of your personal data. For any inquiries regarding your privacy or to opt out of communications, please contact our administrative team at info.seescofficial@gmail.com.`,
    ],
  },
  {
    title: "Security",
    content: [
      `We use collected information to:`,
      `Provide and improve our services and programs`,
      `Communicate updates, opportunities, or support`,
      `To assist us in analyzing how our Service is used.`
    ],
  },
  {
    title: "Contact Us",
    content: [
      `If you have questions about this Privacy Policy or your data, please contact us at:`,

      `Email: info.seescofficial@gmail.com`,
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <section className=" min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Privacy Policy
          </h1>
        </div>

        {/* Published Date */}
        <div className="mt-14 sm:mt-20">
          <p className="text-sm sm:text-base text-neutral-600">
            Last Published: Apr 25, 2025
          </p>
        </div>

        {/* Intro */}
        <div className="mt-10 sm:mt-14 pb-12 sm:pb-16 border-b border-white/20">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Privacy Policy for SEE-SC
          </h2>

          <p className="mt-6 text-sm sm:text-base leading-7 sm:leading-8 text-neutral-600 max-w-5xl">
            At [Your Platform/Organization Name], we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you interact with our platform, services, and programs.
          </p>
        </div>

        {/* Sections */}
        <div className="divide-y divide-white/20">
          {sections.map((section, index) => (
            <div
              key={index}
              className="py-12 sm:py-16"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold">
                {section.title}
              </h2>

              <div className="mt-8 space-y-6">
                {section.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base leading-7 sm:leading-8 text-neutral-600 max-w-6xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}