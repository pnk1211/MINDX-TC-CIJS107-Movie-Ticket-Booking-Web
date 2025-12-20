export default function Login() {
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
          width: 400,
          background: "#0b1020",
          padding: 24,
          borderRadius: 12,
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Đăng Nhập Tài Khoản</h2>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 12,
            borderRadius: 8,
            border: "1px solid #555",
            background: "#1a1c2e",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 16,
            borderRadius: 8,
            border: "1px solid #555",
            background: "#1a1c2e",
            color: "white",
          }}
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
          }}
        >
          ĐĂNG NHẬP
        </button>
      </div>
    </div>
  );
}
