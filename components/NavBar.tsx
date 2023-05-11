import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css'
export default function NavBar(){
    const router = useRouter();
    return (
    <nav>
        <Link href={"/"} className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`} >Home</Link> {/* 예전에는 a태그에 들어가야 속성적용이 가능했는데 지금은 그냥 Link에 바로 속성 적용 가능 */}
        <Link href={"/about"} className={router.pathname === '/about' ? styles.active : ''}>About</Link>
    </nav>
    );
}
