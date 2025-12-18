export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl w-[420px] p-6 relative">

        <button className="absolute top-3 right-3 text-gray-400">✕</button>

        <h2 className="text-xl font-semibold text-center mb-4">
          Đăng Ký Tài Khoản
        </h2>

        <input
          placeholder="Họ và tên"
          className="w-full mb-3 p-3 border rounded-lg"
        />
        <input
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg"
        />
        <input
          placeholder="Số điện thoại"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <div className="flex gap-4 mb-3">
          <label><input type="radio" name="gender" /> Nam</label>
          <label><input type="radio" name="gender" /> Nữ</label>
        </div>

        <input
          type="date"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold">
          HOÀN THÀNH
        </button>
      </div>
    </div>
  );
}
