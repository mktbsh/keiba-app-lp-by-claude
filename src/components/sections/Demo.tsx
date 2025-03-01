import Image from 'next/image';

export default function Demo() {
  return (
    <section id="demo" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-2">使い方デモ</h2>
          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            GalloPediaの主要機能をご紹介します。血統表示や詳細検索などの機能をブラウザ上で簡単に利用できます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 血統表示デモ */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1566068256639-2f04bff1a75d?q=80&w=1170&auto=format&fit=crop"
                alt="血統表示デモ"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="heading-3">血統表示</h3>
              <p className="paragraph text-gray-600 mb-4">
                選択した馬を中心に、父系・母系の血統関係を視覚的に表示します。
                標準で3世代まで表示し、各馬の基本情報も確認できます。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">階層型の血統図表示</span>
                </li>
                <li className="flex items-start">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">馬の情報カード表示</span>
                </li>
                <li className="flex items-start">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">詳細情報の表示（クリック時）</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 検索デモ */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1450052590821-8bf91254a353?q=80&w=1170&auto=format&fit=crop"
                alt="検索デモ"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="heading-3">詳細検索</h3>
              <p className="paragraph text-gray-600 mb-4">
                様々な条件で競走馬を検索できます。馬名による部分一致検索や、
                生年、性別、毛色などによる絞り込み、血統検索も可能です。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">馬名による部分一致検索</span>
                </li>
                <li className="flex items-start">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">詳細条件での絞り込み</span>
                </li>
                <li className="flex items-start">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">血統検索（特定の血統を持つ馬の検索）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="paragraph text-gray-600 mb-6">
            すべての処理はブラウザ上で完結するため、一度読み込んだ後はオフラインでも使用できます。
          </p>
          <a href="#cta" className="btn-primary">
            今すぐ試す
          </a>
        </div>
      </div>
    </section>
  );
}