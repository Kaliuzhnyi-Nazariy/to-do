import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <p>Home</p>
      <div className="">
        <Link href={"/auth/signin"}>signIn</Link>
      </div>
    </div>
  );
}
