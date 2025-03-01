import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="heading-1 mb-6">
              競走馬の血統を
              <br />
              視覚的に探索
            </h1>
            <p className="paragraph text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0">
              GalloPediaは競走馬の血統情報を簡単に検索・閲覧できるWebアプリケーション。
              血統表示、詳細検索、データ管理などの機能を備え、すべての処理はブラウザ上で完結します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#cta" className="btn-primary">
                今すぐ試す
              </a>
              <a
                href="#features"
                className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
              >
                機能を見る
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1534313314376-a72289b6181e?q=80&w=1887&auto=format&fit=crop"
              alt="競走馬のイメージ"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 装飾要素 - 波形 */}
      <div className="relative h-16 mt-8">
        <svg
          className="absolute bottom-0 w-full h-16 text-white"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Wave</title>
          <path
            d="M0 96L60 80C120 64 240 32 360 21.3C480 10.7 600 21.3 720 32C840 42.7 960 53.3 1080 58.7C1200 64 1320 64 1380 64H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
