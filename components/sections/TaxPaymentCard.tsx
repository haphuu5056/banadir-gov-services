import Image from "next/image";

const TaxPayment = ({ section }) => {
  return (
    <section>
      <h2 className="text-2xl text-[#3F479E] font-bold mb-4">{section.title}</h2>
      <p className="mb-3 text-lg text-[#1E1E1E]">
        {section.content.map((content, index) =>
          content.isBold ? (
            <strong key={index}>{content.text}</strong>
          ) : (
            <span key={index}>{content.text}</span>
          )
        )}
      </p>
      {section.image && (
        <div className="relative mb-4">
          <Image
            src={section.image.src || "/placeholder.svg"}
            alt={section.image.alt}
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default TaxPayment;
