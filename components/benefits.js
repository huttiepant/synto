{
  benefitSections.map((section, sectionIndex) => (
    <div
      key={`section-${sectionIndex}`}
      className={`grid gap-6 lg:grid-cols-2 lg:gap-12 ${sectionIndex % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
    >
      {section.benefits.map((benefit, benefitIndex) => (
        <div key={`benefit-${sectionIndex}-${benefitIndex}`} className="flex items-start gap-4">
          {/* Benefit content here */}
        </div>
      ))}
    </div>
  ))
}

