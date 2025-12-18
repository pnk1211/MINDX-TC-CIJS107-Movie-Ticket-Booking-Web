export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl w-[400px] p-6 relative">
        
        <button className="absolute top-3 right-3 text-gray-400">✕</button>

        <h2 className="text-xl font-semibold text-center mb-6">
          Đăng Nhập Tài Khoản
        </h2>

        <input
          type="email"
          placeholder="Nhập Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Nhập Mật khẩu"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold">
          ĐĂNG NHẬP
        </button>

        <p className="text-sm text-center mt-4">
          Bạn chưa có tài khoản?{" "}
          <a href="/register" className="text-orange-500 font-semibold">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
}
