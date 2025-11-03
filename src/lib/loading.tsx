import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { postRegister } from "../store/register/register.action";


export function RegisterForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form] = useState({
    memberNick: "",
    memberPhone: "",
    memberPassword: "",
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    void (async () => {
      try {
        await dispatch(postRegister(form)).unwrap();
        void navigate("/"); // React Router - explicitly ignore returned Promise
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Nomalum xatolik yuz berdi";
        alert(msg);
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <form onSubmit={onSubmit}>
      {/* inputlar... value/onChange bilan form ni to‘ldiring */}
      <button type="submit" disabled={loading}>
        {loading ? "Yuklanmoqda..." : "Ro‘yxatdan o‘tish"}
      </button>
    </form>
  );
}
