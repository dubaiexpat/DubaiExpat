interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleFAQProps {
  items: FAQItem[];
}

export default function ArticleFAQ({ items }: ArticleFAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="rounded-xl border border-gray-200 p-6">
          <p className="font-semibold text-[#0A1628] mb-2">{item.question}</p>
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
