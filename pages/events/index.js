import Image from "next/image";
import Link from "next/link";

const EventsPage = ({data}) => {
  // const {title} = props
  return (
    <>
      <div>
        <h1>Events page</h1>
        <div>
          {
            data && data.map(ev=>{
              return( <Link passHref key={ev.id} href={`/events/${ev.id}`}>
              <Image width={600} height={300} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              </Link>)
            })
          }
         
        </div>
       
       
      </div>
    </>
  );
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {

    props: {
      data: events_categories,
    },
  };
}
