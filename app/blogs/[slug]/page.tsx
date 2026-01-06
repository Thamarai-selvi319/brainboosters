import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs[slug as keyof typeof blogs];

  if (!blog) {
    notFound();
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blog.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div>
        <Header />
        <section className="pt-32 pb-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-[#2B2E63] mb-4">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500 mb-8">{blog.date}</p>
            <div className="text-gray-700">
              {blog.content.split('\n').map((line, index) => {
                if (line.trim().endsWith(':')) {
                  return <h2 key={index} className="text-[#3DA1E1] font-bold text-xl mb-2 mt-6">{line}</h2>;
                } else if (line.trim() === '') {
                  return <br key={index} />;
                } else {
                  return <p key={index} className="mb-4">{line}</p>;
                }
              })}
            </div>
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-[#2B2E63]">FAQs</h2>

                <div className="space-y-4">
                  {blog.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="border rounded-lg p-4 cursor-pointer hover:border-[#4FA3D1] transition-colors"
                    >
                      <summary className="font-semibold text-[#2B2E63]">
                        {faq.question}
                      </summary>
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

