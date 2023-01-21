import Image from "next/image";
import Link from "next/link";

export const HomePage = ({data})=>(
    <div className="">
    {data &&
      data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image width={200} height={'100'} src={ev.image} alt={ev.title} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
  </div>  
)