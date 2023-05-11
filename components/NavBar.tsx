import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
    <nav>
        <Link href={"/"} style={{color: router.pathname === "/" ? "red" : "blue"}} className="hello">Home</Link> {/* 예전에는 a태그에 들어가야 속성적용이 가능했는데 지금은 그냥 Link에 바로 속성 적용 가능 */}
        <Link href={"/about"} style={{color: router.pathname === "/about"? "red" : "blue"}}>About</Link>
    </nav>
    );
}
