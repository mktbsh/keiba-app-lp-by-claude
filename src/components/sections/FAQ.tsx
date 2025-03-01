"use client";

import { useState } from "react";

// FAQデータ
const faqItems = [
  {
    question: "GalloPediaとは何ですか？",
    answer:
      "GalloPediaは競走馬の血統情報を視覚的に表示し、検索機能を提供するWebアプリケーションです。競走馬のファンやブリーダー、競馬愛好家のためのツールとして設計されています。",
  },
  {
    question: "オフラインでも使用できますか？",
    answer:
      "はい、GalloPediaはブラウザ上でSQLite WAMSを使用しているため、一度読み込んだ後はインターネット接続なしでも使用できます。データはOrigin Private File Systemを使用してブラウザにローカル保存されます。",
  },
  {
    question: "どのブラウザに対応していますか？",
    answer:
      "Chrome、Firefox、Safari、Edgeなど主要なモダンブラウザに対応しています。ただし、一部のブラウザではSQLite WAMSやOrigin Private File Systemの対応状況により機能が制限される場合があります。",
  },
  {
    question: "自分のデータをインポートできますか？",
    answer:
      "はい、CSVファイルや既存のSQLiteファイルからデータをインポートすることができます。また、検索結果やデータベース全体をエクスポートすることも可能です。",
  },
  {
    question: "血統は何世代まで表示できますか？",
    answer:
      "標準では3世代（父母、祖父母、曾祖父母）まで表示しますが、設定で表示世代数を変更することができます。",
  },
  {
    question: "データはどこに保存されますか？",
    answer:
      "すべてのデータはブラウザのOrigin Private File Systemに保存されます。サーバーにデータが送信されることはなく、プライバシーが保護されます。",
  },
  {
    question: "利用料金はかかりますか？",
    answer:
      "GalloPediaは無料で利用できます。すべての機能を制限なく使用することができます。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-2">よくある質問</h2>
          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            GalloPediaに関するよくある質問をまとめました。
            その他のご質問はお問い合わせフォームからお寄せください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  type="button"
                  className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
