"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from "next-intl";

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const t = useTranslations("homepage");

  const items = [
    {
      question: t("faq.items.question_1.title"),
      answer: t("faq.items.question_1.answer")
    },
    {
      question: t("faq.items.question_2.title"),
      answer: t("faq.items.question_2.answer")
    },
    {
      question: t("faq.items.question_3.title"),
      answer: t("faq.items.question_3.answer")
    },
    {
      question: t("faq.items.question_4.title"),
      answer: t("faq.items.question_4.answer")
    },
    {
      question: t("faq.items.question_5.title"),
      answer: t("faq.items.question_5.answer")
    },
    {
      question: t("faq.items.question_6.title"),
      answer: t("faq.items.question_6.answer")
    },
    {
      question: t("faq.items.question_7.title"),
      answer: t("faq.items.question_7.answer")
    },
    {
      question: t("faq.items.question_8.title"),
      answer: t("faq.items.question_8.answer")
    }
  ]

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden ${expandedIndex === index ? 'h-auto shadow-lg' : 'md:h-14 shadow'}`}>
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 dark:bg-gray-800 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-gray-900 dark:text-gray-300">{item.question}</span>
            {expandedIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 max-h-5 w-5 text-gray-500 dark:text-gray-300" />
            )}
          </button>
          {expandedIndex === index && (
            <div className="p-4 bg-gray-50 dark:bg-slate-900">
              <p className="text-gray-700 text-left dark:text-gray-300">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
