import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">GalloPedia</span>
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              GalloPediaは競走馬の血統情報を視覚的に表示し、検索機能を提供するWebアプリケーションです。
              すべての処理はブラウザ上で完結し、オフラインでも使用できます。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition"
                >
                  機能紹介
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-gray-300 hover:text-white transition"
                >
                  使い方デモ
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition"
                >
                  よくある質問
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Contact</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@gallopedia.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  info@gallopedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GalloPedia. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#/" className="text-gray-400 hover:text-white transition">
              利用規約
            </a>
            <a href="#/" className="text-gray-400 hover:text-white transition">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
