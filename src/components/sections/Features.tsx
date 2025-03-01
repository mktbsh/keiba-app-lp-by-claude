import Image from "next/image";

// 機能リスト
const features = [
  {
    title: "血統表示機能",
    description: "競走馬の血統を視覚的に表示。3世代までの血統関係を確認可能。",
    icon: (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    imageSrc:
      "https://images.unsplash.com/photo-1599689018002-53a165985a92?q=80&w=1170&auto=format&fit=crop",
    imageAlt: "血統表示のイメージ",
    subFeatures: [
      "標準で3世代表示（父母、祖父母、曾祖父母）",
      "各馬の基本情報表示",
      "血統関係の視覚的表現",
      "詳細情報の表示（クリック時）",
      "表示世代数のカスタマイズ",
    ],
  },
  {
    title: "検索機能",
    description: "様々な条件で競走馬を検索可能。",
    icon: (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    imageSrc:
      "https://images.unsplash.com/photo-1590839293216-88d8bc237696?q=80&w=1170&auto=format&fit=crop",
    imageAlt: "検索機能のイメージ",
    subFeatures: [
      "馬名による部分一致検索（日本語/英語）",
      "生年、性別、毛色などによる絞り込み",
      "血統検索（特定の血統を持つ馬の検索）",
      "G1勝利馬のみ表示などの条件設定",
    ],
  },
  {
    title: "データ管理機能",
    description: "データのインポート/エクスポートが可能。",
    icon: (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    ),
    imageSrc:
      "https://images.unsplash.com/photo-1431069767777-c37892aa0a07?q=80&w=1074&auto=format&fit=crop",
    imageAlt: "データ管理のイメージ",
    subFeatures: [
      "CSVからのデータインポート",
      "既存のSQLiteファイルのインポート",
      "データベースのエクスポート",
      "検索結果のCSVエクスポート",
    ],
  },
  {
    title: "オフライン対応",
    description: "ブラウザ上でSQLite WAMSを使用し、オフラインでも使用可能。",
    icon: (
      // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    imageSrc:
      "https://images.unsplash.com/photo-1532245128003-9c47a9e4077d?q=80&w=1170&auto=format&fit=crop",
    imageAlt: "オフライン対応のイメージ",
    subFeatures: [
      "すべての処理がブラウザ内で完結",
      "Origin Private File Systemを使用したデータ保存",
      "インターネット接続なしでの利用が可能",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-2">主な機能</h2>
          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            GalloPediaは競走馬の血統情報を効率的に管理・閲覧するための様々な機能を提供します。
            すべての機能はブラウザ上で動作し、オフラインでも利用可能です。
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className={`grid grid-cols-1 ${
                index % 2 === 0
                  ? "lg:grid-cols-[3fr_2fr]"
                  : "lg:grid-cols-[2fr_3fr] lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* テキスト部分 */}
              <div
                className={
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 order-2 lg:order-1"
                }
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="heading-3 mb-0">{feature.title}</h3>
                </div>

                <p className="paragraph text-gray-600 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {feature.subFeatures.map((item, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <li key={i} className="flex items-start">
                      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 画像部分 */}
              <div
                className={`relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg ${
                  index % 2 === 0 ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
