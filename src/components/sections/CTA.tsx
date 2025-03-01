export default function CTA() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20"
    >
      <div className="section-container text-center">
        <h2 className="heading-2 text-white mb-6">今すぐGalloPediaを試す</h2>
        <p className="paragraph text-blue-100 max-w-3xl mx-auto mb-8">
          ブラウザですぐに使える、無料の競走馬血統表アプリケーション。
          血統表示、詳細検索、データ管理などの機能をお試しください。
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a
            href="#"
            className="btn-primary bg-white text-blue-600 hover:bg-blue-50"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "GalloPediaへようこそ！このボタンは実際のランディングページで機能します。"
              );
            }}
          >
            アプリを起動
          </a>
          <a
            href="#features"
            className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
          >
            詳細を確認
          </a>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-4">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-blue-100">無料で利用可能</span>
          </div>

          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-4">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-blue-100">どのデバイスでも利用可能</span>
          </div>

          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-4">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <span className="text-blue-100">オフラインでも使用可能</span>
          </div>
        </div>
      </div>
    </section>
  );
}
