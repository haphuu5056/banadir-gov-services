"use client";
import { useState } from "react";
import Link from "next/link";

const sections = [
  { id: 1, title: "How to pay your Council Tax", href: "#how-to-pay" },
  {
    id: 2,
    title: "Pay your Council Tax from your BRUM account",
    href: "#brum-account",
  },
  {
    id: 3,
    title: "Pay your Council Tax by Direct Debit",
    href: "#direct-debit",
  },
  { id: 4, title: "Other ways to pay your Council Tax", href: "#other-ways" },
  { id: 5, title: "Contact us", href: "#contact" },
];

export default function CouncilTaxInfo() {
  const [activeSection, setActiveSection] = useState(1);
 

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Sidebar Navigation */}
      <div className="p-4 border rounded-lg shadow bg-gray-50 mb-6">
        <h3 className="text-lg font-bold mb-3">In this section</h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={section.href}
                className={`flex items-center gap-2 text-sm font-medium transition ${
                  activeSection === section.id
                    ? "text-black font-bold"
                    : "text-purple-600"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold ${
                    activeSection === section.id
                      ? "bg-black"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {section.id}
                </span>
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <section id="how-to-pay">
        <h2 className="text-2xl font-bold mb-4">How to pay your Council Tax</h2>
        <p>
          There are several ways to pay your Council Tax. The easiest way is by{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">
            Direct Debit
          </a>
          .
        </p>
        <p>
          You will receive your Council Tax bill through the post unless you
          have already{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">
            signed up for paperless billing
          </a>
          .
        </p>
      </section>

      <section id="when-to-pay" className="mt-6">
        <h3 className="text-xl font-bold mb-3">When to pay</h3>
        <p>
          You can pay your Council Tax bill at once, but it is usually split
          into 10 equal monthly payments.
        </p>
        <p>
          Alternatively, you can choose to spread the payments over 12 months.
        </p>
      </section>

      <section id="what-you-need" className="mt-6">
        <h3 className="text-xl font-bold mb-3">What you will need</h3>
        <p>Details about what users need to complete their payments.</p>
      </section>
    </div>
  );
}
