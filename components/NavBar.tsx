import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
    <nav>
      {/* 예전에는 a태그에 들어가야 속성적용이 가능했는데 지금은 그냥 Link에 바로 속성 적용 가능 */}
      {/* a tag 쓰려면 legacyBehavior가 들어가야만 사용할 수 있음 이건 아래 a태그에 style 적용하려고 추가한거임ㅠ */}
      <Link href={"/"} legacyBehavior> 
        <a className={router.pathname === "/" ? "active": ""}>Home</a>
      </Link> 
      <Link href={"/about"} legacyBehavior>
        <a className={router.pathname === "/about" ? "active": ""}>About</a>  
      </Link>
      <style jsx>{`
        a{
          text-decoration: none;
        }
        .active{
          color: tomato;
        }

      `}</style>
    </nav>
    );
}
