import Link from "next/link";

export default function Custom404() {
    return <h4>Hmmm, this page seems to not exist - return to <Link href={'/'}><a>home</a></Link> here</h4>
  }