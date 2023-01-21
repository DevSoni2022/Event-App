import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image src={"/image/logo_black.png"} width={50} height={50} alt="img" />
        <nav>
          <ul>
            <li>
              <Link passHref href="">
                Home
              </Link>
            </li>
            <li>
              <Link passHref href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link passHref href="/about-us">
                About US
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Set ut prespiciatis unde omnis iste natus error sit</h1>
    </header>
  );
};
