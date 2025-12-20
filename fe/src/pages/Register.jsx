export default function Register() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 420,
          background: "#0b1020",
          padding: 24,
          borderRadius: 12,
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Đăng Ký Tài Khoản</h2>

        <input
          placeholder="Họ và tên"
          style={inputStyle}
        />

        <input
          placeholder="Email"
          style={inputStyle}
        />

        <input
          placeholder="Số điện thoại"
          style={inputStyle}
        />

        <div style={{ display: "flex", gap: 20, marginBottom: 12 }}>
          <label>
            <input type="radio" name="gender" /> Nam
          </label>
          <label>
            <input type="radio" name="gender" /> Nữ
          </label>
        </div>

        <input
          type="date"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          style={inputStyle}
        />

        <button
          style={{
            width: "100%",
            padding: 12,
            background: "#f7b400",
            color: "black",
            fontWeight: "bold",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            marginTop: 10,
          }}
        >
          HOÀN TẤT
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 12,
  borderRadius: 8,
  border: "1px solid #555",
  background: "#1a1c2e",
  color: "white",
};

