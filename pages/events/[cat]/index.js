import Image from "next/image";
import Link from "next/link";
const EventsCatPage = ({ data,pageName }) => {
  return (
    <div>
      <div>Events in {pageName}</div>
      {/* <a href="/event/event1">Event 1</a>
        <a href="/event/event2">Event 2</a>
        <a href="/event/event3">Event 3</a>
        <a href="/event/event4">Event 4</a>
        <a href="/event/event5">Event 5</a>
        <a href="/event/event6">Event 6</a> */}
      {data &&
        data.map((ev) => {
          return (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <h2>{ev.title}</h2>{' '}
                <p>{ev.description}</p>
            </Link>
          );
        })}
    </div>
  );
};
export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}
