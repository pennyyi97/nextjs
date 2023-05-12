import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
    <nav>
      {/* 예전에는 a태그에 들어가야 속성적용이 가능했는데 지금은 그냥 Link에 바로 속성 적용 가능 */}
      {/* a tag 쓰려면 legacyBehavior가 들어가야만 사용할 수 있음 이건 아래 a태그에 style 적용하려고 추가한거임ㅠ */}
      <img src="/vercel.svg" />
      <div>
        <Link href="/" legacyBehavior >
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
    );
}
