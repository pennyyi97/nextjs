import { useRouter } from "next/router";

export default function Detail({title}:any){
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}